'use client'
import { Card } from 'antd';

const Features = () => {
  return (
    <section className="py-16 bg-white" id='about'>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl text-blue-600 font-bold mb-12">Why Choose Us?</h2>
        <div className='flex justify-between flex-col lg:flex-row gap-2 px-5'>
          <div>
            <Card title="High-Quality Content" bordered={false}>
              Learn from the best instructors and access a wide range of quality content.
            </Card>
          </div>
          <div>
            <Card title="Flexible Schedule" bordered={false}>
              Study at your own pace and time, with flexible course schedules.
            </Card>
          </div>
          <div>
            <Card title="Certified Courses" bordered={false}>
              Get certified and boost your career with industry-recognized credentials.
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;


