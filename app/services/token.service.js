const axios = require("axios").default;
const qs = require("querystring");
 
const config = {
   headers: {
       "Content-Type": "application/x-www-form-urlencoded",
   },
};
 
let token = "";
 
const getToken = async() => {
   let token;
   const promise = await axios
       .post(
           "https://accounts.spotify.com/api/token",
           qs.stringify({
               grant_type: "client_credentials",
               client_id: "810eafcddc78443ca244b55e0e20e34f",
               client_secret: "c2189cc7da3a405dba7e69853fef6c84",
           }),
           config
       )
   token = promise.data;
   return token.access_token;
}
 
module.exports = getToken;