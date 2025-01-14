"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { videoContainersrc } from "@/data/videocontainer";

export default function VideoContainer() {
  return (
    <div className="container position-relative">
      <div className="row">
        {/* Team Carousel */}
        <div className="col-md-6 relative">
          <div>
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
              modules={[Navigation]}
              navigation={{
                prevEl: ".snbp1",
                nextEl: ".snbn1",
              }}
              watchSlidesProgress
              resizeObserver
              className="team-carousel owl-carousel owl-theme overflow-hidden position-static"
              style={{
                opacity: 1,
                display: "block",
              }}
            >
              {/* Team item */}
              {videoContainersrc.map((member, index) => (
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
                            alt="Mensagem do Dr. Thomas Benson"
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
                          <div className="small team-item-role">{member.descr}</div>
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
              {/* End Team item */}
            </Swiper>
          </div>
        </div>
        {/* End Team Carousel */}
        {/* Quote */}
        <div className="col-md-6 mb-sm-60 mb-xs-40 d-flex align-items-center">
          <blockquote className="testimonial mb-0 wow fadeInUp">
            <p>
              Uma mensagem especial para você!
            </p>
            <footer>
              <div className="section-line mb-10" />
              <span className="small">Confira esses dois vídeos.</span>
            </footer>
          </blockquote>
        </div>
        {/* End Quote */}
      </div>
    </div>
  );
}
