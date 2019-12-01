import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { useFela } from 'vilicando-antd';

const { Header, Content, Footer } = Layout;

function StartPage() {
  const { css, theme } = useFela();

  return (
    <Layout className={css({ height: '100vh' })}>
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          className={css({ lineHeight: theme.layoutHeaderHeight })}
        >
          <Menu.Item key="1">Link 1</Menu.Item>
          <Menu.Item key="2">Active Link 2</Menu.Item>
          <Menu.Item key="3">Link 3</Menu.Item>
        </Menu>
      </Header>
      <Content
        className={css({
          paddingX: theme.spacingXxl,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        })}
      >
        <Breadcrumb className={css({ marginY: theme.paddingLg })}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>

        <div
          className={css({
            background: theme.white,
            padding: theme.spacingXl,
            flexGrow: 1,
            width: '75%',
            minWidth: theme.screenXs,
            maxWidth: theme.screenMd
          })}
        >
          <h1>Hello World</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </div>
      </Content>

      <Footer
        className={css({
          textAlign: 'center',
          paddingY: theme.paddingMd,
          color: theme.greyBase
        })}
      >
        ©2019 vilicando-core
      </Footer>
    </Layout>
  );
}

export default StartPage;
