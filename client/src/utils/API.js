import axios from "axios";

const BASEURL = "http://api.openweathermap.org/data/2.5/weather?zip=";
const APIKEY = ",us&appid=655dfc390726be35679ee1f171b45301";

export default {
  // Gets all zips
  getZips: function() {
    return axios.get("/api/zips");
  },
  // Deletes the zip with the given id
  deleteZip: function(id) {
    return axios.delete("/api/zips/" + id);
  },
  // Saves a zip to the database
  saveZip: function(zipData) {
    return axios.post("/api/zips", zipData);
  },
  // Gets weather data from the openweather api
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
