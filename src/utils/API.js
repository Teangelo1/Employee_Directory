import axios from "axios";
const BASEURL = "https://randomuser.me/api/"

export default {

  searchEmployees: function(query) {
    return axios.get( BASEURL + query );
  }
};
