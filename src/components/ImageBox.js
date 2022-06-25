import { Col, Button, Card } from "react-bootstrap";
import { useState } from "react";
import FullScreen from "./FullScreen";

export default function ImageBox(props) {
  const [visible, setVisible] = useState(false);

  const handleFullScreen = () => {
    setVisible(true);
  };

  return (
    <Col className="text-center" sm={6} lg={3}>
      <Card className="mb-4">
        <Card.Img
          variant="top"
          alt={props.id}
          src={props.url}
          className="image-preview"
          onClick={handleFullScreen}
        />

        <Card.Body className="text-end">
          <Button
            variant="success btn-sm"
            onClick={() => {
              props.type === "fav"
                ? props.handleRemoveFav(props.id)
                : props.handleAddFav(props.id);
            }}
          >
            {props.type === "fav"
              ? "Remove from favourite"
              : "Add to favourite"}
          </Button>
        </Card.Body>
      </Card>

      <FullScreen
        url={props.url}
        alt={props.id}
        visible={visible}
        setVisible={setVisible}
      />
    </Col>
  );
}
