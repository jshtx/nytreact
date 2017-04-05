// Include React
var React = require("react");

var Query = React.createClass({

  getInitialState: function() {
    return { searchTerm: "" };
  },

  handleChange: function(event) {

    this.setState({ searchTerm: event.target.value });

  },

  handleSubmit: function(event) {

    event.preventDefault();

    this.props.setTerm(this.state.searchTerm);
    this.setState({ searchTerm: "" });
  },

  // Here we render the component
  render: function() {

    return (

      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title"><strong><i className="fa  fa-list-alt"></i>   Search Parameters</strong></h3>
        </div>
        <div className="panel-body">

         
          <form>

             
            <div className="form-group">
              <label>Article Search:</label>
              <input value={this.state.searchTerm} onChange={this.handleChange} type="text" className="form-control" id="searchTerm"/>
            </div>
            
            <div className="form-group">
              <label>Start Year:</label>
              <input value={this.state.startYear} type="text" className="form-control" id="startYear"/>
            </div>

            
            <div className="form-group">
              <label>End Year:</label>
              <input value={this.state.endYear} type="text" className="form-control" id="endYear"/>
            </div>

           
            <button type="submit" className="btn btn-default" id="runSearch"><i className="fa fa-search"></i> Search</button>
              <button type="button" className="btn btn-default" id="clearAll"><i className="fa fa-trash"></i> Clear Results</button>

          </form>
        </div>
      </div>

  
    );
  }
});

module.exports = Query;