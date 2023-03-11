import React from 'react'
import "./footer.css";
import face from ".././assets/facbook.png";
import tele from ".././assets/Telegram.png";
import twee from ".././assets/tweet.png";
import yout from ".././assets/youtube.png";


const Footer = () => {
  return (
    <section className='footer'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 lg-12'>
                <div className='links'>
                <a href='#'> register</a>
                <a href='#'> forum</a>
                <a href='#'> affiliate</a>
                <a href='#'> FAQ</a>
                </div>
                </div>
                <div className='social'>
                    <a href='#'><img src={face}/></a>
                    <a href='#'><img src={tele}/></a>
                    <a href='#' ><img src={twee}/></a>
                    <a href='#'><img src={yout}/></a>
                    <div/>
                   <div className='col-md-12 lg-12'>
                    <p> © 2021. Foodera. All rights reserved.</p>
                   </div>
                    
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Footer