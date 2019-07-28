import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  onInputChange = event => {
    this.setState({ text: event.target.value });
    this.props.onFilmSearch(event.target.value);
  };

  render() {
    return (
      <div>
        <form>
          <label>Film Search: </label>
          <input
            type="text"
            value={this.state.text}
            onChange={this.onInputChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
