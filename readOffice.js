const getOffice = async (iataOfficeId, officeId, history) => {
	const response = await fetch(`https://oscar.airfrance-is.com/oscar/portalAmadeusTransaction.do?method=sendCrypticCommand&crypticRequest=PV%2F${iataOfficeId[1]}&numEmulator=1&officeId=${officeId}`);
	const text = await response.text().then((data) => {
		const parser = new DOMParser();
		const xml = parser.parseFromString(data, "application/xml");
		const el = xml.querySelector('crypticResponse1').innerHTML;
		const result = el.match(/(?<=^NAM\*OFFICE\sNAME\s{6}\-\s)(.*)/gm);
		return result;
	}).catch((err) => {
		return iataOfficeId.join(' ');
	});
	// Make a call to last command from the history
	await fetch(`https://oscar.airfrance-is.com/oscar/portalAmadeusTransaction.do?method=sendCrypticCommand&crypticRequest=${encodeURIComponent(history)}&numEmulator=1&officeId=${officeId}`);
	return text;
}

const readOffice = async (office, officeEl, historyEl) => {
	// office.textContent = `[${officeEl.value}]`;
	let officeId = office.textContent.split(' ');
	office.textContent = await getOffice(officeId, officeEl.value, historyEl.value);
}