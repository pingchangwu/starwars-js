import React from "react";
import Swapi from "../apis/Swapi";
import GetUrl from "../apis/GetUrl";

class PlanetList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: []
    };
  }

  getPlanets() {
    if (!this.props.planets) {
      return;
    }
    this.props.planets.map(planet =>
      Swapi.get(GetUrl(planet))
        .then(response =>
          this.setState({
            planets: this.state.planets.concat(response.data.name)
          })
        )
        .catch(function(error) {
          this.setState({
            planets: []
          });
        })
    );
  }

  componentDidMount() {
    this.getPlanets();
  }

  componentWillReceiveProps() {
    this.getPlanets();
    this.setState({
      planets: []
    });
  }

  render() {
    if (!this.props.planets.length) {
      return (
        <div>
          <h3>Planets</h3>
          No Planets
        </div>
      );
    }
    if (!this.state.planets.length) {
      return <div>loading planets</div>;
    }

    return (
      <div>
        <h3>Planets</h3>
        {this.state.planets.map(planet => (
          <div key={planet}>{planet}</div>
        ))}
      </div>
    );
  }
}

export default PlanetList;
