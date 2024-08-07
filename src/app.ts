const counterBox: HTMLElement = document.querySelector('.js-countdown-item')!;
const counterItems = document.querySelectorAll('.js-counter-number');
const hiddenitems = document.querySelectorAll('.hidden')


const options = {
	rootMargin: '-100px'
}

const startCounter = (entry: any) => {
	console.log(entry[0]);

	if (entry[0].isIntersecting) {
		counterItems.forEach((counter) => {
			const update = () => {
				const finalNumber = counter.getAttribute('data-number');
				const value: number = Number(counter.textContent);
				console.log(value);

				const speed = Number(finalNumber) / 30;

				if (value < Number(finalNumber)) {
					counter.textContent = `${Math.floor(value + speed)}`;
					setTimeout(update, 20);
				} else {
					counter.textContent = finalNumber;
				}
			};

			update();
		});
	}
};

document.addEventListener('DOMContentLoaded', () => {
	const observer = new IntersectionObserver(startCounter, options);

	observer.observe(counterBox);
});




const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if(entry.isIntersecting) {
			entry.target.classList.add('show')
		} else {
			
		}
	})
})

hiddenitems.forEach((el) => observer.observe(el))

