// Include React
var React = require("react");

//Include the subcomponents
var Search = require("./children/Search");


var Main = React.createClass({



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

          </div>
        </div>

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;