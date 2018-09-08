import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';

import ProductSlider from './ProductSlider';
import ImageSlider from '../Slider/ImageSlider';
import ProgressiveImage from '../../shared/components/ProgressiveImage/ProgressiveImage';
import {
  ImageWrap,
  CategoryBadge,
  VendorName,
  ProductTitle
} from './ProductDetailStyled';
import {CurrencyFormatter} from '../../_helpers/CurrencyFormatter';
import HeartIcon from '../../shared/svg-icons/HeartIcon';
import ShareIcon from '../../shared/svg-icons/ShareIcon';

const ProductDetail = props => {
  let nf = Intl.NumberFormat();
  const {
    handleAddToCart,
    handleColorChange,
    handleSizeChange,
    selectedSize,
    selectedColor
  } = props;
  const {pristine, submitting} = props;
  const {product} = props;
  // console.log(props);
  return (
    <div className="detail-card">
      <div className="card-header bg-light align-center no-padding ">
        <div className="card-img detail-image">
          {product.primary_image != null ? (
            product.images != null ? (
              <ImageSlider>
                {product.images.map(productImage => {
                  return (
                    <ProductSlider
                      productImage={productImage}
                      key={productImage.id}
                    />
                  );
                })}
              </ImageSlider>
            ) : (
              <ImageWrap>
                <ProgressiveImage
                  image={product.primary_image.original_path}
                  preview={product.primary_image.thumb_path}
                  alt="Product 1"
                />
              </ImageWrap>
            )
          ) : (
            <img
              className="img-fluid"
              src="https://i.pinimg.com/originals/88/2a/f9/882af9c0182e042783837a9deb7c4c35.jpg"
              alt="item not found"
            />
          )}
        </div>
      </div>

      <div
        className="card-body"
        style={{
          padding: '0 1.07rem'
        }}>
        <div className="detail-product-header">
          <div className="row no-gutters">
            <div className="col-8">
              <div className="detail-title-price">
                <ProductTitle>{product.name}</ProductTitle>
                {product.vendor_name && (
                  <VendorName>{product.vendor_name}</VendorName>
                )}
                <div className="categoryWrap">
                  {product.category.map(category => {
                    return (
                      <CategoryBadge key={category.id} category={category} />
                    );
                  })}
                </div>
                <span className="detail-product-price primary-price color-gold">
                  {product.discount_price > 0 &&
                  product.discount_price < product.display_price
                    ? CurrencyFormatter(product.discount_price, 'IDR')
                    : CurrencyFormatter(product.display_price, 'IDR')}
                </span>
                {product.discount_price > 0 &&
                  product.discount_price < product.display_price && (
                    <span className="detail-product-price secondary-price color-red discount-price">
                      {CurrencyFormatter(product.display_price, 'IDR')}
                    </span>
                  )}
              </div>
            </div>
            <div className="col-2 align-center">
              <div className="btn btn-circle circle-btn-shadow no-padding ">
                <div className="icon">
                  <HeartIcon />
                </div>
              </div>
              <div className="title-btn-circle">Suka</div>
            </div>
            <div className="col-2 align-center">
              <div className="btn btn-circle circle-btn-shadow no-padding ">
                <div className="icon">
                  <ShareIcon />
                </div>
              </div>
              <div className="title-btn-circle">Bagikan</div>
            </div>
          </div>
        </div>
        <div className="horizontal-line" style={{margin: '0 -1.07rem'}} />
        <div className="detail-product-desc primary-desc ">
          {product.description}
        </div>
        <div className="horizontal-line" style={{margin: '0 -1.07rem'}} />
        <div className="product-varian">
          {product.color.length > 0 ? (
            <div className="product-varian-color">
              <div className="primary-title">Warna*</div>
              <div className="btn-group-toggle" data-toggle="buttons">
                {product.color.length > 0
                  ? product.color.map((color, index) => {
                      return (
                        <label
                          key={index}
                          onClick={handleColorChange}
                          id={color.id}
                          className={`btn btn-sm btn-square product-varian-btn ${
                            index === 0 ? 'active' : ''
                          }`}>
                          <input
                            type="radio"
                            name="options_color"
                            id="option1"
                            autoComplete="off"
                          />
                          {color.value}
                        </label>
                      );
                    })
                  : null}
              </div>
            </div>
          ) : null}

          {product.size.length > 0 ? (
            <div className="product-varian-size">
              <div className="primary-title">Ukuran ready stock*</div>
              <div className="btn-group-toggle" data-toggle="buttons">
                {product.size.length > 0
                  ? product.size
                      .map((size, index) => {
                        return (
                          <div
                            key={index}
                            onClick={handleSizeChange}
                            id={size.id}
                            className={`btn btn-sm btn-square product-varian-btn ${
                              index === 0 ? 'active' : ''
                            }`}>
                            <input
                              type="radio"
                              name="options_size"
                              value={size.id}
                            />
                            {size.value}
                          </div>
                        );
                      })
                      .reverse()
                  : null}
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div
        className="card-footer detail-page-btn bg-light"
        style={{
          padding: '1rem'
        }}>
        {props.isSubmitting ? (
          <button
            className="btn btn-block btn-success btn-lg bg-green"
            style={{
              textTransform: 'uppercase',
              borderRadius: '0.14rem',
              border: 'none',
              fontWeight: 500,
              background: '#00a54a',
              padding: '0.92rem 0'
            }}
            disabled>
            Sukses Menambahkan Item Ke Keranjang
          </button>
        ) : (
          <button
            className="btn btn-block btn-success btn-lg bg-green"
            style={{
              textTransform: 'uppercase',
              borderRadius: '0.14rem',
              border: 'none',
              fontWeight: 500,
              background: '#00a54a',
              padding: '0.92rem 0'
            }}
            onClick={handleAddToCart}>
            Beli Sekarang
          </button>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    detailReducers: state.detailReducers,
    cartReducers: state.cartReducers
  };
};

export default connect(mapStateToProps)(ProductDetail);
