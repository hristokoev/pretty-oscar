const getOffice = async (iataOfficeId, officeId, history) => {
	const response = await fetch(`./oscar/portalAmadeusTransaction.do?method=sendCrypticCommand&crypticRequest=PV%2F${iataOfficeId}&numEmulator=1&officeId=${officeId}`);
	const text = await response.text().then((data) => {
		const parser = new DOMParser();
		const xml = parser.parseFromString(data, "application/xml");
		const el = xml.querySelector('crypticResponse1').innerHTML;
		const result = el.match(/(?<=^NAM\*OFFICE\sNAME\s{6}\-\s)(.*)/gm);
		return result;
	}).catch((err) => {
		return "Error: invalid fetch response";
	});
	// Make a call to last command from the history
	await fetch(`./oscar/portalAmadeusTransaction.do?method=sendCrypticCommand&crypticRequest=${encodeURIComponent(history)}&numEmulator=1&officeId=${officeId}`).catch((err) => {
		return "Error: invalid fetch response";
	});
	return text;
}

const readOffice = (office, officeEl, historyEl) => {
	const clone = office.cloneNode(true);
	const parent = office.parentNode;
	const container = document.createElement('div');
	clone.textContent = "Loading...";
	office.addEventListener('mouseover', async function () {
		clone.textContent = await getOffice(office.value, officeEl.value, historyEl.value);
	});
	clone.className = 'popup';
	parent.replaceChild(container, office);
	container.className = 'container';
	container.appendChild(office);
	container.appendChild(clone);
}