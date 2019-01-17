import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import BasketPage from '../components/views/Basket';
import * as types from '../constants/actionTypes/BasketActionTypes';

const onSubmit = (values, dispatch) => {
  dispatch({
    type: types.CLEAR_BASKET
  });
  console.log(JSON.stringify(values));
};

const validate = (values) => {
  const errors = {};

  if (values.fullName && values.fullName.length < 5) {
    errors.fullName = 'Короткое ФИО, необходимо ввести более 5 символов!'
  }

  if (values.phone && values.phone.length < 11) {
    errors.phone = 'Необходимо ввести телефон полностью!'
  }

  if (values.email && values.email.length < 5) {
    errors.email = 'Короткий электронный адрес, необходимо ввести более 5 символов!'
  }

  if (values.home && values.home.length < 5) {
    errors.home = 'Короткий адрес доставки, необходимо ввести более 5 символов!'
  }

  return errors;
};

const stateToProps = (state) => ({
  products: state.products.entries,
  basket: state.basket.entries,
  isFetching: state.products.isFetching,
  error: state.products.error,
  initialValues: {
    basket: state.basket.entries
  }
});

export default connect(stateToProps)(reduxForm({
  form: 'orderForm',
  validate,
  onSubmit: (values, dispatch) => onSubmit(values, dispatch)
})(BasketPage));
