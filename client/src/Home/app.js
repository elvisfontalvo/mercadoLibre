import React from 'react'
import Products from '../Products/products';
import Product from '../Product/product';
import Home from './home';
import { Route,  BrowserRouter as Router } from 'react-router-dom';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js'; 
import '../Assets/fonts/css/font-awesome.min.css';

class App extends React.Component {
    render() {
        return (
            <Router >     
                <Route exact path="/" component={Home} />
                <Route exact path="/items" component={Products} />
                <Route path="/items/:id" component={Product} />
            </Router>
        )
    }
}
export default App