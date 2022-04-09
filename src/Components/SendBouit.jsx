import React from 'react';

export class FormForSendingBouit extends React.Component {

    render(){
        return(
            <form role="form">
                <div className="mb-3 text-dark">
                    <label htmlFor="floatingInput" className="text-light mb-3">Username</label>
                    <input type="text" className="form-control rounded-pill bgColor text-light" data-input="usernameInput" itemID="floatingInput"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="floatingInput" className="text-light mb-3">BouIT ta journée !</label>
                    <input id="floatingInput" data-input="textInput" type="text" className="rounded-pill form-control text-light mb-2 bgColor"/>
                </div>
                <input type="submit" className="btn btn-light text-light rounded-pill bgColor fw-bolder p-md-2 pointer" value="Envoie ton Bouit"/>
            </form>
        );
    }
}