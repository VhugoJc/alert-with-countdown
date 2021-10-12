import React from 'react';
import './Alert.css';//estilos para el alert
import {Alert as AlertSpace, Affix} from 'antd';
import AlertContent from './AlertContent';//componente del contenido del alert

const Alert = (props) => {
    const {topText, title, url, date, type="info"} = props;//destructuring de props 
    return (  
        <div className="alert">
            <Affix offsetTop={0}>
                <AlertSpace
                    type={type}
                    message={topText}
                    description={<AlertContent title={title} url={url} date={date}/>}
                    showIcon={false}
                    closable={true}

                />
            </Affix>
        </div>
    );
}
 
export default Alert;