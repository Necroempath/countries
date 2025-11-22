import React, { useContext } from "react";
import CountriesContext from "../../context/CountriesContext";
import { NavLink } from "react-router-dom";
import "../Header/Header.css";

const Header = () => {
  const { regions } = useContext(CountriesContext);
  const { loading } = useContext(CountriesContext);

  let links = [];

  if (!loading) {
    links.push(<NavLink key={'all'} to={"/"}>All countries</NavLink>);

    regions.forEach((region) => {
      const link = (
        <NavLink key={region} to={`/region/${region}`}>
          {region}
        </NavLink>
      );
      links.push(link);
    });
  }
  return (
    <header>
      <h2>Countries App</h2>
      <nav>
        {links}
      </nav>
    </header>
  );
};

export default Header;
