import React, { useState } from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import mockApartments from './mockApartments';
import mockUsers from './mockUsers';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentShow from './pages/ApartmentShow'
import ApartmentProtectedIndex from './pages/ApartmentProtectedIndex'
import ApartmentEdit from './pages/ApartmentEdit'
import NotFound from './pages/NotFound'
import ApartmentNew from './pages/ApartmentNew'

const App =() => {
  const [currentUser, setCurrentUser] = useState(mockUsers[0])
  const [apartments, setApartments] = useState(mockApartments)

  return (
    <>
    <Header />
    <Routes>
      <Route path= "/" element={<Home />} />
      <Route path= "/signup" element={<SignUp />}/>
      <Route path= "/signin" element={<SignIn />}/>
      <Route path= "/apartmentindex" element={<ApartmentIndex />}/>
      <Route path= "/apartmentshow" element={<ApartmentShow />}/>
      <Route path= "/apartmentprotectedindex" element={<ApartmentProtectedIndex />}/>
      <Route path= "/apartmentnew" element={<ApartmentNew />}/>
      <Route path= "/apartmentedit" element={<ApartmentEdit />}/>
      <Route path= "/*" element={<NotFound />}/>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
