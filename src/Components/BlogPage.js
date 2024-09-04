import React from "react";
import "./BlogPage.css";
import img1 from "../image/blog1.webp"
import img2 from "../image/blog2.webp"
import img4 from "../image/Gallery1.webp"
import img5 from "../image/Gallery2.webp"
import img6 from "../image/Gallery3.webp"

const BlogPage = () => {
  return (
    <div className="blog-container">

      {/* Hero Section */}
      <section className="hero-section rounded">
        <h2 className="mb-4">Welcome to the Medical Gas Pipeline Blog</h2>
        <p>
        This blog is designed for professionals in the medical pipeline manufacturing industry, offering detailed insights and updates on pipeline systems. We cover everything from manufacturing best practices and the latest technological innovations to industry standards and regulatory updates.
        </p>
      </section>

      {/* Introduction Section */}
      <section id="about" className="introduction">
        <h2 className="fw-bolder">About Our Blog</h2>
        <p>
        Dedicated to professionals in the medical pipeline manufacturing industry, our blog provides comprehensive insights into pipeline systems. We explore best practices in manufacturing, cutting-edge technological advancements, and important regulatory updates. Stay informed and ahead with our expert analysis and industry news.
        </p>
      </section>

      {/* Featured Articles Section */}
      <section id="articles" className="featured-articles">
        <h2 className="fw-bolder">Featured Articles</h2>
        <div className="articles-grid">
            <article className="featured-article">
              <img
                src={img1}
                alt={`Article`}
                className="featured-imagee"
              />
              <div className="article-content">
                <h3>Understanding Medical Gas Systems</h3>
                <p>
                  Explore the complexities of medical gas systems and their role in patient care.
                </p>
              </div>
            </article>
            <article className="featured-article">
              <img
                src={img2}
                alt={`Article`}
                className="featured-imagee"
              />
              <div className="article-content">
                <h3>Understanding Medical Gas Systems</h3>
                <p>
                  Explore the complexities of medical gas systems and their role in patient care.
                </p>
              </div>
            </article>
            <article className="featured-article">
              <img
                src={`https://www.ny-engineers.com/hs-fs/hubfs/medical%20gas%20piping.jpg?width=2939&name=medical%20gas%20piping.jpg`}
                alt={`Article`}
                className="featured-imagee"
              />
              <div className="article-content">
                <h3>Understanding Medical Gas Systems</h3>
                <p>
                  Explore the complexities of medical gas systems and their role in patient care.
                </p>
              </div>
            </article>
           
            
          
        </div>
      </section>

      {/* Image Gallery Section */}
      <section id="gallery" className="image-gallery">
        <h2 className="fw-bolder">Image Gallery</h2>
        <div className="gallery-grid">
            <div className="gallery-item">
              <img
                src={img4}
                alt={`Gallery Image`}
                className="gallery-image"
              />
            </div>
            <div className="gallery-item">
              <img
                src={img5}
                alt={`Gallery Image`}
                className="gallery-image"
              />
            </div>
            <div className="gallery-item">
              <img
                src={img6}
                alt={`Gallery Image`}
                className="gallery-image"
              />
            </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="videos" className="blog-videos">
        <h2>Educational Videos</h2>
        <div className="video-grid">
            <div className="video-wrapper">
                {/* Use iframe directly for YouTube videos */}
                <iframe
                width="928"
                height="522"
                src="https://www.youtube.com/embed/ReEp0HH91ZU"
                title={`Educational Video`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                ></iframe>
                <p className="video-description">
                Video on Medical Gas System
                </p>
            </div>
            <div className="video-wrapper">
                {/* Use iframe directly for YouTube videos */}
                <iframe
                width="928"
                height="522"
                src="https://www.youtube.com/embed/ReEp0HH91ZU"
                title={`Educational Video`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                ></iframe>
                <p className="video-description">
                Video on Medical Gas System
                </p>
            </div>
            <div className="video-wrapper">
                {/* Use iframe directly for YouTube videos */}
                <iframe
                width="928"
                height="522"
                src="https://www.youtube.com/embed/ReEp0HH91ZU"
                title={`Educational Video`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                ></iframe>
                <p className="video-description">
                Video on Medical Gas System
                </p>
            </div>
        </div>
        </section>

      {/* Contact Form */}
      <section id="contact" className="contact-form">
        <h2  className="fw-bold">Contact Us</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default BlogPage;
