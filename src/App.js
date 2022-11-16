import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Navbar';
import { Container } from 'react-bootstrap';

// import react router 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// importing pages components
import Cancel from './pages/Cancel';
import Success from './pages/Success';
import Store from './pages/Store';

import CartProvider from './cartContext';

function App() {
  return (
    // this container will allow our entire application to kind of sit closer to the middle of the screen
    // so we can wrap our entire application
    <CartProvider>
      <Container>
        <NavbarComponent></NavbarComponent>

        <BrowserRouter>
          <Routes>
            {/* Base Root  */}
            <Route index element={<Store />} />
            
            {/* localhost:3000/success page redirect */}
            <Route path='success' element={<Success />} />
            <Route path='cancel' element={<Cancel />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </CartProvider>
  );
}

export default App;
