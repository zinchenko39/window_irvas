const images = () => {
    const imgPopUp = document.createElement('div'),
        workSection = document.querySelector('.works'),
        bigImg = document.createElement('img');
    
    imgPopUp.classList.add('popup');
    workSection.appendChild(imgPopUp);

    imgPopUp.style.justifyContent = 'center';
    imgPopUp.style.alignItems = 'center';
    imgPopUp.style.display = 'none';

    imgPopUp.appendChild(bigImg);


    workSection.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target;
        if (target && target.classList.contains('preview')) {
            imgPopUp.style.display = 'flex';
            const path = e.target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);
            bigImg.style.width = '720px';
            bigImg.style.height = '700px';
            document.body.classList.add('modal-open');
        }
        
        if (target && target.matches('div.popup')) {
            imgPopUp.style.display = 'none';
            document.body.classList.remove('modal-open');
        }

    });


};

export default images;
