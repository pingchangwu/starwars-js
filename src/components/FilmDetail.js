import React from "react";
import FilmInfo from "./FilmInfo";

const FilmDetail = ({ film }) => {
  if (!film) {
    return <div> Loading...</div>;
  }
  console.log(film);
  return (
    <div>
      <FilmInfo film={film} />
    </div>
  );
};

export default FilmDetail;
