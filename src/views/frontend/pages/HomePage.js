import React, { useEffect } from 'react'
 
// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
 
import ScrollAnimation from 'react-animate-on-scroll';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import ASSETS from '../../../assets/images/hero.jpg'

const HomePage = () => {
    return (
        <> 

            <section className="hero-area">

                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="hero__caption px-4">
                            <ScrollAnimation  animateIn='bounceIn' animateOut='bounceOut' initiallyVisible={true}>
                                <h1>
                                    The Intuitive <br/>
                                    Web Framework
                                </h1>
                            </ScrollAnimation>
                            <ScrollAnimation  animateIn='fadeIn' animateOut='fadeOut' delay={500} initiallyVisible={true}>
                                <div className="cont lead">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </div>
                            </ScrollAnimation>
                            </div>
                            <ScrollAnimation  animateIn='fadeIn' animateOut='fadeOut' delay={1000} initiallyVisible={true}>
                            <div className="hero__actions">
                                <button className="btn btn-success me-4">Get Started</button>
                                <button className="btn btn-white">Discover More</button>   
                            </div>
                            </ScrollAnimation>
                        </div>

                        
                        <div className="hero__video col-md-8 offset-md-2">
                            <ScrollAnimation  animateIn='bounceIn' animateOut='bounceOut' initiallyVisible={true}>
                            <div className="hero__video__img">
                                <img src={ASSETS} alt="image" />
                            </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </section>


            <section className="companies-area bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="header col-md-12 text-center">
                            <ScrollAnimation  animateIn='fadeIn'>
                            <h4>Companies Trusting in us</h4>
                            </ScrollAnimation>
                        </div>
                        <div className="col-md-12 d-flex">
                       
                            <div className="col companies__logo">
                                <ScrollAnimation  animateIn='flipInY' animateOut='flipOutY'>
                                    <img src={process.env.PUBLIC_URL + '/images/google.png'} alt="Google" /> 
                                </ScrollAnimation> 
                            </div>
                       
                            <div className="col companies__logo">
                                <ScrollAnimation  animateIn='flipInY' animateOut='flipOutY'>
                                <img src={process.env.PUBLIC_URL + '/images/microsoft.png'}  alt="Microsoft" />
                                </ScrollAnimation> 
                            </div>
                       
                            <div className="col companies__logo">
                            <ScrollAnimation  animateIn='flipInY' animateOut='flipOutY'>
                                <img src={process.env.PUBLIC_URL + '/images/apple.png'}  alt="Apple" />
                                </ScrollAnimation> 
                            </div>
                       
                            <div className="col companies__logo">
                            <ScrollAnimation  animateIn='flipInY' animateOut='flipOutY'>
                                <img src={process.env.PUBLIC_URL + '/images/amazon.png'}  alt="Amazon" />
                                </ScrollAnimation> 
                            </div>
                       
                            <div className="col companies__logo">
                            <ScrollAnimation  animateIn='flipInY' animateOut='flipOutY'>
                                <img src={process.env.PUBLIC_URL + '/images/tesla.png'}  alt="Tesla" />
                                </ScrollAnimation> 
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            
             

            <section className="colset-area">
                <div className="container">
                    <div className="row">
                        
                        <div className="colset__img col-md-7 order1">
                            <ScrollAnimation  animateIn='fadeIn' animateOut='fadeOut'>
                                <img src={process.env.PUBLIC_URL + '/images/colset1.jpg'} alt="image" />
                            </ScrollAnimation>
                        </div>
                        <div className="colset__cont col-md-5 ">
                            <h2>Welcome to my site</h2>
                            <div className="cont">
                            You can offset grid columns in two ways: our responsive .offset- grid classes and our margin utilities. 
                            </div>
                            <ScrollAnimation  animateIn='zoomIn' animateOut='zoomOut'>
                                <a href="#" className="btn btn-success">Go to Discover</a>
                            </ScrollAnimation>
                        </div>



                        <div className="colset__img col-md-7">
                            <ScrollAnimation  animateIn='fadeIn' animateOut='fadeOut'>
                                <img src={process.env.PUBLIC_URL + '/images/colset2.jpg'} alt="image" />
                            </ScrollAnimation>
                        </div>
                        <div className="colset__cont col-md-5 order1">
                            <h2>Find your request</h2>
                            <div className="cont">
                            You can offset grid columns in two ways: our responsive .offset- grid classes and our margin utilities. 
                            </div>
                            <ScrollAnimation  animateIn='zoomIn' animateOut='zoomOut'>
                                <a href="#" className="btn btn-success">Go to Discover</a>
                            </ScrollAnimation>
                        </div>

                    </div>
                </div>
            </section>


            <section className="colset-area bg-gray">
                <div className="container">
                    <div className="row">

                        
                    
                        <div className="col-md-12 header">
                    
                            <ScrollAnimation  animateIn='zoomIn' animateOut='zoomOut'>
                                <span className="icon bg-red">
                                    <img src={process.env.PUBLIC_URL + '/images/icon-flame.png'} alt="image" />
                                </span>
                            </ScrollAnimation>
                            <h2>Colset</h2>
                            <div className="cont">Put your backpack full of usefull</div>
                        </div>
                    

                    
                        <div className="colsetbox col-md-4">
                        <ScrollAnimation  animateIn='bounceIn' animateOut='bounceOut'>
                            <div className="colsetbox__inr">
                                <div className="colsetbox__img">
                                    <img src={process.env.PUBLIC_URL + '/images/colset1.jpg'} alt="image" />
                                </div>
                                <div className="colsetbox__cont">
                                    <span>From the blog</span>
                                    <div className="cont">
                                        50% off your next theme during New Year Season
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                        </div>
 

                        <div className="colsetbox col-md-4">
                            <ScrollAnimation  animateIn='bounceIn' animateOut='bounceOut'>
                                <div className="colsetbox__inr">
                                <div className="colsetbox__img">
                                    <img src={process.env.PUBLIC_URL + '/images/colset2.jpg'} alt="image" />
                                </div>
                                <div className="colsetbox__cont">
                                    <span>From the blog</span>
                                    <div className="cont">
                                        50% off your next theme during New Year Season
                                    </div>
                                </div>
                            </div>
                            </ScrollAnimation>
                        </div>
 

                        <div className="colsetbox col-md-4">
                            <ScrollAnimation  animateIn='bounceIn' animateOut='bounceOut'>
                                <div className="colsetbox__inr">
                                <div className="colsetbox__img">
                                <img src={process.env.PUBLIC_URL + '/images/colset1.jpg'} alt="image" />
                                </div>
                                <div className="colsetbox__cont">
                                    <span>From the blog</span>
                                    <div className="cont">
                                        50% off your next theme during New Year Season
                                    </div>
                                </div>
                            </div>
                            </ScrollAnimation>
                        </div>
 

                    </div>
                </div>
            </section>





{/*             
            <section className="resources-area">
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


            <section className="howtouse-area bg-white">
                <div className="container">
                    <div className="row">
                        <div className="howtouse__cont col-md-6">
                            <h2>How to use Next Framework</h2>
                            <div className="cont">
                                Lorem
                            </div>
                            <a href="#" className="btn btn-primary">Go to guides</a>
                        </div>
                        
                        <div className="howtouse__img col-md-6">
                            <img src="" alt="image" />
                        </div>
                    </div>
                </div>
            </section>





            <section className="cta-area bg-white">
                <div className="container">
                    <div className="row">
                        <div className="cta__cont col-md-5">
                            <h2>Ready to give it a go?</h2>
                            <div className="cont">
                                Lorem
                            </div>
                            <a href="#" className="btn btn-primary">Lean more</a>
                        </div>
                        
                        <div className="howtouse__img col-md-7">
                            <img src="" alt="image" />
                        </div>
                    </div>
                </div>
            </section> */}

        </>
        )
}

export default HomePage