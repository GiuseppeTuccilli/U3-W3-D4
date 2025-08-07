import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Job from "./Job";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  //const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jobs = useSelector((state) => {
    return state.jobs.jobs;
  });

  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(
      (
        dispatch
        //  getState
      ) => {
        fetch(baseEndpoint + query + "&limit=20")
          .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              throw new Error("errore nella chiamata");
            }
          })
          .then((data) => {
            console.log(data);
            dispatch({
              type: "GET_JOBS",
              payload: data.data,
            });
          })
          .catch((er) => {
            console.log(er);
          });
      }
    );

    /* try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
        console.log(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }*/
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>{" "}
          <Button
            onClick={() => {
              navigate("/favorites");
            }}
          >
            Favorites
          </Button>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
