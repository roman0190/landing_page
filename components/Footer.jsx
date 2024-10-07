'use client'
import { Divider } from 'antd';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-8">
      <div className="container mx-auto text-center">
        <p className="mb-4">© 2024 E-Learning Platform. All rights reserved.</p>
        <Divider className="bg-gray-600" />
        <div className="space-x-4">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
