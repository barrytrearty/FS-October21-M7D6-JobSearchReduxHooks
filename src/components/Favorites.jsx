import { useState, useEffect } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
// import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeFavoriteCompanyAction } from "../actions";
import { useSelector, useDispatch } from "react-redux";

// const mapStateToProps = (state) => ({
//   favorites: state.companies.favorites,
// });

// const mapDispatchToProps = (dispatch) => ({
//   removeFavoriteCompany: (index) => {
//     dispatch(removeFavoriteCompanyAction(index));
//   },
// });

// const Favorites = ({ favorites, removeFavoriteCompany }) => {
const Favorites = () => {
  const favorites = useSelector((state) => state.companies.favorites);
  const dispatch = useDispatch();

  return (
    <div className="mt-5 border">
      <h3 className="pt-1 text-center">Favorites</h3>
      {favorites.map((company, index) => (
        <Col className="border text-center p-2">
          <div className="d-flex flex-row justify-content-between">
            <Link to={`/company-detail/${company}`}>
              <h5>{company}</h5>
            </Link>
            <Button
              variant="danger"
              onClick={() => dispatch(removeFavoriteCompanyAction(index))}
            >
              -
            </Button>
          </div>
        </Col>
      ))}
    </div>
  );
};

// export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
export default Favorites;
