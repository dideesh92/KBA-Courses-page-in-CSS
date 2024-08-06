import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddCourse = () => {
  const [title, setTitle] = useState('');
  const [courseId, setCourseId] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    const newCourse = {
      title,
      courseId,
      type,
      description,
      price,
    };

    addCourseSubmit(newCourse);
    toast.success('Course added successfully');
    navigate('/courses');
  };

  const addCourseSubmit = async (newCourse) => {
    const res = await fetch('https://localhost:5000/courses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCourse),
    });

    return res;
  };

  return (
    <>
      <div style={{
        backgroundColor: '#f3e8ff', 
        color: '#3c096c',
        display: 'grid',
        gridTemplateColumns: 'repeat(1, 1fr)',
        '@media (min-width: 768px)': { gridTemplateColumns: 'repeat(2, 1fr)' }, 
        padding: '0.75rem', 
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
        }}>
        </div>
      </div>

      <Navbar />

      <section style={{
        backgroundColor: '#ffffff', 
        marginBottom: '5rem',
      }}>
        <div style={{
          margin: '0 auto',
          maxWidth: '32rem', 
          padding: '0.5rem', 
        }}>
          <div style={{
            backgroundColor: '#f3e8ff', 
            padding: '1.5rem', 
            marginBottom: '1rem', 
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
            borderRadius: '0.375rem', 
            border: '1px solid #e2e8f0', 
            margin: '1rem 1rem', 
            '@media (min-width: 768px)': { margin: '0' }, 
          }}>
            <form onSubmit={submitForm}>
              <h2 style={{
                fontSize: '1.875rem', 
                color: '#4c1d95', 
                textAlign: 'center',
                fontWeight: '600', 
                marginBottom: '1.5rem', 
              }}>
                Add Course
              </h2>

              <div style={{ marginBottom: '1rem'}}>
                <label style={{
                  display: 'block',
                  color: '#4a5568', 
                  fontWeight: '700', 
                  marginBottom: '0.5rem', 
                }}>
                  Course Name
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  style={{
                    border: '1px solid #e2e8f0',
                    borderRadius: '0.375rem', 
                    width: '100%',
                    padding: '0.5rem 0.75rem',
                    marginBottom: '0.5rem', 
                  }}
                  placeholder="eg. Certified Blockchain Associate"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div style={{ marginBottom: '1rem'}}>
                <label style={{
                  display: 'block',
                  color: '#4a5568',
                  fontWeight: '700', 
                  marginBottom: '0.5rem', 
                }}>
                  Course Id
                </label>
                <input
                  type="text"
                  id="courseId"
                  name="courseId"
                  style={{
                    border: '1px solid #e2e8f0', 
                    borderRadius: '0.375rem', 
                    width: '100%', 
                    padding: '0.5rem 0.75rem', 
                    marginBottom: '0.5rem', 
                  }}
                  placeholder="eg. 1"
                  required
                  value={courseId}
                  onChange={(e) => setCourseId(e.target.value)}
                />
              </div>

              <div style={{ marginBottom: '1rem'}}>
                <label
                  htmlFor="type"
                  style={{
                    display: 'block',
                    color: '#4a5568', 
                    fontWeight: '700', 
                    marginBottom: '0.5rem', 
                  }}
                >
                  Course Type
                </label>
                <select
                  id="type"
                  name="type"
                  style={{
                    border: '1px solid #e2e8f0',
                    borderRadius: '0.375rem', 
                    width: '100%', 
                    padding: '0.5rem 0.75rem', 
                  }}
                  required
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="Self-Paced">Self-Paced</option>
                  <option value="Instructor-Led">Instructor-Led</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>

              <div style={{ marginBottom: '1rem'}}>
                <label
                  htmlFor="description"
                  style={{
                    display: 'block',
                    color: '#4a5568', 
                    fontWeight: '700', 
                    marginBottom: '0.5rem', 
                  }}
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  style={{
                    border: '1px solid #e2e8f0', 
                    borderRadius: '0.375rem',
                    width: '100%', 
                    padding: '0.5rem 0.75rem', 
                  }}
                  rows="4"
                  placeholder="Small description on the course"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>

              <div style={{ marginBottom: '1rem'}}>
                <label
                  htmlFor="price"
                  style={{
                    display: 'block',
                    color: '#4a5568', 
                    fontWeight: '700', 
                    marginBottom: '0.5rem', 
                  }}
                >
                  Price
                </label>
                <select
                  id="price"
                  name="price"
                  style={{
                    border: '1px solid #e2e8f0', 
                    borderRadius: '0.375rem', 
                    width: '100%',
                    padding: '0.5rem 0.75rem', 
                  }}
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
                  style={{
                    backgroundColor: '#7c3aed',
                    hover: { backgroundColor: '#6d28d9' }, 
                    margin: '2.5rem 0', 
                    color: '#ffffff', 
                    fontWeight: '700', 
                    padding: '0.5rem 1rem', 
                    borderRadius: '9999px', 
                    width: '100%', 
                    outline: 'none', 
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
                  }}
                  type="submit"
                >
                  Add Course
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddCourse;
