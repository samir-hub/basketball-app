import React from "react";
import Layout from 'antd/es/layout'
import 'antd/es/layout/style/css'

const { Footer } = Layout;

const FooterComp = () => {
    return (
        <Footer style={{ textAlign: "center" }}>
          <p>Created by Samir Lilienfeld</p>
          <p>Data obtained from theseventhman</p>
        </Footer>
    )
}

export default FooterComp; 