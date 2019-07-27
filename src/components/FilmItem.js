import React from "react";

const FilmItem = ({ film, onFilmSelect }) => {
  return <div onClick={() => onFilmSelect(film)}>{film.title}</div>;
};

export default FilmItem;
