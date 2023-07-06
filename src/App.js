import React, { useState } from 'react';
import './App.css';
import mockApartments from './mockApartments';
import mockUsers from './mockUsers';

const App =() => {
  const [currentUser, setCurrentUser] = useState(mockUsers[0])
  const [apartments, setApartments] = useState(mockApartments)

  return (
    <>
 
    <h2>apartment app</h2>
    
    </>
  );
}

export default App;
