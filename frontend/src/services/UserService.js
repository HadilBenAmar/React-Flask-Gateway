import axios from 'axios'
const GATEWAY_API_BASE_URL ="https://localhost:5000/gateways"

class UserService{
    // get all methods related to user crud

    getGateways() {
        return axios.get(GATEWAY_API_BASE_URL);

    }
    createGateway(gateways){
        return axios.post(GATEWAY_API_BASE_URL,gateways) ;
    }

    getGatewayById(gateway_id) {
        return axios.get(GATEWAY_API_BASE_URL + '/' + gateway_id);
    }

    updateGateway(gateway_id, updatedgateway) {
        return axios.put(GATEWAY_API_BASE_URL + '/' + gateway_id, updatedgateway);
    }
    

    deleteGateway(gateway_id) {
        return axios.delete(GATEWAY_API_BASE_URL + '/' + gateway_id) ;
    
    }

}
export default new  UserService()