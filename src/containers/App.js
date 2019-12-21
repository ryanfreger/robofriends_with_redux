import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'
import './App.css'
import { setSearchField, requestRobots } from '../actions';
import { connect } from 'react-redux';

// mapping parameters that come from state in Redux store to props.
const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
    requestHasFailed: state.requestRobots.requestHasFailed
  }
}

//dispatch DOM changes to call an action.
const mapDispatchToProps = (dispatch) => {
    return {
      onSearchBoxChange: (event) => dispatch(setSearchField(event.target.value)),
      onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends React.Component {

  //When component mounts, make the API request to retrieve all the users.
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { robots, searchField, onSearchBoxChange, isPending, requestHasFailed } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })

    return (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchBoxChange={onSearchBoxChange} />
        <Scroll>
            {/* ErrorBoundary is used to wrap our main content. 
            Will show error message if something went wrong, else it's children components */}
            <ErrorBoundary requestHasFailed={requestHasFailed}>
              <CardList robots={filteredRobots} />
            </ErrorBoundary> 
        </Scroll>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);