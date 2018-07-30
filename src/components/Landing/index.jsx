import React, { PureComponent } from 'react';
import { Row, FormGroup, FormControl, InputGroup, Button, Col, Form } from 'react-bootstrap';
import { makeSearch, loadMore } from '../../actions';
import { connect } from 'react-redux';
import Items from '../Items';

import './styles.css';

const mapStateToProps = (state) => {
  return {
    isSearching : state.isSearching,
    items       : state.items,
    resultCount : state.resultCount
  }
}

const mapDispatchToProps = {
  makeSearch,
  loadMore
}

class Landing extends PureComponent {
  state = {
    searchTerm  : '',
    currentIndex : 0 
  }

  componentDidMount() {
    window.onscroll = (event) => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        this.handleMoreRequest();
      }
    }
  }
  

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.makeSearch(this.state.searchTerm);
    // search(this.state.searchTerm).then(result => console.log(result)).catch(err => console.error(err));
  }

  handleFieldChange = (event) => {
    const searchTerm = event.target.value
    this.setState({
      searchTerm
    });
  }

  handleMoreRequest = () => {
    const { searchTerm, currentIndex } = this.state;
    const newIndex = currentIndex + 10;
    this.setState({ currentIndex: newIndex}, () => this.props.loadMore(searchTerm, newIndex));
  }

  render() {
   console.log(this.props.items);    
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
          <Items items={this.props.items} />
        </Row>
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Landing);