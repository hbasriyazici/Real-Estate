import React, {useState} from 'react';
import Popup from "reactjs-popup";
import './ProductSlider.scss';

const ProductSlider = ({images}) => {
  const imageRef = React.createRef();
  const [img,
    setImg] = useState(images[0]);
  // eslint-disable-next-line
  const [aItem,
    setAItem] = useState(0);

  const changeImage = (i) => {
    setImg(images[i]);
    setAItem(i);
  }

  return (
    <div className="col-lg-6 border-right">
      <div className="gallery-wrap">
        <div className="img-big-wrap">
          <div>
            <Popup
              trigger= { 
                <img 
                  ref={imageRef} 
                  src={img} 
                  style={{width: '100%', height: '100%'}}
                  alt="images" 
                /> 
              }
              modal
              closeOnDocumentClick>
              <div className="col-sm-5">
                <img className="modal-img" src={img} alt=""/>
              </div>
            </Popup>
          </div>
        </div>
        <div className="img-small-wrap">
          {images.map((img, i) => (
            <div className="item-gallery" onClick={() => {changeImage(i)}}>
              <img src={img} alt="images"/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;