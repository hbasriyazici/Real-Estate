import React from 'react';
import SandalyeList from "../../containers/ProductList/SandalyeList";

const SandalyeHome = () => {
    return (
        <React.Fragment>
            <div className="container mt-4">
                <div className="row">
                    <SandalyeList/>
                </div>
            </div>
        </React.Fragment>
    );
};


export default SandalyeHome;
