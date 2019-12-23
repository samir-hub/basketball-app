import React from "react";
import Drawer from 'antd/es/drawer';
import 'antd/es/drawer/style/css';

const MobileHeader = props => {

    return(
   <Drawer
   title="Basic Drawer"
   placement="right"
   closable={false}
   onClose={this.onClose}
   visible={props.visible}
 >
   <p>Some contents...</p>
   <p>Some contents...</p>
   <p>Some contents...</p>
 </Drawer>
    )
}

export default MobileHeader;