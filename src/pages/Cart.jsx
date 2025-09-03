const Cart = () => {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold text-black my-4">
        Your Cart
      </h1>

      <div className="p-4 border border-gray-300 rounded-sm grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-2">
          
            <h1 className="text-center text-gray-500 my-4 text-2xl font-semibold">
              No Items In Cart
            </h1>
         
        </div>

        <div className="border border-gray-600 p-4 rounded-md col-span-1">
          <h1 className="text-black text-3xl font-bold text-center">Your Bill</h1>
          <h1 className="text-gray-600 text-2xl font-bold my-2">
            Your Items: 0
          </h1>
          <h1 className="text-gray-600 text-2xl font-bold my-2">
            Total Amount: ₹ 0
          </h1>
          <button
            className="hover:bg-emerald-500 duration-200 hover:cursor-pointer bg-green-500 py-2 px-6 rounded-md w-full my-4 text-sm font-bold text-white disabled:opacity-50"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
