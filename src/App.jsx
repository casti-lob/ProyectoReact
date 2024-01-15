import { useState, useEffect } from 'react'
import './App.css'
import { getMuseums } from './services/museumServices';


function App() {
  const [museum, setMuseum] = useState({name:'',country:'',price:'',category:''});

useEffect(()=>{
    
    async function getMuseumsComp(){
      const museum = await getMuseums()
      console.log(museum);
  }
  getMuseumsComp()
},[])
 return(
  <>
  </>
 )
}

export default App
