import React from 'react';
//Assets
import cargo_drone from '../../assets/images/cargo-drone.jpg';
import recording_drone from '../../assets/images/recording-drone.jpg';
import competitiom_drone from '../../assets/images/speed-drone.jpg';

const HomeHeader = () => {
  return (
    <div
      id="template-mo-jassa-hero-carousel"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-bs-target="#template-mo-jassa-hero-carousel"
          data-bs-slide-to="0"
          class="active"
        ></li>
        <li
          data-bs-target="#template-mo-jassa-hero-carousel"
          data-bs-slide-to="1"
        ></li>
        <li
          data-bs-target="#template-mo-jassa-hero-carousel"
          data-bs-slide-to="2"
        ></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="container">
            <div class="row p-5">
              <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                <img class="img-fluid" src={competitiom_drone} alt="" />
              </div>
              <div class="col-lg-6 mb-0 d-flex align-items-center">
                <div class="text-align-left align-self-center">
                  <h1 class="h1 text-success">
                    <b>DronesUN</b> eCommerce
                  </h1>
                  <h3 class="h2">Lorem Ipsum Lorem Ipsum</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="container">
            <div class="row p-5">
              <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                <img class="img-fluid" src={recording_drone} alt="" />
              </div>
              <div class="col-lg-6 mb-0 d-flex align-items-center">
                <div class="text-align-left">
                  <h1 class="h1">Lorem Ipsum</h1>
                  <h3 class="h2">Lorem Ipsum Lorem Ipsum</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="container">
            <div class="row p-5">
              <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                <img class="img-fluid" src={cargo_drone} alt="" />
              </div>
              <div class="col-lg-6 mb-0 d-flex align-items-center">
                <div class="text-align-left">
                  <h1 class="h1">Lorem Ipsum</h1>
                  <h3 class="h2">Lorem Ipsum Lorem Ipsum </h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev text-decoration-none w-auto ps-3"
        href="#template-mo-jassa-hero-carousel"
        role="button"
        data-bs-slide="prev"
      >
        <i class="fas fa-chevron-left"></i>
      </a>
      <a
        class="carousel-control-next text-decoration-none w-auto pe-3"
        href="#template-mo-jassa-hero-carousel"
        role="button"
        data-bs-slide="next"
      >
        <i class="fas fa-chevron-right"></i>
      </a>
    </div>
  );
};

export default HomeHeader;
