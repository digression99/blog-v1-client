import React from "react"
import { Drawer as AntDrawer } from "antd"

const Drawer = ({ onClose, visible }) => {
  return (
    <div>
      <AntDrawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </AntDrawer>
    </div>
  )
}

export default Drawer
