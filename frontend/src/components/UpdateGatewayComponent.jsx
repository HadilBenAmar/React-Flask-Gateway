
import React, {Component} from "react";
import UserService from '../services/UserService'

class updateGatewayComponent extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
            id: this.props.match.params.id,
            gatewayName:'',
            macAddress:'',
            gatewayAddress:'',
            cropType:'',
            framingType:'',
            farmingArea:'',
            climateType:'',
            sensors:''
    }
    this.changeGatewayNameHandler = this.changeGatewayNameHandler.bind(this);
    this.changeMacAddressHandler = this.changeMacAddressHandler.bind(this);
    this.changeGatewayAddressHandler = this.changeGatewayAddressHandler.bind(this);
    this.changeCropTypeHandler = this.changeCropTypeHandler.bind(this);
    this.changeFarmingTypeHandler = this.changeFarmingTypeHandler.bind(this);
    this.changeFarmingAreaHandler = this.changeFarmingAreaHandler.bind(this);
    this.changeClimateTypeHandler = this.changeClimateTypeHandler.bind(this);
    this.changeSensorsHandler = this.changeSensorsHandler.bind(this);
    this.updateGateway = this.updateGateway.bind(this);
}

componentDidMount(){
    UserService.getGatewayById(this.state.id).then((res) =>{
        let gateway =res.data;
        this.setState({
            gatewayName: gateway.gatewayName,
            macAddress: gateway.macAddress,
            gatewayAddress: gateway.gatewayAddress,
            cropType: gateway.cropType,
            framingType: gateway.framingType,
            farmingArea: gateway.farmingArea,
            climateType: gateway.climateType,
            sensors: gateway.sensors
        });
    });
}

updateGateway = (e) =>{
    e.preventDefault();
    let gateway = {gatewayName: this.state.gatewayName,
    macAddress: this.state.macAddress,
gatewayAddress: this.state.gatewayAddress,
cropType: this.state.cropType,
framingType: this.state.framingType,
farmingArea: this.state.farmingArea,
climateType: this.state.climateType,
sensors: this.state.sensors

};
console.log('gateway =>'+JSON.stringify(gateway));
console.log('id =>' +JSON.stringify(this.state.id));
UserService.updateGateway(gateway, this.state.id).then(res => {
    this.props.history.push('/gateways');
});
}

changeGatewayNameHandler=(event) => {
    this.setState({gatewayName: event.target.value});
}
changeMacAddressHandler=(event) => {
    this.setState({macAddress: event.target.value});
}
changeGatewayAddressHandler=(event) => {
    this.setState({gatewayAddress: event.target.value});
}
changeCropTypeHandler=(event) => {
    this.setState({cropType: event.target.value});
}
changeFarmingTypeHandler=(event) => {
    this.setState({farmingType: event.target.value});
}
changeFarmingAreaHandler=(event) => {
    this.setState({farmingArea: event.target.value});
}
changeClimateTypeHandler=(event) => {
    this.setState({climateType: event.target.value});
}
changeSensorsHandler=(event) => {
    this.setState({sensors: event.target.value});
}
cancel(){
    this.props.history.push('/gateways');
}
render(){
    return(
        <div>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Update Gateway</h3>
                        <div className="card-body">
                            <form>
                            <div className='form-group'>
                                    <label>Gateway Name:</label>
                                    <input placeholder='Gateway Name' name='gatewayName' className='form-control'
                                    value={this.state.gatewayName} onChange={this.changeGatewayNameHandler} />
                                </div>
                                <div className='form-group'>
                                <label>Mac Address:</label>
                                <input placeholder='Mac Address' name='macAddress' className='form-control'
                                    value={this.state.macAddress} onChange={this.changeMacAddressHandler} />
                                    </div> 
                                    <div className='form-group'>
                                <label>Gateway Address:</label>
                                <input placeholder='Gateway Address' name='gatewayAddress' className='form-control'
                                    value={this.state.gatewayAddress} onChange={this.changeGatewayAddressHandler} />
                                    </div> 
                                    <div className='form-group'>
                                <label>Crop Type:</label>
                                <input placeholder='Crop Type' name='cropType' className='form-control'
                                    value={this.state.cropType} onChange={this.changeCropTypeHandler} />
                                    </div>
                                    <div className='form-group'>
                                <label>Farming Type:</label>
                                <input placeholder='Farming Type' name='farmingType' className='form-control'
                                    value={this.state.farmingType} onChange={this.changeFarmingTypeHandler} />
                                    </div> 
                                    <div className='form-group'>
                                <label>Farming Area:</label>
                                <input placeholder='Farming Area' name='farmingArea' className='form-control'
                                    value={this.state.farmingArea} onChange={this.changeFarmingAreaHandler} />
                                    </div> 
                                    <div className='form-group'>
                                <label>Climate Type:</label>
                                <input placeholder='Climate Type' name='climateType' className='form-control'
                                    value={this.state.climateType} onChange={this.changeClimateTypeHandler} />
                                    </div>
                                    <div className='form-group'>
                                <label>Sensors:</label>
                                <input placeholder='Sensors' name='sensors' className='form-control'
                                    value={this.state.sensors} onChange={this.changeSensorsHandler} />
                                    </div> 
                                <button className="btn btn-success" onClick={this.updateGateway}>Save</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10 px"}}>Cancel</button>
                            </form>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

}

export default updateGatewayComponent