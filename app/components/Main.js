// Include React
var React = require("react");

//Include the subcomponents
var Search = require("./children/Search");
var Saved = require("./children/Saved");

var Main = React.createClass({

  getInitialState: function() {
    
    return { saved: [] };
  },


  // Here we render the component
  render: function() {

    return (
      <div className="container">

        <div className="row">

          <div className="jumbotron primary">
            <h1 className="text-center">New York Times Search</h1>
            
          </div>

          

          <div className="container">

            <Search />

          

            <Saved saved={this.state.saved} />

        

          </div>
        </div>

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;