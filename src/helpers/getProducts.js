import request from 'superagent';
import { apiURL, accessToken } from '../constants/API';

const getProducts = (id = null) => {
  let query = {
    select: 'fields',
    content_type: 'product'
  };

  if (id) {
    query['fields.id'] = id;
  }

  return request
    .get(apiURL)
    .query(query)
    .set('Authorization', `Bearer ${accessToken}`);
};

export default getProducts;
