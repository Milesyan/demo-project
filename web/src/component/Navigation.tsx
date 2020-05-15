import React, { useState, ReactNode } from "react";
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined, VideoCameraOutlined, UploadOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
const { Header, Sider, Content } = Layout;

interface Props {
  children: ReactNode;
}

interface IMenu {
  link: string, 
  text: string,
  icon?: ReactNode
}

const menus: IMenu[] = [
  {link: '/', text: 'Home', icon: <UserOutlined/>},
  {link: '/about', text: 'About', icon: <VideoCameraOutlined/>},
  {link: '/about', text: 'Other', icon: <UploadOutlined/>},
]
export default function Navigation(props: Props) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{minHeight: '100vh'}}>
      <Sider collapsible={true} collapsed={collapsed}>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]} style={{paddingTop: 32}}>
          {
            menus.map((m, idx) => (
              <Menu.Item key={idx} icon={m.icon}>
                <Link to={m.link}>
                  <span style={{color: '#FFF'}}>{m.text}</span>
                </Link>
              </Menu.Item>
            ))
          }
        </Menu>
      </Sider>
      <Layout>
        <Header>
          <div
            style={{cursor: 'pointer'}}
            onClick={() => {
              setCollapsed(!collapsed);
            }}
          >
            {collapsed ? <MenuUnfoldOutlined style={{color: 'white'}}/> : <MenuFoldOutlined style={{color: 'white'}}/>}
          </div>
        </Header>
        <Content style={{ margin: "24px 16px", padding: 24, height: "100%" }}>{props.children}</Content>
      </Layout>
    </Layout>
  );
}
