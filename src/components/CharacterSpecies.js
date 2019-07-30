import React from "react";
import Swapi from "../apis/Swapi";
import GetUrl from "../apis/GetUrl";

class CharacterSpecies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      species: []
    };
  }

  getspecies() {
    if (!this.props.species) {
      return;
    }
    this.props.species.map(specie =>
      Swapi.get(GetUrl(specie))
        .then(response =>
          this.setState({
            species: this.state.species.concat(response.data.name)
          })
        )
        .catch(function(error) {
          this.setState({
            species: []
          });
        })
    );
  }

  componentDidMount() {
    this.getspecies();
  }

  componentWillReceiveProps() {
    this.getspecies();
    this.setState({
      species: []
    });
  }

  render() {
    if (!this.props.species.length) {
      return (
        <div>
          <h3>species</h3>
          No species
        </div>
      );
    }
    if (!this.state.species.length) {
      return <div>loading species</div>;
    }

    return (
      <div>
        <h3>Species</h3>
        {this.state.species.map(specie => (
          <div key={specie}>{specie}</div>
        ))}
      </div>
    );
  }
}

export default CharacterSpecies;
