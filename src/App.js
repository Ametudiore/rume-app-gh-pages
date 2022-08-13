//import logo from './logo.svg';
//import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import AmenavComponent from './amenavComponent';
import CarouselComponent from './carouselComponent';
import FooterComponent from './footerComponent';
import HomeComponent from './home';

function App() {
  return (
    <div className="App">
      <header>
      <AmenavComponent/>
      </header>
      <CarouselComponent/>
      <HomeComponent/>
      <FooterComponent/>
    
    </div>
  );
}

export default App;
