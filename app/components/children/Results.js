// Include React
var React = require("react");

var Results = React.createClass({

  // Here we render the component
  render: function() {

    return (

    <div className="row">
    <div className="col-sm-12">
   

    
      <div className="panel panel-primary">

       
        <div className="panel-heading">
          <h3 className="panel-title"><strong><i className="fa fa-table"></i>   Top Articles</strong></h3>
        </div>

      
        <div className="panel-body" id="wellSection">
        </div>
      </div>
    </div>
  </div>

  
    );
  }
});

module.exports = Results;