import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';

let shippingAddressForm = props => {
  const {handleSubmit, provinces, data} = props;
  const {pristine, submitting} = props;
  function onChangeProvince(e) {
    data.actions.getListCity(e.target.value);

    const provinceName = getSelectText(e);
    data.shippingReducers.shippingDetail.provinceName = provinceName;
  }
  function onChangeCity(e) {
    data.actions.getListDistrict(e.target.value);

    const cityName = getSelectText(e);
    data.shippingReducers.shippingDetail.cityName = cityName;
  }

  function onChangeDistrict(e) {
    const {shippingDetail} = data.shippingReducers;

    const districtName = getSelectText(e);
    data.shippingReducers.shippingDetail.districtName = districtName;
  }

  function getSelectText(e) {
    // get text select options
    let index = e.nativeEvent.target.selectedIndex;
    let selectName = e.nativeEvent.target[index].text;

    return selectName;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="shipping-section-profile-customer">
        <b>Data Pembeli: </b>
        <div className="shipping-card">
          <div className="shipping-card-body">
            <div className="form-group">
              <div className="form-group">
                <label htmlFor="inputName">Nama Lengkap</label>
                <Field
                  component="input"
                  name="name"
                  type="text"
                  className="form-control"
                  id="inputName"
                  aria-describedby="emailHelp"
                  placeholder="Masukkan nama lengkap anda"
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputEmail">Alamat Email:</label>
                <Field
                  type="email"
                  name="email"
                  component="input"
                  className="form-control"
                  id="inputEmail"
                  aria-describedby="emailHelp"
                  placeholder="Masukkan alamat email anda"
                />
                <small id="emailHelp" className="form-text text-muted">
                  Pastikan email yang anda masukkan benar.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="inputPhone">Hanphone</label>
                <Field
                  type="number"
                  component="input"
                  name="phone"
                  className="form-control"
                  id="inputPhone"
                  placeholder="Masukkan nomor handphone anda"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shipping-section-address-customer">
        <b>Alamat Pengiriman: </b>
        <div className="shipping-card">
          <div className="shipping-card-body">
            <div className="form-group">
              <label htmlFor="inputAddress">Alamat</label>
              <Field
                component="textarea"
                name="address"
                className="form-control"
                id="inputAddress"
                rows="3"
                placeholder="Masukkan alamat anda"
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputProvince">Provinsi</label>
              <Field
                name="province"
                component="select"
                className="form-control"
                id="inputProvince"
                onChange={e => onChangeProvince(e)}>
                <option value="" defaultValue="" disabled="disabled">
                  Pilih Provinsi
                </option>
                {provinces.length > 0 ? (
                  provinces.map((province, index) => {
                    return (
                      <option key={index} value={province.id}>
                        {province.name}
                      </option>
                    );
                  })
                ) : (
                  <option value="" defaultValue="" disabled="disabled">
                    Pilih Provinsi
                  </option>
                )}
              </Field>
            </div>

            <div className="form-group">
              <label htmlFor="inputCity">Kota</label>
              <Field
                name="city"
                component="select"
                className="form-control"
                id="inputCity"
                onChange={e => onChangeCity(e)}>
                <option value="" defaultValue="" disabled="disabled">
                  Pilih Kota
                </option>
                {data.shippingReducers.allCity.length > 0
                  ? data.shippingReducers.allCity.map((city, index) => {
                      return (
                        <option key={index} value={city.id}>
                          {city.name}
                        </option>
                      );
                    })
                  : null}
              </Field>
            </div>

            <div className="form-group">
              <label htmlFor="inputDistrict">Kecamatan</label>
              <Field
                name="district"
                component="select"
                className="form-control"
                id="inputDistrict"
                onChange={e => onChangeDistrict(e)}>
                <option value="" defaultValue="" disabled="disabled">
                  Pilih Kecamatan
                </option>
                {data.shippingReducers.allDistrict.length > 0
                  ? data.shippingReducers.allDistrict.map((district, index) => {
                      return (
                        <option key={index} value={district.id}>
                          {district.name}
                        </option>
                      );
                    })
                  : null}
              </Field>
            </div>

            <div className="form-group">
              <label htmlFor="inputPostalcode">Kode Pos</label>
              <Field
                component="input"
                name="postalCode"
                type="number"
                className="form-control"
                id="inputPostalcode"
                placeholder="Masukan Kode Pos"
              />
            </div>
          </div>
          <div className="card-footer bg-light">
            <button
              type="submit"
              className="btn shipping-btn btn-block"
              disabled={submitting || pristine}>
              Selanjutnya
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

shippingAddressForm = reduxForm({
  form: 'address',
  initialValues: {
    name: '',
    email: '',
    phone: '',
    address: '',
    province: '',
    city: '',
    district: '',
    postalCode: ''
  },
  validate(values) {
    const errors = {};
    if (!values.name) {
      errors.name = 'required';
    }
    if (!values.email) {
      errors.email = 'required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'invalid email address';
    }
    if (!values.phone) {
      errors.phone = 'required';
    } else if (values.phone.length < 10) {
      errors.phone = 'min 10 digits';
    }
    if (!values.address) {
      errors.address = 'required';
    }
    if (!values.city) {
      errors.city = 'required';
    }
    if (!values.district) {
      errors.district = 'requried';
    }
    return errors;
  },
  enableReinitialize: true
})(shippingAddressForm);

export default shippingAddressForm;
