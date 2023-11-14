function showModal() {
    let modal = document.querySelector('#modal');
    modal.classList.add(`modal-active`);
}

function closeModal() {
    let modal = document.querySelector('#modal');
    modal.classList.remove(`modal-active`);
}

let openModal = document.querySelector('#open-modal');
openModal.addEventListener(`click`, showModal);