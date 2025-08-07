import { useSelector, useDispatch } from "react-redux";
import ListGroup from "react-bootstrap/ListGroup";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const fav = useSelector((state) => {
    return state.pref.content;
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-center mt-3">Preferiti</h1>
      <div className="text-center mb-3">
        <Button
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </Button>
      </div>
      <Container>
        <ListGroup>
          {fav.map((f) => {
            return (
              <ListGroup.Item key={f._id}>
                <Link to={`/${f.company_name}`}>{f.company_name}</Link> -{" "}
                <a href={f.url} target="_blank" rel="noreferrer">
                  {f.title}{" "}
                </a>
                <Button
                  variant="danger"
                  onClick={() => {
                    dispatch({
                      type: "REMOVE_FROM_FAVORITES",
                      payload: f._id,
                    });
                  }}
                >
                  Elimina
                </Button>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Container>
    </>
  );
};

export default Favorites;
