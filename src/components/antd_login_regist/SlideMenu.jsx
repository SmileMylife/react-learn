import {Menu, Icon, Button} from 'antd';
import React from "react";

const {SubMenu} = Menu;

class SlideMenu extends React.Component {
    state = {
        collapsed: false,
    };

    render() {
        return (
            <div>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.state.collapsed} style={{height: "100%"}}>
                    {/*为了能让按钮显示在菜单内部，便于控制侧边栏高度*/}
                    <Button type="primary" onClick={this.props.toggleCollapsed} style={{marginBottom: 16}}>
                        <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}/>
                    </Button>
                    <Menu.Item key="1">
                        <Icon type="pie-chart"/>
                        <span>选项 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="desktop"/>
                        <span>选项 2</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="inbox"/>
                        <span>选项 3</span>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                <Icon type="mail"/>
                <span>导航 一</span>
              </span>
                        }
                    >
                        <Menu.Item key="5">选项 5</Menu.Item>
                        <Menu.Item key="6">选项 6</Menu.Item>
                        <Menu.Item key="7">选项 7</Menu.Item>
                        <Menu.Item key="8">选项 8</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                <Icon type="appstore"/>
                <span>导航 二</span>
              </span>
                        }
                    >
                        <Menu.Item key="9">选项 9</Menu.Item>
                        <Menu.Item key="10">选项 10</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="11">选项 11</Menu.Item>
                            <Menu.Item key="12">选项 12</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}

export default SlideMenu;