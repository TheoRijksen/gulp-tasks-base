// class Menu {
// 	constructor() {
// 		this.menu = document.querySelector('.menu');
// 		this.menuList = this.menu.querySelector('.menu__list');
// 		this.menuListChildren = this.menuList.children;
// 		this.closeButton = this.menu.querySelector('.menu__close-button');
// 		this.readMore = this.menu.querySelector('.menu__read-more');

// 		this.events();
// 	}

// 	events() {
// 		this.fitMenu();

// 		this.closeButton.onclick = () => {
// 			this.toggleMenu();
// 		};

// 		window.onresize = this.fitMenu.bind(this);
// 	}

// 	toggleMenu() {
// 		if (this.isExpaned()) {
// 			this.menu.classList.remove('menu--expanded');
// 			this.menuList.classList.remove('menu__list--is-visible');
// 		} else {
// 			this.menu.classList.add('menu--expanded');
// 			this.menuList.classList.add('menu__list--is-visible');
// 		}
// 	}

// 	isExpaned() {
// 		return this.menu.classList.contains('menu--expanded');
// 	}

// 	fitMenu() {
// 		for (let index = 0; index < this.menuListChildren.length; index++) {
// 			this.menuListChildren[index].classList.remove(
// 				'menu__list-item--dropdown'
// 			);
// 		}

// 		if (this.isOverflowing()) {
// 			this.showReadMore();
// 			this.makeDropDown();
// 		} else {
// 			this.hideReadMore();
// 		}
// 	}

// 	showReadMore() {
// 		this.readMore.classList.add('menu__read-more--visible');
// 	}

// 	hideReadMore() {
// 		this.readMore.classList.remove('menu__read-more--visible');
// 	}

// 	makeDropDown() {
// 		let counter = 1;

// 		while (this.isOverflowing()) {
// 			this.menuListChildren[
// 				this.menuListChildren.length - counter
// 			].classList.add('menu__list-item--dropdown');
// 			counter++;
// 		}
// 	}

// 	isOverflowing() {
// 		let items = this.menu.children;

// 		let prevItem = {};
// 		let currItem = {};

// 		for (let i = 0; i < items.length; i++) {
// 			currItem = items[i].getBoundingClientRect();

// 			if (prevItem && prevItem.top < currItem.top) {
// 				return true;
// 			}
// 			prevItem = currItem;
// 		}

// 		return false;
// 	}
// }

// export default Menu;
