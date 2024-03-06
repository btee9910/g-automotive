import Button from "./Button";

const Banner = () => {
    return ( 
        <div className="hero">

            <div className="hero-image">
                <img src="../../../images/banner-image.jpg" alt="Ford Ranger Raptor" />
            </div>

            <div className="hero-overlay">
                <div className="container banner-content">
                    <h1>Welcome to G Automotive</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem voluptatem reprehenderit nihil ad sequi minima animi atque velit praesentium quas molestias delectus, aliquid magnam rem obcaecati maxime dolor autem. Tempore!</p>

                    <div className="banner-button">
                        <Button context='Contact Us' link=''/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Banner;  