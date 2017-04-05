// Include React
var React = require("react");

//Include the Grandkids
var Query = require("./Query");
var Results = require("./Results");


//this really only renders the grandkids of the search and the results
var Search = React.createClass({

  // Here we render the component
  render: function() {

    return (
    

    <div className="container">

      <Query />        

      <Results />        

    </div>
    

  );
  }
});

module.exports = Search;