import React from "react";
import FilmItem from "./FilmItem";

const FilmList = ({ films, onFilmSelect }) => {
  const renderList = films.map(film => {
    return (
      <FilmItem key={film.episode_id} film={film} onFilmSelect={onFilmSelect} />
    );
  });

  return (
    <div>
      <h3>Film List</h3>
      {renderList}
    </div>
  );
};

export default FilmList;
