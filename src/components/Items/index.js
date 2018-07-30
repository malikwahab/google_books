import React from 'react';
import Book from '../Book';

const Packery = require('react-packery-component')(React);

const Items = ({ items }) =>
  <Packery>
    {items.map(item => <Book {...item} key={item.id} />)}          
  </Packery>

export default Items;