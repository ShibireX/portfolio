import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/cute_robot.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Hi! I am Andreas.", "¡Hola! Soy Andreas.", "Hej! Jag heter Andreas.", 
  "안녕하세요! 제 이름은 안드레아스." ];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])


  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(200);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div>
                <h1><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Hi! I am Andreas.", "¡Hola! Soy Andreas.", "Hej! Jag heter Andreas.", 
              "안녕하세요! 제 이름은 안드레아스" ]'><span className="wrap">{text}</span></span></h1>
                <p>Welcome to my portfolio! I am glad you found your way here. I am currently studying Media Technology engineering at KTH in Stockholm, whilst working on a student
                  developer team in the video streaming industry. I have a passion for visual aesthetics, music and complex code, and many different areas of interest. If you want to 
                  get to know me better, feel free to scroll down!</p>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
