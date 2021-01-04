import React from 'react';
import './menu.css';

class Menu extends React.Component {

	constructor(props) {
        super(props);
        this.state= {categories: []};
        if(this.props.categories !== undefined && this.props.categories.length > 0)
        {
        	this.state= {categories: this.props.categories};
        }
    }
    componentDidUpdate(oldProps) {
        if (JSON.stringify(oldProps.categories) !== JSON.stringify(this.props.categories)) {
            this.setState({categories: this.props.categories})
        }
    }
    render() {
        const { categories } = this.state;
        var listItems = categories.map(function(item, index) {
            return (
                <li key={index} className="breadcrumb-item menu-style"><a href="/">{item}</a></li>
            );
        });
        return (
      
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10">
                        <div className="row">
                            <div className="col-12 ">
					            <nav aria-label="breadcrumb">
								  <ol className="breadcrumb menu">
								    {listItems}
								  </ol>
								</nav>
						    </div>
						</div>
					</div>
					<div className="col-1"></div>
				</div>
		
        )
    }
}

export default Menu;