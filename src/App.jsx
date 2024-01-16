
import MuseumPost from './AddMuseum'
import './App.css'
import DetailMuseum from './Museum'
import MuseumsList from './Museums'


function App() {
  return(
    <>
      <MuseumsList/>
      ////
      <DetailMuseum></DetailMuseum>

      <br /><br /><br /><br />
      <MuseumPost/>
    </>
  )
}

export default App
