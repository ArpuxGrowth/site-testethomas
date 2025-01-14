"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useState } from "react";
import {  videoTestimonials } from "@/data/videotestimonials";
import Image from "next/image";

export default function VideoTestimonials2() {
  const [isHovered, setIsHovered] = useState(false); // Animação do Carrosel
  
  return (
    <div className="container position-relative">
      <div className="row">
        {/* Quote */}
        <div className="col-md-6 mb-sm-60 mb-xs-40 d-flex align-items-center">
          <blockquote className="testimonial mb-0 wow fadeInUp">
           
            <p>
              Depoimentos de pacientes.
            </p>
            <footer>
              <div className="section-line mb-10" />
              
              <div className="small">Confira alguns feedbacks de nossas queridas pacientes<br />
              sobre pré e pós cirúrgico.</div>
            </footer>
          </blockquote>
        </div>
        {/* End Quote */}
        {/* Team Carousel */}
        <div className="col-md-6 relative">
          <div
            onMouseEnter={() => setIsHovered(true)} // Animação do Carrosel
            onMouseLeave={() => setIsHovered(false)} // Animação do Carrosel
          >
            <Swiper
              spaceBetween={0}
              slidesPerView={2}
              breakpoints={{
                500: {
                  slidesPerView: 2, // When window width is <= 480px
                },
                0: {
                  slidesPerView: 1,
                },
              }}
              modules={[Navigation, Autoplay]}
              navigation={{
                prevEl: ".snbp1",
                nextEl: ".snbn1",
              }}
              autoplay={{
                delay: 0, // Sem pausa entre animações
                disableOnInteraction: false,
                pauseOnMouseEnter: true, // Parar ao interagir com as setas ou o carrossel
              }}
              speed={3000} // Velocidade de transição (em ms)
              loop={true} // Permitir rotação contínua
              watchSlidesProgress
              resizeObserver
              className="team-carousel owl-carousel owl-theme overflow-hidden position-static"
              style={{
                opacity: 1,
                display: "block",
              }}
            >
              {/* Video Testimonials item */}
              { videoTestimonials.map((member, index) => (
                <SwiperSlide className="owl-item" key={index}>
                  <div className="team-carousel-item">
                    <div className="team-item">
                      <div className="team-item-image">
                      <a href={member.videoUrl} target="_blank" rel="noopener noreferrer">
                          <Image
                            width={600}
                            height={800}
                            src={member.image}
                            className="wow scaleOutIn"
                            alt="Image Description"
                          />
                        </a>
                        <div className="team-item-detail">
                          <div className="team-social-links">
                            {member.socials.map((social, socialIndex) => (
                              <a
                                href={social.url}
                                target="_blank"
                                rel="noopener nofollow"
                                key={socialIndex}
                              >
                                <div className="visually-hidden">
                                  {social.platform}
                                </div>
                                <i className={social.icon} />
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="team-item-descr">
                        <div className="team-item-name">{member.name}</div>
                        <a href={member.videoUrl} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                          <div className="team-item-role">{member.descr}</div>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="owl-controls clickable">
                <div className="owl-pagination">
                  <div className="owl-page">
                    <span className=""></span>
                  </div>
                  <div className="owl-page active">
                    <span className=""></span>
                  </div>
                </div>
                <div className="owl-buttons">
                  <div
                    className="owl-prev snbp1 owl-prev-testimonial-1"
                    role="button"
                    tabIndex="0"
                  >
                    <span className="visually-hidden">Previous Slide</span>
                    <i className="mi-arrow-left" aria-hidden="true"></i>
                  </div>
                  <div className="owl-next snbn1" role="button" tabIndex="0">
                    <span className="visually-hidden">Next Slide</span>
                    <i className="mi-arrow-right" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
              {/* End Video Testimonials item */}
            </Swiper>
          </div>
        </div>
        {/* End Team Carousel */}
      </div>
    </div>
  );
}
