// eslint-disable-next-line
import React from 'react';
import {connect} from 'react-redux';
import { Accordion, Card, Button } from 'react-bootstrap';
import './BrandFilter.scss';
import {brands} from "../../data/brands";
import {addBrandToFilter, removeBrandFromFilter} from "../../actions/actions";

const BrandFilter = (props) => {
  // eslint-disable-next-line
  const {dispatch, brandItemsCount} = props;
  const handleSelectBox = (e) => {
    const name = e.target.name;
    // eslint-disable-next-line
    const value = e.target.checked;

    if (e.target.checked) {
      dispatch(addBrandToFilter(name));
    } else {
      dispatch(removeBrandFromFilter(name));
    }
  };

  return (
    <>
      {/* buraya react bootstrap'ın accordion componenti gelecek */}
      <Accordion defaultActiveKey="1">
        <Card className="accordion-card">
          <Card.Header className="accordion-card-header">
            <Accordion.Toggle className="accordion-button" as={Button} variant="link" eventKey="0">
              <h3><i className="fas fa-sliders-h"></i></h3>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="accordion-card-body">
              <div className="row">
                <ul className="filter-list list-group list-inline flex-wrap">
                  {brands.map(brand => (
                    <li className="list-group-item flex-50 mt-2" key={brand}>
                      <label className="custom-checkbox text-capitalize">
                        {brand}
                        <input
                          type="checkbox"
                          name={brand}
                          className="custom-checkbox__input"
                          onInput={handleSelectBox}/>
                        <span className="custom-checkbox__span"></span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  );

};

const mapStateToProps = (state) => {

  const brandItemsCount = {};

  state
    .shop
    .products
    .forEach(p => {
      brandItemsCount[p.brand] = brandItemsCount[p.brand] + 1 || 1;
    });

  return {brandItemsCount}

};

export default connect(mapStateToProps)(BrandFilter);