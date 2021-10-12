import React from 'react';
import Alert from '../components/Alert';

const Home = () => {
    const homeStyle={
        height: "100vw"//para comprobar que al hacer scroll el alert se quede fijado en top
    }
    return ( 
        <div style={homeStyle}>
            <Alert 
                topText="ultima etapa"
                title="Aprovecha y obtén un 30% de Descuento directo"
                url="http://www.google.com"
                date={new Date("2021-11-03")}
            />
            
        </div>
     );
}
 
export default Home;