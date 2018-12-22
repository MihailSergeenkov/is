import React, { Component } from 'react';
import { Field } from 'redux-form';
import classNames from 'classnames';
import RenderField from '~/src/components/views/Basket/RenderField';

class OrderForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="row">
        <div className="col s10">
          <h5>Укажите Ваши данные:</h5>
        </div>
        <form onSubmit={handleSubmit} className="col s10">
          <Field
            label="ФИО"
            component={RenderField}
            name="fullName"
            type="text"
          />
          <Field
            label="Телефон"
            component={RenderField}
            name="phone"
            type="text"
          />
          <Field
            label="Электронный адрес"
            component={RenderField}
            name="email"
            type="text"
          />
          <Field
            label="Адрес доставки"
            component={RenderField}
            name="home"
            type="text"
          />
          <div className="row">
            <div className="col s10">
              <input type="submit" value="Отправить" className="btn-large waves-effect waves-light" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default OrderForm;
