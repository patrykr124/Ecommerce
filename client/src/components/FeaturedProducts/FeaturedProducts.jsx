import Card from "../Card/Card";
import MaxWithWrapper from "../MaxWithWrapper";
import { motion } from "framer-motion";
import {
  textSplit,
  textSplitChildren,
  variantsLoading,
} from "../../utils/variants";
import { useFetch } from "../../Hooks/usefetch";

function FeaturedProducts({ type }) {
  const { products, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts py-24 ">
      <MaxWithWrapper className="flex flex-col gap-24">
        <motion.div
          variants={textSplit}
          whileInView="visible"
          initial="hidden"
          className="top overflow-y-hidden  flex items-center justify-between"
        >
          <motion.div
            variants={textSplitChildren}
            className=" flex flex-[2] items-center"
          >
            <h2 className="split capitalize">{type} products</h2>
          </motion.div>
          <motion.p variants={textSplitChildren} className="flex-[3] flex">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            nisi! Corporis assumenda autem ab officiis saepe animi aperiam
            incidunt ex.
          </motion.p>
        </motion.div>
        <motion.div
          variants={variantsLoading}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bottom flex items-center justify-center gap-4"
        >
          {error
            ? "something wrong"
            : loading
            ? "loading"
            : products.map((item) => <Card key={item.id} item={item} />)}
        </motion.div>
      </MaxWithWrapper>
    </div>
  );
}

export default FeaturedProducts;
