import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;

  return (
    <div className="cart-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="proce">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
