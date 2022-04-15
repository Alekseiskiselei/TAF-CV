class Menu {
    get ['Side menu']() {
        return $('.bm-menu-wrap');
    }
    get ['All items']() {
        return $('#inventory_sidebar_link');
    }
    
    get ['About']() {
        return $('#about_sidebar_link');
    }
    
    get ['Logout']() {
        return $('#logout_sidebar_link');
    }
    
    get ['Reset app state']() {
        return $('#reset_sidebar_link');
    }

    get ['Close side bar button']() {
        return $('#react-burger-cross-btn');
    }
}

module.exports = Menu;
