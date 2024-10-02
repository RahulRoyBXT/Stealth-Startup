import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Navbar from './components/navbar/navbar.jsx'
import FixedFooterM from './components/footer/fixedFooterM.jsx'
import ProfileM from './components/profile/profileM.jsx'
import Home from './Home.jsx'
import MessageSupport from './components/messageSupport/MessageSupport.jsx'
import Products from './components/products/productsListing.jsx'
import Notifications from './components/notificationGlobal/notifications.jsx'

const App = () => {

  return (
    <Router>
      <Navbar />
      <div className='pt-[25%]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<ProfileM />} />
          <Route path='/message' element={<MessageSupport />} />
          <Route path='/products' element={<Products />} />
          <Route path='/globalnotification' element={<Notifications />} />
        </Routes>
      </div>
      
      <FixedFooterM />

    </Router>
  )
}

export default App
