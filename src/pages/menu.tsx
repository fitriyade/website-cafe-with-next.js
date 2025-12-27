import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProductCard from "@/components/product-card";
import { productList } from "@/helpers/product-list";
import { useState, useEffect } from "react";
import Link from "next/link";

const AllMenu = () => {
  const [productDetails, setProductDetails] = useState<any>({});
  const [productModal, setProductModal] = useState<string>("");
  const [triggerStatus, setTriggerStatus] = useState<number>(0);

  useEffect(() => {
    if (productModal !== "") {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [triggerStatus]);

  const openModal = (product: any) => {
    console.log("CLICKED:", product.title);
    setProductDetails(product);
    setProductModal("open");
    setTriggerStatus((prev) => prev + 1);
  };

  const closeModal = () => {
    setProductModal("");
    setTriggerStatus((prev) => prev + 1);
  };

  return (
    <main className="font-[Poppins] bg-gradient-to-br from-purple-600 to-pink-400 min-h-screen">
      <Navbar />

      {/* CONTENT */}
      <section
        className={`pt-24 pb-10 px-6 md:px-12 text-center transition ${
          productModal ? "blur-sm" : ""
        }`}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Our Complete Menu
        </h1>
        <p className="text-white/80 max-w-3xl mx-auto mb-10">
          Discover all our delicious smoothies and healthy drinks made with
          fresh ingredients and love
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {productList.map((item) => (
            <ProductCard
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
              onClick={() => openModal(item)}
            />
          ))}
        </div>

        <div className="flex justify-center items-center text-center mt-12">
          <Link
            href="/pos"
            className="px-6 py-3 bg-yellow-300 text-black font-semibold rounded-lg shadow hover:bg-yellow-400 transition"
          >
            ORDER NOW
          </Link>
        </div>
      </section>

      <Footer />

      {/* MODAL */}
      {productModal === "open" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* backdrop blur */}
          <div
            onClick={closeModal}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          {/* modal box */}
          <div className="relative bg-[#f2e1f3ff] rounded-xl p-6 max-w-md w-full z-10">
            {/* ISI MODAL */}
            <img
              src={productDetails.image}
              alt={productDetails.title}
              className="w-full h-60 object-cover rounded-lg mb-4"
            />

            <h2 className="text-xl text-black/75 font-semibold mb-2">
              {productDetails.title}
            </h2>

            <p className="text-gray-600 mb-3">{productDetails.description}</p>

            <p className="text-orange-500 font-semibold mb-4">
              {productDetails.price}
            </p>

            {/* CLOSE BUTTON */}
            <button
              onClick={closeModal}
              className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default AllMenu;
