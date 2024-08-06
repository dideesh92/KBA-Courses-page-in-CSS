import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useLoaderData, useNavigate } from 'react-router-dom';

const EditCoursePage = () => {
  const course = useLoaderData();
  const [title, setTitle] = useState(course.title);
  const [courseId, setCourseId] = useState(course.courseId);
  const [type, setType] = useState(course.type);
  const [description, setDescription] = useState(course.description);
  const [price, setPrice] = useState(course.price);
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    const newCourse = {
      title,
      courseId,
      type,
      description,
      price
    };

    updateCourseSubmit(newCourse);
    navigate(`/courses/${courseId}`);
  };

  const updateCourseSubmit = async (updatedCourse) => {
    const res = await fetch(`/api/course/${updatedCourse.courseId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedCourse),
    });
    return res;
  };

  return (
    <>
      <div style={{ backgroundColor: '#f3e8ff', color: '#4b5563', display: 'grid', gridTemplateColumns: '1fr', padding: '0.75rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* Placeholder for additional content if needed */}
        </div>
      </div>

      <Navbar />

      <section style={{ backgroundColor: '#ffffff', marginBottom: '5rem' }}>
        <div style={{ margin: 'auto', maxWidth: '40rem', padding: '0.5rem' }}>
          <div style={{ backgroundColor: '#f3e8ff', padding: '2rem', marginBottom: '1rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '0.375rem', border: '1px solid #e5e7eb' }}>
            <form onSubmit={submitForm}>
              <h2 style={{ fontSize: '1.875rem', color: '#6b21a8', textAlign: 'center', fontWeight: '600', marginBottom: '1.5rem' }}>
                Edit Course
              </h2>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', color: '#4b5563', fontWeight: '700', marginBottom: '0.5rem' }}>
                  Course Name
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  style={{ border: '1px solid #d1d5db', borderRadius: '0.375rem', width: '100%', padding: '0.5rem', marginBottom: '0.5rem' }}
                  placeholder="e.g. Certified Blockchain Associate"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', color: '#4b5563', fontWeight: '700', marginBottom: '0.5rem' }}>
                  Course Id
                </label>
                <input
                  type="text"
                  id="courseId"
                  name="courseId"
                  style={{ border: '1px solid #d1d5db', borderRadius: '0.375rem', width: '100%', padding: '0.5rem', marginBottom: '0.5rem' }}
                  placeholder="e.g. 1"
                  required
                  value={courseId}
                  onChange={(e) => setCourseId(e.target.value)}
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="type" style={{ display: 'block', color: '#4b5563', fontWeight: '700', marginBottom: '0.5rem' }}>
                  Course Type
                </label>
                <select
                  id="type"
                  name="type"
                  style={{ border: '1px solid #d1d5db', borderRadius: '0.375rem', width: '100%', padding: '0.5rem' }}
                  required
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="Self-Paced">Self-Paced</option>
                  <option value="Instructor-Led">Instructor-Led</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="description" style={{ display: 'block', color: '#4b5563', fontWeight: '700', marginBottom: '0.5rem' }}>
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  style={{ border: '1px solid #d1d5db', borderRadius: '0.375rem', width: '100%', padding: '0.5rem' }}
                  rows="4"
                  placeholder="Small description on the course"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="price" style={{ display: 'block', color: '#4b5563', fontWeight: '700', marginBottom: '0.5rem' }}>
                  Price
                </label>
                <select
                  id="price"
                  name="price"
                  style={{ border: '1px solid #d1d5db', borderRadius: '0.375rem', width: '100%', padding: '0.5rem' }}
                  required
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                >
                  <option value="Rs.5000">Rs.5000</option>
                  <option value="Rs.3500">Rs.3500</option>
                  <option value="Rs.15000">Rs.15000</option>
                </select>
              </div>

              <div>
                <button
                  style={{ backgroundColor: '#7c3aed', color: '#ffffff', fontWeight: '700', padding: '0.5rem', borderRadius: '9999px', width: '100%', transition: 'background-color 0.2s' }}
                  type="submit"
                >
                  Update Course
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default EditCoursePage;
