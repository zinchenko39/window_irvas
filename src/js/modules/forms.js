import checkNumInputs from './checkNumInputs';
import { closeModal } from './modals';

const forms = (state) => {
    const form = document.querySelectorAll('.form'),
        inputs = document.querySelectorAll('input');


    //Validation all phone inputs
    checkNumInputs('input[name="user_phone"]');

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };
    
    //Post data to server
    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await res.text();
    };

    const cleareInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);
            if (item.getAttribute ('data-calc') === 'end') {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }

            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;
                })
                .catch(() => {
                    statusMessage.textContent = message.failure;
                })
                .finally(() => {
                    cleareInputs();
                    setTimeout(() => {
                        statusMessage.remove();                
                        closeModal();
                    }, 5000); 
                });
        });

    });
    
};

export default forms;