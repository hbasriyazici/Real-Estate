import React from 'react';
import { Link } from 'react-router-dom';
import FilterBar from "../../containers/FilterBar/FilterBar";
import ProductList from "../../containers/ProductList/ProductList";

const Rent = () => {
    return (
        <React.Fragment>
            <div className="container mt-3 mb-3">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="back-arrow mt-3">
                      <Link className="router" to={`/`}><h4 className="arrow"> <i className="fas fa-chevron-left"></i>  Back</h4></Link>
                    </div>
                  </div>
                    <FilterBar/>
                    <ProductList/>
                </div>
            </div>
        </React.Fragment>
    );
};


export default Rent;
