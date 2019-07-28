import React from "react";
import FilmInfo from "./FilmInfo";
import CharacterList from "./CharacterList";
import VehicleList from "./VehicleList";
import PlanetList from "./PlanetList";
import CharacterInfo from "./CharacterInfo";

class InformationDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: []
    };
  }

  characterSelect = selectedCharacter => {
    if (selectedCharacter) {
      this.setState({
        character: [selectedCharacter]
      });
    }
  };

  render() {
    if (!this.props.film) {
      return (
        <div>
          <h3>Pick a Flim</h3>
        </div>
      );
    }
    if (!this.state.character.length) {
      return (
        <div>
          <FilmInfo film={this.props.film} />
          <CharacterList
            characters={this.props.film.characters}
            characterSelect={this.characterSelect}
          />
          <VehicleList vehicles={this.props.film.vehicles} />
          <PlanetList planets={this.props.film.planets} />
        </div>
      );
    }
    return <CharacterInfo character={this.state.character[0]} />;
  }
}

export default InformationDetail;
