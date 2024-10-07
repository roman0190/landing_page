'use client'
import { Watermark, Button } from 'antd';

const LandingPage = () => {
  return (
    <Watermark
      content="E-Learn"
      fontSize={0}  
      gap={[100, 100]}  
    >
      <section className="h-screen flex flex-col items-center justify-center bg-gradient-to-l from-blue-500 to-indigo-600 " id="home">
        <h1 className="text-5xl font-bold text-white mb-4 text-center z-10">
          Welcome to Your E-Learning Journey
        </h1>
        <p className="text-lg text-white mb-8 max-w-lg text-center z-10">
          Empower your knowledge with the best online courses and tutorials available anytime, anywhere.
        </p>
        <Button size="large" className="bg-yellow-500 border-0 z-10">
          Get Started
        </Button>
      </section>
    </Watermark>
  );
};

export default LandingPage;
