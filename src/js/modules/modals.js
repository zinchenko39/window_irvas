export const modals = () => {

    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelectorAll(closeSelector);

        trigger.forEach(elem => {

            elem.addEventListener('click', (e) => {
                if (e.target) e.preventDefault();
                openModal(modal);
            });
        });

        close.forEach(elem => {
            elem.addEventListener('click', () => {
                closeModal();
            });
        });

        modal.addEventListener('click', (e) => {
            if (e.target == modal && closeClickOverlay) {
                closeModal();
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block';
            document.body.classList.add('modal-open');
        }, time);
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    // showModalByTime('.popup_engineer', 60000);
};



export function openModal(selector) {
    closeModal();
    selector.style.display = 'block';
    document.body.classList.add('modal-open');
}

export function closeModal() {
    const windows = document.querySelectorAll('[data-modal]');
    windows.forEach(item => {
        item.style.display = 'none';
    });
    document.body.classList.remove('modal-open');
}