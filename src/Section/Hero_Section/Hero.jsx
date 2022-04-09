import React from 'react';
import Bouits  from '../../Components/Bouit'
import Container from 'react-bootstrap/Container';
import {Tendances} from "../../Components/Tendances";


export class HeroPage extends React.Component {
    render(){
        return(
            <main id="main" className="position-relative sectionColor">
                <Container className="mt-5 position-relative">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-4 sticky mb-4">
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
                                <div className="mt-3 col-lg-9">
                                    <h3 className="text-light text-center mb-3">Tendance</h3>
                                    <div className="d-flex flex-wrap">
                                        <Tendances />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex flex-column-reverse relative">
                                <Bouits />
                            </div>
                        </div>
                    </div>
                </Container>
            </main>
        )
    }
}