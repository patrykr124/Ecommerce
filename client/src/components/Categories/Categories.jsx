import React from "react";
import MaxWithWrapper from "../MaxWithWrapper";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  parentVariants,
  variants1,
  variants3,
  variants4,
} from "../../utils/variants";
import { useFetch } from "../../Hooks/usefetch";
import { WobbleCard } from "../ui/wobble-card";

function Categories() {
  const { products, loading, error } = useFetch("/categories?populate=*&");

  const menCategory = products.find((category) => category.id === 1);
  const womanCategory = products.find((category) => category.id === 2);
  const elegantCategory = products.find((category) => category.id === 4);

  return (
    <MaxWithWrapper>
      <motion.div
        variants={parentVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="categories py-20 flex gap-4 "
      >
        <div className="grid  gap-4  mx-auto w-full">
          {womanCategory && (
            <WobbleCard
              CatUrl={womanCategory.id}
              containerClassName="col-span-1 lg:col-span-2 h-full min-h-[500px] lg:min-h-[400px]"
              backgroundImage={`${process.env.VITE_APP_API_UPLOAD}${menCategory.attributes.img.data.attributes.url}`}
            >
              <div className="max-w-xs">
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Women
                </h2>
                <p className="mt-4 text-left  text-base/6 text-neutral-200">
                  Discover our collection of women's clothing that blends style, comfort, and quality to elevate your everyday wardrobe."
                </p>
              </div>
            </WobbleCard>
          )}
          {menCategory && (
            <WobbleCard
              CatUrl={womanCategory.id}
              containerClassName="col-span-1 min-h-[400px]"
              backgroundImage={`${process.env.VITE_APP_API_UPLOAD}${womanCategory.attributes.img.data.attributes.url}`}
            >
              <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Men
              </h2>
              <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                Explore our men's clothing selection, featuring quality, style, and comfort for every occasion and season.
              </p>
            </WobbleCard>
          )}

          {elegantCategory && (
            <WobbleCard
              CatUrl={elegantCategory.id}
              containerClassName="col-span-1 lg:col-span-3 min-h-[400px] lg:min-h-[600px] xl:min-h-[400px]"
              backgroundImage={`${process.env.VITE_APP_API_UPLOAD}${elegantCategory.attributes.img.data.attributes.url}`}
            >
              <div className="max-w-sm">
                <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Suits and more
                </h2>
                <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                  Discover our refined collection of suits, tailored to offer elegance, comfort, and a perfect fit for every formal occasion.
                </p>
              </div>
            
            </WobbleCard>
          )}
        </div>
      </motion.div>
    </MaxWithWrapper>
  );
}

export default Categories;
