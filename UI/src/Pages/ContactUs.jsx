import React from 'react';
import Navbar from '../components/Navbar';

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div style={{
        backgroundColor: '#f3e8ff', 
        color: '#3c096c', 
        display: 'grid',
        gridTemplateColumns: 'repeat(1, 1fr)', 
        '@media (min-width: 768px)': { gridTemplateColumns: 'r, 1fr)' }, 
        padding: '0.75rem', 
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
        }}>
        </div>
      </div>

      <section style={{
        backgroundColor: '#ffffff', 
        marginTop: '0.25rem', 
        paddingTop: '2.5rem', 
        paddingBottom: '2.5rem',
      }}>
        <div style={{
          paddingLeft: '1.5rem', 
          paddingRight: '1.5rem',
          paddingTop: '3rem',
          paddingBottom: '3rem',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          <div style={{
            textAlign: 'center',
          }}>
            <p style={{
              fontWeight: '500', 
              color: '#7c3aed', 
            }}>Contact us</p>

            <h1 style={{
              marginTop: '0.5rem', 
              fontSize: '1.5rem', 
              fontWeight: '600', 
              color: '#1f2937', 
              '@media (min-width: 768px)': { fontSize: '1.875rem' },
            }}>Get in touch</h1>

            <p style={{
              marginTop: '0.75rem', 
              color: '#6b7280', 
            }}>Our friendly team is always here to chat.</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)', 
            gap: '3rem', 
            marginTop: '2.5rem', 
            '@media (min-width: 768px)': { gridTemplateColumns: 'repeat(2, 1fr)' }, 
            '@media (min-width: 1024px)': { gridTemplateColumns: 'repeat(3, 1fr)' },
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}>
              <span style={{
                padding: '0.75rem', 
                color: '#7c3aed', 
                borderRadius: '9999px', 
                backgroundColor: '#d1d5dbcc', 
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{ width: '1.5rem', height: '1.5rem' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5.25.25h-15.25.25V6.75m19.5 0.25 0 0019.5 4.5h-15.25.25m19.5 0v.243.25 0 01-1.07 1.916l-7.5 4.615.25.36 0L3.32 8.91.25 0 01-1.07-1.916V6.75" />
                </svg>
              </span>

              <h2 style={{
                marginTop: '1rem', 
                fontSize: '1.125rem', 
                fontWeight: '500', 
                color: '#1f2937', 
              }}>Email</h2>
              <p style={{
                marginTop: '0.5rem', 
                color: '#6b7280', 
              }}>Our friendly team is here to help.</p>
              <p style={{
                marginTop: '0.5rem', 
                color: '#7c3aed', 
              }}>hello@merakiui.com</p>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}>
              <span style={{
                padding: '0.75rem', 
                color: '#7c3aed', 
                borderRadius: '9999px', 
                backgroundColor: '#d1d5dbcc', 
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{ width: '1.5rem', height: '1.5rem' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </span>

              <h2 style={{
                marginTop: '1rem', 
                fontSize: '1.125rem',
                fontWeight: '500',
                color: '#1f2937', 
              }}>Office</h2>
              <p style={{
                marginTop: '0.5rem', 
                color: '#6b7280', 
              }}>Come say hello at our office HQ.</p>
              <p style={{
                marginTop: '0.5rem', 
                color: '#7c3aed', 
              }}>100 Smith Street Collingwood VIC 3066 AU</p>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}>
              <span style={{
                padding: '0.75rem', 
                color: '#7c3aed', 
                borderRadius: '9999px', 
                backgroundColor: '#d1d5dbcc', 
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{ width: '1.5rem', height: '1.5rem' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25.25 0 0.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5.25 0 002.25 4.5v2.25z" />
                </svg>
              </span>

              <h2 style={{
                marginTop: '1rem',
                fontSize: '1.125rem', 
                fontWeight: '500', 
                color: '#1f2937', 
              }}>Phone</h2>
              <p style={{
                marginTop: '0.5rem', 
                color: '#6b7280', 
              }}>Mon-Fri from 8am to 5pm.</p>
              <p style={{
                marginTop: '0.5rem', 
                color: '#7c3aed', 
              }}>+1 (555) 000-0000</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
