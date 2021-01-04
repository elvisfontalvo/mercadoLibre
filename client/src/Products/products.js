import React from 'react';
import './products.css';
import Menu from '../Components/menu/menu';
import queryString from 'query-string'
import search from '../Utils/search';
import NumberFormat from 'react-number-format';
import SearchBar from '../Components/header/searchBar';

class Products extends React.Component {

    constructor(props) {
        super(props);
        const queryValue = queryString.parse(this.props.location.search)
        this.state = { showResult: false, query: queryValue.search, data: [], showLoad: true, categories: [] }
        this.loadData(this.state.query);
        this.selectItem = this.selectItem.bind(this);
    }
    componentDidUpdate(oldProps) {
        if (oldProps.location.search !== this.props.location.search) {
            const queryValue = queryString.parse(this.props.location.search)
            this.loadData(queryValue.search);
        }
    }
    async loadData(query) {
        if (query !== undefined) {
            const data = await search(query);
            if (data.status === 200 && data.data.items.length > 0) {
                this.setState({
                    showResult: true,
                    showLoad: false,
                    data: data.data.items,
                    categories: data.data.categories
                })
            }
            else
            {
                this.setState({
                    showResult: false,
                    showLoad: false,
                    data: [],
                    categories: []
                })
            }
        }
    }

    selectItem = (id, categories) => {
        this.props.history.push({
            pathname: `/items/${id}`,
            search: '',
            state: { categories: categories }
        });
        
    }


    render() {

        
        const { showResult, data,  categories } = this.state;
        const selectItem = this.selectItem;
        var listItems = data.map(function(item, index) {
            return (
                <li key={index} className="items-style" onClick={() => selectItem(item.id, categories)} >
                    <div className="media  padding-products">
                        <div className="image-products" style={{ backgroundImage: `url(${item.picture}` }}>
                        </div>
                        <div className="media-body">
                            <div className="d-flex align-items-center justify-content-between mt-1">
                                <h5 className="mt-0 title-products">
                                    <NumberFormat value={item.price.amount} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={item.price.currency} decimalScale={item.price.decimals} />    {item.free_shipping && <i className="fa shipping"></i>}
                                </h5>
                                <span className="list-inline small location-products">Capital Federal</span>
                            </div>
                            <span className="mt-0 description-products">{item.title}</span>
                            <p className="mt-0 description-products">Completo Unico!</p>
                        </div>
                    </div>
                </li>
            );
        });

        return (
            <div >
              <SearchBar history={this.props.history} ></SearchBar>
              {showResult && <div className="container">

                  <Menu categories={categories} ></Menu>
                    <div className="row">
                        <div className="col-1" onClick={() => this.selectItem()}></div>
                        <div className="col-10">
                            <div className="row">
                                <div className="col-12">
                                    <ul className="list-group">
                                        {listItems} 
                                    </ul>
                                </div>
                            </div> 
                        </div>
                        <div className="col-1"></div>
                    </div>
                </div> }
                
                </div>
        );


    }
}

export default Products