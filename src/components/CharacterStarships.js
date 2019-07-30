import React from "react";
import Swapi from "../apis/Swapi";
import GetUrl from "../apis/GetUrl";

class CharacterStarships extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starships: []
    };
  }

  getstarships() {
    if (!this.props.starships) {
      return;
    }
    this.props.starships.map(starship =>
      Swapi.get(GetUrl(starship))
        .then(response =>
          this.setState({
            starships: this.state.starships.concat(response.data.name)
          })
        )
        .catch(function(error) {
          this.setState({
            starships: []
          });
        })
    );
  }

  componentDidMount() {
    this.getstarships();
  }

  componentWillReceiveProps() {
    this.getstarships();
    this.setState({
      starships: []
    });
  }

  render() {
    if (!this.props.starships.length) {
      return (
        <div>
          <h3>Starships</h3>
          No starships
        </div>
      );
    }
    if (!this.state.starships.length) {
      return <div>loading starships</div>;
    }
    return (
      <div>
        <h3>Starships</h3>
        {this.state.starships.map(starship => (
          <div key={starship}>{starship}</div>
        ))}
      </div>
    );
  }
}

export default CharacterStarships;
