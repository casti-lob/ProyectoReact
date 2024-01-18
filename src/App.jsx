
import MuseumPost from './AddMuseum'
import './App.css'
import { MuseumDelete } from './DeleteMuseum'
import DetailMuseum from './Museum'
import MuseumsList from './Museums'
import { MuseumUpdate } from './UpdateMuseum'


function App() {
  return(
    <>
      <MuseumsList/>
      ////
      <DetailMuseum></DetailMuseum>

      <br /><br /><br /><br />
      <MuseumPost/>

      <br /><br /><br /><br />
      <MuseumUpdate/>
      <br /><br /><br /><br />
      <MuseumDelete/>
    </>
  )
}

export default App
