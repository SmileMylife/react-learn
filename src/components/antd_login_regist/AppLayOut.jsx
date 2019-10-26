import React, {Component} from "react";
import {Breadcrumb, Icon, Layout} from "antd";
import "./login.css";
import SlideMenu from "./SlideMenu";
import {Menu} from "antd/lib/index";
import HeaderMenu from "./HeaderMenu";
import ResizeTable from "./ResizeTable";
import {Link, Route} from "react-router-dom";
import {SqlProductForm} from "./SqlProduct";

const {Header, Footer, Sider, Content} = Layout;  //布局组件
const {SubMenu} = Menu;

class AppLayOut extends Component {

    state = {
        collapsed: false
    };

    toggleCollapsed = () => {
        this.setState(function(preState) {
            return {
                collapsed: !preState.collapsed
            }
        })
    };

    render() {
        return (
            <Layout>
                <Header className="header" style={{padding: 0}}>
                    <HeaderMenu/>
                </Header>
                <Layout>
                    <Sider width={200} style={{height: "100%"}} trigger={null} collapsible collapsed={this.state.collapsed}>
                        <SlideMenu toggleCollapsed={this.toggleCollapsed}/>
                    </Sider>
                    <Layout>
                        {/*面包屑导航*/}
                        {/*<Breadcrumb style={{margin: '16px 0'}}>*/}
                            {/*<Breadcrumb.Item>Home</Breadcrumb.Item>*/}
                            {/*<Breadcrumb.Item>List</Breadcrumb.Item>*/}
                            {/*<Breadcrumb.Item>App</Breadcrumb.Item>*/}
                        {/*</Breadcrumb>*/}
                        <Content
                            style={{
                                padding: "24px 24px 0px 24px",
                                margin: 0,
                                minHeight: 280,
                            }}>
                            <Route path="/log/sqlProduct" component={SqlProductForm}/>
                            <Route path="/log/showData" component={ResizeTable}/>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default AppLayOut;
