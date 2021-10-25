// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row, Button } from "react-bootstrap";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
// import { connect } from "react-redux";
import { addFavoriteCompanyAction } from "../actions";
import { useDispatch } from "react-redux";
// import "./style.css";

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = (dispatch) => ({
//   addFavoriteCompany: (company) => {
//     dispatch(addFavoriteCompanyAction(company));
//   },
// });

const MainSection = ({
  jobsArray,
  searchQuery,
  skip,
  setSkip,
  addFavoriteCompany,
}) => {
  const dispatch = useDispatch();

  return (
    <div>
      {/* {console.log(jobsArray.data)} */}
      <Container>
        {searchQuery === "" ? (
          ""
        ) : (
          <div>
            <h2>Jobs</h2>

            {/* <BsFillArrowLeftCircleFill onClick={setSkip((skip -= 10))} /> */}
            <div className="d-flex flex-row justify-content-between">
              <BsFillArrowLeftCircleFill
                className="icon"
                onClick={() => {
                  if (skip > 9) {
                    console.log(skip);
                    setSkip((skip -= 10));
                  }
                }}
              />
              <BsFillArrowRightCircleFill
                className="icon"
                onClick={() => setSkip((skip += 10))}
              />
            </div>

            <Row className="border">
              {/* <Row border="primary"> */}
              <Col xs={4}>
                <h2>Title</h2>
              </Col>
              <Col xs={4}>
                <h2>Categories</h2>
              </Col>
              <Col xs={4}>
                <h2>Company</h2>
              </Col>
            </Row>
            {jobsArray.map((job) => (
              <Row key={job._id} className="border">
                <Col xs={4} className="border pt-3">
                  <h4> {job.title}</h4>
                </Col>

                <Col xs={4} className="border pt-3">
                  <h4> {job.category}</h4>
                </Col>
                <Col xs={4} className="border pt-3">
                  <div className="d-flex flex-row justify-content-between">
                    <Link to={`/company-detail/${job.company_name}`}>
                      <h4>{job.company_name}</h4>
                    </Link>
                    <Button
                      variant="success"
                      onClick={() =>
                        dispatch(addFavoriteCompanyAction(job.company_name))
                      }
                    >
                      {" "}
                      ADD
                    </Button>
                  </div>
                </Col>
              </Row>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

// export default connect(mapStateToProps, mapDispatchToProps)(MainSection);
export default MainSection;
