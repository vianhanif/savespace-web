import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProgressiveImage extends Component {
  static propTypes = {
    preview: PropTypes.string,
    image: PropTypes.string,
    onClick: PropTypes.func,
    cover: PropTypes.bool
  };
  static defaultProps = {
    cover: false
  }
  state = {
    currentImage: this.props.preview,
    loading: true
  };

  componentDidMount() {
    this.fetchImage(this.props.image);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.image !== this.props.image) {
      this.setState({ currentImage: nextProps.preview, loading: true }, () => {
        this.fetchImage(nextProps.image);
      });
    }
  }

  componentWillUnmount() {
    if (this.loadingImage) {
      this.loadingImage.onload = null;
    }
  }

  fetchImage = src => {
    const image = new Image();
    image.onload = () =>
      this.setState({ currentImage: this.loadingImage.src, loading: false });
    image.src = src;
    this.loadingImage = image;
  };

  style = loading => {
    return {};
  };

  render() {
    const { currentImage, loading } = this.state;
    const style = {
      backgroundImage: `url(${currentImage})`,
      transition: '0.5s filter linear',
      filter: `${loading ? 'blur(50px)' : ''}`,
      width: '100%',
      height: '100%',
      backgroundSize: this.props.cover ? 'cover' : 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      position: 'absolute',
      top: 0,
      left: 0
    };
    return <div style={{ ...style }} onClick={this.props.onClick}/>;
  }
}

export default ProgressiveImage;
