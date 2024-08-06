import Logout from './Logout';
import mainLogo from '../assets/react.svg'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
      <div style={{
        backgroundColor: '#f3e8ff', 
        color: '#3c096c', 
        display: 'grid',
        gridTemplateColumns: 'repeat(1, 1fr)', 
        '@media (min-width: 768px)': { gridTemplateColumns: 'repeat(2, 1fr)' }, 
        padding: '0.75rem', 
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' 
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <Link to="#">
            <img style={{
              margin: '0.25rem 0.5rem', 
              width: '3rem', 
            }} src={mainLogo} alt="logo" />
          </Link>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          '@media (min-width: 768px)': { justifyContent: 'flex-end' }, 
          alignItems: 'center',
          marginTop: '0.5rem', 
          '@media (min-width: 768px)': { marginTop: '0' }, 
          gap: '1.25rem',
          '@media (min-width: 768px)': { gap: '2.5rem' },
        }}>
          <Link to="/" style={{ marginLeft: '5rem' }}>Home</Link> 
          <Link to="/courses" style={{ marginLeft: '5rem' }}>Courses</Link> 
          <Link to="/contact" style={{ marginLeft: '5rem' }}>Contact Us</Link> 
          <Link to="/addcourse" style={{ marginLeft: '5rem' }}>Add Course</Link> 
          <Logout />
        </div>
      </div>
    </>
  );
}

export default Navbar;
