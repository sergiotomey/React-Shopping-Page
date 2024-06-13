import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function ProductsPage({ cartArray, updateArray, cartAmount, updateCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const json = await response.json();
        const productsWithAmount = json.map((product) => ({
          ...product,
          amount: 0,
        }));
        setProducts(productsWithAmount);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    let NewCartAmount = cartAmount + 1;
    updateCart(NewCartAmount);
    const productExists = cartArray.some((item) => item.id === product.id);
    if (productExists) {
      let newCartArray = cartArray.map((item) =>
        item.id === product.id ? { ...item, amount: item.amount + 1 } : item
      );
      updateArray(newCartArray);
    } else {
      let newCartArray = [...cartArray, { ...product, amount: 1 }];
      updateArray(newCartArray);
    }
  };

  return (
    <>
      <ul className="products-grid">
        {products.map((product) => (
          <li className="product-card" key={product.id}>
            <img className="product-image" src={product.image} alt="" />
            {product.title}
            <p className="font-bold text-red">${product.price.toFixed(2)}</p>
            <button className="add-to-cart" onClick={() => addToCart(product)}>
              Add to cart
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

ProductsPage.propTypes = {
  cartAmount: PropTypes.number,
  updateCart: PropTypes.number,
  cartArray: PropTypes.array,
  updateArray: PropTypes.array,
  productAmount: PropTypes.number,
  updateAmount: PropTypes.number,
};

export default ProductsPage;
