/*global __TEST__*/
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import { assign } from 'lodash/object';

let __TEST__ = false;
let Link = RouterLink;

if (__TEST__)
  Link = (props) => React.createElement('a', assign({}, props, { href: props.to }));

export default Link;
