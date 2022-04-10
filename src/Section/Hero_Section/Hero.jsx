import React, {Suspense} from 'react';
import {Container, Row} from 'react-bootstrap';
import {FormForSendingBouit} from '../../Components/SendBouit';
const Tendance = React.lazy(() => import('../../Components/Tendances'));
const Bouits = React.lazy(() => import('../../Components/Bouit'));

export class HeroPage extends React.Component {
    render(){
        return(
            <main id="main" className="position-relative sectionColor">
                <Container className="mt-5 position-relative">
                    <div className="container-fluid">
                        <Row className="row">
                            <div className="col-md-4 sticky mb-4">
                                <FormForSendingBouit />
                                <div className="mt-3 col-lg-9">
                                    <h3 className="text-light text-center mb-3">Tendance</h3>
                                    <div className="d-flex flex-wrap">
                                        <Suspense fallback={<span className="rounded-pill text-white p-2 pointer m-1 bgColor">Chargement</span>}>
                                            <Tendance />
                                        </Suspense>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex flex-column-reverse relative">
                                <Suspense fallback={<span className="rounded-pill text-white p-2 pointer m-1 bgColor">Chargement</span>}>
                                    <Bouits />
                                </Suspense>
                            </div>
                        </Row>
                    </div>
                </Container>
            </main>
        )
    }
}