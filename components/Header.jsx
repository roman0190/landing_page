'use client'
import { Menu, Button } from 'antd';
import { Layout } from 'antd';
import Link from 'next/link'; 
import MobileMenu from './MobileMenu'; 

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center h-full">
      
        <div className="text-2xl font-bold text-blue-600">E-Learn</div>

        <Menu mode="horizontal" className="hidden md:flex" defaultSelectedKeys={['home']}>
          <Menu.Item key="home">
            <Link href="#home">Home</Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Link href="#about">About</Link>
          </Menu.Item>
          <Menu.Item key="courses">
            <Link href="#courses">Courses</Link>
          </Menu.Item>
          <Menu.Item key="contact">
            <Link href="#contact">Contact</Link>
          </Menu.Item>
        </Menu>

        <div className="space-x-4 hidden md:flex">
          <Button type="text">Login</Button>
          <Button type="primary">Sign Up</Button>
        </div>

        <MobileMenu />
      </div>
    </Header>
  );
};

export default AppHeader;
