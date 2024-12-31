import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { FaMinus, FaPlus, FaRegWindowClose } from "react-icons/fa";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { getCartCount, products, cartItem, currency, updateQuantity, navigate } =
    useContext(ShopContext);
  const [CartData, setCartData] = useState([]);
  const [quanitities, setQuantities] = useState({});

  useEffect(() => {
    const tempData = [];
    const initialQuantities = {};
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        if (cartItem[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItem[items][item],
          });
          initialQuantities[`${items}-${item}`] = cartItem[items][item];
        }
      }
    }
    setCartData(tempData);
    setQuantities(initialQuantities);
  }, [cartItem]);

  const increment = (id, size) => {
    const key = `${id}-${size}`;
    const newValue = quanitities[key] + 1;
    setQuantities((prev) => ({...prev, [key]: newValue}));
    updateQuantity(id, size, newValue);
  }

  const decrement = (id, size) => {
    const key = `${id}-${size}`;
    if(quanitities[key] > 1){
      const newValue = quanitities[key] - 1;
      setQuantities((prev) => ({...prev, [key]: newValue}));
      updateQuantity(id, size, newValue);
    } 
  }

  return (
    <section className="">
      <div className="max-padd-container ">
        <div className="max-padd-container py-10 bg-whiterounded-2xl my-6 max-xl:mt-4">
          {/* title */}
          <div className="flex items-baseline gap-x-4">
            <h3 className="h3">
              Cart <span className="text-secondary">List</span>
            </h3>
            <p className="bold-28">{getCartCount()} items</p>
          </div>
          {/* container */}
          <div className="mt-6">
            {CartData.map((item, i) => {
              const productData = products.find(
                (product) => product._id === item._id
              );
              const key = `${item._id}-${item.size}`;
              return (
                <div key={i} className="p-1 rounded-lg">
                  <div className="flex items-center gap-x-3">
                    <div className="flex items-start gap-6">
                      <img
                        src={productData.image[0]}
                        alt="productImage"
                        className="w-16 sm:w-18 rounded"
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <div className="flexBetween">
                        <h5 className="h5 !my-0 line-clamp-1">{productData.name}</h5>
                        <FaRegWindowClose onClick={() => updateQuantity(item._id, item.size, 0)} className="cursor-pointer text-secondary" />
                      </div>
                      <p className="bold-14 my-0.5">{item.size}</p>
                      <div className="flexBetween">
                        <div className="flex items-center ring-1 rin-slate-900/5 rounded-full overflow-hidden bg-primary">
                          <button className="p-1.5 bg-white text-secondary rounded-full shadow-md">
                            <FaMinus onClick={() => decrement(item._id, item.size)} className="text-xs" />
                          </button>
                          <p>{quanitities[key]}</p>
                          <button className="p-1.5 bg-white text-secondary rounded-full shadow-md">
                            <FaPlus onClick={() => increment(item._id, item.size)} className="text-xs" />
                          </button>
                        </div>
                        <h4 className="h4">
                          {currency}
                          {productData.price}
                        </h4>
                      </div>
                    </div>
                    <hr className="mx-auto h-[1px] w-4/5 bg-gray-900/10 mt-2" />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex my-20">
            <div className="w-full sm:w-[450px">
              <CartTotal />
              <button onClick={() => navigate('/place-order')} className="btn-secondary mt-7">Proceed to checkout</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
