import React from 'react'
import { useNavigate } from "react-router-dom";

const Evento = ( {evento, deleteEvento} ) => {

    const navigate = useNavigate();

    const editEvento = (e, id) => {
        e.preventDefault();
        navigate(`/editEvento/${id}`);
    };

  return (
    <tr key={evento.id}>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-500'>{evento.tipoevent}</div>
        </td>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-500'>{evento.descrevent}</div>
        </td>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-500'>{evento.fechaevent}</div>
        </td>
        <td className='text-right px-6 py-4 whitespace-nowrap font-medium text-sm'>
            <a onClick={(e, id) => editEvento(e, evento.id)} className='text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer'>Editar</a>
            <a onClick={(e, id) => deleteEvento(e, evento.id)} className='text-red-500 hover:text-indigo-800 hover:cursor-pointer'>Eliminar</a>
        </td>
    </tr>
  )
}

export default Evento