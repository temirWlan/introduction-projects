window.addEventListener('DOMContentLoaded', () => {
	const cardPriceNodes = document.querySelectorAll('.price');
	const $cart = document.getElementById('cart');

	const convertToCurrency = price => {
		return new Intl.NumberFormat('ru-RU', {
			currency: 'rub',
			style: 'currency'
		}).format(price);
	};

	const toDate = date => {
		return new Intl.DateTimeFormat('ru-RU', {
			day: '2-digit',
			month: 'long',
			year: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit'
		}).format(new Date(date));
	};

	cardPriceNodes.forEach(node => {
		node.textContent = convertToCurrency(node.textContent)
	});
	document.querySelectorAll('.date').forEach(node => {
		node.textContent = toDate(node.textContent);
	});

	if ($cart) {
		cart.addEventListener('click', e => {
			const target = e.target;
			
			if (target.classList.contains('cart-remove-btn')) {
				const id = target.dataset.id;

				fetch(`/cart/remove/${id}`, {
					method: 'DELETE'
				}).then(res => res.json())
					.then(cart => {
						const row = cart.courses.map(({ title, count, id }) => {
							return ` 
								<tr>
									<td>${title}</td>
									<td>${count}</td>
									<td>
										<button class="btn btn-small cart-remove-btn" data-id=${id}>Remove</button>
									</td>
								</tr>
							`;
						}).join('');

						$cart.querySelector('tbody').innerHTML = row;
						$cart.querySelector('.price').textContent = convertToCurrency(cart.price);
					});
			}
		});
	}
});
