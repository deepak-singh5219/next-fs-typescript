import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


const Layout = ({children}:any) => {
  return (
    <div className="container mx-auto">
        <Navbar/>
        <div className="h-[32rem]">
        {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout