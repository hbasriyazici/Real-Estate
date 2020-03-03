import React, {Component} from 'react';
import BrandFilter from "../../components/BrandFilter/BrandFilter";

class FilterBar extends Component {
    render() {
        return (
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-12"> 
                        <BrandFilter/>
                    </div>
                </div>
            </div>
        );
    }
}

export default FilterBar;