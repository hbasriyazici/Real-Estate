import React from 'react';
import HouseList from "../../containers/ProductList/HouseList";

const HouseHome = () => {
    return (
        <React.Fragment>
            <div className="container mt-4">
                <div className="row">
                    <HouseList/>
                </div>
            </div>
        </React.Fragment>
    );
};


export default HouseHome;
