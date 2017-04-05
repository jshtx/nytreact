// Include the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component for displaying individual routes
var Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
var Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server

var hashHistory = router.hashHistory;

// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Reference the high-level components
var Main = require("../components/Main");
var Search = require("../components/children/Search");
var Save = require("../components/children/Save");
var Query = require("../components/children/Query");
var Results = require("../components/children/Results");

// Export the Routes
module.exports = (

  // The high level component is the Router component
  <Router history={hashHistory}>
    <Route path="/" component={Main}>


      <Route path="search" component={Search} >
        <Route path="query" component={Query} />
        <Route path="results" component={Results} />
      </Route>
      <Route path="save" component={Save} />

      {/* If user selects any other path... we get the Search Route */}
      <IndexRoute component={Search} />

    </Route>
  </Router>

);