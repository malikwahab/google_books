import React, { Component } from 'react';
import { Row, FormGroup, FormControl, InputGroup, Button, Col, Form } from 'react-bootstrap';

import './styles.css';

class Landing extends Component {
  state = {
    searchTerm: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.searchTerm);
  }

  handleFieldChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    });
  }

  render() {
    return (
      <Row className="show-grid">
        <h2 className="landing-title">Google Books</h2>
        <Form method="post" onSubmit={this.handleSubmit}>
          <FormGroup>
            <InputGroup>
              <FormControl
                type="text"
                value={this.state.searchTerm}
                placeholder="Search Books"
                onChange={this.handleFieldChange}
              />
              <InputGroup.Button>
                <Button onClick={this.handleSubmit}>Search</Button>
              </InputGroup.Button>
            </InputGroup>
          </FormGroup>
        </Form>
      </Row>
    )
  }
}
export default Landing;