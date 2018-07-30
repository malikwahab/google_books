import React from 'react';
import { Col, Thumbnail, Button } from 'react-bootstrap';
import bookIcon from './bookIcon.svg';

const Book = props => {
  const {
    imageLinks,
    description,
    title,
    authors,
    infoLink
  } = props;
  const src = props.imageLinks ? imageLinks.thumbnail : bookIcon;
  const reducedDescription = description && props.description.slice(0, 200);
  return (
    <Col xs={10} md={3} sm={6}>
      <Thumbnail src={src} alt={props.title}>
        <h5><a href={infoLink} target='_blank'>{title}</a></h5>
        {description && <p>{`${reducedDescription} ...`}</p>}
        { authors && <p>Authors: {authors.map((author, i) => <span key={i}>{author}</span>)}</p>}
        <p>
          <Button bsStyle="primary" href={infoLink} target='_blank' >View on Books</Button>
        </p>
      </Thumbnail>
  </Col>
  )
}

export default Book;