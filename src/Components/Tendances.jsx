import React, {useEffect, useState} from 'react'
import axios from'axios'


export default function Tendance() {
    const [Tendances, setTendances] = useState([], true);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);


    useEffect(() => {
        (async () => {
            try{
                setIsLoading(true)
                const { data } = await axios.get('https://touiteur.cefim-formation.org/trending')
                console.log(data)
                setTendances(data)
            }catch (e) {
                setIsError(e)
            }finally {
                setIsLoading(false)
            }
        })();
    }, []);

    if(isError){
        return <span className="rounded-pill text-white p-2 pointer m-1 bgColor">Une erreur est survenu</span>
    }

    if(isLoading){
        return <span className="rounded-pill text-white p-2 pointer m-1 bgColor">Chargement</span>
    }


}

