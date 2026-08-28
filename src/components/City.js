import { Link } from "react-router-dom";
import "../styles/city.css";

const City = ({ city }) => {
  //   console.log(city.photos)
  return (
    <div className={`City ${city.city}`}>
      {/* <hr /> */}
      <header >
        <Link to="https://google.com" 
        // style={{ backgroundColor: `${city.color}` }}
        >
        All Cities</Link>
      </header>
      {/* <hr /> */}
      <div className="city-name" style={{ color: `${city.color}` }}>
        {city.city}
      </div>
      <div className="city-state">{city.state}</div>
      <div className="city-caption">{city.caption} </div>
      <div className="gallery">
        {Object.entries(city.photos).map((photo) => {
          // console.log(photo)
          return (
            <div className={`img ${photo[1].orientation}`}>
              <img className="image" src={`/images/${photo[1].src}`} />
              <div className="caption">{photo[1].caption}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default City;
