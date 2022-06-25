import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

import ImageBox from "./ImageBox";
import ApiSelect from "./ApiSelect";
import ShowToast from "./ShowToast";

import { API_KEY, API_KEY_CAT } from "./Constants";

export default function Favourite() {
  const [apiType, setApiType] = useOutletContext();
  const [favData, setFavData] = useState(null);
  const [toastShow, setToastShow] = useState(false);
  const [toastText, setToastText] = useState("");
  const [loading, setLoading] = useState(false);

  const FAV_URL = `https://api.the${apiType}api.com/v1/favourites`;

  let apiKey = API_KEY;

  const handleApiType = (type) => {
    setApiType(type);
  };

  const handleApiKey = () => {
    if (apiType === "dog") {
      apiKey = API_KEY;
    } else {
      apiKey = API_KEY_CAT;
    }
  };

  const fetchData = () => {
    handleApiKey();
    setLoading(true);
    setFavData(null);

    fetch(FAV_URL, {
      method: "get",
      headers: new Headers({
        "x-api-key": apiKey,
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
        setFavData(data);
        setLoading(false);
      })
      .catch((err) => {
        setToastText(err.message);
        setToastShow(true);
        setLoading(false);
      });
  };

  const handleRemoveFav = (id) => {
    handleApiKey();
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
    };
    fetch(FAV_URL + `/${id}`, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Problem with removing image from favourites");
        } else {
          return response.json();
        }
      })
      .then(() => {
        fetchData();
        setToastText("Image removed from favourites");
        setToastShow(true);
      })
      .catch((err) => {
        setToastText(err.message);
        setToastShow(true);
      });
  };

  useEffect(() => {
    fetchData();
  }, [apiType]);
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center mt-4">Your favourite images</h1>
        </Col>
      </Row>
      <Row className="text-center text-md-start">
        <Col>
          <ApiSelect apiType={apiType} handleApiType={handleApiType} />
        </Col>
      </Row>

      <Row className="justify-content-center my-4">
        {loading && <Spinner animation="border" className="my-4" />}
        {favData &&
          favData.map(({ id, image }) => (
            <ImageBox
              key={id}
              id={id}
              url={image.url}
              type="fav"
              handleRemoveFav={handleRemoveFav}
            />
          ))}
      </Row>

      <ShowToast
        toastShow={toastShow}
        setToastShow={setToastShow}
        toastText={toastText}
      />
    </Container>
  );
}
