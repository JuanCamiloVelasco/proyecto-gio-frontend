import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import EventoService from '../../services/EventoService';
import swal from 'sweetalert';

const AddEvento = () => {

    const [evento, setevento] = useState({
        id: "",
        tipoevent: "",
        descrevent: "",
        fechaevent: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const value = e.target.value;
        setevento({...evento, [e.target.name]: value });
    };

    const saveEvento = (e) => {
        e.preventDefault();
        EventoService.saveEvento(evento)
        .then((response) => {
            console.log(response);
            swal({
                title: "Todo bien",
                text: "El evento se ha generado exitosamente",
                icon: "success",
                button: "aceptar"
            })
            navigate("/eventosList");
        })
        .catch((error) => {
            swal({
                title: "Todos Los campos son obligatorios",
                text: "El evento no se ha generado",
                icon: "warning",
                button: "aceptar"
            })
            console.log(error);
        });
    };

    const reset = (e) => {
        e.preventDefault();
        setevento({
            id: "",
            tipoevent: "",
            descrevent: "",
            fechaevent: "",
        });
    }

  return (
    <div className='flex max-w-2xl mx-auto shadow'>
        <div className='px-8 py-8 bg-orange-50 background-color: oldlace;'>
            <div className='font-medium text-2xl tracking-wider text-gray-500'>
                <h1>Añadir Nuevo Evento</h1>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <div className='input-field'>
                    <label className='block text-gray-600 text-sm font-normal'>Tipo de Evento: </label>
                    <input type='text' name="tipoevent" value={evento.tipoevent} onChange={(e) => handleChange(e)} className='block text-gray-600 text-sm font-normal'></input>
                </div>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <div className='input-field'>
                    <label className='block text-gray-600 text-sm font-normal'>Descripcion del evento: </label>
                    <input type='text' name="descrevent" value={evento.descrevent} onChange={(e) => handleChange(e)} className='block text-gray-600 text-sm font-normal'></input>
                </div>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <div className='input-field'>
                    <label className='block text-gray-600 text-sm font-normal'>Fecha del evento: </label>
                    <input type='date' name='fechaevent' value={evento.fechaevent} onChange={(e) => handleChange(e)} className='block text-gray-600 text-sm font-normal'></input>
                </div>
            </div>
            <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
                <button onClick={saveEvento} className='rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-2'>Guardar</button>
                <button onClick={reset} className='rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-2'>Limpiar</button>
                <button onClick={() => navigate("/eventosList")} className='rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-2'>Cancelar</button>
            </div>
        </div>
    </div>
  )
}

export default AddEvento