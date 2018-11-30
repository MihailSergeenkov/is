import React, { Component } from 'react';

class HeadImage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { image } = this.props;

    return (
      <div>
        <img
          key={image}
          src={image}
          alt="Основная картинка"
          style={{ marginTop: '20px' }}
          width="400"
          heigth="400"
          id='head'
        />
      </div>
    );
  }
}

HeadImage.defaultProps = {
  image: 'https://uralint.ru/upload/iblock/53e/53ea88e8209b6ddc94bf307d23129cac.jpg'
};

export default HeadImage;
