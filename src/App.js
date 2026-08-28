import './App.css';
import { Route, Routes } from 'react-router-dom';
import City from './components/City';
import Footer from './components/Footer';
import allCities from './data/cities.json'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" 
          element={<City city={allCities.at(-1)}/>}
        />
        <Route path="/all" 
        // element={AllCities}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
