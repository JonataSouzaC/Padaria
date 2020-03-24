import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function NucleoIcons() {
  return (
    <>
      <div className="section section-nucleo-icons">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <h2 className="title">Encomenda de bolos</h2>
              <h5 className="description">
                Faça uma encomenda de bolo de aniversário diretamente em nossa página.
              </h5>
              <Button
                className="btn-round mr-1"
                color="info"
                href="/Encomenda"
                size="lg"
                target="_blank"
              >
                Fazer encomenda
              </Button>

            </Col>
            <Col lg="6" md="12">
                <img src={require("assets/img/boloAniver.jpg")} />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default NucleoIcons;
