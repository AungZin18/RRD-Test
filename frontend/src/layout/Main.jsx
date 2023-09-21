
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'

const Main = () => {
  return (
<section className='main'>
    <Nav/>
<Outlet/>
</section>
  )
}

export default Main