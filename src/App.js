import axios from 'axios';
import React,{Fragment,useState,useEffect} from 'react';
import Formulario from './Components/Formulario';
import Musica from './Components/Musica';
import Informacion from './Components/Informacion';
function App() {

    //State para almacenar lo que pase el ususario
    const [buscarLetras,guardarBuscarLetras]=useState({});

    //State para almacenar los datos de la api
    const [letras,guardarLetras] = useState('');
    const [informacion,guardarInformacion]=useState({});
    
    //UseEfect para cuando suceda un cambio en el formulario
    useEffect(() => {
      if(Object.keys(buscarLetras).length === 0) return;

      const consultarApi = async () =>{
        const {artista,musica} = buscarLetras;
        const url = `https://api.lyrics.ovh/v1/${artista}/${musica}`;
        const url2 = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artista}`;
        const [letras,informacion] = await Promise.all([
          axios(url),
          axios(url2)
        ])
        guardarLetras(letras.data.lyrics);
        guardarInformacion(informacion.data.artists[0]);

      }
      consultarApi();
    }, [buscarLetras])

  return (
   <Fragment>
     <Formulario
       guardarBuscarLetras={guardarBuscarLetras}
     />
      <div className="container mt-5">
            <div className="row">
              <div className="col-md-6">
                <Informacion
                  informacion={informacion}
                />
              </div>
              <div className="col-md-6">
                  <Musica 
                    letras={letras}
                  />
              </div>
            </div>
          </div>
   </Fragment>
  );
}

export default App;
