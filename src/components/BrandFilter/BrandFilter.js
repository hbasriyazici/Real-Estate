
import React from 'react';
import {connect} from 'react-redux';
import { Accordion, Card, Button } from 'react-bootstrap';
import './BrandFilter.scss';
import {locations} from "../../data/locations";
import {rooms} from "../../data/rooms";
import {addLocationToFilter, removeLocationFromFilter, addRoomToFilter, removeRoomFromFilter} from "../../actions/actions";

const BrandFilter = (props) => {
  
  const {dispatch} = props;
  const handleSelectBox = (e) => {
    const name = e.target.name;
    
    const value = e.target.checked;

    if (value) {
      dispatch(addLocationToFilter(name));
      console.log("aded name is: ", name)
    } else {
      dispatch(removeLocationFromFilter(name)); 
      console.log("removed name is: ", name)
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
              <div className="list-title-wrapper w-11">
                <h4 className="list-title">
                  Choose Location
                </h4>
              </div>
              <div className="row">
                  <ul className="filter-list location-list list-group list-inline flex-wrap">
                      {locations.map(location => (
                          <li className="list-group-item flex-auto mt-2" key={location}>
                            <label className="custom-checkbox text-capitalize">
                              {location}
                              <input
                                type="checkbox"
                                name={location}
                                className="custom-checkbox__input"
                                onInput={handleSelectBox}/>
                              <span className="custom-checkbox__span"></span>
                            </label>
                          </li>
                        
                      ))}
                  </ul>
              </div>
              <div className="list-title-wrapper w-5 mt-2">
                <h4 className="list-title">
                  Rooms
                </h4>
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

  const locationItemsCount = {};
  const roomItemsCount = {};

  state.shop.products.forEach(p => {
    locationItemsCount[p.location] = locationItemsCount[p.location] + 1 || 1;
    });

  state.shop.products.forEach(p => {
    roomItemsCount[p.room] = roomItemsCount[p.room] + 1 || 1;
  });
    
  return {locationItemsCount, roomItemsCount}

};



export default connect(mapStateToProps)(BrandFilter);