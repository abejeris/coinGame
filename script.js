function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

const player = document.querySelector('#player');
const coin = document.querySelector('#coin');

window.addEventListener('keyup', function (e) {
	if (e.key === 'ArrowDown') {
		const currTop = extractPos(player.style.top);
		player.style.top = `${currTop + 50}px`;
	} else if (e.key === 'ArrowRight') {
		const currLeft = extractPos(player.style.left);
		player.style.left = `${currLeft + 50}px`;
		player.style.transform = 'scale(1,1)';
	} else if (e.key === 'ArrowUp') {
		const currTop = extractPos(player.style.top);
		player.style.top = `${currTop - 50}px`;
	} else if (e.key === 'ArrowLeft') {
		const currLeft = extractPos(player.style.left);
		player.style.left = `${currLeft - 50}px`;
		player.style.transform = 'scale(-1,1)';
	}
	if (isTouching(player, coin)) {
		moveCoin();
	}
});

const extractPos = (pos) => {
	if (!pos) return 100;
	return parseInt(pos.slice(0, -2));
};

const moveCoin = () => {
	coin.style.left = `${Math.floor(Math.random() * window.innerWidth)}px`;
	coin.style.top = `${Math.floor(Math.random() * window.innerHeight)}px`;
};
moveCoin();
