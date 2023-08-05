import { Layout, Menu } from "antd";

import Link from "next/link";

const {Header} = Layout;

const Navbar = () => (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1"><Link href="/">Home</Link></Menu.Item>
            <Menu.Item key="2"><Link href="/about">About</Link></Menu.Item>
        </Menu>
    </Header>
);

export default Navbar;