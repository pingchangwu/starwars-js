import React from "react";

const CharacterInfo = ({ character }) => {
  return (
    <div>
      <h3>Character detail</h3>
      <div>Name: {character.name}</div>
      <div>Height: {character.height}</div>
      <div>Mass: {character.mass}</div>
      <div>Hair Color: {character.hair_color}</div>
      <div>Skin Color: {character.skin_color}</div>
      <div>Birth Year: {character.birth_year}</div>
      <div>Gender: {character.gender}</div>
    </div>
  );
};

export default CharacterInfo;
