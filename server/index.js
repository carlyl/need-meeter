var browserify = require('browserify-middleware')
var express = require('express')
var Path = require('path')
var cheerio = require('cheerio')
var axios = require('axios')


var routes = express.Router()

//
// Provide a browserified file at a specified path
//
routes.get('/app-bundle.js',
  browserify('./client/app.js'))

//
// Example endpoint (also tested in test/server/index_test.js)
//



routes.get('/api/tags-example', function(req, res) {

  axios.get('http://livingwage.mit.edu/counties/40007')
    .then(function(response){
      // console.log("LIVING WAGE RESPONSE DATA", response.data);
      $ = cheerio.load(response.data)
      var results = $('div .table-responsive').html()
      res.send(results)
    })
    .then(function(pageData){
      var tableData = [];



      $('tr').each(function(i, td){
        var children = $('td').children();
        var row = {
          "A1": children[0].text(),
          // "A2": children[1].text(),
          // "A3": children[2].text()
        };
        tableData.push(row)
      })

      console.log("TESTING@", tableData)


      res.send(pageData)
      return dataresults
      // return pageData

    })
    ;

})




//
// Static assets (html, etc.)
//
var assetFolder = Path.resolve(__dirname, '../client/public')
routes.use(express.static(assetFolder))


if (process.env.NODE_ENV !== 'test') {
  //
  // The Catch-all Route
  // This is for supporting browser history pushstate.
  // NOTE: Make sure this route is always LAST.
  //
  routes.get('/*', function(req, res){
    res.sendFile( assetFolder + '/index.html' )
  })

  //
  // We're in development or production mode;
  // create and run a real server.
  //
  var app = express()

  // Parse incoming request bodies as JSON
  app.use( require('body-parser').json() )

  // Mount our main router
  app.use('/', routes)

  // Start the server!
  var port = process.env.PORT || 4000
  app.listen(port)
  console.log("Listening on port", port)
}
else {
  // We're in test mode; make this file importable instead.
  module.exports = routes
}
