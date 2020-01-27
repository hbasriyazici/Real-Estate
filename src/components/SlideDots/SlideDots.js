import React from 'react';
import './SlideDots.scss';

const SlideDots = (
    {
        len,
        activeItem,
        changeItem
    }
) => {

    const dots = [];
    for(let i = 0; i < len; i++) {
        let dotClass = 'owl-dot';

        if(activeItem === i) {
            dotClass += ' active';
        }
        
        dots.push(
                <button onClick={() => {changeItem(i)}} className={dotClass}>
                    <span></span>
                </button>
            )
    }

    return (
        <div className="owl-dots mt-5">
            {dots}
        </div>
    );
};

export default SlideDots;