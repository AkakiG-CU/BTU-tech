// const container = document.getElementsByClassName("main-container")[0];
// const header = document.getElementsByClassName("header");
// const paragraph = document.getElementsByTagName("p");

// // console.log(header);

// const header_target = document.querySelector("#main-container .header");

// // header_target.innerHTML = "<b>SHECVLILI HEDERI</b>";

// console.log(container);

// // console.log(header_target.style);

// const newEl = document.createElement("a");

// newEl.innerText = "LINK CREATED IN JS";
// newEl.setAttribute(
//   "href",
//   "https://zoommer.ge/mobiluri-telefonebi/apple-iphone-18-pro-256gb-burgundy-p54581",
// );

// container.appendChild(newEl);

// const button = document.querySelector("#submit");
// const container = document.getElementsByClassName("main-container")[0];

// console.log(1);

// button.addEventListener("click", (event) => {
//   container.classList.toggle("main-container-modified");
// });

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // parse JSON response
  })
  .then((data) => {
    console.log("Data received:", data);
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });
