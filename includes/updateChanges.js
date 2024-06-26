const updateChangesOnLoad = (changes) => {
	for (let key in changes) {
		let newValue = changes[key].newValue;
		switch (key) {
			case "colorText":
				document.querySelector('.hljs').style.color = newValue;
				document.querySelectorAll('.popup').forEach((el) => el.style.color = newValue);
				document.querySelectorAll('.popup').forEach((el) => el.style.borderColor = newValue);
				document.querySelectorAll('.hljs-date').forEach((el) => el.style.backgroundColor = newValue);
				break;
			case "colorBg":
				document.querySelector('.hljs').style.backgroundColor = newValue;
				document.querySelector('.hljs').parentNode.style.backgroundColor = newValue;
				document.querySelectorAll('.popup').forEach((el) => el.style.backgroundColor = newValue);
				document.querySelectorAll('.dimmed').forEach((el) => el.style.backgroundColor = newValue);
				document.querySelectorAll('.hljs-date').forEach((el) => el.style.color = newValue);
				break;
			case "colorPNR":
				document.querySelectorAll('.hljs-index, .hljs-index-add, .hljs-index-change, .hljs-index-delete, .hljs-index-rf, .hljs-pnr').forEach((el) => el.style.color = newValue);
				break;
			case "colorHighlight":
				document.querySelectorAll('.hljs-flight, .hljs-flight-dl, .hljs-flight-partner, .hljs-time').forEach((el) => el.style.color = newValue);
				break;
			case "colorAirports":
				document.querySelectorAll('.hljs-iata').forEach((el) => el.style.color = newValue);
				break;
			case "colorOffices":
				// document.querySelectorAll('.hljs-office-info').forEach((el) => el.style.color = newValue);
				document.querySelectorAll('.hljs-office-name').forEach((el) => el.style.color = newValue);
				break;
			case "colorContacts":
				document.querySelectorAll('.hljs-contact-info').forEach((el) => el.style.color = newValue);
				break;
			case "colorImportant":
				document.querySelectorAll('.hljs-message, .hljs-status.un').forEach((el) => el.style.color = newValue);
				break;
		}
	};
}

const updateChangesOnListener = (changes) => {
	observer.disconnect();
	updateChangesOnLoad(changes);
	observer.observe(target, config);
}