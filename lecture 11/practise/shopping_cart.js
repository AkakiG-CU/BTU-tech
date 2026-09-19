// Shopping Cart Example
function createCartItem(name, price, quantity) {
  return {
    name,
    price,
    _quantity: quantity,
    get quantity() {
      return this._quantity;
    },
    set quantity(value) {
      if (value > 0) {
        this._quantity = value;
      } else {
        console.log('Quantity must be positive!');
      }
    },
    get totalPrice() {
      return this.price * this._quantity;
    }
  };
}

const item1 = createCartItem('Apple', 1.5, 4);
const item2 = createCartItem('Bread', 2.0, 2);
const item3 = createCartItem('Milk', 3.0, 1);

const cart = [item1, item2, item3];

let totalCartValue = 0;
for (const item of cart) {
  totalCartValue += item.totalPrice;
}
console.log('Total cart value:', totalCartValue);
