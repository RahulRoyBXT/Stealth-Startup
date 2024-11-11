import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Navbar from './components/navbar/navbar.jsx'
import FixedFooterM from './components/footer/fixedFooterM.jsx'
import ProfileM from './components/profile/profileM.jsx'
import Home from './Home.jsx'
import MessageSupport from './components/messageSupport/MessageSupport.jsx'
import Products from './components/products/productsListing.jsx'
import Notifications from './components/notificationGlobal/notifications.jsx'
import SignInPage from './components/credentialForm/signInPage.jsx'
import SignUpPage from './components/credentialForm/signUpPage.jsx'
import AdminPanel from './components/Admin/adminPanel.jsx'
import AddProduct from './components/Admin/addProducts.jsx';
import ModifyProduct from './components/Admin/modifyProduct.jsx';
import ProductList from './components/Admin/productList.jsx';


const App = () => {

  return (
    <Router>
      <Navbar />
      <div className='pt-[25%] mb-[8dvh]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<ProfileM />} />
          <Route path='/message' element={<MessageSupport />} />
          <Route path='/products' element={<Products />} />
          <Route path='/globalnotification' element={<Notifications />} />
          <Route path='/siginppage' element={<SignInPage />} />
          <Route path='/signuppage' element={<SignUpPage />} />
          <Route path='/adminpanel' element={<AdminPanel />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/modify-product" element={<ModifyProduct />} />
          <Route path="/product-list" element={<ProductList />} />

        </Routes>
      </div>
      
      <FixedFooterM />

    </Router>
  )
}

export default App
