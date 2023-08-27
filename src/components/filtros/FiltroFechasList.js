import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Evento from '../eventos/Eventos'
import EventoService from '../../services/EventoService';

const FiltroFechasList = () => {

    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [eventospost, setEventospost] = useState(null);
    const { id } = useParams();
    const { fechaInicial } = useParams();
    const { fechaFinal } = useParams();
    const [evento] = useState({
        id: id,
        fechaInicial: fechaInicial,
        fechaFinal: fechaFinal,
    });

    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
            const response = await EventoService.filtroFechas(evento.fechaInicial, evento.fechaFinal);
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
        <p className="text-white font-bold">filtro de eventos por fecha</p>
        </div>
        <div className='container mx-auto my-8'>
            <div className='h-12'>
                <button onClick={() => navigate("/filtroFechas")} className='rounded bg-slate-600 text-white px-6 py-2 font-semibold'>Atras</button>
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

export default FiltroFechasList