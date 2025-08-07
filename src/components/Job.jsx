import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button, Badge } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AddToFavoritesAction } from "../redux/actions";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const fav = useSelector((state) => {
    return state.pref.content;
  });

  const presente = fav.find((ob) => ob._id === data._id);

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
        <Button
          className="ms-3"
          onClick={() => {
            dispatch(AddToFavoritesAction(data));
          }}
        >
          Aggiungi
        </Button>
        {presente !== undefined ? (
          <Badge
            bg="secondary"
            className="ms-3
        "
          >
            Presente
          </Badge>
        ) : (
          <></>
        )}
      </Col>
    </Row>
  );
};

export default Job;
