var config;
try {
  config = require("../config/" + process.env.NODE_ENV + ".json");
} catch (e) {
  config = require("../config/default.json");
}

module.exports = config;
