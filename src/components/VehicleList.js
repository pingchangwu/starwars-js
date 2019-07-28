import React from "react";
import Swapi from "../apis/Swapi";
import GetUrl from "../apis/GetUrl";

class VehicleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicles: []
    };
  }

  getVehicles() {
    if (!this.props.vehicles) {
      return;
    }
    this.props.vehicles.map(vehicle =>
      Swapi.get(GetUrl(vehicle))
        .then(response =>
          this.setState({
            vehicles: this.state.vehicles.concat(response.data.name)
          })
        )
        .catch(function(error) {
          this.setState({
            vehicles: []
          });
        })
    );
  }

  componentDidMount() {
    this.getVehicles();
  }

  componentWillReceiveProps() {
    this.getVehicles();
    this.setState({
      vehicles: []
    });
  }

  render() {
    if (!this.props.vehicles.length) {
      return (
        <div>
          <h3>Vehicles</h3>
          No Vehicles
        </div>
      );
    }
    if (!this.state.vehicles.length) {
      return <div>loading vehicles</div>;
    }

    return (
      <div>
        <h3>Vehicles</h3>
        {this.state.vehicles.map(vehicle => (
          <div key={vehicle}>{vehicle}</div>
        ))}
      </div>
    );
  }
}

export default VehicleList;
