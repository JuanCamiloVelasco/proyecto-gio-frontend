import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';

const FiltroEventosFechas = () => {

    const [evento, setevento] = useState({
        id: "",
        fechaInicial: "",
        fechaFinal: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const value = e.target.value;
        setevento({...evento, [e.target.name]: value });
    };

    const FiltroFechas = (e, fechaInicial, fechaFinal) => {
        e.preventDefault();
        if(fechaFinal !== "" && fechaFinal !== ""){
            navigate(`/filtroFechasList/${fechaInicial}/${fechaFinal}`);
        } else {
            swal({
                title: "Seleccione el rago de fechas a filtrar",
                text: "Todos los campos son obligatorios",
                icon: "warning",
                button: "aceptar"
            })
        }
        
    };

  return (
    <div className='flex max-w-2xl mx-auto shadow'>
        <div className='px-8 py-8 bg-orange-50 background-color: oldlace;'>
            <div className='font-medium text-2xl tracking-wider text-gray-500'>
                <h1>Filtro de fechas</h1>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <div className='input-field'>
                    <label className='block text-gray-600 text-sm font-normal'>Fecha inicial: </label>
                    <input type='date' placeholder='YYYY-MM-DD' name="fechaInicial" value={evento.fechaInicial} onChange={(e) => handleChange(e)} className='block text-gray-600 text-sm font-normal'></input>
                </div>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <div className='input-field'>
                    <label className='block text-gray-600 text-sm font-normal'>Fecha final: </label>
                    <input type='date' placeholder='YYYY-MM-DD' name="fechaFinal" value={evento.fechaFinal} onChange={(e) => handleChange(e)} className='block text-gray-600 text-sm font-normal'></input>
                </div>
            </div>
            <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
                <button onClick={(e, fechaInicial, fechaFinal) => FiltroFechas(e, evento.fechaInicial, evento.fechaFinal)} className='rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-2'>Filtrar</button>
                <button onClick={() => navigate("/filtroEventos")} className='rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-2'>Cancelar</button>
            </div>
        </div>
    </div>
  )
}

export default FiltroEventosFechas
