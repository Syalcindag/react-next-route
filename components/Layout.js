import NavbarComponent from "./Navbar";
import FooterPage from "./Footer";

import Head from 'next/head';

import { Layout } from "antd";

const { Content } = Layout;

const LayoutPage = props => (
    <Layout>
        <NavbarComponent />
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 616 }}>
                {props.children}
            </div>
        </Content>
        <FooterPage />
    </Layout>
);

export default LayoutPage;