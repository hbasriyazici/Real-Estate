import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './ProductDetail.scss'
import ProductDetailComponent from '../../components/ProductDetail/ProductDetail';
import ProductSlider from "../../components/ProductSlider/ProductSlider";

const ProductDetail = (props) => {
  return (
    <div className="container mt-3">
      <div className="card product-dtl mb-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="back-arrow mt-3">
              <Link className="router" to={`/rent`}><h4 className="arrow"> <i className="fas fa-chevron-left"></i>  Back</h4></Link>
            </div>
          </div>
          <ProductSlider images={props.product.images}/>
          <ProductDetailComponent product={props.product}/>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) =>  {

    const product = state.shop.products.find(product => product.id === +props.match.params.id);

    return {
        product
    }
};



export default connect(mapStateToProps, null)(ProductDetail);
