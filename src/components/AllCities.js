import { Link } from "react-router-dom";
import "../styles/allcities.css";

const AllCities = ({cities}) => {

  return (
    <div className="AllCities">
      <header>
        <Link to={"/"}>Back to Home</Link>
      </header>
      <h1>All Cities</h1>
      <div className="cities_list">
        {cities.toReversed().map((city, key)=>{
            return(
                <Link to={key === 0 ? "/" : `/${city.city}`} key={key}>
                <div className="trip">
                    <h2 className="city-state">
                        <div className="city">{city.city}</div>
                        <div className="state"> {city.state}</div></h2>
                    <div className="duration">
                        {city.trip_start} to {city.trip_end}
                    </div>
                    <div className="thumbnail">
                        <img src={`/images/${city.thumbnail}`} alt={city.thumbnail_alt}/>
                    </div>
                </div>
                </Link>
            )
        })}
      </div>
    </div>
  );
};

export default AllCities;
