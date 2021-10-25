import { useState, useEffect } from "react";
import {
  Col,
  Container,
  Row,
  Dropdown,
  FormControl,
  InputGroup,
  DropdownButton,
} from "react-bootstrap";

const CompanySection = ({ match }) => {
  const companyName = match.params.company;
  const [companyJobs, setCompanyJobs] = useState([]);
  const [skip, setSkip] = useState(0);

  const getCompanyJobs = async () => {
    try {
      let response = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?company=${companyName}&limit=10&offset=${skip}`
      );
      let jobsProm = await response.json();
      setCompanyJobs(jobsProm.data);
      //   console.log(jobsArray);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCompanyJobs();
  }, []);

  return (
    <div>
      {/* {console.log(jobsArray.data)} */}
      <Container>
        <h2>{companyName}</h2>
        <Row className="border">
          {/* <Row border="primary"> */}
          <Col xs={4}>
            <h2>Role</h2>
          </Col>
          <Col xs={4}>
            <h2>Company</h2>
          </Col>
          <Col xs={4}>
            <h2>Categories</h2>
          </Col>
        </Row>
        {companyJobs.map((job) => (
          <Row key={job._id}>
            <Col xs={4} className="border pt-3">
              <h4> {job.title}</h4>
            </Col>

            <Col xs={4} className="border pt-3">
              <h4>{job.company_name}</h4>
            </Col>
            <Col xs={4} className="border pt-3">
              <h4> {job.category}</h4>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default CompanySection;
