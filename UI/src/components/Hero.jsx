const Hero = () => {
    return (
      <>
        <div style={{
          backgroundColor: '#f3e8ff',
          color: '#3c096c', 
          padding: '2.5rem', 
          borderRadius: '0.5rem', 
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '0.25rem', 
          marginBottom: '1.25rem', 
          textAlign: 'center'
        }}>
          <h1 style={{
            fontWeight: 'bold', 
            fontSize: '1.25rem', 
            '@media (min-width: 768px)': { fontSize: '1.875rem' }, 
            '@media (min-width: 1024px)': { fontSize: '2.25rem' }, 
          }}>
            Learn Blockchain Technology From Kerala's First Dedicated Facility for Blockchain Education
          </h1>
          <h2 style={{
            marginTop: '1rem',
            fontSize: '1.125rem', 
            '@media (min-width: 768px)': { fontSize: '1.25rem' }, 
            '@media (min-width: 1024px)': { fontSize: '1.5rem' }, 
          }}>
            Since 2017
          </h2>
        </div>
        <div style={{
          backgroundColor: '#f3e8ff', 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '5rem 0', 
          padding: '2.5rem',
          textAlign: 'center'
        }}>
          <h1 style={{
            fontWeight: 'bold', 
            fontSize: '1.5rem', 
            color: '#4c1d95', 
            '@media (min-width: 768px)': { fontSize: '2.25rem' },
          }}>
            BROWSE OUR TOP COURSES
          </h1>
          <h2 style={{
            fontWeight: '500', 
            fontSize: '1.125rem', 
            color: '#9f7aea', 
            marginTop: '1rem', 
            '@media (min-width: 768px)': { fontSize: '1.25rem' }, 
          }}>
            Choose the course that's right for your career goals.
          </h2>
        </div>
      </>
    );
  };
  
  export default Hero;
  