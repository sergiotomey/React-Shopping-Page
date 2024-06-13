import PropTypes from "prop-types";
function ShoppingCart({ cartArray, updateArray, updateCart }) {
  const handleAmountChange = (id, newAmount) => {
    if (newAmount < 1) return;
    const updatedCartArray = cartArray.map((product) =>
      product.id === id ? { ...product, amount: newAmount } : product
    );
    updateArray(updatedCartArray);
    updateCart(
      updatedCartArray.reduce((total, product) => total + product.amount, 0)
    );
  };

  const handleRemoveProduct = (id) => {
    const updatedCartArray = cartArray.filter((item) => item.id !== id);
    updateArray(updatedCartArray);
    updateCart(
      updatedCartArray.reduce((total, product) => total + product.amount, 0)
    );
  };

  const finalPrice = cartArray.reduce(
    (total, product) => total + product.price * product.amount,
    0
  );
  return (
    <>
      <div className="flex">
        <ul className="border-2 w-3/4 h-full">
          {cartArray.map((product) => (
            <div className="flex border-2 p-5 gap-5" key={product.id}>
              <img
                className="size-20"
                src={product.image}
                alt={product.title}
              />
              <div className="flex flex-col gap-3 justify-center">
                <div className="flex gap-3">
                  <li>{product.title}</li>
                  <button
                    className="fa-solid fa-trash-can hover:text-[#ff0054]"
                    onClick={() => handleRemoveProduct(product.id)}
                  ></button>
                </div>
                <div className="flex ml-6 gap-3">
                  <button
                    className="fa-solid fa-plus text-md font-bold border-2 rounded-full p-1"
                    onClick={() =>
                      handleAmountChange(product.id, product.amount + 1)
                    }
                  ></button>
                  <p>{product.amount}</p>
                  <button
                    className="fa-solid fa-minus text-md font-bold border-2 rounded-full p-1"
                    onClick={() =>
                      handleAmountChange(product.id, product.amount - 1)
                    }
                    disabled={product.amount <= 1}
                  ></button>
                </div>
                <h1 className="ml-9 font-bold">
                  ${(product.price * product.amount).toFixed(2)}
                </h1>
              </div>
            </div>
          ))}
        </ul>
        <div className="flex flex-col gap-3 w-1/4 text-center p-5 items-center">
          <h1>Subtotal:{finalPrice.toFixed(2)}</h1>
          <h1 className="font-bold text-lg">Total:{finalPrice.toFixed(2)}</h1>
          <button className="add-to-cart mt-3">Checkout</button>
        </div>
      </div>
    </>
  );
}
ShoppingCart.propTypes = {
  cartAmount: PropTypes.number,
  updateCart: PropTypes.number,
  cartArray: PropTypes.array,
  updateArray: PropTypes.array,
  productAmount: PropTypes.number,
  updateAmount: PropTypes.number,
};

export default ShoppingCart;
