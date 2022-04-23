import './App.css';
import Navbar from './components/Navbar/Navbar';
import Restaurants from './components/Restaurants/Restaurants';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <div className='App'>
        <Navbar></Navbar>
        <Restaurants></Restaurants>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
