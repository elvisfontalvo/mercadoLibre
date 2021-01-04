import React from 'react'
import SearchBar from '../Components/header/searchBar';

class Home extends React.Component {
	constructor(props) {
        super(props);
        this.props.history.push('/');
    }
  render() {
    return (
      <div>
    		<SearchBar history={this.props.history}></SearchBar>
      </div>
    )
  }
}
export default Home