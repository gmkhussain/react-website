import React, { useEffect } from 'react'
 
// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const HomePage = () => {
    return (
        <>

            <section className="hero-area">
                <div className="container">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="hero__caption">
                                <h1>
                                    The Intuitive <br/>
                                    Web Framework
                                </h1>
                                <p>lorem2</p>
                            </div>
                            <div className="hero__actions">
                                <button className="btn btn-primary">Get Started</button>
                                <button className="btn btn-default">Discover More</button>   
                            </div>

                            <div className="hero__video">
                                Video
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="companies-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 d-flex">
                            <div className="col companies__logo">
                                <img src="google" alt="Google" />
                            </div>
                            <div className="col companies__logo">
                                <img src="Microsoft" alt="Microsoft" />
                            </div>
                            <div className="col companies__logo">
                                <img src="google" alt="Apple" />
                            </div>
                            <div className="col companies__logo">
                                <img src="google" alt="Amazon" />
                            </div>
                            <div className="col companies__logo">
                                <img src="google" alt="Tesla" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            

            <section className="colset-area">
                <div className="container">
                    <div className="row">
                        
                        <div className="colset__img col-md-6">
                            <img src="" alt="image" />
                        </div>
                        <div className="colset__cont col-md-6">
                            <h2>Welcome to my site</h2>
                            <div className="cont">
                                lorem
                            </div>
                            <a href="#" className="btn btn-primaty">Go to Discover</a>
                        </div>



                        <div className="colset__img col-md-6">
                            <img src="" alt="image" />
                        </div>
                        <div className="colset__cont col-md-6">
                            <h2>Find your request</h2>
                            <div className="cont">
                                lorem
                            </div>
                            <a href="#" className="btn btn-primaty">Go to Discover</a>
                        </div>

                    </div>
                </div>
            </section>


            <section className="colset-area bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 header">
                            <span className="icon bg-red">
                                <i className="fire">fire</i>
                            </span>
                            <h2>Colset</h2>
                            <div className="cont">Put your backpack full of usefull</div>
                        </div>

                        <div className="colsetbox col-md-4">
                            <div className="colsetbox__inr">
                                <div className="colsetbox__img">
                                    <img src="" alt="image" />
                                </div>
                                <div className="colsetbox__cont">
                                    <span>From the blog</span>
                                    <div className="cont">
                                        50% off your next theme during New Year Season
                                    </div>
                                </div>
                            </div>
                        </div>
 

                        <div className="colsetbox col-md-4">
                            <div className="colsetbox__inr">
                                <div className="colsetbox__img">
                                    <img src="" alt="image" />
                                </div>
                                <div className="colsetbox__cont">
                                    <span>From the blog</span>
                                    <div className="cont">
                                        50% off your next theme during New Year Season
                                    </div>
                                </div>
                            </div>
                        </div>
 

                        <div className="colsetbox col-md-4">
                            <div className="colsetbox__inr">
                                <div className="colsetbox__img">
                                    <img src="" alt="image" />
                                </div>
                                <div className="colsetbox__cont">
                                    <span>From the blog</span>
                                    <div className="cont">
                                        50% off your next theme during New Year Season
                                    </div>
                                </div>
                            </div>
                        </div>
 

                    </div>
                </div>
            </section>





            
            <section className="resources-area bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 header">
                            <span className="icon bg-red">
                                <i className="fire">fire</i>
                            </span>
                            <h2>Resources</h2>
                            <div className="cont">Put your backpack full of usefull</div>
                        </div>

                        <div className="colsetbox col-md-6">
                            <div className="colsetbox__inr">
                                <div className="colsetbox__img">
                                    <img src="" alt="image" />
                                </div>
                                <div className="colsetbox__cont">
                                    <h4>From the blog</h4>
                                    <div className="cont">
                                        50% off your next theme during New Year Season
                                    </div>
                                </div>
                            </div>
                        </div>
 

                        <div className="colsetbox col-md-6">
                            <div className="colsetbox__inr">
                                <div className="colsetbox__img">
                                    <img src="" alt="image" />
                                </div>
                                <div className="colsetbox__cont">
                                    <h4>From the blog</h4>
                                    <div className="cont">
                                        50% off your next theme during New Year Season
                                    </div>
                                </div>
                            </div>
                        </div>
  

                        <div className="resources__actions d-flex justify-content-center">
                            <a href="#" className="btn btn-primary">More Resources</a>
                        </div>

                    </div>
                </div>
            </section>


            <section className="testimonials-area bg-green">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 header">
                            <span className="icon bg-red">
                                <i className="fire">fire</i>
                            </span>
                            <h2>Testimonials</h2>
                            <div className="cont">Put your backpack full of usefull</div>
                        </div>

                       
                        <Swiper
                              // install Swiper modules
                            modules={[Navigation, Pagination, A11y]}
                            spaceBetween={50}
                            slidesPerView={5}
                            navigation
                            pagination={{ clickable: true }}
                            // scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        
                            >
                            <SwiperSlide>
                                <div className="testimonials__img">
                                    <img src="" alt="image" />
                                </div>
                                <div className="testimonials__cont">
                                    <div className="cont">Hello world</div>
                                    <h5>Alex John</h5>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonials__img">
                                    <img src="" alt="image" />
                                </div>
                                <div className="testimonials__cont">
                                    <div className="cont">Hello world</div>
                                    <h5>Alex John</h5>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonials__img">
                                    <img src="" alt="image" />
                                </div>
                                <div className="testimonials__cont">
                                    <div className="cont">Hello world</div>
                                    <h5>Alex John</h5>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonials__img">
                                    <img src="" alt="image" />
                                </div>
                                <div className="testimonials__cont">
                                    <div className="cont">Hello world</div>
                                    <h5>Alex John</h5>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonials__img">
                                    <img src="" alt="image" />
                                </div>
                                <div className="testimonials__cont">
                                    <div className="cont">Hello world</div>
                                    <h5>Alex John</h5>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonials__img">
                                    <img src="" alt="image" />
                                </div>
                                <div className="testimonials__cont">
                                    <div className="cont">Hello world</div>
                                    <h5>Alex John</h5>
                                </div>
                            </SwiperSlide>

                        </Swiper>



                        <div className="d-flex col-md-12">
                            
                            <div className="col counter">
                                <div className="counter__img">
                                    <img src="#" alt="image" />
                                </div>
                                <div className="counter__cont">
                                    <h5>290+</h5>
                                    <span>Github stars</span>
                                </div>
                            </div>


                            <div className="col counter">
                                <div className="counter__img">
                                    <img src="#" alt="image" />
                                </div>
                                <div className="counter__cont">
                                    <h5>10M+</h5>
                                    <span>NPMs Downloads</span>
                                </div>
                            </div>

                            
                            <div className="col counter">
                                <div className="counter__img">
                                    <img src="#" alt="image" />
                                </div>
                                <div className="counter__cont">
                                    <h5>38K</h5>
                                    <span>Twitter Followers</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>  
            </section>

        </>
        )
}

export default HomePage