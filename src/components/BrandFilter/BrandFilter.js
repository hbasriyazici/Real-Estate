
import React from 'react';
import {connect} from 'react-redux';
import { Accordion, Card, Button } from 'react-bootstrap';
import './BrandFilter.scss';
import {brands} from "../../data/brands";
import {rooms} from "../../data/rooms";
import {addBrandToFilter, removeBrandFromFilter, addRoomToFilter, removeRoomFromFilter} from "../../actions/actions";

const BrandFilter = (props) => {
  
  const {dispatch} = props;
  const handleSelectBox = (e) => {
    const name = e.target.name;
    
    const value = e.target.checked;

    if (value) {
      dispatch(addBrandToFilter(name));
    } else {
      dispatch(removeBrandFromFilter(name)); 
    }
  };

  const handleSelectBox2 = (e) => {
    const name = e.target.name;
    
    const value = e.target.checked;

    if (value) {
      dispatch(addRoomToFilter(name));
    } else {
      dispatch(removeRoomFromFilter(name));
    }
  };


  return (
    <>
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
              <div className="row">
                <ul className="filter-list list-group list-inline flex-wrap">
                  {rooms.map(room => (
                    <li className="list-group-item flex-50 mt-2" key={room}>
                      <label className="custom-checkbox text-capitalize">
                        {room}
                        <input
                          type="checkbox"
                          name={room}
                          className="custom-checkbox__input"
                          onInput={handleSelectBox2}/>
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
  const roomItemsCount = {};

  state.shop.products.forEach(p => {
      brandItemsCount[p.brand] = brandItemsCount[p.brand] + 1 || 1;
    });

  state.shop.products.forEach(p => {
    roomItemsCount[p.room] = roomItemsCount[p.room] + 1 || 1;
  });
    
  return {brandItemsCount, roomItemsCount}

};



export default connect(mapStateToProps)(BrandFilter);