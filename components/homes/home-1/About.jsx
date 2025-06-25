"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations('compAbout');
  return (
    <div className="row wow fadeInUp" data-wow-delay="0.5s">
      <div className="col-lg-6 mb-md-60">
        <div className="position-relative">
          {/* Image */}
          <div className="position-relative align-center overflow-hidden">
            <Image
              width={400}
              height={600}
              src="/assets/images/team/drthomas-s.jpg"
              className="image-fullwidth relative p-3"
              alt="Dr. Thomas Benson no escritório"
            />
            <Image
              width={400}
              height={600}
              src="/assets/images/team/drthomas-2.jpg"
              className="image-fullwidth relative p-3"
              alt="Dr. Thomas Benson sorridente"
            />
          </div>
          {/* End Image */}
        </div>
      </div>
      <div className="col-lg-6 align-items-center col-xl-5 offset-xl-1">
      <div dangerouslySetInnerHTML={{__html: t.raw('p')}} />
      </div>
    </div>
  );
}
