console.log('test');

import PlusPortAPI from './api/plusportAPI';
// import Menu from './components/menu';
// import ProductPrice from './components/productPrice';
import TrainingFilter from './components/trainingFilter';

document.addEventListener('DOMContentLoaded', function (event) {
	const api = new PlusPortAPI();

	// const menu = new Menu();
	// sconst productPrice = new ProductPrice(api);
	const trainingFilter = new TrainingFilter();
});
