import React from 'react';
import logo from '../../Assets/img/logo@2x.png';
import './searchBar.css';
class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {query: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
    	this.setState({query:event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.history.push(`/items?search=${this.state.query}`);
    }

    render() {
    	const {query} = this.state;
        return (
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-custom">
 				<div className="container">
 					<div className="col-1"></div>
 					<div className="col-10">
 						<div className="row">
					        <div className="col-lg-1 col-md-2 col-sm-2 col-2  searchBar-style">
					        	<a className="navbar-brand" href="/">
							    	<img src={logo} alt="Logo" className="logo" />
							    </a>
					        </div>
					        <div className="col-lg-11 col-md-10 col-sm-10 col-10 searchBar-style">
					        	<form onSubmit={this.handleSubmit}>
						            <div className="input-group">
						                <input type="text" className="form-control border border-right-0 input-header" value={query} placeholder="Nunca dejes de buscar" style={{border:"none"}} onChange={this.handleChange} />
						                <span className="input-group-append">
						                    <button className="btn btn-outline-secondary border border-left-0 button-header" type="submit" >
						                        <i className="fa fa-search"></i>
						                    </button>
						                </span>
						            </div>
						        </form>
					        </div>
				      </div>						
 					</div>
 					<div className="col-1"></div>			   
			    </div>	 
			</nav>
        )

    }
}

export default SearchBar;