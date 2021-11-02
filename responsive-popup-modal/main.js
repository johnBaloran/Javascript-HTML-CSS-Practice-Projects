/*=============== SHOW MODAL ====================*/
const showModal = (openButton, modalContent) => {
  const openBtn = document.getElementById(openButton),
    modalContainer = document.getElementById(modalContent);
  if (openBtn && modalContainer) {
    openBtn.addEventListener("click", () => {
      modalContainer.classList.add("show-modal");
    });
  }
};

showModal("open-modal", "modal-container");

/*=============== CLOSE MODAL ====================*/

const closeBtn = document.querySelectorAll(".close-modal");
closeBtn.forEach((button) => {
  button.addEventListener("click", () => {
    modalContainer = document.getElementById("modal-container");
    modalContainer.classList.remove("show-modal");
  });
});
