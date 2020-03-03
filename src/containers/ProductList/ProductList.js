import React, {Component} from 'react';
import {connect} from 'react-redux';
import Product from "../../components/Product/Product";

import {brandFilter} from "../../pipes/brandFilter";
import {productFilter} from "../../pipes/productFilter";
import {orderByFilter} from "../../pipes/orderByFilter";
import {paginationPipe} from "../../pipes/paginationFilter";
import Pagination from "../../components/Pagination/Pagination";
import './ProductList.scss';

class ProductList extends Component {

    state = {
        colValue : 'col-lg-4',
        perPage: 12,
        currentPage: 1,
        pagesToShow: 3,
        gridValue: 3
    };

    changeLayout = (n) => {
        this.setState({gridValue: n});

        let realGridValue;

        if(n === 4) {
            realGridValue = 3
        } else {
            realGridValue = 4;
        }

      this.setState({
          colValue: `col-lg-${realGridValue}`
      });
    };


    onPrev = () => {
        const updatedState = {...this.state};
        updatedState.currentPage = this.state.currentPage - 1;
        this.setState(updatedState);
    };


    onNext = () => {
        this.setState({
            ...this.state,
            currentPage: this.state.currentPage + 1
        });
    };

    goPage = (n) => {
        this.setState({
            ...this.state,
            currentPage: n
        });
    };


    render() {

        return (
            <>
              <div className="col-lg-12">
                  <div className="product-list">
                      <div className="row">
                          {paginationPipe(this.props.products, this.state).map(product =>{
                              let classes = `${this.state.colValue} col-md-6 mb-4`;
                              
                              return (
                                  <div className={classes} key={product.id}>
                                      <Product product={product} />
                                  </div>
                              )
                          })}
                      </div>
                  </div>
                  <div className="pagination-wrapper d-flex justify-content-center align-items-center pt-4">
                      <div className="pagination-area">
                        <Pagination
                            totalItemsCount={this.props.products.length}
                            currentPage={this.state.currentPage}
                            perPage={this.state.perPage}
                            pagesToShow={this.state.pagesToShow}
                            onGoPage={this.goPage}
                            onPrevPage={this.onPrev}
                            onNextPage={this.onNext}
                        />
                      </div>
                  </div>
              </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    const brands = state.brandFilter;
    const rooms = state.roomFilter;
    const orderBy = state.orderBy;

    const filterArr = productFilter(state.shop.products, rooms, brands);
    const filterByOrderArr = orderByFilter(filterArr, orderBy);


    return {products: filterByOrderArr}
};

export default connect(mapStateToProps, null)(ProductList);
