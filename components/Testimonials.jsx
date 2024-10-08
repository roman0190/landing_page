'use client'
import { Carousel } from 'antd';

const Testimonials = () => {
  return (
    <section className="py-12 bg-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-blue-600">What Our Students Say</h2>
        <Carousel autoplay dotPosition="bottom">
          <div className='pb-4'>
            <p className="italic">&quot;This platform has been a game-changer for my career.&quot;</p>
            <p className="mt-4 font-bold">- John Doe</p>
          </div>
          <div>
            <p className="italic">&quot;The courses are easy to follow, and I love the flexibility!&quot;</p>
            <p className="mt-4 font-bold">- Jane Smith</p>
          </div>
          <div>
            <p className="italic">&quot;I have gained so many new skills from this platform!&quot;</p>
            <p className="mt-4 font-bold">- Adam Johnson</p>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;