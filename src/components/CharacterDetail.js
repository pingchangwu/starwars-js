import React from "react";
import CharacterInfo from "./CharacterInfo";
import CharacterFilms from "./CharacterFilms.js";
import CharacterSpecies from "./CharacterSpecies.js";
import CharacterVehicles from "./CharacterVehicles.js";
import CharacterStarships from "./CharacterStarships.js";

class CharacterDetail extends React.Component {
  render() {
    if (this.props.character) {
      return (
        <div>
          <CharacterInfo character={this.props.character} />
          <CharacterFilms films={this.props.character.films} />
          <CharacterSpecies species={this.props.character.species} />
          <CharacterVehicles vehicles={this.props.character.vehicles} />
          <CharacterStarships starships={this.props.character.starships} />
        </div>
      );
    }
    return <div>No Character Info</div>;
  }
}

export default CharacterDetail;
