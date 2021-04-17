import axios from "axios";

// Export an object containing methods we'll use for accessing the GitHub Jobs API

export default {
  searchEmployees: function(query) {
    return axios.get(
      "https://randomuser.me/api/" +
        query 
    );
  }
};
