import { Container, Row, Col } from "react-bootstrap";

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <h2>Have any questions?</h2>
          </Col>
          <Col xs={12} md={6}>
            <form action="mailto:andreasgarciia2000@gmail.com?subject=Heeeejej&body=heeeej">
              <Row>
                <Col xs={12} className="px-1">
                  <button type="submit"><span>Contact Me</span></button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
