import React from 'react';
import {Link} from 'react-router-dom';
import {formatMoney} from "../../pipes/priceFormatter";

const ProductDetail = (props) => {

    const {
        title,
        price,
        description,
    } = props.product;

    return (
        <aside className="col-sm-7">
            <article className="card-body p-5">
                <h3 className="title mb-3">{title}</h3>
                <hr className="mb-4 mt-4"/>
                <p className="price-detail-wrap">
                    <span className="price h3">
                        <span className="num">{formatMoney(price)}</span><span className="currency"> ₺</span>
                    </span>
                </p>
                <hr className="mb-4 mt-4"/>
                <dl className="item-property">
                    <dt>Description</dt>
                    <dd><p className="text-capitalize">{description}</p></dd>
                </dl>
                <Link to="/contact">
                <button className="btn btn-success">Book now</button>
                </Link>
            </article>
        </aside>
    );
};

export default ProductDetail;
