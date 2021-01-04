import React from 'react';
import './product.css';
import Menu from '../Components/menu/menu';
import queryString from 'query-string'
import item from '../Utils/item';
import NumberFormat from 'react-number-format';
import SearchBar from '../Components/header/searchBar';
class Product extends React.Component {
    constructor(props) {
        super(props);
        const queryValue = queryString.parse(this.props.location.search)
        this.state = { showResult: false, id: this.props.match.params.id, query: queryValue.search, showLoad: true }
        this.loadData(this.state.id);
    }
    async loadData(id) {
        if (id !== undefined) {
            const data = await item(id);
            if (data.status === 200) {
                this.setState({
                    showResult: true,
                    showLoad: false,
                    data: data.data.item,
                })
            } else {
                this.setState({
                    showResult: false,
                    showLoad: false,
                    data: []
                })
            }
        }
    }
    render() {
        const { showResult, data } = this.state;
        return (
            <div > 
                <SearchBar history={this.props.history}></SearchBar>    
                {showResult && <div className="container"> 
                    {showResult && <Menu categories={this.props.location.state.categories} ></Menu>}
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-lg-7 col-md-6 col-10 style-product">
                            <div className="preview-pic tab-content">
                                <div className="tab-pane active" id="pic-1">
                                    <img src={data.picture} alt={data.picture} className="image-product" />
                                </div>
                            </div>
                            <div className="description">
                                <h2 className="title-description-product">Descripción del producto</h2>
                                <p className="description-product">{data.description}</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-11 offset-xs-1 style-action-product">
                            <p className="count-product">{data.condition} - {data.sold_quantity} vendidos</p>
                            <p className="title-product">{data.title}</p>
                            <p className="price-product"><NumberFormat value={data.price.amount} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} decimalScale={data.price.decimals} prefix={data.price.currency} /></p>
                            <div className="action">
                                <button type="button" className="btn btn-primary buy-product">Comprar</button>
                            </div>
                        </div>
                        <div className="col-1"></div>
                    </div>
                </div>}
            </div >
        )
    }
}

export default Product