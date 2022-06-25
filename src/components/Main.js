import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Main(props) {
  const navigate = useNavigate();

  return (
    <Container>
      <Row className="justify-content-center my-4">
        <Col>
          <div className="px-4 py-5 my-5 text-center">
            <img alt="" src="logo192.png" width="90" height="90" />
            <h1 className="display-5 fw-bold">Animal gallery</h1>
            <div className="col-lg-6 mx-auto">
              <p className="lead my-4">
                Welcome to dog and cats gallery. Which type of person are You?
              </p>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button
                  type="button"
                  className="btn btn-primary btn-lg px-4 mx-2"
                  onClick={() => {
                    props.setApiType("dog");
                    navigate("/gallery");
                  }}
                >
                  I love dogs
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-lg px-4 mx-2"
                  onClick={() => {
                    props.setApiType("cat");
                    navigate("/gallery");
                  }}
                >
                  I prefer cats
                </button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
