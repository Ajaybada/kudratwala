import React from 'react';
import './blogs.css'
import Blog1 from '/blog/blog1.jpg'
import Blog2 from '/blog/blog2.jpg'
import Blog3 from '/blog/blog3.webp'

const Blogs = () => {
  return (
    <div>
      <div className="blog-title">
      
      </div>
      <div className="Blogs">
        <div className="blog">
          <div className="blog-img">
            <a href="/BlogData">
              <img src={Blog1} alt="Blog 1" />
            </a>
          </div>
          <div className="blog-content">
           
            <h5>
              <a href="/BlogData">
                Why we should be Thankful of every Single Tree?
              </a>
            </h5>
         
            <br />
            <a href="/BlogData">
             
            <button className="card-btn">Read more &rarr;</button>
            </a>
          </div>
        </div>

        <div className="blog">
          <div className="blog-img">
            <a href="/data">
              <img src={Blog2} alt="Blog 2" />
            </a>
          </div>
          <div className="blog-content">
           
            <h5>
              <a href="/BlogData">
                Here are Best Plant Gifts for upcoming Festive Season!
              </a>
            </h5>
        
            <br />
            <a href="/BlogData">
              <button className="card-btn">Read more &rarr;</button>
            </a>
          </div>
        </div>

        <div className="blog">
          <div className="blog-img">
            <a href="/BlogData">
              <img src={Blog3} alt="Blog 3" />
            </a>
          </div>
          <div className="blog-content">
           
            <h5>
              <a href="/BlogData">
                Go eco-friendly this Ganesh Utsav  celebrate!
              </a>
            </h5>
          
            <br />
            <br />
            <a href="/BlogData">
            <button className="card-btn">Read more &rarr;</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
