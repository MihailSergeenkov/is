import React, { Component } from 'react';
import { set, assign } from 'lodash/object';
import Text from './Text';
import TextArea from './TextArea';

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        values: {
          fullName: '',
          email: '',
          message: ''
        },
        errors: {}
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(JSON.stringify(this.state.form.values));
  }

  clearError(fieldName) {
    this.setState(
      set(
        assign({}, this.state),
        ['form', 'errors', fieldName],
        false
      )
    );
  }

  validateField(fieldName, value) {
    switch (fieldName) {
      case 'fullName':
        this.clearError('fullName');
        this.validateFullName(value)
        break;
      case 'email':
        this.clearError('email');
        this.validateEmail(value)
        break;
      case 'message':
        this.clearError('message');
        this.validateMessage(value)
        break;
    }
  }

  validateFullName(value) {
    if (value.length < 1) {
      this.setState(
        set(
          assign({}, this.state),
          'form.errors.fullName',
          true
        )
      )
    }
  }

  validateEmail(value) {
    if (value.length < 3) {
      this.setState(
        set(
          assign({}, this.state),
          'form.errors.email',
          true
        )
      )
    }
  }

  validateMessage(value) {
    if (value.length < 10) {
      this.setState(
        set(
          assign({}, this.state),
          'form.errors.message',
          true
        )
      )
    }
  }

  handleChange(fieldName) {
    return (e) => {
      this.validateField(fieldName, e.target.value);
      this.setState(
        set(
          assign({}, this.state),
          ['form', 'values', fieldName],
          e.target.value
        )
      )
    };
  }

  render() {
    const { fullName, email, message } = this.state.form.values;
    const errors = this.state.form.errors;

    return (
      <div className="row">
        <div className="col s10">
          <h5>Задайте свой вопрос!</h5>
        </div>
        <form onSubmit={this.handleSubmit} className="col s10">
          <Text
            name="fullName"
            label="ФИО"
            value={fullName}
            error={errors.fullName}
            handleChange={this.handleChange("fullName")}
          />
          <Text
            name="email"
            label="Электронная почта"
            value={email}
            error={errors.email}
            handleChange={this.handleChange("email")}
          />
          <TextArea
            name="message"
            label="Сообщение"
            value={message}
            error={errors.message}
            handleChange={this.handleChange("message")}
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

export default ContactForm;
