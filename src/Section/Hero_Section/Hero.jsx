import React, {Suspense} from 'react';
import {Container, Row} from 'react-bootstrap';
import FormForSendingBouit from '../../Components/SendBouit';
import AllTendance from "../../Components/Tendances/Tendance";

const Bouits = React.lazy(() => import('../../Components/Bouit'));

export default function HeroPage()  {

        return(
            <main id="main" className="position-relative sectionColor">
                <Container className="mt-5 position-relative">
                    <div className="container-fluid">
                        <Row l={3}>
                            <div className="col-md-4 sticky mb-4">
                                <FormForSendingBouit />
                                <AllTendance />
                            </div>
                            <div className="col-md-6 d-flex flex-column-reverse relative">
                                <Suspense fallback={<span className="rounded-pill text-white p-2 pointer m-1 bgColor">Chargement</span>}>
                                    <Bouits/>
                                </Suspense>
                            </div>
                        </Row>
                    </div>
                </Container>
            </main>
        )
}