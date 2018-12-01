import request from 'superagent';

const apiURL = 'https://cdn.contentful.com/spaces/hg3oyk3bbz3t/entries/';
const accessToken = '6bd686df5791bb025edc0670eccfac2b65e6612713eae0e69421ca295f2802f1';

const fetchProducts = (id = null) => {
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
    .set('Authorization', `Bearer ${accessToken}`)
    .then((res) => {
      if (id) {
        return res.body.items[0].fields
      }
      return res.body.items.map((product) => product.fields)
    });
};

export default fetchProducts;
