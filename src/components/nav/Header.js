import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  const [current, setCurrent] = useState('');
  //functions
  const handleClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid #f0f0f0',
        zIndex: '9',
      }}
    >
      <nav>
        <Menu
          onClick={handleClick}
          selectedKeys={[current]}
          mode='horizontal'
          style={{ display: 'flex' }}
        >
          {console.log('Header inside return')}
          <Item key='home' icon={<AppstoreOutlined />}>
            <Link to='/'>Home</Link>
          </Item>
          <SubMenu key='SubMenu' icon={<SettingOutlined />} title='Username'>
            <Item key='setting:1'>Option 1</Item>
            <Item key='setting:2'>Option 2</Item>
          </SubMenu>
        </Menu>
      </nav>
      <nav>
        <Menu
          onClick={handleClick}
          selectedKeys={[current]}
          mode='horizontal'
          style={{ display: 'flex' }}
        >
          <Item key='login' icon={<UserOutlined />}>
            <Link to='/login'> Login</Link>
          </Item>
          <Item key='register' icon={<UserAddOutlined />}>
            <Link to='/register'> Register</Link>
          </Item>
        </Menu>
      </nav>
    </nav>
  );
};

export default Header;
