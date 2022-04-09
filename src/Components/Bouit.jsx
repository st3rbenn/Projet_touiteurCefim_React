import React, {useEffect, useState} from 'react';

import axios from 'axios';

export default function Bouit() {

    const [bouits, setBouits] = useState([], true);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        (async () => {
            try{
                setIsLoading(true);
                const { data } = await axios.get('https://touiteur.cefim-formation.org/list');
                setBouits(data.messages);
            }catch (e) {
                setIsError(e);
            }finally {
                setIsLoading(false);
            }
        })();
    }, []);

    if(isError) {
        return <div className="card text-white bgColor mb-3 overflow">
            <h5 className="bgColor text-center">Une erreur est survenu</h5>
        </div>
    }

    if(isLoading) {
        return <div className="card text-white bgColor mb-3 overflow">
                    <h5 className="bgColor text-center">Chargement</h5>
                </div>
    }


    return (
        bouits.map((bouit) => // bouit est un tableau de bouits (un bouit par bouit)
            <div className="card text-white bgColor mb-3 overflow" key={bouit.id}>
                <h5 className="bgColor text-center">{bouit.name}</h5>
                <div className="card-body justify-content-between">
                    <p className="card-text">{bouit.message}</p>
                    <form className="d-flex gap-2" id="likeCommentForm">
                        <input type="submit"
                               className="btn d-flex align-items-center gap-2 bg-Button pointer d-none"
                               id="likeButton"/>
                        <input type="submit"
                               className="btn d-flex align-items-center gap-2 bg-Button pointer d-none"
                               id="commentButton"/>
                    </form>
                </div>
            </div>
        )
    );

}
