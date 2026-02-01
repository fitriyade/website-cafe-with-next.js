import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProductCard from "@/components/product-card";
import { productList } from "@/helpers/product-list";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <Navbar />

      {/* -------------------- Hero Section -------------------- */}
      <section
        id="home"
        className="relative flex flex-col justify-center items-center text-center min-h-screen px-6 bg-[url('/image/hero-bg.jfif')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/45"></div>
        <div className="relative z-10 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Fresh Smoothies, Fresh Start
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Blend your day with our delicious smoothies made from the freshest
            fruits.
          </p>
          <a
            href="#menu"
            className="px-6 py-3 bg-yellow-300 text-black font-semibold rounded-lg shadow hover:bg-yellow-400 transition"
          >
            Explore Menu
          </a>
        </div>
      </section>

      {/* -------------------- Menu Section -------------------- */}
      <section
        id="menu"
        className="py-20 px-6 min-h-screen md:px-12 bg-gradient-to-br from-purple-500 to-pink-300"
      >
        <h2 className="text-center text-white text-3xl font-bold mb-4">
          Our Menu
        </h2>
        <p className="text-center text-white/80 mb-12 max-w-2xl mx-auto">
          Freshly blended smoothies made just for you, with care and quality
          ingredients
        </p>

        {/* Grid Menu */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center border border-white/20 shadow-lg shadow-black/20 rounded-xl p-6 backdrop-blur-md">
          {productList.slice(0, 4).map((item) => (
            <ProductCard
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
              onClick={() => console.log(item.title)}
            />
          ))}
        </div>

        <div className="flex justify-center items-center text-center mt-12">
          <Link
            href="/menu"
            className="px-8 py-3 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/40 transition duration-300 backdrop-blur-sm cursor-pointer inline-block text-center"
          >
            All Menu
          </Link>
        </div>
      </section>

      {/* -------------------- Special Offer -------------------- */}
      <section className="relative bg-[url('/image/bg0.jfif')] bg-cover bg-no-repeat bg-center py-20 px-6 md:px-12 bg-fixed">
        <div className="absolute inset-0 bg-blue-900/40"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-white font-bold">
              Special Offers
            </h2>
            <p className="text-white font-medium">
              Grab your deals before they’re gone!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Offer 1 */}
            <div className="offer-div">
              <h3 className="offer-h3">Buy 1 Get 1</h3>
              <p className="offer-p">For all smoothie bowls</p>
              <button className="offer-btn">Grab Now</button>
            </div>

            {/* Offer 2 */}
            <div className="offer-div">
              <h3 className="offer-h3">20% OFF</h3>
              <p className="offer-p">For first-time customers</p>
              <button className="offer-btn">Claim</button>
            </div>

            {/* Offer 3 */}
            <div className="offer-div">
              <h3 className="offer-h3">Free Topping</h3>
              <p className="offer-p">Add any topping for free</p>
              <button className="offer-btn">Get It</button>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- About Us -------------------- */}
      <section
        id="about-us"
        className="bg-gradient-to-br from-purple-500/20 to-pink-400/20 py-20 px-6 md:px-12"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/*-- About Text */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-purple-700">
              About Us
            </h2>
            <p className="text-gray-700 mb-6">
              HappySip was built with a single goal: to provide healthy and
              fresh smoothies every day. We believe that healthy drinks should
              still be delicious, refreshing, and made from truly natural
              ingredients.
            </p>
            <p className="text-gray-700">
              From carefully selected fresh fruits to a preparation process
              without added sugar, we do everything to ensure you get the best
              energy every day.
            </p>
          </div>

          {/*-- Achievements */}
          <div className="grid grid-cols-2 gap-6 text-center">
            <div className="achiev-div">
              <h3 className="achiev-h3">1000+</h3>
              <p className="achiev-p">Cups Sold</p>
            </div>

            <div className="achiev-div">
              <h3 className="achiev-h3">10+</h3>
              <p className="achiev-p">Menu Smoothies</p>
            </div>

            <div className="achiev-div">
              <h3 className="achiev-h3">5★</h3>
              <p className="achiev-p">Customer Rating</p>
            </div>

            <div className="achiev-div">
              <h3 className="achiev-h3">4 yrs</h3>
              <p className="achiev-p">Experience</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;
