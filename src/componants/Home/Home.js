import React from 'react'
import Header from './Header';
import "./Home.css";
import prideimg from "../../assets/8.jpeg";
import inegrat from "../../assets/2.png";
import data from '../data';
import {Carousel}from "react-bootstrap"
import item from "../../assets/per2.jpg";
import item2 from "../../assets/per3.jpg";

const Home = () => {
    const blogItems =data.map((item)=>{
        return(
            <div className='col-md-4'>
                <div className='box'>
                <img src={item.img} alt='' />
                <h5>{item.title}</h5>
               <span> {item.time}</span>
                <h6>{item.price}</h6>
                <button><a href="#" >Order Now</a></button>
            </div>
            </div>
        )
    })
  return (
    <>
    <Header/>
    <section className='nombers'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-3'>
                    <h2>12687+</h2>
                    <h6>SAVINGS</h6>
                </div>
                <div className='col-md-3'>
                    <h2>56797+</h2>
                    <h6>PHOTOS</h6>
                </div>
                <div className='col-md-3'>
                    <h2>98786+</h2>
                    <h6>ROCKETS</h6>
                </div>
                <div className='col-md-3'>
                    <h2>90847+</h2>
                    <h6>SAVINGS</h6>
                </div>
            </div>

        </div>
    </section>
    <section className='pride'>
        <div className='container'>
            <div className='row'>
            <div className='col-md-6'>
                <img src={prideimg} alt='prideimge'/>
                    
                    </div>
                <div className='col-md-6'>
                  <h2>We pride ourselves on making real food 
                    from the best ingredients.</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo.
                     Mauris feugiat erat tellus.</p>
                  <button><a href='#'> learn more</a></button>
                </div>
                
            </div>
        </div>
    </section>
    <section className="ingrediants">
    <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
                <h2>We make everything by hand with the best possible ingredients.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <ul>
                    <li>Etiam sed dolor ac diam volutpat.</li>
                    <li>Erat volutpat aliquet imperdiet.</li>
                    <li>purus a odio finibus bibendum.</li>
                    <button>
                        <a href='#'> learn mor</a>
                    </button>
                </ul>

            </div>
            <div className='col-md-6'>
                <img src={inegrat} alt="inegrat imge"/>
            </div>
        </div>
    </div>
    </section>
    <section className='paralex'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 lg-12'>
                    <h2>When a man's stomach is full it makes no<br/>
                     difference whether he is rich or poor.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio<br/>
                      finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                    <a href='#'>Watch Our Story</a>
                </div>
            </div>
        </div>
    </section>
    <section className='blogs'>
      <div className='container'>
        <div className='row'>
            <div className='col-md-12 lg-12'>
                <h2>Explore Our Foods</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo.<br/> Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and <br/>Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
            </div>
        </div>
        <div className='row'>
           {blogItems}
        </div>
      </div>
    </section>
    <section className='slider'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 lg-12'>
                    <h1> Testimonials</h1>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12 lg-12'>

                <Carousel className='carosul'>
      <Carousel.Item>
       <img src={item}/>
        <Carousel.Caption className='caro'>
          <span>First slide label</span>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={item2}/>

        <Carousel.Caption className='caro'>
          <span>Second slide label</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    
    </Carousel>
                </div>
            </div>
        </div>
    
    </section>
    <section className="asked">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-lg-12">
                    <h1>Frequently Asked Questions</h1>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-6">
                    <h3>~ Is Foodera Bread really baked fresh each day?</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia<br/> and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language</p>
                </div>
                <div className='col-md-6'>
                <h3>~ Do you bake breads containing animal fats or products?</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia<br/> and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                </div>
                <div className='col-md-6'>
                <h3>~ Can I order your products online?</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia<br/> and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                </div>
                <div className='col-md-6'>
                <h3>~ When are you opening a shop near me?</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia<br/> and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                </div>
            </div>
        </div>

    </section>
    <section className='bakers'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 lg-6'>
                    <h5> Baked fresh daily by bakers with passion.</h5>
                </div>
            </div>
        </div>
        <button><a href='#'>learn more</a></button>
    </section>
    <section className='register'>
    <div className='container'>
        <div className='row'>
            <div className='col-md-12 lg-12'>
                <h1>Hurry up! Subscribe our newsletter<br/>and get 25% Off</h1>
            </div>
            <div className='col-md-12 lg-12'>
                <p>Limited time offer for this month. No credit card required</p>
            </div>
            <div className='col-md-6 lg-6'>
                <input type="email" placeholder='Email'/>
            </div>
            <div className='col-md-6 lg-6'>
                <button> <a href='#'>Subscribe</a></button>
            </div>
        </div>
    </div>
    </section>
    
    </>
   
  )
}

export default Home