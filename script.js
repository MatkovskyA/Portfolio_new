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
        video.insertAdjacentHTML('afterbegin', '<iframe src="' + videoSrc + '" title="YouTube video player" borders="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')
    })
})
