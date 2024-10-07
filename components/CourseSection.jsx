'use client'
import { useState, useEffect } from 'react';
import { Card, Button, Select } from 'antd';

const { Option } = Select;

const CourseSection = () => {
  const [selectedCourseType, setSelectedCourseType] = useState('All');
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [animate, setAnimate] = useState(false);

  const courses = [
    {
      id: 1,
      title: 'Introduction to Programming',
      description: 'A beginner course to learn programming basics.',
      type: 'Beginner',
      image: '/Beginner.jpeg',
    },
    {
      id: 2,
      title: 'Intermediate Web Development',
      description: 'Level up your web development skills.',
      type: 'Intermediate',
      image: '/Intermediate.jpeg',
    },
    {
      id: 3,
      title: 'Advanced Machine Learning',
      description: 'Dive deep into machine learning and AI techniques.',
      type: 'Advanced',
      image: '/Advanced.jpeg',
    },
  ];

  useEffect(() => {
    const filtered = selectedCourseType === 'All'
      ? courses
      : courses.filter(course => course.type === selectedCourseType);

    setAnimate(false); 
    setFilteredCourses(filtered);

    const timer = setTimeout(() => {
      setAnimate(true);
    }, 300); 

    return () => clearTimeout(timer);
  }, [selectedCourseType]);

  return (
    <section id="courses" className="py-12 px-3 bg-gray-100 text-center ">
      <h2 className="text-4xl text-blue-600 font-bold mb-8">Our Courses</h2>

      <Select
        defaultValue="All"
        style={{ width: 200, marginBottom: 20 }}
        onChange={(value) => setSelectedCourseType(value)}
      >
        <Option value="All">All Courses</Option>
        <Option value="Beginner">Beginner</Option>
        <Option value="Intermediate">Intermediate</Option>
        <Option value="Advanced">Advanced</Option>
      </Select>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {filteredCourses.map((course, index) => (
          <Card
            key={course.id}
            title={course.title}
            bordered={false}
            className={`shadow-lg transition-all duration-500 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${index * 500}ms` }} 
            hoverable
            cover={<img alt={course.title} src={course.image} loading='lazy'/>}
          >
            <p>{course.description}</p>
            <Button type="primary" className="mt-4">
              Enroll Now
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CourseSection;
