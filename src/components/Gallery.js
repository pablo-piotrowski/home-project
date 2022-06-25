import { Container, Row, Col, Form, Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

import "../App.css";

import ImageBox from "./ImageBox";
import Pager from "./Pager";
import ApiSelect from "./ApiSelect";
import ShowToast from "./ShowToast";

import { API_KEY, API_KEY_CAT, USER_ID } from "./Constants";

export default function Gallery() {
  const [pageCount, setPageCount] = useState(12);
  const [page, setPage] = useState(1);
  const [apiType, setApiType] = useOutletContext();
  const [data, setData] = useState(null);
  const [toastShow, setToastShow] = useState(false);
  const [toastText, setToastText] = useState("");
  const [loading, setLoading] = useState(false);

  const URL = `https://api.the${apiType}api.com/v1/images/search?limit=${pageCount}&page=${page}&order=Desc`;
  const FAV_URL = `https://api.the${apiType}api.com/v1/favourites`;

  let apiKey = API_KEY;

  const handleApiType = (type) => {
    setApiType(type);
    setPage(1);
  };

  const handleSelect = (e) => {
    setPageCount(e.target.value);
    setPage(1);
  };

  const handlePageChange = (number) => {
    setPage(number);
  };

  const fetchData = () => {
    setLoading(true);
    setData(null);
    fetch(URL, {
      method: "get",
      headers: new Headers({
        "x-api-key": API_KEY,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Problem with fetching images");
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setToastText(err.message);
        setToastShow(true);
        setLoading(false);
      });
  };

  const handleAddFav = (id) => {
    if (apiType === "dog") {
      apiKey = API_KEY;
    } else {
      apiKey = API_KEY_CAT;
    }

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-api-key": apiKey },
      body: JSON.stringify({ image_id: id, sub_id: USER_ID }),
    };

    fetch(FAV_URL, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Image already in favourites");
        } else {
          return response.json();
        }
      })
      .then(() => {
        setToastText("Image added to favourites");
        setToastShow(true);
      })
      .catch((err) => {
        setToastText(err.message);
        setToastShow(true);
      });
  };

  useEffect(() => {
    fetchData();
  }, [apiType, pageCount, page]);

  return (
    <Container>
      <Row className="my-4">
        <Col xs={12} md className="text-center text-md-start">
          <ApiSelect apiType={apiType} handleApiType={handleApiType} />
        </Col>
        <Col className="text-center">
          <label className="m-2 d-flex justify-content-center justify-content-md-end align-items-center">
            Results per page
            <Form.Select
              value={pageCount}
              onChange={handleSelect}
              className="w-auto ms-2"
            >
              <option value="12">12</option>
              <option value="24">24</option>
              <option value="36">36</option>
              <option value="48">48</option>
            </Form.Select>
          </label>
        </Col>
      </Row>
      <Row className="justify-content-center my-4">
        {loading && <Spinner animation="border" className="my-4" />}
        {data &&
          data.map(({ id, url }) => (
            <ImageBox key={id} id={id} url={url} handleAddFav={handleAddFav} />
          ))}
      </Row>
      <Row className="my-4 justify-content-center">
        <Col
          className="d-flex align-items-center justify-content-center"
          xs
          md={8}
        >
          <Pager page={page} handlePageChange={handlePageChange} />
        </Col>
      </Row>

      <ShowToast
        toastShow={toastShow}
        setToastShow={setToastShow}
        toastText={toastText}
      />
    </Container>
  );
}
