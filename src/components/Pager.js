import { Button } from "react-bootstrap";

export default function Pager(props) {
  return (
    <>
      {props.page > 1 && (
        <Button
          className="m-2"
          variant="secondary"
          onClick={() => props.handlePageChange(props.page - 1)}
        >
          <i className="bi bi-chevron-left"></i>
        </Button>
      )}

      {props.page > 2 && (
        <Button
          className="m-2"
          variant="outline-secondary"
          disabled={props.page === 1}
          onClick={() => props.handlePageChange(props.page - 2)}
        >
          {props.page - 2}
        </Button>
      )}

      {props.page > 1 && (
        <Button
          className="m-2"
          variant="outline-secondary"
          disabled={props.page === 1}
          onClick={() => props.handlePageChange(props.page - 1)}
        >
          {props.page - 1}
        </Button>
      )}

      <span className="mx-4">{props.page}</span>

      <Button
        className="m-2"
        variant="outline-secondary"
        onClick={() => props.handlePageChange(props.page + 1)}
      >
        {props.page + 1}
      </Button>

      <Button
        className="m-2"
        variant="outline-secondary"
        onClick={() => props.handlePageChange(props.page + 2)}
      >
        {props.page + 2}
      </Button>

      <Button
        className="m-2"
        variant="secondary"
        onClick={() => props.handlePageChange(props.page + 1)}
      >
        <i className="bi bi-chevron-right"></i>
      </Button>
    </>
  );
}
