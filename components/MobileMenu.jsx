'use client'
import { useState } from 'react';
import { Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const MobileMenu = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="md:hidden align-baseline">
      <Button type="text" onClick={showDrawer} icon={<MenuOutlined />} />
      <Drawer title="Menu" placement="right" onClose={onClose} open={visible}>
        <div className='flex flex-col gap-3'>
          <a href="#home" >Home</a>
          <a href="#about" >About</a>
          <a href="#courses" >Courses</a>
          <a href="#contact">Contact</a>
          <a className='text-blue-400 font-medium' href="#contact">Login</a>
          <a className='text-blue-400 font-semibold' href="#contact">Sign Up</a>
        </div>
      </Drawer>
    </div>
  );
};

export default MobileMenu;
