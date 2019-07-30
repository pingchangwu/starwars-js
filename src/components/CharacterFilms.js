import React from "react";
import Swapi from "../apis/Swapi";
import GetUrl from "../apis/GetUrl";

class CharacterFilms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      films: []
    };
  }

  getfilms() {
    if (!this.props.films) {
      return;
    }
    this.props.films.map(film =>
      Swapi.get(GetUrl(film))
        .then(response =>
          this.setState({
            films: this.state.films.concat(response.data.title)
          })
        )
        .catch(function(error) {
          this.setState({
            films: []
          });
        })
    );
  }

  componentDidMount() {
    this.getfilms();
  }

  componentWillReceiveProps() {
    this.getfilms();
    this.setState({
      films: []
    });
  }

  render() {
    if (!this.props.films.length) {
      return (
        <div>
          <h3>Films</h3>
          No films
        </div>
      );
    }
    if (!this.state.films.length) {
      return <div>loading films</div>;
    }
    return (
      <div>
        <h3>Films</h3>
        {this.state.films.map(film => (
          <div key={film}>{film}</div>
        ))}
      </div>
    );
  }
}

export default CharacterFilms;
