import Footer1 from "@/components/footers/Footer1";

import dynamic from "next/dynamic";

const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);

import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";

import { categories } from "@/data/categories";
import { tags } from "@/data/tags";
import { archiveLinks } from "@/data/archeve";
import Slider1 from "@/components/blog/sliders/Slider1";
import Comments from "@/components/blog/Comments";
import Form9 from "@/components/blog/commentForm/Form9";
import { mainDemoOnepage, menuItems } from "@/data/menu";
import { allBlogs } from "@/data/blogs";
import Header1 from "@/components/headers/Header1";
import SliderBlog1 from "@/components/blog/sliders/SliderBlog1";
import Image from "next/image";
export const metadata = {
  title:
    "Artigo || Dr. Thomas Benson",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function MainBlogSinglePageFullWidth({ params }) {
  const blog = allBlogs.filter((elm) => elm.id == params.id)[0] || allBlogs[0];
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <Header1 links={mainDemoOnepage} />
          </nav>
          <main id="main">
            <section className="page-section pt-0 pb-0" id="home">
              <ParallaxContainer
                className="page-section bg-gray-light-1 bg-light-alpha-90 parallax-5"
                style={{
                  backgroundImage:
                    `url(${blog.bannerPort})`,
                }}
              >
                <div className="container position-relative pt-30 pt-sm-50">
                  {/* Section Content */}
                  <div className="text-center">
                    <div className="row">
                      {/* Page Title */}
                      <div className="col-md-8 offset-md-2">
                        <h1 className="hs-title-1 mb-20">
                          <span
                            className="wow charsAnimIn"
                            data-splitting="chars"
                          >
                            <AnimatedText text={blog.title || blog.postTitle} />
                          </span>
                        </h1>

                        {/* <!-- Author, Categories, Comments --> */}
                        <div
                          className="blog-item-data mt-30 mt-sm-10 mb-0 wow fadeInUp"
                          data-wow-delay="0.2s"
                        >
                          <div className="d-inline-block me-3">
                            <a href="#">
                              <i className="mi-clock size-16"></i>
                              <span className="visually-hidden">
                                Data:
                              </span>{" "}
                              {blog.date}
                            </a>
                          </div>
                          <div className="d-inline-block me-3">
                            <a href="/about-2">
                              <i className="mi-user size-16"></i>
                              <span className="visually-hidden">
                                Autor:
                              </span>{" "}
                              {blog.authorName}
                            </a>
                          </div>
                          <div className="d-inline-block me-3">
                            <i className="mi-folder size-16"></i>
                            <span className="visually-hidden">Categorias:</span>
                            <a href="#"> {blog.theme}</a>
                          </div>
                          {/* <div className="d-inline-block me-3">
                            <a href="#">
                              <i className="mi-message size-16"></i> 5 Comments
                            </a>
                          </div> */}
                        </div>
                        {/* <!-- End Author, Categories, Comments --> */}
                      </div>
                      {/* End Page Title */}
                    </div>
                  </div>
                  {/* End Section Content */}
                </div>
              </ParallaxContainer>
            </section>
            <>
              {/* Section */}
              <section className="page-section">
                <div className="container relative">
                  <div className="row">
                    {/* Content */}
                    <div className="col-lg-8 offset-lg-2">
                      {/* Post */}
                      <div className="blog-item mb-80 mb-xs-40">
                        <div className="blog-item-body">
                          {/* Media Gallery */}
                          <div className="blog-media mb-40 mb-xs-30">
                            {/* Para utilizar slider: <SliderBlog1 /> */}
                            <div className="owl-item">
                              <Image
                                src={blog.bannerPort}
                                width={1350}
                                height={865}
                                alt="Image Description"
                              />
                            </div>
                          </div>
                      {/* Conteúdo */}
                          {<div
                            dangerouslySetInnerHTML={{ __html: blog.content }} // Linha alterada
                          />}
                        </div>
                      </div>
                      {/* End Conteúdo */}
                      {/* End Post */}
                      {/* Comments */}
                      {/* <div className="mb-80 mb-xs-40">
                        <h4 className="blog-page-title">
                          Comments <small className="number">(3)</small>
                        </h4>
                        <ul className="media-list comment-list clearlist">
                          <Comments />
                        </ul>
                      </div>
                      End Comments
                      Add Comment
                      <div className="mb-80 mb-xs-40">
                        <h4 className="blog-page-title">Leave a comment</h4>
                        Form
                        <Form9 />
                         End Form
                      </div> */}
                      {/* End Add Comment */}
                      {/* Prev/Next Post */}
                      <div className="clearfix mt-40">
                        <a href={`/main-blog-single-fullwidth/${blog.id - 1}`} className="blog-item-more left">
                          <i className="mi-chevron-left" />
                          &nbsp;Prev post
                        </a>
                        <a href={`/main-blog-single-fullwidth/${blog.id + 1}`} className="blog-item-more right">
                          Next post&nbsp;
                          <i className="mi-chevron-right" />
                        </a>
                      </div>
                      {/* End Prev/Next Post */}
                    </div>
                    {/* End Content */}
                  </div>
                </div>
              </section>
              {/* End Section */}
            </>
          </main>
          <Footer1 />
        </div>{" "}
      </div>
    </>
  );
}
