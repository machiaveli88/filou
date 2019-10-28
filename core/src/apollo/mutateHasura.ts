import { useMutation, MutationHookOptions } from '@apollo/react-hooks';
import {
  OperationVariables,
  MutationFunctionOptions,
  ExecutionResult,
  MutationResult
} from '@apollo/react-common';
import {
  DocumentNode,
  VariableDefinitionNode,
  DefinitionNode,
  SelectionNode
} from 'graphql';
import uuid from 'uuid/v4';
import {
  TAdvancedItem,
  IQueryData,
  IMutationData,
  TUpdateItem
} from './typings';

export default function mutateHasura<
  IItem extends { id: any },
  IVariables = OperationVariables,
  IQueryVariables = OperationVariables
>(
  document: DocumentNode,
  query: DocumentNode,
  _options?: MutationHookOptions<IMutationData<IItem>, IVariables> & {
    queryVariables?: IQueryVariables;
  }
): [
  (
    items: TUpdateItem<IItem>,
    options?: MutationFunctionOptions<IMutationData<IItem>, IVariables>
  ) => Promise<ExecutionResult<IMutationData<IItem>>>,
  MutationResult<IMutationData<IItem>>
] {
  const { queryVariables, ...options } = _options || {};
  const [update, result] = useMutation<IMutationData<IItem>, IVariables>(
    document,
    options
  );
  const _document = JSON.parse(JSON.stringify(document));
  const definition = _document.definitions.find(
    ({ kind }: DefinitionNode) => kind === 'OperationDefinition'
  );
  const { selections } = definition.selectionSet;
  const __name = selections[0].name.value; // z.B. update_user
  const [__type, __collection] = __name.split('_'); // z.B. [update, user]
  const __typename = __collection + '_mutation_response'; // z.B. user_mutation_response

  if (
    selections.filter(
      (selection: SelectionNode) =>
        'name' in selection && selection.name.value !== '__typename'
    ).length > 1
  )
    console.warn(
      "hasura.mutate won't work correctly with more than one mutation, please use multiple single mutations or useMutation instead!"
    );

  return [
    (
      _items: TUpdateItem<IItem>,
      _options?: MutationFunctionOptions<IMutationData<IItem>, IVariables>
    ) => {
      const items = (Array.isArray(_items) ? _items : [_items]).map(
        item =>
          ({
            __typename: __collection,
            id: uuid(),
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            ...item
          } as TAdvancedItem<IItem>)
      );

      let { variables, ...options } = _options || {};
      const _variables = {};
      definition.variableDefinitions.forEach(
        ({ variable }: VariableDefinitionNode) =>
          (_variables[variable.name.value] = items[0][variable.name.value])
      );
      variables = { ..._variables, ...variables };

      return update({
        variables,
        optimisticResponse: (vars: {} | IVariables) => ({
          [__name]: {
            __typename,
            returning: items.map(item =>
              Object.assign(item, vars, { __optimistic: true })
            )
          }
        }),
        update: (
          cache,
          {
            data: {
              [__name]: { returning }
            }
          }
        ) => {
          const cacheData = cache.readQuery<IQueryData<IItem>, IQueryVariables>(
            {
              query,
              variables: queryVariables
            }
          );

          const data = {
            ...cacheData,
            [__collection]: [...cacheData[__collection]]
          };

          returning.forEach(item => {
            const index = cacheData[__collection].findIndex(
              ({ id }) => id === item.id
            );

            if (~index)
              if (__type === 'delete') data[__collection].splice(index, 1);
              else
                data[__collection][index] = Object.assign(
                  data[__collection][index],
                  item
                );
            else data[__collection].push(item);
          });
          data[__collection] = data[__collection].map(
            (item: IQueryData<IItem>) => ({
              __optimistic: false,
              ...item
            })
          );

          cache.writeQuery<IQueryData<IItem>, IQueryVariables>({
            query,
            data
          });
        },
        ...options
      });
    },
    result
  ];
}
