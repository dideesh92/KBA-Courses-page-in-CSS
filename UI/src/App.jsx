import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import MainLayout from './layouts/MainLayout'
import ContactUs from './Pages/ContactUs'
import AddCourse from './Pages/AddCourse'
import NotFound from './Pages/NotFound'
import CourseCards from './components/CourseCards'
import Coursepage, { courseLoader } from './Pages/Coursepage'
import EditCoursePage from './Pages/EditCoursePage'
import Authlayout from './layouts/Authlayout'
import LoginPage from './Pages/LoginPage'
import Signup from './Pages/SignupPage'



function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
       
       <Route path='/' element={<Authlayout/>}>
       <Route index element={<LoginPage/>} />
       <Route path='/sign-up' element={<Signup/>} />
      </Route>
        <Route path='/' element={<MainLayout/>} >
        <Route path='/home' element={<HomePage />} />
        <Route path='/courses' element={<CourseCards />} />
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/courses/:id' element={<Coursepage/>}   loader={courseLoader}/>
        <Route path='/addcourse' element={<AddCourse/>}/>
        <Route path='/edit-course' element={<EditCoursePage/>}  loader={courseLoader}/>
        <Route path='/*' element={<NotFound/>}/>
        </Route>
        
     
    </>
  ))


  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App
