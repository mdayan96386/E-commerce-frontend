import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
      setLoading(false);
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="text-center my-10">
        <p className="text-gray-600 text-lg">Loading products...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
        Shop Electronics
      </h2>

      {/* ✅ Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition flex flex-col"
          >
            <div className="flex justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="h-40 w-40 object-contain mb-4"
              />
            </div>
            <h3 className="text-base sm:text-lg font-semibold truncate text-center">
              {product.title}
            </h3>
            <p className="text-gray-700 font-bold text-center mt-2">
              ${product.price}
            </p>
            <Link
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-center w-full block text-sm sm:text-base"
              to="/cart"
            >
              Add to Cart
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
