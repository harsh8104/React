import Header  from '../src/components/Header'
import Footer  from '../src/components/Footer'
import {Outlet} from 'react-router-dom'
import FetchItems from '../src/components/FetchItems'
import { useSelector } from 'react-redux'
import Loader from '../src/components/Loader'
function App() {
const fetchStatus=useSelector((store)=>store.fetchStatus)
  return (
    <>
      <Header/>
      <FetchItems/>
      {fetchStatus.currentlyFetch ? <Loader/> : <Outlet/>}
    <Footer/>
    </>
  )
}

export default App
