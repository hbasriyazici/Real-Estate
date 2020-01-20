import React from 'react';
import FilterBar from "../../containers/FilterBar/FilterBar";
import ProductList from "../../containers/ProductList/ProductList";

const Home = () => {
    return (
        <React.Fragment>
            <div className="container mt-4">
                <div className="row">
                    <FilterBar/>
                    <ProductList/>
                </div>
            </div>
        </React.Fragment>
    );
};


export default Home;
