import Toast from "react-bootstrap/Toast";

export default function ShowToast(props) {
  return (
    <Toast
      onClose={() => props.setToastShow(false)}
      show={props.toastShow}
      delay={3000}
      autohide
      position="top-center"
      className="toast-info"
    >
      <Toast.Header>
        <strong className="me-auto">Info</strong>
      </Toast.Header>
      <Toast.Body>{props.toastText}</Toast.Body>
    </Toast>
  );
}
