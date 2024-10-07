'use client'
import { Button } from 'antd';

const CallToAction = () => {
  return (
    <section className="py-16 bg-indigo-600 text-white text-center">
      <h2 className="text-4xl font-bold mb-8">Ready to Get Started?</h2>
      <Button type="primary" size="large" className="bg-yellow-500 border-0 hover:bg-yellow-600">
        Join Now
      </Button>
    </section>
  );
};

export default CallToAction;
