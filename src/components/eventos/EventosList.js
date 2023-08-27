import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import Evento from './Eventos'
import EventoService from '../../services/EventoService';
import swal from 'sweetalert';

const EventosList = () => {

    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [eventospost, setEventospost] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
            const response = await EventoService.getEventos();
            setEventospost(response.data);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
      };
      fetchData();
    }, []);

    const deleteEvento = (e, id) => {
        e.preventDefault();
        EventoService.deleteEvento(id).then((res) => {
            swal({
                title: "Todo bien",
                text: "El evento se ha eliminado exitosamente",
                icon: "success",
                button: "aceptar"
            })
            if(eventospost) {
                setEventospost((prevElement) => {
                    return prevElement.filter((evento) => evento.id !== id)
                });
            }
        });
    };
    
  return (
    <div className="">
    <div className="h-16 px-8 flex items-center bg-gray-800" >
      <p className="text-white font-bold">Gestor de eventos</p>
    </div>
    <div className='container mx-auto my-8'>
        <div className='h-12'>
            <button onClick={() => navigate("/addEvento")} className='rounded bg-slate-600 text-white px-6 py-2 font-semibold'>Añadir Evento</button>
        </div>
        <div className='flex shadow border-b'>
            <table className='min-w-full'>
                <thead className='bg-gray-50'>
                    <tr>
                        <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Tipo de evento</th>
                        <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Descripcion del evento</th>
                        <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Fecha del evento</th>
                        <th className='text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Acciones</th>
                    </tr>
                </thead>
                {!loading && ( 
                    <tbody className='bg-white'>
                        {eventospost.map((evento) => (
                            <Evento evento={evento} deleteEvento={deleteEvento} key={evento.id}></Evento>
                        ))}
                    </tbody>
                )}
            </table>
        </div>
    </div>
    </div>
  )
}

export default EventosList