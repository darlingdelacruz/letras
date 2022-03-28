import React,{Fragment} from 'react';

const Musica = ({letras}) => {

    if(letras.length === 0) return null;

    return ( 
        <Fragment>
            <h2>Letra Canción</h2>
            <p className="letra">{letras}</p>
        </Fragment>
    );
}
 
export default Musica;