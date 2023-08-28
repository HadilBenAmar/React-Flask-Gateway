import React, {Component} from "react";
import UserService from '../services/UserService'

class viewGatewayComponent extends Component {
constructor(props) {
    super(props);

    this.state = {
        id: this.props.match.params.id,
        gateway: {}
    }
}
componentDidMount() {
    // Use the id from the state to construct the URL
 /*   fetch(`http://localhost:5000/gateways/${this.state.id}`)
        .then((response) => response.json())  */
        UserService.getGatewayById(this.state.id)
        .then((res) => {
            console.log("API Response:", res); // Check the response
            this.setState({ gateway: res.data });
        })
        .catch((error) => {
            console.error("Error fetching gateway details:", error);
        });
}
render() {
    const { gateway } = this.state;
    return(
        <div>
            <br></br>
            <div className="card col-md-6 offset-md-3">
           <h3 className = "text-center">View Gateway Details</h3>
           <div className="card-body">
            <div className="row">
                <label>Gateway Name:</label>
                <div> {gateway.gatewayName}</div>
            </div>
            <div className="row">
                <label>Mac Address:</label>
                <div> {gateway.macAddress}</div>
            </div>
            <div className="row">
                <label>Gateway Address:</label>
                <div> {gateway.gatewayAddress}</div>
            </div>
            <div className="row">
                <label>Crop Type:</label>
                <div> {gateway.cropType}</div>
            </div>
            <div className="row">
                <label>Farming Type:</label>
                <div> {gateway.farmingType}</div>
            </div>
            <div className="row">
                <label>Farming Area:</label>
                <div> {gateway.farmingArea}</div>
            </div>
            <div className="row">
                <label>Climate Type:</label>
                <div> {gateway.climateType}</div>
            </div>
            <div className="row">
                <label>Sensors:</label>
                <div> {gateway.sensors}</div>
            </div>
           </div>
            </div>
        </div>
    ) 

}

}
export default viewGatewayComponent