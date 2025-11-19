import axios from 'axios';
import React, { useEffect, useState } from 'react';

const usePetCare = () => {
  const[petCare, setPetCare] = useState([])
  const[loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(()=>{ 
    setLoading(true)
    axios("../petCare.json")
    .then(data => setPetCare(data.data))
    .catch(err => setError(err))
    .finally(()=> setLoading(false))
  },[])
 
  return {petCare, loading, error}

};

export default usePetCare;