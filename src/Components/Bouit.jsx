import React, {useEffect, useState} from 'react';


export default function Bouit() {
    const [bouits, setBouits] = useState([]);

    useEffect(() => {

        fetch('https://touiteur.cefim-formation.org/list')
            .then((data) => data.json())
            .then((response) => {
                setBouits(response.messages);
            })
    }, []);


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
