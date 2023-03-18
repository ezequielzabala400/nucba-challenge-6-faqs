
const faqList = document.querySelector('.Faq-list');
const itemsTitle = document.querySelectorAll('.item__title');
const arrows = document.querySelectorAll('.arrow');
const itemsInfo = document.querySelectorAll('.item__info');

const selectedQuestion = (e) => {
    
    if(!e.target.classList.contains('item__title')) return;
    const selectFaq = e.target;
    const arrow = selectFaq.querySelector('.arrow');
    const info = selectFaq.nextElementSibling;

    itemsTitle.forEach(item => {
        if(item.classList.contains('item__title--active')){
            item.classList.remove('item__title--active');
        }
    });
    arrows.forEach(arrow => {
        if(arrow.classList.contains('arrow--active')){
            arrow.classList.remove('arrow--active');
        }
    });
    itemsInfo.forEach(item => {
        if(item.classList.contains('item__info--active')){
            item.classList.remove('item__info--active');
        }
    })

    selectFaq.classList.toggle('item__title--active');
    arrow.classList.toggle('arrow--active');
    info.classList.toggle('item__info--active');

}

faqList.addEventListener('click', selectedQuestion)