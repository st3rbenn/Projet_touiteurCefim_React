import React, {useEffect, useState} from 'react'

export default function Tendance() {

    const [tendances, setTendances] = useState([]);
    useEffect(() => {

        fetch('https://touiteur.cefim-formation.org/trending')
            .then((data) => data.json())
            .then((response) => {
                let DataArray = [];
                Object.entries(response).sort((a, b) => b[1] - a[1]).forEach(([key, value]) => {
                    DataArray.push(key)
                })
                setTendances(DataArray.slice(0, 25))

            })
    }, []);

   return (
       tendances.map((tendance) => {
           return <span className="rounded-pill text-white p-2 pointer m-1 bgColor">{tendance}</span>
       })
   )
}
