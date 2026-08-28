import './App.css';
import { Route, Routes } from 'react-router-dom';
import City from './components/City';
import Footer from './components/Footer';
import AllCities from './components/AllCities';
import allCities from './data/cities.json'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" 
          element={<City cities={allCities}/>}
        />
        <Route path="/all" 
        element={<AllCities cities={allCities}/>}
        />
        <Route path="/:currentCity"
        element={<City cities={allCities}/>}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
