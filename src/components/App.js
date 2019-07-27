import React from "react";
import FilmList from "./FilmList";
import Swapi from "../apis/Swapi";
import FilmDetail from "./FilmDetail";
class App extends React.Component {
  state = { films: [], selectedFilm: null };

  async getFilms() {
    const response = await Swapi.get("/films");
    this.setState({ films: response.data.results });
  }

  onFilmSelect = film => {
    this.setState({ selectedFilm: film });
  };

  componentDidMount() {
    this.getFilms();
  }

  render() {
    return (
      <div className="container">
        <FilmList films={this.state.films} onFilmSelect={this.onFilmSelect} />
        <FilmDetail film={this.state.selectedFilm} />
      </div>
    );
  }
}

export default App;