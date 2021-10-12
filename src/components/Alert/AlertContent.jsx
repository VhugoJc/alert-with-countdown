import React from 'react';
import { Button } from 'antd';
import CountdownComponent from '../CountdownComponent';

const AlertContent = (props) => {
    const {title, url,date} = props;//destructuring
    return (  
        <div className="alert__content">
            <h2 className="alert__content-text_title">{title}</h2>
            <CountdownComponent date={date} text="Tiempo restante:" />
            <Button href={url} target="_blank"  type="primary" className="alert__content-btn">Ver más</Button>
        </div>
    );
}
 
export default AlertContent;

