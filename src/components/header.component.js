class Header {
  get ['Burger-menu button']() {
    return $('#react-burger-menu-btn');
  }

  get ['Cart badge']() {
    return $('.shopping_cart_badge');
  }

  get ['Cart icon']() {
    return $('.shopping_cart_link');
  }
}

module.exports = Header;
