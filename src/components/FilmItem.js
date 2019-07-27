import React from "react";

const FilmItem = ({ film, onFilmSelect }) => {
  return (
    <div onClick={() => onFilmSelect(film)} key={film.episode_id}>
      {film.title}
    </div>
  );
};

export default FilmItem;
