import banner1 from '../../assets/images/banner/banner1.jpeg'
import banner2 from '../../assets/images/banner/banner2.jpeg'
import banner3 from '../../assets/images/banner/banner3.jpeg'

function BannerCategory() {
    return (
        <div className="home-page__slider">
            <div className="slider__items-category">
                <div className="slider__item-category">
                    <img src={banner1} alt="" />
                </div>
                <div className="slider__item-category">
                    <img src={banner2} alt="" />
                </div>
                <div className="slider__item-category">
                    <img src={banner3} alt="" />
                </div>
            </div>
            
        </div>
    );
}

export default BannerCategory;