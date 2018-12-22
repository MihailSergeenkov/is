import React, { Component } from 'react';
import ContactForm from '~/src/components/views/About/ContactForm';

class AboutPage extends Component {
  render() {
    return (
      <div>
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
