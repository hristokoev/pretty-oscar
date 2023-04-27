const readStatus = (status) => {
	const statusText = status.textContent.slice(0, 2);
	const pax = status.textContent.substring(2);
	const clone = status.cloneNode(true);
	const parent = status.parentNode;
	const container = document.createElement('div');
	clone.textContent = `${STATUS[statusText]} for ${pax} ${pax == '1' ? "pap" : "pax"}` || "Unknown status code, check Ask";
	clone.className = 'popup';
	parent.replaceChild(container, status);
	container.className = 'container';
	container.appendChild(status);
	container.appendChild(clone);
}