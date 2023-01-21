import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Banner from './Banner'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Layout = ({children}:any) => {
  return (
    <div >
        <Navbar/>
        <Banner/>
        <ToastContainer
         position="top-center"
         theme="colored"
        />
        <div>
        {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout