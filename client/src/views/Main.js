import React from 'react';
import NavBar from '../components/NavBar';
import desk from "../images/desk.png";





const Main = (props) => {



    return(
        <div>
            <NavBar />
            
            <div>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={desk} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="..."></img>
                    </div>
                </div>
            </div>
            </div>

        </div>
        
    );
}
export default Main;