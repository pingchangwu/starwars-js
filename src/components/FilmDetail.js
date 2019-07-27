import React from "react";
import FilmInfo from "./FilmInfo";
import CharacterList from "./CharacterList";

const FilmDetail = ({ film }) => {
  if (!film) {
    return <div> Loading...</div>;
  }
  return (
    <div>
      <FilmInfo film={film} />
      <CharacterList characters={film.characters} />
    </div>
  );
};

export default FilmDetail;
