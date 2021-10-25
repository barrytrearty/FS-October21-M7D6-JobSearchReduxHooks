import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Searchbar from "./components/Searchbar";
import MainSection from "./components/MainSection";
import CompanySection from "./components/CompanySection";
import Favorites from "./components/Favorites";
// import { connect } from "react-redux";
import { getJobsAction } from "./actions";
import { useDispatch, useSelector } from "react-redux";

// const mapStateToProps = (state) => ({
//   jobs: state.jobs.jobsArray,
// });

// const mapDispatchToProps = (dispatch) => ({
//   getJobs: (searchQuery, searchParameter, skip) => {
//     dispatch(getJobsAction(searchQuery, searchParameter, skip));
//   },
// });

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParameter, setSearchParameter] = useState("Search");
  const [skip, setSkip] = useState(0);

  const jobs = useSelector((state) => state.jobs.jobsArray);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   getJobs(searchQuery, searchParameter, skip);
  //   console.log(jobs);
  // }, [searchQuery, searchParameter, skip]);

  useEffect(() => {
    dispatch(getJobsAction(searchQuery, searchParameter, skip));
    console.log(jobs);
  }, [searchQuery, searchParameter, skip]);

  return (
    <Router>
      <div className="App">
        <Container>
          <Row>
            {console.log(jobs)}
            <Col xs={9}>
              {" "}
              <Link to={`/`}>
                <h1 className="mt-5 text-align-center">Gimme a Job Pleaze</h1>
              </Link>
              <Searchbar
                // setJobsArray={setJobsArray}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                searchParameter={searchParameter}
                setSearchParameter={setSearchParameter}
              />
              <Route
                path="/"
                exact
                render={() => (
                  <MainSection
                    jobsArray={jobs}
                    searchQuery={searchQuery}
                    skip={skip}
                    setSkip={setSkip}
                  />
                )}
              />
              <Route
                path="/company-detail/:company"
                component={CompanySection}
              />
            </Col>
            <Col xs={3}>
              <Favorites />
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
