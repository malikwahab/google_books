import React from 'react';
import { Col, Thumbnail, Button } from 'react-bootstrap';
import bookIcon from './bookIcon.svg';

const Book = props => {
  const src = props.imageLinks ? props.imageLinks.thumbnail : bookIcon;
  const description = props.description && props.description.slice(0, 200);
  return (
    <Col xs={10} md={3} sm={6}>
      <Thumbnail src={src} alt={props.title}>
        <h5><a href={props.infoLink} target='_blank'>{props.title}</a></h5>
        {description && <p>{`${description} ...`}</p>}
        <p>
          <Button bsStyle="default">Read</Button>&nbsp;
          <Button bsStyle="primary" href={props.infoLink} target='_blank' >View on Books</Button>
        </p>
      </Thumbnail>
  </Col>
  )
}

export default Book;