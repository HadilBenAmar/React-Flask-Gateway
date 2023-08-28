import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import '../App.css'
import UserService from '../services/UserService';



class ListGatewayComponent extends Component {
    constructor (props){
        super(props)
        this.state={
            gateways: []
        }
        
      this.addGateway = this.addGateway.bind(this)
      this.editGateway = this.editGateway.bind(this)
      this.deleteGateway = this.deleteGateway.bind(this)
    }

    componentDidMount() {
        fetch('http://localhost:5000/gateways')
            .then((response) => response.json())
            .then((result) => {
                this.setState({ gateways: result });
            });
    }

    deleteGateway(id){
        UserService.deleteGateway(id).then((res) => {
            this.setState({ gateways: this.state.gateways.filter(gateway => gateway.id !== id)});
        })
        .catch((error) =>{
            console.error("Error deleting gateway:", error);
        }) ;
    }
  
    viewGateway(id){
        this.props.history.push(`/view-gateway/${id}`);
    }
    
    editGateway(id) {
        this.props.history.push(`/add-gateway/${id}`);
    }

    addGateway (){
        this.props.history.push('/add-gateway/_add');
    }

    render() {
        return (
            <div className="App">
                <h1>Gateway List</h1>
                <div className="add-button">
                    <button onClick={this.addGateway} type="button" class="btn btn-success" >Add Gateway</button>
                </div>
                <div className="table-container">
                <table class="table table-striped table-bordered" >
                    <thead class="thead-dark">
                    <tr>
                        <th>Gateway Name</th>
                        <th>MAC Addresss</th>
                        <th>Gateway Address</th>
                        <th>Crop Type</th>
                        <th>Farming Type</th>
                        <th>Farming Area</th>                        
                        <th>Climate Type</th>
                        <th >Sensors</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.gateways.map((gateway, index) => (
                            <tr scope="row" key={index}>
                               
                          <td>{gateway.gatewayName}</td>
                          <td>{gateway.macAddress}</td>
                          <td>{gateway.gatewayAddress}</td>
                          <td>{gateway.cropType}</td>
                          <td>{gateway.farmingType}</td>
                          <td>{gateway.farmingArea}</td>
                          <td>{gateway.climateType}</td>
                          <td>{gateway.sensors}</td>
                          <td>
                <button onClick={() => this.editGateway(gateway.id)} className="btn btn-info">Update</button>
                <button style={{ marginLeft: "10px" }} onClick={() => this.deleteGateway(gateway.id)} className="btn btn-danger">Delete</button>
                <button style={{ marginLeft: "10px" }} onClick={() => this.viewGateway(gateway.id)} className="btn btn-info">View</button>
            </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
             </div>
        </div>
        );
    
                    
        
    }
}

export default ListGatewayComponent;