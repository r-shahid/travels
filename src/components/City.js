import { Link, useParams } from "react-router-dom";
import "../styles/city.css";

const City = ({ cities }) => {
  let city;
  const { currentCity } = useParams();
  //   const other_city = cities.find((trip) => trip.city.toLowerCase() === cityParam.toLowerCase());

  if (window.location.pathname === "/") {
    city = cities.at(-1);
  } else {
    city = cities.find(
      (trip) => trip.city.toLowerCase() === currentCity.toLowerCase(),
    );
  }

  return (
    <div className={`City ${city.city}`}>
      {/* <hr /> */}
      <header>
        <Link
          to={"/all"}
          // style={{ backgroundColor: `${city.color}` }}
        >
          All Cities
        </Link>
      </header>
      {/* <hr /> */}
      <div className="city-name" style={{ color: `${city.color}` }}>
        {city.city}
      </div>
      <div className="city-state">{city.state}</div>
      <div className="city-caption">{city.caption} </div>
      <div className="gallery">
        {Object.entries(city.photos).map(([key, photo]) => {
          return (
            <div className={`img ${photo.orientation}`} key={key}>
              <img className="image" src={`/images/${photo.src}`} alt={photo.caption} />
              <div className="caption">{photo.caption}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default City;
