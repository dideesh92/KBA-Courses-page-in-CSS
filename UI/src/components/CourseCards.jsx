
import React, { useState, useEffect } from 'react'
import CourseCard from './CourseCard'
import courses from '../courses.json'
// import Navbar from './Navbar'
import{BarLoader} from 'react-spinners'



const CourseCards = ({ isHome = false }) => {

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log("courses fetch", courses)
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch('/api/courses');
        const data = await res.json()
        console.log('dataaaaaa', data)
        setCourses(data)
        

      } catch (error) {
        console.log('error fetching courses', error);
      } finally {
        setLoading(false)
      }
    };
    fetchCourses()
  }, [])

  console.log('courses===', courses)
  const courseList = isHome ? courses.slice(0, 3) : courses;

  return (
    <>
      <div>
        <h1 style={{ textAlign: 'center' }}>
          {isHome ? 'Top Courses' : 'Browse all courses'}
        </h1>
      </div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(1, minmax(0, 1fr))', 
          gap: '1.25rem', 
          margin: '2.5rem 1.25rem', 
        }}>
          {courseList.map((course) => (
            <CourseCard key={course.courseId} course={course} />
          ))}
        </div>
      )}
    </>
  )
}

export default CourseCards