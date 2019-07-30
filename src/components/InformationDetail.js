import React from "react";
import FilmInfo from "./FilmInfo";
import CharacterList from "./CharacterList";
import VehicleList from "./VehicleList";
import PlanetList from "./PlanetList";
import CharacterDetail from "./CharacterDetail";

class InformationDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: [],
      FilmDetail: true
    };
  }

  characterSelect = selectedCharacter => {
    if (selectedCharacter) {
      this.setState({
        character: [selectedCharacter],
        FilmDetail: false
      });
    }
  };

  componentWillReceiveProps() {
    this.setState({
      FilmDetail: true
    });
  }

  render() {
    if (!this.props.film) {
      return (
        <div>
          <h3>Pick a Flim</h3>
        </div>
      );
    }
    if (this.state.FilmDetail) {
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
    return <CharacterDetail character={this.state.character[0]} />;
  }
}

export default InformationDetail;
