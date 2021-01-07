window.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('.card-price').forEach(node => {
		node.textContent = new Intl.NumberFormat('ru-RU', {
			currency: 'rub',
			style: 'currency'
		}).format(node.textContent);
	});
});