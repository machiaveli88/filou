#!/usr/bin/env node
import { getEnv } from 'vilicando-core/lib/node/env';
import { generate as _generate } from '@graphql-codegen/cli';

// read env
const { GRAPHQL_HTTP, GRAPHQL_SECRET } = getEnv();

const codegen = async ({
  '--url': url = GRAPHQL_HTTP,
  '--secret': secret = GRAPHQL_SECRET,
  '--watch': watch = false
}: {
  '--url'?: string;
  '--secret'?: string;
  '--watch'?: boolean;
}) =>
  !url
    ? null
    : await _generate(
        {
          schema: [
            {
              [url]: {
                headers: !secret
                  ? {}
                  : {
                      'x-hasura-admin-secret': secret
                    }
              }
            }
          ],
          documents: './graphql/*.{tsx,ts}',
          generates: {
            './graphql/index.tsx': {
              plugins: [
                'typescript',
                'typescript-operations',
                'typescript-react-apollo'
              ],
              config: {
                withHOC: false,
                withHooks: true,
                withComponent: false,
                apolloReactHooksImportFrom: 'vilicando-hasura',
                // apolloReactCommonImportFrom: '',
                namingConvention: {
                  typeNames: 'change-case#pascalCase',
                  transformUnderscore: true
                }
              }
            }
          },
          overwrite: true,
          watch,
          hooks: {
            afterStart: [],
            beforeDone: [],
            onWatchTriggered: [],
            onError: [],
            afterOneFileWrite: [],
            afterAllFileWrite: ['prettier --write'],
            beforeOneFileWrite: [],
            beforeAllFileWrite: []
          }
        },
        true
      );

export { codegen };
