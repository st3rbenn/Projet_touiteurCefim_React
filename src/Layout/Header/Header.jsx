import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


export class Header extends React.Component{

    render(){
        return(
                <Container className="navbar navbar-dark navbar-expand-sm d-flex">
                    <Container className="position-sticky">
                        <a href="#" className="navbar-brand btn">BouTTouit</a>
                        <Button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon">

                            </span>
                        </Button>
                        <div className="collapse navbar-collapse justify-content-end">
                            <ul className="navbar-nav ml-auto gap-3 btn-group-sm">
                                <li className="nav-item btn">
                                    <Button className="btn btn-dark text-light" data-bs-toggle="modal" data-bs-target="#modalForm">
                                        Connexion
                                    </Button>
                                </li>
                                <li className="nav-item btn">
                                    <Button className="btn text-light" data-bs-toggle="modal" data-bs-target="#modalForm">
                                        Inscription
                                    </Button>
                                </li>
                            </ul>
                        </div>
                    </Container>
                </Container>
        );
    }
}

