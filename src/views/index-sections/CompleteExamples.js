import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function CompleteExamples() {
  return (
    <>
      <div className="section">
        <Container className="text-center">
          <Row className="justify-content-md-center">
            <Col lg="8" md="12">
              <h2 className="title">Sobre nós</h2>
              <h5 className="description">
                Desde 2019, ano de nossa inauguração, a Padaria Consider permanece na Avenida Mariza de Souza Mendes, no tradicional bairro siderurgia. Logo nos primeiros anos de mercado, experimentamos um crescimento excepcional, que proporcionou investimentos constantes
          em estrutura física e operacional, sempre focada na produção de panificados: de pães tradicionais aos especiais além de confeitaria fina e seca.
          Hoje, além dos serviços de panificação e uma extensa variedade de produtos, a Consider oferece café da manhã, e diversificados lanches...
          
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CompleteExamples;
