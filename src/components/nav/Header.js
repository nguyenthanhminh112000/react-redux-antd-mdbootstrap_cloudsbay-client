import React, { useState } from 'react';
import { Menu } from 'antd';
import {
  AppstoreOutlined,
  SettingOutlined,
  UserAddOutlined,
  UserOutlined,
} from '@ant-design/icons';
const { SubMenu, Item } = Menu;
console.log('Header outside');
const Header = () => {
  console.log('Header inside');
  //hooks
  const [current, setCurrent] = useState('home');
  //functions
  const handleClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode='horizontal'>
      {console.log('Header inside return')}
      <Item key='home' icon={<AppstoreOutlined />}>
        Home
      </Item>

      <SubMenu key='SubMenu' icon={<SettingOutlined />} title='Username'>
        <Item key='setting:1'>Option 1</Item>
        <Item key='setting:2'>Option 2</Item>
      </SubMenu>
      <Item key='register' icon={<UserAddOutlined />} className='float-right'>
        Register
      </Item>
      <Item key='login' icon={<UserOutlined />} className='float-right'>
        Login
      </Item>
    </Menu>
  );
};

export default Header;
