'use client'
import { useState } from 'react';
import { Card, Button, Select } from 'antd';

const { Option } = Select;

const CourseSection = () => {
  const [selectedCourseType, setSelectedCourseType] = useState('All');

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

  const filteredCourses = selectedCourseType === 'All'
    ? courses
    : courses.filter(course => course.type === selectedCourseType);

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
        {filteredCourses.map((course) => (
          <Card
            key={course.id}
            title={course.title}
            bordered={false}
            className="shadow-lg"
            hoverable
            cover={<img alt={course.title} src={course.image}/>}
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
