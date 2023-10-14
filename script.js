window.addEventListener('DOMContentLoaded', function () {
    const video =  document.querySelector('.video');


    video.addEventListener('click', function() {
        // проверяем на наличие класса ready у видео. Если есть - ничего не делаем. 
        if (video.classList.contains('ready')) {
            return
        }
        // если нету - добавляем класс 
        video.classList.add('ready');
        //получаем ссылку на видео из html
        let videoSrc = video.dataset.src;
        //добавляем и запускаем по клику видео
        video.insertAdjacentHTML('afterbegin', '<iframe src="' + videoSrc + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')
    })
})

//Slider
// const ACTIVE_SLIDE_CLASSNAME = 'gallery__slide_active';

// const slidesNodes = Array.from(document.querySelectorAll('.gallery__slide'));
// console.log(slidesNodes);
// const prevButtonNode = document.querySelector('.gallery__control-prev');
// const nextButtonNode = document.querySelector('.gallery__control-next');
// let activeId;

// init();

// function init() {
//     activeId = 0;

//     prevButtonNode.addEventListener('click', () => {
//         setActiveSlideById(getPrevId());
//     });

//     nextButtonNode.addEventListener('click', () => {
//         setActiveSlideById(getNextId());
//     });
// }

// function setActiveSlideById(id) {
//     const currentId = activeId;
//     activeId = id;

//     slidesNodes[currentId].classList.remove(ACTIVE_SLIDE_CLASSNAME)
//     slidesNodes[activeId].classList.add(ACTIVE_SLIDE_CLASSNAME)
// }

// function getPrevId() {
//     return activeId === 0 ? slidesNodes.length - 1 : activeId - 1;
// }

// function getNextId() {
//     return activeId === (slidesNodes.length - 1) ? 0 : activeId + 1;
// }

// form

// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.getElementById('form');
//     form.addEventListener('submit', formSend);

//     async function formSend(e) {
//         e.preventDefault();

        
// }
// })
//     function formValidate(form) {
//         let error = 0;
//         let formRequired = document.querySelectorAll('required');

//         for (let i = 0; i < formRequired.length; i++) {
//             const input = formRequired[i];
//             formRemoveError(input);
//             if (input.classList.contains('email')) {
//                 if (emailTest(input)) {
//                     formAddError(input);
//                     error++
//                 }
//             } else if (input.getAttribute('type') === "checkbox" && input.checked === false) {
//                 formAddError(input)
//                 error++;
//             } else {
//                 if (input.value === '') {
//                     formAddError(input);
//                     error++;
//                 }
//             }
//         }
//     }
// // Добавляем класс с ошибкой
//     function formAddError(input) {
//         input.parentElement.classList.add('js_error');
//         input.classList.add('js_error');
//     }
// //убираем класс с ошибкой
//     function formRemoveError(input) {
//         input.parentElement.classList.remove('js_error');
//         input.classList.remove('js_error');
//     }
// }
// )