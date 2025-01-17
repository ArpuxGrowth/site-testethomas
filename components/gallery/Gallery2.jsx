"use client";
import { pressItems } from "@/data/pressgallery";
import { Gallery, Item } from "react-photoswipe-gallery";
import Image from "next/image";
export default function Gallery2({
  itemsLength = 12,
  parantClass = "col-md-3",
}) {
  return (
    <div className="container relative">
      {/* Photo Grid */}
      <Gallery>
        <div className="row mt-n30">
          {/* Photo Item */}

            {pressItems.slice(0, itemsLength).map((elm, i) => (
              <div key={i} className={parantClass}>
                <Item
                  original={elm.src}
                  thumbnail={elm.src}
                  width={1350}
                  height={865}
                >
                  {({ ref, open }) => (
                    <div
                      className="post-prev-img rounded-0 mt-30 wow fadeScaleIn"
                      data-wow-duration="1s"
                    >
                      <a 
                        href={`/imprensa/${elm.id}`}
                        className="lightbox-gallery-2 mfp-image">
                        <Image
                          ref={ref}
                          src={elm.src}
                          width={719}
                          height={461}
                          alt={elm.alt}
                        />
                      </a>
                        <div className="work-intro text-start">
                          <h3 className="work-title">{elm.title}</h3>
                        </div>
                    </div>
                  )}
                </Item>
              </div>
            ))}
            
          {/* End Photo Item */}
        </div>
      </Gallery>
      {/* End Photo Grid */}
    </div>
  );
}
