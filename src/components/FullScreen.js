export default function FullScreen(props) {
  const handleClose = () => {
    props.setVisible(false);
  };
  return (
    <div
      className={props.visible ? "full-screen visible" : "full-screen"}
      onClick={handleClose}
    >
      <img src={props.url} alt={props.alt} />
      <i className="bi bi-x-circle position-absolute"></i>
    </div>
  );
}
