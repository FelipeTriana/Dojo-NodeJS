const assert = require("chai").assert;
const getTracks = require("../services/spotify/spotify.service.js");
const cancionesController = require("../services/spotify/spotify.service.js");

describe("Spotify services", function() {
    it("Get tracks", async function() {
        const result = await getTracks("bad bunny");
        console.log(result);
    });
}); 