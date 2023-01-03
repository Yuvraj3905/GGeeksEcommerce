import Image from 'next/image';
import React from 'react';

const Slider = () => {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image
              src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHNoaXJ0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              className="d-block w-100"
              width="90"
              height="700"
              alt="/"
            />
          </div>
          <div className="carousel-item">
            <Image
              src="https://images.unsplash.com/photo-1590999659195-e64a988eaf4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHRzaGlydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              className="d-block w-100"
              width="90"
              height="700"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <Image
              src="https://images.unsplash.com/photo-1503341733017-1901578f9f1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHRzaGlydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              className="d-block w-100"
              width="90"
              height="700"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Slider;
