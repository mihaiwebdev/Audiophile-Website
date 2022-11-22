
import { ProductProvider } from './context/ProductContext';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import  Headphones from './pages/Headphones';
import Speakers from './pages/Speakers';
import Earphones from './pages/Earphones';
import Mark2 from './pages/headphones/Mark2';
import Mark1 from './pages/headphones/Mark1';
import Xx59 from './pages/headphones/Xx59';
import SpeakerZx9 from './pages/speakers/SpeakerZx9';
import SpeakerZx7 from './pages/speakers/SpeakerZx7';
import EarphoneYx1 from './pages/earphones/EarphoneYx1';
import Checkout from './pages/Checkout';
import Success from './pages/Success';


function App() {
  return (
    <>
    <ProductProvider>
        <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/headphones" element={<Headphones/>} />
              <Route path='/headphones/xx99-mark-2' element={<Mark2/>} />
              <Route path='/headphones/xx99-mark-1' element={<Mark1/>} />
              <Route path='/headphones/xx59' element={<Xx59/>} />
              <Route path="/speakers" element={<Speakers />} />
              <Route path='/speakers/zx9' element={<SpeakerZx9/>} />
              <Route path='/speakers/zx7' element={<SpeakerZx7/>} />
              <Route path="/earphones" element={<Earphones />} />
              <Route path="/earphones/yx1" element={<EarphoneYx1 />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/success" element={<Success />} />
            </Routes>
        </Router>
    </ProductProvider>
    </>
  )
}

export default App;
