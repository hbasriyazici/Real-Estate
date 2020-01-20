import React from 'react';
import CarouselBox from './Carousel';
import OturmaGrubuBox from './OturmaGrubuBox';
import SandalyeBox from './SandalyeBox';
import MasaBox from './MasaBox';
import PodyumBox from './PodyumBox';
import HaliBox from './HaliBox';
import KumasBox from './KumasBox';
import CategoryBoxProducts from './CategoryBox';
import CategoryImage from './category-img.jpg';
import Puflar from './puflar-thumb.png';
import Sandalyeler from './sandalyeler.png';
import Masalar from './masalar.png';
import './AnaSayfa.css';

const AnaSayfa = () => {
    return (
        <div>
        <CarouselBox/>
        <div className="container mt-3">
            <div className="row">
                    <div className="allproducts col-md-4 mb-4">
                        <CategoryBoxProducts
                            img = {CategoryImage}
                            title = "Tüm ürünler"
                        />
                    </div>
                    <div className="col-md-4 mb-4">
                        <OturmaGrubuBox
                            img = {Puflar}
                            title = "oturma grupları ve puflar"
                        />
                    </div>
                    <div className="col-md-4 mb-4">
                        <SandalyeBox
                            img = {Sandalyeler}
                            title = "Sandalye ve Tabureler"
                        />
                    </div>
                    <div className="col-md-4 mb-4">
                        <MasaBox
                            img = {Masalar}
                            title = "Masa Sehpa ve Bistro"
                        />
                    </div>
                    <div className="col-md-4 mb-4">
                    <PodyumBox
                        img = {CategoryImage}
                        title = "Podyum"
                    />
                    </div>
                    <div className="col-md-4 mb-4">
                        <HaliBox
                            img = {CategoryImage}
                            title = "Halı Döşeme"
                        />
                    </div>
                    <div className="col-md-4 mb-4">
                        <KumasBox
                            img = {CategoryImage}
                            title = "Kumaş Döşeme"
                        />
                    </div>
            </div>
        </div>
        </div>
    )
}

export default AnaSayfa;