'use strict';

var renderme = require("renderme");
var useragent = require("useragent");
useragent(true);

module.exports = function (app) {

  app.get('/', function(request, response) {
    renderme({
      readme: fs.readFileSync(path.join(__dirname,'../..','README.md'),'utf-8'),
      readmeFilename: 'README.md'
      },
      function rendered(err, html) {
        if (err) { throw err; }
        else {
          response.end(html);
        }
      }
    );
  });

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
