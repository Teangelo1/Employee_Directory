import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=5&nat=us"
// "https://randomuser.me/api/?results=200&nat=us"
let API = {

  searchEmployees: function() {
    return axios.get(BASEURL);
  }
};


export default API;
