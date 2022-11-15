import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Navbar';
import { Container} from 'react-bootstrap';

// import react router 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    // this container will allow our entire application to kind of sit closer to the middle of the screen
    // so we can wrap our entire application
    <Container>
      <NavbarComponent></NavbarComponent>
    </Container>
  );
}

export default App;
