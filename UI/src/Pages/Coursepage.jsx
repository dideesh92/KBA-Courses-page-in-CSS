import React, { useState } from 'react';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { getUserType } from './LoginPage';

const Coursepage = () => {
  const course = useLoaderData();
  const { id } = useParams();
  const navigate = useNavigate();
  const userType = getUserType;

  const deleteCourse = async () => {
    const confirm = window.confirm('Are you sure you want to delete?');
    if (!confirm) return;
    await fetch(`/api/courses/${id}`, { method: 'DELETE' });
    navigate('/courses');
  };

  return (
    <>
      <div style={{ backgroundColor: '#ffffff', color: '#1f2937', marginBottom: '2.5rem', paddingBottom: '2.5rem' }}>
        <div style={{ maxWidth: '64rem', margin: 'auto', padding: '1.25rem' }}>
          <section>
            <a style={{ display: 'flex', alignItems: 'center', marginBottom: '1.25rem', gap: '0.25rem', fontWeight: '500' }} href='/courses'>
              Back to Courses
            </a>
          </section>

          <div style={{ backgroundColor: '#f3e8ff', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '0.5rem', overflow: 'hidden' }}>
            <img
              src="./banner-kba.png"
              alt="Course Thumbnail"
              style={{ width: '100%', height: '16rem', objectFit: 'cover' }}
            />
            <div style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <h1 style={{ fontSize: '1.875rem', fontWeight: '700', color: '#6b21a8' }}>{course.title}</h1>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '0.5rem' }}>
                  <span style={{ fontSize: '1.5rem', color: '#dc2626', fontWeight: '600', marginRight: '1rem' }}>{course.price}</span>
                  <button style={{ backgroundColor: '#7c3aed', color: '#ffffff', padding: '0.5rem 1.5rem', borderRadius: '0.25rem', transition: 'background-color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#6b21a8'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#7c3aed'}>
                    Add to Cart
                  </button>
                </div>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#6b21a8', marginBottom: '0.5rem' }}>{course.description}</h2>
                <p>Certified Ethereum Developer is designed for learning about Ethereum Public Blockchain and Decentralized Applications (Dapps). The course is mainly intended for a developer who wants to develop decentralized applications for the Ethereum Network. The course is structured in a zero to finish project development manner. The candidate gets to develop a decentralized application while learning about the various concepts of the application development on the Ethereum network.</p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#6b21a8', marginBottom: '0.5rem' }}>Prerequisites</h2>
                <ul style={{ listStyleType: 'disc', paddingInlineStart: '1rem' }}>
                  <li>Basic understanding of blockchain technology</li>
                  <li>Familiarity with programming languages</li>
                  <li>Internet access</li>
                </ul>
              </div>

              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#6b21a8', marginBottom: '0.5rem' }}>Features</h2>
                <ul style={{ listStyleType: 'disc', paddingInlineStart: '1rem' }}>
                  <li>40 hours of content</li>
                  <li>Certificate of completion</li>
                  <li>Access to community forums</li>
                  <li>Downloadable resources</li>
                  <li>24/7 support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginRight: '12.8125rem' }}>
          <Link to={`/edit-course/${id}`} style={{ display: 'flex', backgroundColor: '#3b82f6', color: '#ffffff', fontWeight: '700', borderRadius: '9999px', height: '2.5rem', width: '8rem', justifyContent: 'center', alignItems: 'center', transition: 'background-color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2563eb'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}>
            Edit Course
          </Link>
          <button onClick={deleteCourse} style={{ display: 'flex', backgroundColor: '#ef4444', color: '#ffffff', fontWeight: '700', borderRadius: '9999px', height: '2.5rem', width: '8rem', justifyContent: 'center', alignItems: 'center', transition: 'background-color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#dc2626'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ef4444'}>
            Remove Course
          </button>
        </div>
      </div>
    </>
  );
};

const courseLoader = async ({ params }) => {
  const res = await fetch(`api/courses/${params.id}`);
  const data = await res.json();
  return data;
};

export { Coursepage as default, courseLoader };
