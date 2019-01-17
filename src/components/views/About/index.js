import React, { Component } from 'react';
import Helmet from 'react-helmet';
import ContactForm from './ContactForm';

class AboutPage extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Контакты</title>
        </Helmet>
        <blockquote>
          Интернет магазин продажи фруктов и ягод.
        </blockquote>
        <blockquote>
          г. Москва
        </blockquote>
        <blockquote>
          +7 (495) 777-7777
        </blockquote>
        <hr />
        <ContactForm />
      </div>
    );
  }
}

export default AboutPage;
