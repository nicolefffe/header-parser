'use strict';

var useragent = require("useragent");
useragent(true);

module.exports = function (app) {

  app.get("/whoami", function(req,res) {

    var agent = useragent.parse(req.get("User-Agent"));

    var reply = {
      "ip_address": req.ip,
      "language": req.get("Accept-Language").slice(0,5),
      "operating_system": agent.os.family
    };

    res.end(JSON.stringify(reply));
  });

};
