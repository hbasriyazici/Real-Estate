import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {formatMoney} from "../../pipes/priceFormatter";
import {cumulativeOffSet} from "../../utilities/cumulativeOffset";

import './Product.scss';
import SlideDots from "../SlideDots/SlideDots";


const Product = (props) => {

    const {
        title,
        price,
        images,
        id,
        size,
        rooms,
        location,
        brand
    } = props.product;

    const imageRef = React.createRef();
    const [img, setImg] = useState(images[0]);
    const [aItem, setAItem] = useState(0);


    const handleImageChange = (e) => {

        let  clientX;

        if(e.type === 'touchmove') {
            clientX = e.touches[0].clientX;
        } else {
            clientX = e.clientX;
        }

        const currentX = clientX - cumulativeOffSet(imageRef.current).left;

        // console.dir(imageRef.current);

        const part = imageRef.current.clientWidth / images.length;
       // console.log(Math.ceil(currentX / part) - 1);

        let imgIndex = Math.ceil(currentX / part) - 1;
        if (imgIndex < 0) {
            imgIndex = 0;
        }

        if (imgIndex >= images.length) {
            imgIndex = images.length - 1;
        }
        setAItem(imgIndex);
        setImg(images[imgIndex]);
    };

    const handleMouseOut = (e) => {
        setImg(images[0]);
        setAItem(0);
    };

    const changeImage = (i) => {
        setImg(images[i]);
        setAItem(i);
    }

    return (
        <div className="card product">
            <Link to={`/rent/${id}`} className="product__link text-right">
              <img
                  onMouseMove={handleImageChange}
                  onMouseOut={handleMouseOut}
                  onTouchMove={handleImageChange}
                  onTouchEnd={handleMouseOut}
                  className="card-img-top product__img" src={img} alt={title} ref={imageRef}
                />
                <span className="product__brand"> 
                    {brand} 
                </span>
                <SlideDots len={images.length} activeItem={aItem} changeItem={changeImage}/>
            </Link>
            <div className="card-body product__text text-left pl-4 pr-4 pt-4">
                <div className="product-info">
                    <h5 className="product__price"> ${formatMoney(price)}</h5>
                </div>
                <p className="card-title mb-2">
                    <Link to={`/rent/${id}`}>{title}</Link>
                </p>
                <div className="product-location mt-3">
                  <h5 className="location-text"> <i className="fas fa-map-marker-alt icon mr-2"></i> {location} </h5>
                </div>
                <div className="row product-sizes mt-3">
                  <div className="col">
                    <h5 className="sqft"> <i className="fas fa-compress icon mr-2"></i>  {size} </h5>
                  </div>
                  <div className="col text-right">
                    <h5 className="rooms"> <i className="fas fa-bed icon mr-2"></i> {rooms} </h5>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default connect()(Product);

