const myImage = document.querySelector("img");

let showingFirst = true;

function fadeImages() {
  const img1 = document.getElementById("image1");
  const img2 = document.getElementById("image2");

  if (showingFirst) {
    img1.classList.remove("visible");
    img2.classList.add("visible");
  } else {
    img2.classList.remove("visible");
    img1.classList.add("visible");
  }

  showingFirst = !showingFirst;
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Succulents are cool, ${myName}`;
  }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Succulents are cool, ${storedName}`;
}
myButton.addEventListener("click", () => {
  setUserName();
});
