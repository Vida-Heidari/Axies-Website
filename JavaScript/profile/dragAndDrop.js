// Selecting all required elements
const dropArea = document.querySelector(".drag-area"),
  dragText = dropArea.querySelector(".drag-header"),
  button = dropArea.querySelector(".drag__btn"),
  input = dropArea.querySelector(".drag-area__input");

let file; // this is  global variable and we'll use it in multiple functions

button.onclick = () => {
  input.click(); // if user click on the button then the input also clicked
};

input.addEventListener("change", function () {
  // getting user select file and [0] means if user select multiple files then we'll select only the first one
  file = this.files[0];
  dropArea.classList.add("active");
  showFile(); // calling function
});

// -------------- If User drag File over DropArea
dropArea.addEventListener("dragover", (event) => {
  event.preventDefault(); // preventing from default behavior
  dropArea.classList.add("active");
  dragText.textContent = "Realease to Upload File";
});

// -------------- If User leave dragged File from DropArea
dropArea.addEventListener("dragleave", () => {
  dropArea.classList.remove("active");
  dragText.textContent = "Drag and Drop to Upload File";
});

// -------------- If User drop File On DropArea
dropArea.addEventListener("drop", (event) => {
  event.preventDefault(); // preventing from default behavior
  // getting user select file and [0] means if user select multiple files then we'll select only the first one
  file = event.dataTransfer.files[0];
  showFile(); // calling function
});

function showFile() {
  let fileType = file.type;
  let validExtentions = ["image/jpeg", "image/jpg", "image/png"];
  if (validExtentions.includes(fileType)) {
    let fileReader = new FileReader(); // creating new file reader object
    fileReader.onload = () => {
      let fileURL = fileReader.result; // passing user file source in fileURl variable
      console.log(fileURL);
      let imgTag = `<img src="${fileURL}" alt="">`; // creating an img tag and passing user selected file source insice src attribute
      dropArea.innerHTML = imgTag; // adding that created img tag inside dropArea container
    };
    fileReader.readAsDataURL(file);
  } else {
    alert("This is not an Image File!");
    dropArea.classList.remove("active");
    dragText.textContent = "Drag and Drop to Upload File";
  }
}
