import { Button } from "react-bootstrap";

export default function Gallery(props) {
  return (
    <>
      <Button
        className="m-2 float-md-start"
        variant={props.apiType === "dog" ? "primary" : "secondary"}
        onClick={() => props.handleApiType("dog")}
      >
        <i className="bi bi-card-image"></i> Dog gallery
      </Button>

      <Button
        className="m-2"
        variant={props.apiType === "cat" ? "primary" : "secondary"}
        onClick={() => props.handleApiType("cat")}
      >
        <i className="bi bi-card-image"></i> Cat gallery
      </Button>
    </>
  );
}
