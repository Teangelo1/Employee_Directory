import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=50&nat=us"
let API = {

  searchEmployees: function() {
    return axios.get(BASEURL);
  }
};


export default API;
