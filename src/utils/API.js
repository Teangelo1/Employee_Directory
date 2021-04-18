import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=200&nat=us"
// "https://randomuser.me/api/?results=200&nat=us"
let API = {

  searchEmployees: function(query) {
    return axios.get( BASEURL + query );
  }
};


export default API;
