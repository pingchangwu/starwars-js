import React from "react";
import FilmInfo from "./FilmInfo";
import CharacterList from "./CharacterList";
import VehicleList from "./VehicleList";
import PlanetList from "./PlanetList";

const FilmDetail = ({ film }) => {
  if (!film) {
    return (
      <div>
        <h3>Pick a Flim</h3>
      </div>
    );
  }
  return (
    <div>
      <FilmInfo film={film} />
      <CharacterList characters={film.characters} />
      <VehicleList vehicles={film.vehicles} />
      <PlanetList planets={film.planets} />
    </div>
  );
};

export default FilmDetail;
