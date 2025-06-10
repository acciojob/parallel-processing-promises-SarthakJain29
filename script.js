//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

function downloadImage(url) {
	return new Promise((resolve,reject)=>{
		const img = document.createElement("img");
		img.src = url;
		img.onload = () => resolve(img);
		img.onerror = () => reject(`Failed to load ${url}`);
	})
}

function downloadImages(images) {
	const loading = document.getElementById("loading");
	const error = document.getElementById("error");
	const output = document.getElementById("output");

	Promise.all(images.map(downloadImage))
		.then(images => {
			loading.style.display = "none";
			image.forEach(img => output.appendChild(img));
		})
		.catch(err => {
			loading.style.display = "none";
			error.textContent = err;
		})
}
document.getElementById("download-images-button").addEventListener("click", downloadImages(images));