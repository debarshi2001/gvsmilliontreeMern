import React from 'react';
import './Carousel.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner" id="carousel">
                    <div id="image" class="carousel-item active">
                        <img src="./Photos/Image1.jpg" id="image" class="d-block w-100"  alt="..." />
                    </div>
                    <div id="image" class="carousel-item">
                        <img src="./Photos/Image2.jpg" id="image" class="d-block w-100"  alt="..." />
                    </div>
                    <div id="image" class="carousel-item">
                        <img src="./Photos/Image3.jpg" id="image" class="d-block w-100"  alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}
