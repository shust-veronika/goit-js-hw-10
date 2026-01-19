import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
const form = document.querySelector('.form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const delay = parseInt(event.currentTarget.elements.delay.value);
    const state = event.currentTarget.elements.state.value;
    createPro(delay, state)
    .then((delay) => {
        iziToast.success({
            title: 'OK',
            message: `✅Fulfilled promise in ${delay}ms`,
            position: 'topRight',
            icon: ''
        });
    })
    .catch((delay) => {
    iziToast.error({
        title: 'Error',
        message: `❌Rejected promise in ${delay}ms`,
        position: 'topRight',
        icon: ''
    });
    });
    form.reset();
});
function createPro(delay, state) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === 'fulfilled') {
                resolve(delay);
            } else {
                reject(delay)
            }
        }, delay);
    });
}