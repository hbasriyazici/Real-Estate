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
            <Link to={`/products/${id}`} className="product__link text-right">
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
            <div className="card-body product__text text-left">
                <p className="card-title pl-3 pr-3 mb-2">
                    <Link to={`/products/${id}`}>{title}</Link>
                </p>
                <div className="product-info pl-3 pr-3">
                    <h5 className="product__price"> ${formatMoney(price)}</h5>
                </div>
            </div>
        </div>
    );
};

export default connect()(Product);

