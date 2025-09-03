import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        setProducts(data.slice(0, 6));
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div className="w-full">
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-12 md:py-16 text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Your One-Stop Electronics Shop
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          Best deals on the latest gadgets, just for you.
        </p>
        <Link
          to="/shop"
          className="bg-lime-500 text-black font-bold px-5 py-3 rounded-md hover:bg-lime-400 transition text-sm sm:text-base"
        >
          Shop Now
        </Link>
      </section>

      {/* ✅ Categories Section */}
      <section className="py-10 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            {
              name: "Laptops",
              img: "https://m.media-amazon.com/images/I/61SHFVKs+AL._AC_UY218_.jpg?text=Laptops",
            },
            {
              name: "Mobiles",
              img: "https://m.media-amazon.com/images/I/5157qwK+3kL._SY300_SX300_QL70_FMwebp_.jpg",
            },
            {
              name: "Fashion",
              img: "https://images.meesho.com/images/products/542374703/kbt1t_512.avif?width=512?text=Fashion",
            },
            {
              name: "Headphones",
              img: "https://m.media-amazon.com/images/I/51zn3KXM94L._AC_UY218_.jpg?text=Headphones",
            },
          ].map((cat) => (
            <Link
              key={cat.name}
              to={`/shop?category=${cat.name}`}
              className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center text-center"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-28 h-28 sm:w-32 sm:h-32 object-contain mb-4"
              />
              <span className="font-semibold text-sm sm:text-base">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ✅ Featured Products */}
      <section className="py-10 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">
          Featured Products
        </h2>
        {loading ? (
          <p className="text-center text-gray-500">Loading products...</p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center text-center"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-28 h-28 sm:w-32 sm:h-32 object-contain mb-4"
                  />
                  <h3 className="text-base sm:text-lg font-semibold truncate w-full">
                    {product.title}
                  </h3>
                  <p className="text-gray-700 font-bold mt-2">
                    ${product.price}
                  </p>
                  <Link
                    to={`/cart`}
                    className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
                  >
                    Add to Cart
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                to="/shop"
                className="bg-lime-500 text-black font-bold px-6 py-3 rounded-md hover:bg-lime-400 transition text-sm sm:text-base"
              >
                View More Products →
              </Link>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default Home;
