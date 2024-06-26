// POPUP UI

// Get the selected color presets from the popup UI
let darkPreset = {
	theme: "dark",
	colorText: "#adbbbc",
	colorBg: "#22272e",
	colorPNR: "#8dd881",
	colorHighlight: "#d0f4ea",
	colorAirports: "#92d9f8",
	colorOffices: "#f7ea5b",
	colorContacts: "#f7ea5b",
	colorImportant: "#f57066"
}

let lightPreset = {
	theme: "light",
	colorText: "#2E343B",
	colorBg: "#FFFFFF",
	colorPNR: "#00A955",
	colorHighlight: "#1978D4",
	colorAirports: "#00A4A6",
	colorOffices: "#E26A6A",
	colorContacts: "#B8860B",
	colorImportant: "#FF0000"
}

let light2Preset = {
	theme: "light2",
	colorText: "#4B6A88",
	colorBg: "#FFFFFF",
	colorPNR: "#3455DB",
	colorHighlight: "#00AA00",
	colorAirports: "#00AA00",
	colorOffices: "#1E90FF",
	colorContacts: "#F64747",
	colorImportant: "#F64747"
}


let richPreset = {
	theme: "rich",
	colorText: "#CCB9CF",
	colorBg: "#232743",
	colorPNR: "#98D8AA",
	colorHighlight: "#FDE2F3",
	colorAirports: "#FDE2F3",
	colorOffices: "#FFE175",
	colorContacts: "#FFE175",
	colorImportant: "#FE5858"
}

let cameoPreset = {
	theme: "cameo",
	colorText: "#E8E8E8",
	colorBg: "#3C3B39",
	colorPNR: "#D2CEA9",
	colorHighlight: "#FDE3A7",
	colorAirports: "#FDE3A7",
	colorOffices: "#F1F227",
	colorContacts: "#F1F227",
	colorImportant: "#F57066"
}

let mutedBluePreset = {
	theme: "mutedBlue",
	colorText: "#ECF0F1",
	colorBg: "#3D4C5C",
	colorPNR: "#99C7BE",
	colorHighlight: "#A9D5DB",
	colorAirports: "#A9D5DB",
	colorOffices: "#B5E655",
	colorContacts: "#B5E655",
	colorImportant: "#F57066"
}

let matrixPreset = {
	theme: "matrix",
	colorText: "#22B455",
	colorBg: "#020204",
	colorPNR: "#22B455",
	colorHighlight: "#80CE87",
	colorAirports: "#92E5A1",
	colorOffices: "#D4D4D4",
	colorContacts: "#D4D4D4",
	colorImportant: "#F57066"
}

let highContrastLightPreset = {
	theme: "highContrastLight",
	colorText: "#050505",
	colorBg: "#FAFAFA",
	colorPNR: "#FF0000",
	colorHighlight: "#007DFF",
	colorAirports: "#007DFF",
	colorOffices: "#007DFF",
	colorContacts: "#FF0000",
	colorImportant: "#FF0000"
}

let highContrastDarkPreset = {
	theme: "highContrastDark",
	colorText: "#FAFAFA",
	colorBg: "#050505",
	colorPNR: "#FFFF00",
	colorHighlight: "#52A5FF",
	colorAirports: "#52A5FF",
	colorOffices: "#52A5FF",
	colorContacts: "#FF0000",
	colorImportant: "#FF0000"
}

// Event listener for preset dropdown
document.getElementById("theme").addEventListener("change", function () {
	let theme = this.value;
	switch (theme) {
		case "dark":
			chrome.storage.sync.set(darkPreset);
			break;
		case "light":
			chrome.storage.sync.set(lightPreset);
			break;
		case "light2":
			chrome.storage.sync.set(light2Preset);
			break;
		case "rich":
			chrome.storage.sync.set(richPreset);
			break;
		case "cameo":
			chrome.storage.sync.set(cameoPreset);
			break;
		case "mutedBlue":
			chrome.storage.sync.set(mutedBluePreset);
			break;
		case "matrix":
			chrome.storage.sync.set(matrixPreset);
			break;
		case "highContrastLight":
			chrome.storage.sync.set(highContrastLightPreset);
			break;
		case "highContrastDark":
			chrome.storage.sync.set(highContrastDarkPreset);
			break;
	}
	loadPreset();
});

document.getElementById("switch").addEventListener("change", function () {
	let newValue = this.checked;
	document.getElementById("options").style.display = newValue ? "block" : "none";
	document.getElementById("reload").style.display = "block";
	document.querySelector(".divider").style.display = "none";
	chrome.storage.sync.set({ "switch": newValue });
});

document.getElementById("classToggle").addEventListener("change", function () {
	let newValue = this.checked;
	document.getElementById("reload").style.display = "block";
	document.querySelector(".divider").style.display = "none";
	chrome.storage.sync.set({ "classToggle": newValue });
});

document.getElementById("iataToggle").addEventListener("change", function () {
	let newValue = this.checked;
	document.getElementById("reload").style.display = "block";
	document.querySelector(".divider").style.display = "none";
	chrome.storage.sync.set({ "iataToggle": newValue });
});

document.getElementById("statusToggle").addEventListener("change", function () {
	let newValue = this.checked;
	document.getElementById("reload").style.display = "block";
	document.querySelector(".divider").style.display = "none";
	chrome.storage.sync.set({ "statusToggle": newValue });
});

document.getElementById("dateToggle").addEventListener("change", function () {
	let newValue = this.checked;
	document.getElementById("reload").style.display = "block";
	document.querySelector(".divider").style.display = "none";
	chrome.storage.sync.set({ "dateToggle": newValue });
});

document.getElementById("hideSegmentStatusToggle").addEventListener("change", function () {
	let newValue = this.checked;
	document.getElementById("reload").style.display = "block";
	document.querySelector(".divider").style.display = "none";
	chrome.storage.sync.set({ "hideSegmentStatusToggle": newValue });
});

document.getElementById("linesToggle").addEventListener("change", function () {
	let newValue = this.checked;
	document.getElementById("reload").style.display = "block";
	document.querySelector(".divider").style.display = "none";
	chrome.storage.sync.set({ "linesToggle": newValue });
});

document.getElementById("colorText").addEventListener("change", function () {
	let newValue = this.value;
	chrome.storage.sync.set({ "colorText": newValue });
});

document.getElementById("colorBg").addEventListener("change", function () {
	let newValue = this.value;
	chrome.storage.sync.set({ "colorBg": newValue });
});

document.getElementById("colorPNR").addEventListener("change", function () {
	let newValue = this.value;
	chrome.storage.sync.set({ "colorPNR": newValue });
});

document.getElementById("colorHighlight").addEventListener("change", function () {
	let newValue = this.value;
	chrome.storage.sync.set({ "colorHighlight": newValue });
});

document.getElementById("colorAirports").addEventListener("change", function () {
	let newValue = this.value;
	chrome.storage.sync.set({ "colorAirports": newValue });
});

document.getElementById("colorOffices").addEventListener("change", function () {
	let newValue = this.value;
	chrome.storage.sync.set({ "colorOffices": newValue });
});

document.getElementById("colorContacts").addEventListener("change", function () {
	let newValue = this.value;
	chrome.storage.sync.set({ "colorContacts": newValue });
});

document.getElementById("colorImportant").addEventListener("change", function () {
	let newValue = this.value;
	chrome.storage.sync.set({ "colorImportant": newValue });
});


// Function to load selected preset from Chrome Storage
function loadPreset() {
	chrome.storage.sync.get(["switch", "theme", "classToggle", "iataToggle", "statusToggle", "dateToggle", "hideSegmentStatusToggle", "linesToggle", "colorText", "colorBg", "colorPNR", "colorHighlight", "colorAirports", "colorOffices", "colorContacts", "colorImportant"], function (result) {
		document.getElementById("switch").checked = result.switch || typeof result.switch === 'undefined';
		document.getElementById("options").style.display = document.getElementById("switch").checked ? "block" : "none";
		document.getElementById("theme").value = result.theme || darkPreset.theme;
		document.getElementById("classToggle").checked = result.classToggle || typeof result.classToggle === 'undefined';
		document.getElementById("iataToggle").checked = result.iataToggle || typeof result.iataToggle === 'undefined';
		document.getElementById("statusToggle").checked = result.statusToggle || typeof result.statusToggle === 'undefined';
		document.getElementById("dateToggle").checked = result.dateToggle || typeof result.dateToggle === 'undefined';
		document.getElementById("hideSegmentStatusToggle").checked = result.hideSegmentStatusToggle || typeof result.hideSegmentStatusToggle === 'undefined';
		document.getElementById("linesToggle").checked = result.linesToggle || typeof result.linesToggle === 'undefined';
		document.getElementById("colorText").value = result.colorText || darkPreset.colorText;
		document.getElementById("colorBg").value = result.colorBg || darkPreset.colorBg;
		document.getElementById("colorPNR").value = result.colorPNR || darkPreset.colorPNR;
		document.getElementById("colorHighlight").value = result.colorHighlight || darkPreset.colorHighlight;
		document.getElementById("colorAirports").value = result.colorAirports || darkPreset.colorAirports;
		document.getElementById("colorOffices").value = result.colorOffices || darkPreset.colorOffices;
		document.getElementById("colorContacts").value = result.colorContacts || darkPreset.colorContacts;
		document.getElementById("colorImportant").value = result.colorImportant || darkPreset.colorImportant;
	});
}

// Call loadPreset function when popup is opened
loadPreset();

// Reset
document.getElementById("resetButton").addEventListener("click", function () {
	chrome.storage.sync.set(darkPreset);
	loadPreset();
});

// Reset
document.getElementById("reload").addEventListener("click", function () {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.tabs.sendMessage(tabs[0].id, { url: '/' });
		window.close();
	});
});

// Open OSCAR
document.querySelector(".oscarLink").addEventListener("click", function () {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.tabs.create({active: true, url: 'https://oscar.airfrance-is.com/oscar/startOscar.do?method=init&screenSize=1920x1080'});
	});
});

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
	if (tabs[0].url.includes("https://oscar.airfrance-is.com/") || tabs[0].url.includes("127.0.0.1")) {
		document.querySelector(".app").style.display = "block";
		document.querySelector(".notOscar").style.display = "none";
	} else {
		document.querySelector(".app").style.display = "none";
		document.querySelector(".notOscar").style.display = "flex";
	}
});