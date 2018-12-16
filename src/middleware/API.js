import request from 'superagent';
import { assign } from 'lodash/object';
import { stringify } from 'qs';
import getProducts from '~/src/helpers/getProducts';

function APICall(id) {
  return new Promise((resolve, reject) => {
    getProducts(id).end((error, data) => (
      error ? reject(error) : resolve(data.body.items)
    ));
  });
}

export const API_CALL = 'API_CALL';

const nextAction = (action, data) => (
  assign({}, action, data, {[API_CALL]: undefined})
);

export default (store) => (next) => (action) => {
  if (!action[API_CALL]) return next(action);

  const [requestType, successType, failureType] = action[API_CALL].types;

  next(nextAction(action, { type: requestType }));

  const promise = APICall(action[API_CALL].id);

  promise.then(
    (response) => {
      let result = response.map((product) => {
        const item = product.fields;
        return {
          ...item,
          headImage: item['imageUrls'][0]
        };
      });

      next(
        nextAction(action, {
          response: action[API_CALL].id ? result[0] : result,
          type: successType
        })
      );
    },
    (error) => next(
      nextAction(action, { error, type: failureType })
    )
  );

  return promise;
};
