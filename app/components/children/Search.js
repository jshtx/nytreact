// Include React
var React = require("react");

//Include the Grandkids
var Query = require("./Query");
var Results = require("./Results");


//this really only renders the grandkids of the search and the results
var Search = React.createClass({

  getInitialState: function() {
    
    return { results: [] };
  },

  setTerm: function(term) {
    
    this.setState({ searchTerm: term });
  },

  // Here we render the component
  render: function() {

    return (
    

    <div className="container">

      <Query setTerm={this.setTerm} />        

      <Results results={this.state.results}/>        

    </div>
    

  );
  }
});

module.exports = Search;