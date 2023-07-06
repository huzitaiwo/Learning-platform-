// react packages
import { Link } from "react-router-dom";

// styles
import "../styles/Showcase.css";

// images
import ReadingImage from "../assets/reading.png";

export default function Showcase() {
  return (
    <div className="Showcase">
      <div className="showcase___banner">
        <h1>
          ScholaNet <br /> E-Library
        </h1>
      </div>
      <div className="content">
        <h3>Read, Learn and get your assignments done!</h3>
        <img src={ReadingImage} alt="reading" />
        <div className="content__links">
          <Link to="/signup" className="btn">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
