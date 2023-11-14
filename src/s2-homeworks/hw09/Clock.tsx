import React, {useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)

    const start = () => {
        // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
        // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)
       
        const time = (setInterval(() => {
            setDate(new Date());
        }, 1000));
        setTimerId(+time)
        setShow(true);
    };

    const stop = () => {
        // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
        setShow(false)
        clearInterval(timerId)
        setTimerId(undefined)
    }

    const onMouseEnter = () => { // пишут студенты // показать дату если наведена мышка
        setShow(true)
    }
    const onMouseLeave = () => { // пишут студенты // спрятать дату если мышка не наведена
        setShow(false)
    }
    // const dayWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // const monthsTest = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    // const hours = String(date.getHours()).padStart(2, '0');
    // const minutes = String(date.getMinutes()).padStart(2, '0');
    // const seconds = String(date.getSeconds()).padStart(2, '0');
    // const stringTime = `${hours}:${minutes}:${seconds}` || <br/> // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
    
    
    //  const numberDay = String(date.getDate()).padStart(2, '0');

    //  const year = String(date.getFullYear());
  
    // const stringDate = `${numberDay}.${date.getMonth()}.${year}` || <br/> // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем
  
   
    
    // // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
    // // let test = new Intl.DateTimeFormat(["long"])
    // // console.log(test.format(date.getDay()));
    //    //под вопросом реализации , не придумал как сделать с помощью статьи
    // const stringDay = dayWeek[date.getDay()] || <br/> // пишут студенты

    
    // const stringMonth = monthsTest[date.getMonth()] || <br/> // пишут студенты
    // console.log(show);
    
    const stringTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }) || <br/>;
    const stringDate = date.toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' }) || <br/>;
    const stringDay = date.toLocaleDateString('en-US', { weekday: 'long' }) || <br/>;
    const stringMonth = date.toLocaleDateString('en-US', { month: 'long' }) || <br/>;
    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                            <span id={'hw9-date'}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={timerId !== undefined} // пишут студенты // задизэйблить если таймер запущен
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={!timerId} // пишут студенты // задизэйблить если таймер не запущен
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock
