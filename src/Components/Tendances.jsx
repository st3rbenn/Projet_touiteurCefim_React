import React, {useEffect, useState} from 'react'
import axios from'axios'


export default function Tendance() {
    //je veut affiché seulement 25 tendances

    const [Tendances, setTendances] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    let dataArray = [];

    useEffect(() => {
        (async () => {
            try{
                setIsLoading(true)
                const { data } = await axios.get('https://touiteur.cefim-formation.org/trending')
                setTendances(Object.entries(data).sort((a, b) => b[1] - a[1]))
            }catch (e) {
                setIsError(e)
            }finally {
                setIsLoading(false)
            }
        })();
    }, []);

    if(isError){
        return <span className="rounded-pill text-white p-2 pointer m-1 bgColor">Une erreur est survenu: {isError.message}</span>
    }

    if(isLoading){
        return <span className="rounded-pill text-white p-2 pointer m-1 bgColor">Chargement</span>
    }


    return (
        Tendances.map(([tendance]) => {
            dataArray.push(tendance)
            return (
                <span key={tendance} className="rounded-pill text-white p-2 pointer m-1 bgColor">{tendance}</span>
            )
        })
    )
}
