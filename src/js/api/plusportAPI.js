class PlusPortAPI {
	constructor() {
		this.endPoint = 'https://plusport-api.com';
		this.url;
		this.apiKey =
			'603735343C3F3B3639663D693B6B38313139383A336238353969306633313E36';
		this.formID = 1;
		this.priceElements = document.querySelectorAll('.product-price');

		this.init();
		//console.log(product_price_data.pakket_id);
	}

	init() {
		//this.fetchData('product', product_price_data.pakket_id);
		//console.log( this.priceElements);

		console.log(this.priceElements);

		this.priceElements.forEach((element) => {
			//console.log();

			this.fetchData('product', element.dataset.productid, element);
		});
	}

	fetchData(dataType, productID, element) {
		switch (dataType) {
			case 'product':
				this.url = `webshop/forms/${this.formID}/products/23`;
				break;
			default:
				this.url = `webshop/forms/${this.formID}/products/`;
				break;
		}

		fetch(`${this.endPoint}/${this.url}`, {
			method: 'GET',
			headers: {
				'X-Api-Key': this.apiKey,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.status == 'success') {
					element.innerHTML = `€ ${data.data.price}`;
					console.log('Success:', data.status);
				} else {
					console.log('Error:', data.status);
				}
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	}
}

export default PlusPortAPI;
