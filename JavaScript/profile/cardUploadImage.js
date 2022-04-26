const defaultBtn = document.querySelector("#default-btn");
const customBtn = document.querySelector("#custom-btn");
const img = document.querySelector(".profile-img");
// let file;

function defaultBtnActive() {
  defaultBtn.click();
}

customBtn.addEventListener("click", () => {
  defaultBtn.click();
});

defaultBtn.addEventListener("change", () => {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      const result = reader.result;
      img.src = result;
    };
    reader.readAsDataURL(file);
  }
});
////////////////////////////////////////////////////////////

// const imgDropArea = document.querySelector(".profile__card"),
//   imgDragText = imgDropArea.querySelector(".content__text"),
//   uploadNewImgButton = imgDropArea.querySelector("#custom-btn"),
//   imgInput = imgDropArea.querySelector("#default-btn");

// let file; // this is  global variable and we'll use it in multiple functions
