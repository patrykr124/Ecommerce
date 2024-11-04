import Card from "../Card/Card";
import {motion} from "framer-motion";
import {useFetch} from "../../Hooks/usefetch";

function List({catId, maxPrice, sort, selectedSubCat}) {
    const {products, loading} = useFetch(
        `/products?populate=*&[filters][categories][id]=${catId}${selectedSubCat.map(
            (item) => `&[filters][sub_categories][id][$eq]=${item}`
        )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
    );

    const variantsLoading = {
        hidden: {clipPath: "inset(100% 0 0 0)"},
        show: {
            clipPath: "inset(0 0 0 0)",
            transition: {
                duration: 1.5,
            },
        },
    };
    return (
        <motion.div
            variants={variantsLoading}
            initial="hidden"
            animate="show"
            className="list flex flex-wrap gap-10 justify-center 2xl:justify-start"
        >
            {loading
                ? "loading..."
                : (products.map((item) => <Card key={item.id} item={item}/>))}
        </motion.div>
    );
}

export default List;
