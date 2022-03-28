import React,{useState} from 'react';

const Formulario = ({guardarBuscarLetras}) => {

    //State para tomar los valores pasado por el usuario
    const [busqueda,guardarBusqueda] = useState({
            artista:'',
            musica:''
    });
    //State para el error
    const [error,guardarError] = useState(false);

    //Tomar los valores y pasaselo a lo input
    const {artista, musica} = busqueda;

    //Funcion para los cambios en los inputs
    const changeInput = e =>{
        guardarBusqueda({
            ...busqueda,
            [e.target.name]:e.target.value
        })
    }
    //Funcion para buscar la informacion solicitada por el usuario
    const buscarInformacion = e =>{
        e.preventDefault();
     //Validar los campos
         if(artista.trim()===''||musica.trim()===''){
            guardarError(true);
            return
        }
        guardarError(false);
        guardarBuscarLetras(busqueda);
    }


    return ( 
    

       <div className='bg-info'>
           <div className='container'>
           { error ? <p className="alert alert-danger text-center p-2">Todos los campos son obligatorios</p> : null}
               <div className='row'>
                   <form
                     className='col card text-white bg-transparent mb-5 pt-5 pb-2 '
                     onSubmit={buscarInformacion}
                    >
                       <fieldset>
                           <legend className='text-center'>Buscador Letras Canciones</legend>
                           
                           <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artista"
                                            placeholder="Nombre Artista"
                                            value={artista}
                                            onChange={changeInput}
                                        />
                                    </div>
                                    
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Canción</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="musica"
                                            placeholder="Nombre Canción"
                                            value={musica}
                                           onChange={changeInput}
                                        />
                                    </div>
                                </div>
                            </div>

                            <button 
                                type="submit" 
                                className="btn btn-primary float-right"
                            >Buscar</button>
                       </fieldset>
                   </form>
               </div>
           </div>
       </div>
     );
}
 
export default Formulario;