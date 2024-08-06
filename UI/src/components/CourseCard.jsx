import { Link } from 'react-router-dom';
import courseImage from '../assets/react.svg';
import React, { useState } from 'react';

const CourseCard = ({ course }) => {
  console.log("course incoming at coursecard", course);

  const [showFullDescription, setShowFullDescription] = useState(false); 
  let description = course.description;

  if (!showFullDescription) {
    description = description.substring(0, 50);
  }

  const toggleText = () => {
    setShowFullDescription(!showFullDescription);
  }

  return (
    <div style={{
      backgroundColor: '#f3e8ff', borderRadius: '0.375rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', display: 'flex',
      flexDirection: 'column',alignItems: 'center',justifyContent: 'center',margin: '1.25rem', padding: '2.5rem' 
    }}>
      <h2 style={{fontWeight: 'bold',  fontSize: '1.125rem', color: '#4c1d95' }}>
        {course.title}
      </h2>
      <img src={courseImage} alt="course thumbnail" style={{width: '20rem', height: '10rem'}} />
      <p style={{color: 'black', margin: '0.5rem 1.25rem' }}>
        {description}
      </p>
      <button onClick={toggleText} style={{color: '#7c3aed', cursor: 'pointer',marginLeft: '0.3125rem'}}>
        {showFullDescription ? "Less" : "More"}
      </button>
      <Link to={`/courses/${course.courseId}`} style={{backgroundColor: '#7c3aed', color: 'white', padding: '0.5rem 1rem', 
        borderRadius: '0.375rem', textDecoration: 'none', alignSelf: 'flex-start',marginLeft: '1.25rem',  transition: 'background-color 0.3s'}}
      onMouseEnter={(e) => e.target.style.backgroundColor = '#6b46c1'} 
      onMouseLeave={(e) => e.target.style.backgroundColor = '#7c3aed'}>
        Learn More
      </Link>
    </div>
  )
}

export default CourseCard;
