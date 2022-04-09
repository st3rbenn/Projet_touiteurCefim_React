import React from 'react';


export class Bouit extends React.Component {
    render() {
        return(
                <div className="card text-white bgColor mb-3 overflow" data-id="1">
                    <h5 className="bgColor text-center">Antho</h5>
                    <div className="card-body justify-content-between">
                        <p className="card-text">Je viens de redémarrer le serveur. Have fun !</p>
                        <form className="d-flex gap-2" id="likeCommentForm">
                            <input type="submit" className="btn d-flex align-items-center gap-2 bg-Button pointer d-none" id="likeButton" value="160 ❤️" />
                            <input type="submit" className="btn d-flex align-items-center gap-2 bg-Button pointer d-none" id="commentButton" value="8 💬" />
                        </form>
                    </div>
                </div>
        )
    }
}