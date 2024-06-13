import { NavLink, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./index.css";

function Navbar({ cartAmount }) {
  const navigate = useNavigate();

  const handleH1Click = () => {
    navigate("/");
  };

  return (
    <div className="nav flex text-[#ffbd00] bg-[#390099] bg-opacity-90 justify-between sticky top-0 border-b-2 border-[#FFBD00] z-50 items-center">
      <div className="flex p-3 items-center">
        <i
          onClick={handleH1Click}
          style={{ cursor: "pointer" }}
          className="fa-solid fa-store text-lg ml-2 mr-2 "
        />
        <h1 className=" font-bold text-lg">{`My Store`}</h1>
      </div>

      <ul className="flex gap-4 justify-center p-5 text-lg">
        <li>
          <NavLink className="nav-item hover:text-[#ff0054]" to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-item  hover:text-[#ff0054]" to={"/products"}>
            Products
          </NavLink>
        </li>
        <li className="mr-5 flex items-center relative  hover:text-[#ff0054]">
          <NavLink to={"/cart"} className="flex items-center nav-item">
            <i className="fa-solid fa-cart-shopping w-12 ml-5"></i>
            <span className="cart-badge">{cartAmount}</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
Navbar.propTypes = {
  cartAmount: PropTypes.number,
};
export default Navbar;
