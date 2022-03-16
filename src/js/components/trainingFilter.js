class TrainingFilter {
	constructor() {
		this.filter = document.querySelector('.training-filters');
		this.trainingItems = document.querySelectorAll('.training-item');
		this.events()
	}

	events() { 
		if (this.filter && this.filter.length) {
			this.filter.addEventListener("change", this.applyFilter.bind(this));
		}
	}

	applyFilter() {
		if (this.filter.value === 'default') {
			this.showAllTrainings();
		} else { 
			let filterText = this.filter.options[this.filter.selectedIndex].text;
		
			this.trainingItems.forEach(trainingItem => {
				let trainingName = trainingItem.querySelector('.training-item__title').innerHTML.toLowerCase();
	
				if (trainingName.indexOf(filterText) === -1) {
					this.hideTraining(trainingItem);
				} else { 
					this.showTraining(trainingItem);
				}
			});
		}
	}

	showAllTrainings() { 
		this.trainingItems.forEach(trainingItem => {
			this.showTraining(trainingItem);
		});
	}

	hideTraining(training) { 
		training.classList.add('hidden');
	}

	showTraining(training) {
		training.classList.remove('hidden');
	}
}

export default TrainingFilter;
