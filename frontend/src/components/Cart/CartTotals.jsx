import { useContext, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { CartContext } from "../../context/CartProvider";
import { message } from "antd";
const CartTotals = () => {
  const [fastCargoChecked, setFastCargoChecked] = useState(false);
  const { cartItems } = useContext(CartContext);
  
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

    const handlePayment = async () => {
      if (!user) {
        return message.info("Ödeme yapabilmek için giriş yapmalısınız!");
      }
  
      
    };
  
  const cartItemTotals = cartItems.map((item) => {
    const itemTotal = item.price * item.quantity;
    return itemTotal;
  });

  const subTotals = cartItemTotals.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  }, 0);

  const cargoFee = 15;

  const cartTotals = fastCargoChecked
    ? (subTotals + cargoFee).toFixed(2)
    : subTotals.toFixed(2);

  return (
    <div className="cart-totals">
      <h2>Sipariş Tutarı</h2>
      <table>
        <tbody>
          <tr className="cart-subtotal">
            <th>Genel Tutar</th>
            <td>
              <span id="subtotal">₺{subTotals.toFixed(2)}</span>
            </td>
          </tr>
          <tr>
            <th>Ulaştırma Yöntemi</th>
            <td>
              <ul>
                <li>
                  <label>
                    Hızlı Kargo : 15₺
                    <input
                      type="checkbox"
                      id="fast-cargo"
                      checked={fastCargoChecked}
                      onChange={() => setFastCargoChecked(!fastCargoChecked)}
                    />
                  </label>
                </li>
                <li>
                  <a href="#">Adres Değiştirin</a>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <th>Toplam Tutar</th>
            <td>
              <strong id="cart-total">₺{cartTotals}</strong>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="checkout">
      <button className="btn btn-lg" onClick={handlePayment}>
          Ödeme Yap
        </button>
      </div>
    </div>
  );
};

export default CartTotals;
