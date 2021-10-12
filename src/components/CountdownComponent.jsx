import React from 'react'
import Countdown from 'react-countdown';
const CountdownComponent = (props) => {
    const {date, text="Sólo quedan:"}=props;
    const renderer =  ({ days, hours, minutes, seconds, completed })=>{//función que renderiza con la informacion del countdown
        if(!completed){//si aun no se ha completado el tiempo
            return(
                <h3>{text} &nbsp;
                    {days<10 ?`0${days}` :`${days}`}:
                    {hours<10 ?`0${hours}` :`${hours}`}:
                    {minutes<10 ?`0${minutes}` :`${minutes}`}:
                    {seconds<10 ?`0${seconds}` :`${seconds}`}
                </h3>
            );
        }else{
            return(
                <h2>Agotado</h2>//cuando ya pasó la fecha dada
            );
        }
    }
    return(
        <Countdown
        date={date}
        renderer={renderer}
    />  
    );
}
 
export default CountdownComponent;