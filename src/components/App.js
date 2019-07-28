import React from "react";
import FilmList from "./FilmList";
import InformationDetail from "./InformationDetail";
import SearchBar from "./SearchBar";
import Swapi from "../apis/Swapi";

class App extends React.Component {
  state = { films: [], selectedFilm: null };

  async getFilms() {
    const response = await Swapi.get("/films").catch(function(error) {
      this.setState({
        films: []
      });
    });
    this.setState({ films: response.data.results });
  }

  onFilmSearch = searchWord => {
    if (!searchWord.length) {
      return this.getFilms();
    }
    const filterFilms = this.state.films.filter(
      film => film.title === searchWord
    );
    if (filterFilms.length) {
      this.setState({ films: filterFilms });
    }
  };

  onFilmSelect = film => {
    this.setState({ selectedFilm: film });
  };

  componentDidMount() {
    this.getFilms();
  }

  render() {
    if (!this.state.films.length) {
      return <div>Loading</div>;
    }
    return (
      <div className="container">
        <SearchBar onFilmSearch={this.onFilmSearch} />
        <FilmList films={this.state.films} onFilmSelect={this.onFilmSelect} />
        <InformationDetail film={this.state.selectedFilm} />
      </div>
    );
  }
}

export default App;
