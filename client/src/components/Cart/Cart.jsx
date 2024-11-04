import {Minus, Plus, Trash2, X} from "lucide-react";
import {forwardRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {remove, reset,increaseQuantity,decreaseQuantity } from "../../redux/cartReducer";
import {loadStripe} from "@stripe/stripe-js";
import {makeRequest} from "../../makeRequest";

const Cart = forwardRef(({toggleCart, isOpen}, ref) => {
    const products = useSelector((state) => state.cart.products);
    const dispatch = useDispatch();

    const totalPrice = () => {
        let priceProducts = 0;
        products.forEach((item) => {
            priceProducts += item.quantity * item.price;
        });
        return priceProducts.toFixed(2);
    };




    const stripePromise = loadStripe(
        "pk_test_51P1xNFG6QaMKi8sINF748i1zIFWoUmxCSWTqFaLWYqFnpM2ffHdI4FrXE29bEU5e8CAi8O9jvorydtMlmnWRFY3e00vseoxHJ8"
    );

    async function handlePaymant() {
        try {
            const stripe = await stripePromise;
            const res = await makeRequest.post("/orders", {
                products,
            });
            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id,
            });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div
            ref={ref}
            className={`cart   fixed top-0 md:w-[60%] xl:max-w-[30%] xl:w-[30%] xl:min-w-[30%] w-[100%] right-0 h-screen  bg-white flex flex-col gap-12 px-8 py-14 border z-50 transform transition-transform duration-300 ${
                isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
            <div className="top">
                <div className="close flex items-start justify-end cursor-pointer">
                    <X size={30} onClick={toggleCart}/>
                </div>
                <h2 className="text-2xl">Product in your cart</h2>
            </div>
            <div className="middle flex flex-col gap-6 overflow-y-scroll">
                {products.map((item) => (
                    <div
                        key={item.id}
                        className="item flex gap-10 max-w-[350px] justify-between "
                    >
                        <img
                            className="w-24 h-36 object-cover"
                            src={process.env.VITE_APP_API_UPLOAD + item.img}
                            alt="{item.title}"
                        />
                        <div className="details flex-1 flex flex-col gap-1">
                            <h3>{item.title}</h3>
                            <hr></hr>
                            <p>{item.desc}</p>
                            <div className="flex gap-4">
                                <div className="price flex flex-row gap-2">
                                    <span className="priceBtn w-fit">{item.price} PLN</span>
                                </div>
                                <div className="quantity flex gap-2">
                                    <Minus className="cursor-pointer" onClick={() => dispatch(decreaseQuantity(item.id))}
                                           size={19}></Minus>
                                    <span>{item.quantity}</span>
                                    <Plus  className="cursor-pointer" onClick={() => dispatch(increaseQuantity(item.id))} size={19}></Plus>
                                </div>
                            </div>

                        </div>
                        <div className="icon flex items-end cursor-pointer">
                            <Trash2 size={19} onClick={() => dispatch(remove(item.id))}/>
                        </div>
                    </div>
                ))}
            </div>
            <div className="bottom flex flex-col gap-6">
                <div className="total flex gap-2">
                    <span className="text-xl text-black">Total:</span>
                    <span className="text-xl text-black">{totalPrice()} PLN</span>
                </div>

                <button onClick={handlePaymant} className="buttonBlackCheckout">
                    Process to checkout
                </button>
                <button onClick={() => dispatch(reset())} className="buttonWhiteReset">
                    Reset
                </button>
            </div>
        </div>
    );
});

export default Cart;
