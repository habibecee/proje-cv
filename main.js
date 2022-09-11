// import dictionary from "./dictionary";

window.addEventListener("load", function () {
	const dataFromlocalStorage = JSON.parse(localStorage.getItem("isLogin"));
	console.log(dataFromlocalStorage);
	if (dataFromlocalStorage === null) {
		localStorage.setItem("isLogin", JSON.stringify(false));
	}
	if (dataFromlocalStorage === null || dataFromlocalStorage === false) {
		this.window.location.replace("http://127.0.0.1:5500/login.html");
	}
});

const pdfBtn = document.getElementById("pdfBtn");
const languageSelect = document.getElementById("language");
// const keys = [];

// const dictionary = [
// 	{
// 		id: "",
// 		tr: "",
// 		en: "",
// 	},
// 	{
// 		id: "",
// 		tr: "",
// 		en: "",
// 	},
// ]; ***** AYRI JS DOSYASINDA YAZILMASI DAHA MANTIKLIDIR ****

pdfBtn.addEventListener("click", function () {
	const myCv = document.getElementById("myCv");
	const nameSurname = document.getElementById("nameSurname");
	var opt = {
		margin: -0.5,
		filename: nameSurname.innerText + "CV.pdf",
		image: { type: "jpeg", quality: 0.98 },
		html2canvas: { scale: 2 },
		jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
	};

	html2pdf().set(opt).from(myCv).save();
});

languageSelect.addEventListener("change", function (event) {
	translate(event.target.value);
	// Map,filter, find methodları da kullanılabilir
});

function translate(selectedLanguage) {
	// **** ÇÖZÜM 1 -- switch case ve map yapısıyla çözüm ****

	dictionary.map((item) => {
		const element = document.getElementById(item.id);

		switch (selectedLanguage) {
			case "tr":
				element.innerText = item.tr;
				break;
			case "en":
				element.innerText = item.en;
				break;
			default:
				console.log("default");
				break;
		}
		//   *** switch/case yapısı daha hızlı çalışır ***
	});

	// **** FIND methodu ****
	// const result = dictionary.find((item) => item.id === " ");
	// console.log(result);

	// **** FILTER methodu ****

	// const result = dictionary.filter((item)=> item.id === '' veya item.count <10 vs.);
	// console.log(result);

	// **** ÇÖZÜMMMMMMMM 2 ****
	// for (let i = 0; i < keys.length; i++) {
	// 	console.log(keys[i]);
	// 	const element = document.getElementById(keys[i]);
	// 	console.log(element);
	// 	dictionary.find((item) => item.key === keys[i]);
	// 	console.log(result);
	// 	if (selectedLanguage === "en") {
	// 		element.innerText = result.en;
	// 	}
	// 	if (selectedLanguage === "tr") {
	// 		element.innerText = result.tr;
	// 	}
	// }
	// **** ÇÖZÜMMMMMMMM 3-- if yapısıyla çözüm ****
	// for (let i = 0; i < dictionary.length; i++) {
	// 	const element = document.getElementById(dictionary[i].id);
	// if (selectedLanguage === "en") {
	// 	element.innerText = dictionary[i].en;
	// }
	// if (selectedLanguage === "tr") {
	// 	element.innerText = dictionary[i].tr;
	// }
}
