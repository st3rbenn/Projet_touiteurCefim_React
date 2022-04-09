import React from 'react';
import Bouits  from '../../Components/Bouit';
import Tendance from "../../Components/Tendances";
import {FormForSendingBouit} from '../../Components/SendBouit'
import Container from 'react-bootstrap/Container';


export class HeroPage extends React.Component {
    render(){
        return(
            <main id="main" className="position-relative sectionColor">
                <Container className="mt-5 position-relative">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-4 sticky mb-4">
                                <FormForSendingBouit />
                                <div className="mt-3 col-lg-9">
                                    <h3 className="text-light text-center mb-3">Tendance</h3>
                                    <div className="d-flex flex-wrap">
                                        <Tendance />
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