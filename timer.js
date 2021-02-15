//таймер
/* Надо знать дедлайн, сколько до него осталось относительно времени сейчас. Из разницы между временем сейчас и дедлайном мы будем вытаскивать часы минуты и так далее. 
Нам также нужна функция, которая будет изменять данные в верстке. И функция, которая будет обновлять данные. 
*/
//Date.parse() - превращает любую дату в количество мс. 
    let deadline = '2021-02-16';

    function getTimeRemaining(endtime) {

        let remainingTime = Date.parse(endtime) - Date.parse(new Date),
            seconds = Math.floor((remainingTime / 1000) % 60),
            minutes = Math.floor((remainingTime / 1000 / 60) % 60),
            hours = Math.floor((remainingTime / 1000 / 60 / 60));

        return {
            'total': remainingTime,
            'seconds': seconds,
            'minutes': minutes,
            'hours': hours
        }
    }

    //id - контейнер из верстки, где часы, минуты и секунды
    function setClock(id, endtime) {
        let timer = document.querySelector(id);
        let hours = timer.querySelector('.hours');
        let minutes = timer.querySelector('.minutes');
        let seconds = timer.querySelector('.seconds');
        let timeInterval = setInterval(updateClock, 1000);

        //функция обновляющая часы, каждую секунду. 
        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            if(t.hours < 10) {
                hours.textContent = '0' + t.hours;  
            }
            minutes.textContent = t.minutes;
            if(t.minutes < 10) {
                minutes.textContent = '0' + t.minutes;  
            }
            seconds.textContent = t.seconds;
            if(t.seconds < 10) {
                seconds.textContent = '0' + t.seconds;  
            }

            //останавливаем таймер и устанавливаем нули, если время истекло
            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }



    //передавай ид можно создавать разные таймеры одной функцией. 
    setClock('#timer', deadline);

