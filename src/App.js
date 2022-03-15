
import './App.css';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <>
    <Navbar title ="TextUtils"/>

    {/* <Navbar/> */}
    <div className="container">
    <AboutUs/>
    </div>
      </>
  );
}

export default App;
