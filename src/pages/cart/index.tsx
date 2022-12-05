import { useRouter } from "next/router";
import { CartItem } from "../../components";
import { useAppSelector, useAppDispatch } from "../../store/hooks";

const CartPage = () => {
  const router = useRouter();
  const dispath = useAppDispatch();
  const { cartItems, totalPrice, totalCartItems } = useAppSelector(
    (state) => state.cart
  );

  return (
    <>
      <h2 className="px-4 my-2 text-xl font-thin tracking-wide md:px-0">
        Your Cart ({totalCartItems})
      </h2>
      <div className="grid gap-3 p-4 bg-gray-50 md:grid-cols-2 md:px-0">
        <ul className="flex flex-col gap-y-3">
          {[1, 2].map((item, i) => (
            <CartItem key={i} />
          ))}
        </ul>

        <div className="p-4 bg-white border-2 border-white rounded-md shadow-md h-fit">
          <div className="p-4 text-lg ">
            <div className="flex justify-between mb-3">
              <h2 className="">Subtotal</h2>
              <h2 className="text-green-500">$ {totalPrice}</h2>
            </div>

            <div className="flex justify-between">
              <h2 className="">Service Fee</h2>
              <h2 className="text-green-500">$ 0</h2>
            </div>
            <hr className="mt-3" />
          </div>
          <div className="flex justify-between px-4 mb-3 text-xl text-black">
            <h1 className=""> Total :</h1>
            <h1 className="">$ 0</h1>
          </div>
          <button
            className="mt-3 btn-primary"
            onClick={() => router.push("/checkout")}
          >
            Check Out
          </button>
        </div>
      </div>
    </>
  );
};

export default CartPage;
