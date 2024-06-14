import {useEffect, useState} from "react";
import apiClient from "../services/api-client";
import {CanceledError} from "axios";
interface Game {
    id:number,
    name:string
}
interface FetchGameResponse {
    count : number,
    results : Game[]
}

const useGames = () =>{
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');
    useEffect(() => {
        const controllers = new AbortController();
        apiClient.get<FetchGameResponse>('/games' , {signal: controllers.signal}).then(res =>setGames(res.data.results))
            .catch(error => {
                if(error instanceof CanceledError) return;
                    setError(error.message)});
        return () => controllers.abort();
    },[] );
    return{games, setGames, error, setError}
 }
  export default useGames;