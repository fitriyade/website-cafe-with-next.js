import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useState } from "react";
import { productList } from "@/helpers/product-list";
import { FaCheckCircle } from "react-icons/fa";

//Point Of Sales (POS)
const POS = () => {
  const [cart, setCart] = useState<
    { id: number; title: string; price: string; qty: number }[]
  >([]);
  const [paymentMethod, setPaymentMethod] = useState("payment methodnya");
  const [success, setSuccess] = useState(false); // animasi sukses

  const addToCart = (item: (typeof productList)[0]) => {
    setCart((prev) => {
      const exist = prev.find((i) => i.id === item.id);
      if (exist) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i,
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const total = cart.reduce((sum, i) => {
    const priceNumber = Number(i.price.replace(/\D/g, ""));
    return sum + priceNumber * i.qty;
  }, 0);

  const checkout = () => {
    if (cart.length === 0) return;
    //  animasi sukses
    setSuccess(true);
    // reset cart setelah beberapa detik
    setTimeout(() => {
      setSuccess(false);
      setCart([]);
    }, 3000);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen pt-25 p-6 bg-gradient-to-br from-purple-500/80 to-pink-400/50">
        <h1 className="text-3xl font-semibold text-black/75 text-center mb-10">
          Please Select Your Items
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Menu */}
          <div className="md:col-span-2 max-h-[80vh] overflow-y-auto space-y-4">
            {productList.map((item) => (
              <div
                key={item.id}
                className="p-4 backdrop-blur-sm bg-white/70 rounded-lg shadow hover:bg-yellow-200 transition flex"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded-lg mr-4"
                />
                <div className="flex-1">
                  <h2 className="font-semibold text-black/80 text-lg">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                  <p className="font-semibold text-black/80 mt-2">
                    {item.price}
                  </p>
                </div>
                <button
                  className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-green-600 h-10 self-center cursor-pointer"
                  onClick={(e) => {
                    addToCart(item);
                  }}
                >
                  + Add
                </button>
              </div>
            ))}
          </div>

          {/* Cart */}
          <div className="backdrop-blur-sm bg-white/70 p-4 rounded-lg shadow max-h-[80vh] overflow-y-auto flex flex-col">
            <h2 className="text-xl font-semibold mb-4">Cart</h2>
            {cart.length === 0 ? (
              <p className="text-gray-500">No items yet</p>
            ) : (
              <>
                <div className="space-y-2 flex-1 overflow-y-auto">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center"
                    >
                      <div>
                        {item.title} x{item.qty}
                      </div>
                      <div className="flex items-center gap-2">
                        <span>
                          Rp{" "}
                          {(
                            Number(item.price.replace(/\D/g, "")) * item.qty
                          ).toLocaleString()}
                        </span>
                        <button
                          className="text-red-500 font-bold"
                          onClick={() => removeFromCart(item.id)}
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t mt-2 pt-2 font-semibold flex justify-between">
                  <span>Total:</span>
                  <span>Rp {total.toLocaleString()}</span>
                </div>

                {/* Payment Method */}
                <div className="mt-4">
                  <label className="block font-semibold mb-2">
                    Payment Method
                  </label>
                  <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-full border border-gray-300 rounded p-2"
                  >
                    <option value="Dana">Dana</option>
                    <option value="Shopee Pay">Shopee Pay</option>
                    <option value="BCA">BCA</option>
                    <option value="BRI">BRI</option>
                    <option value="BNI">BNI</option>
                  </select>
                </div>

                {/* Checkout */}
                <button
                  onClick={checkout}
                  className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 relative"
                >
                  Checkout
                </button>

                {/* Animasi sukses */}
                {success && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 rounded-lg animate-fadeIn">
                    <FaCheckCircle className="text-green-500 text-5xl mb-2 animate-bounce" />
                    <p className="text-green-600 font-bold text-lg">
                      Payment Successful!
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default POS;
