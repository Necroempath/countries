import { NavLink } from "react-router-dom";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <div className="notfound">
      <h1>Page not found</h1>
      <NavLink to={"/"}>Back to Home</NavLink>
    </div>
  );
};

export default NotFoundPage;
