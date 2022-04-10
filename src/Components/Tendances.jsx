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
                //je veut push dans le tableau dataArray les données de l'api
                data.forEach(element => {
                    data.push(element)
                });
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


    console.log(Tendances)


}

/*.sort(({word: previousNb}, {word: currentNb}) => previousNb - currentNb)
    .map(({word, Nb}) =>
        <span key={Nb} className="rounded-pill text-white p-2 pointer m-1 bgColor">{word}</span>
    )*/
