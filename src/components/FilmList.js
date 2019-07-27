import React from "react";
import FilmItem from "./FilmItem";

const FilmList = ({ films, onFilmSelect }) => {
  const renderList = films.map(film => {
    return <FilmItem film={film} onFilmSelect={onFilmSelect} />;
  });

  return <div>{renderList}</div>;
};

export default FilmList;
