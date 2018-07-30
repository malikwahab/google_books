import React, { Component } from 'react';
import { Row, FormGroup, FormControl, InputGroup, Button, Col, Form } from 'react-bootstrap';
import { makeSearch } from '../../actions';
import { connect } from 'react-redux';

import './styles.css';

const mapStateToProps = (state) => {
  return {
    isSearching : state.isSearching,
    items       : state.items,
    resultCount : state.resultCount
  }
}

const mapDispatchToProps = {
  makeSearch
}

class Landing extends Component {
  state = {
    searchTerm: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.makeSearch(this.state.searchTerm);
    // search(this.state.searchTerm).then(result => console.log(result)).catch(err => console.error(err));
  }

  handleFieldChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    });
  }

  render() {
    return (
      <div>
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
        <Row className="show-grid">
          {this.props.items.map(item => <div key={item.id}>{item.volumeInfo.title}</div>)}
        </Row>
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Landing);