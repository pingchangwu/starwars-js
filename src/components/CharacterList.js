import React from "react";
import Swapi from "../apis/Swapi";

class CharacterList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    };
  }

  getCharacters() {
    this.props.characters.map(character =>
      Swapi.get(character.replace("https://swapi.co/api", "")).then(response =>
        this.setState({
          characters: this.state.characters.concat(response.data.name)
        })
      )
    );
  }

  componentDidMount() {
    this.getCharacters();
  }

  componentWillReceiveProps() {
    this.getCharacters();
    this.setState({
      characters: []
    });
  }

  render() {
    if (!this.state.characters.length) {
      return <div>loading characters</div>;
    }

    return (
      <div>
        <h3>Characters</h3>
        {this.state.characters.map(character => (
          <div>{character}</div>
        ))}
      </div>
    );
  }
}

export default CharacterList;
