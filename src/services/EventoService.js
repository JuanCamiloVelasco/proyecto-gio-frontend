import axios from "axios";

const CONEXION_API_BASE_URL = "http://localhost:8080/eventos"
const CONEXION_API_FILTRO_FECHA = "http://localhost:8080/filtro"
const CONEXION_API_FILTRO_CRITERIA = "http://localhost:8080/criteria"

class EventoService {
    saveEvento(evento){
        return axios.post(CONEXION_API_BASE_URL, evento);
    }

    getEventos(){
        return axios.get(CONEXION_API_BASE_URL);
    }

    deleteEvento(id){
        return axios.delete(CONEXION_API_BASE_URL + "/" + id);
    }

    getEventoById(id){
        return axios.get(CONEXION_API_BASE_URL + "/" + id);
    }

    updateEvento(evento, id){
        return axios.put(CONEXION_API_BASE_URL + "/" + id, evento);
    }

    filtroFechas(fechaInicial, fechaFinal){
        return axios.get(CONEXION_API_FILTRO_FECHA + "/" + fechaInicial + "/" + fechaFinal);
    }

    filtroCriteria(tipoEvento){
        return axios.get(CONEXION_API_FILTRO_CRITERIA + "/" + tipoEvento);
    }

}

export default new EventoService();