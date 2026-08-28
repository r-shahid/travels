import { Link } from "react-router-dom";
import "../styles/allcities.css";
import pic from "../thumbnails/richmond.jpg"

const AllCities = ({cities}) => {

    // console.log(cities.toReversed().at(-1))
    //change top link to go back to home if city.city matches cities.at(-1).city

  return (
    <div className="AllCities">
      <header>
        <Link to={"/"}>Back to Home</Link>
      </header>
      <h1>All Cities</h1>
      <div className="cities_list">
        {cities.toReversed().map((city)=>{
            return(
                // <Link to={`/${city.city}`}>
                // <div className="trip">
                //     <h2 className="city-state">{city.city}<span className="state"> {city.state}</span></h2>
                //     <div className="duration">
                //         {city.trip_start} to {city.trip_end}
                //     </div>
                //     <div className="thumbnail">
                //         <img src={`/images/${city.thumbnail}`} alt={city.thumbnail_alt}/>
                //     </div>
                // </div>
                // </Link>
                <div className="coming-soon">More Cities coming soon</div>
            )
        })}
      </div>
    </div>
  );
};

export default AllCities;
