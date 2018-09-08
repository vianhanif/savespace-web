import React from 'react';

import {Field, reduxForm} from 'redux-form';
import MandiriLogo from '../../static/img/Bank_Mandiri_logo.png';
import BCALogo from '../../static/img/BCA_logo.png';

let shippingPaymentForm = props => {
  const {handleSubmit} = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className="shipping-section-select-payment">
        <b>Metode Pembayaran: </b>
        <div className="shipping-card">
          <div className="shipping-card-body border-bottom">
            <div className="form-group">
              <div className="form-check">
                <div className="row">
                  <div className="col-2 margin-middle">
                    <Field
                      component="input"
                      type="radio"
                      name="paymentType"
                      id="radioBCA"
                      value="BCA"
                      aria-describedby="radioBCAHelp"
                    />
                  </div>
                  <div className="col-10">
                    <div className="row">
                      <div className="col-4 margin-middle">
                        <img
                          src={BCALogo}
                          className="img-fluid"
                          alt="bca-logo"
                        />
                      </div>
                      <div className="col-8">
                        <label className="form-check-label" htmlFor="radioBCA">
                          <b>Bank BCA</b>
                        </label>
                        <small
                          id="radioBCAHelp"
                          className="form-text text-muted">
                          221-900-274-7
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shipping-card-body">
            <div className="form-group">
              <div className="form-check">
                <div className="row">
                  <div className="col-2 margin-middle">
                    <Field
                      component="input"
                      type="radio"
                      name="paymentType"
                      id="radioMandiri"
                      value="MANDIRI"
                      aria-describedby="radioMandiriHelp"
                    />
                  </div>
                  <div className="col-10">
                    <div className="row">
                      <div className="col-4 margin-middle">
                        <img
                          src={MandiriLogo}
                          className="img-fluid"
                          alt="bank-mandiri"
                        />
                      </div>
                      <div className="col-8">
                        <label
                          className="form-check-label"
                          htmlFor="radioMandiri">
                          <b>MANDIRI</b>
                        </label>
                        <small
                          id="radioMandiriHelp"
                          className="form-text text-muted">
                          124-000-766-442-9
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer bg-light">
            <button type="submit" className="btn shipping-btn btn-block">
              Selanjutnya
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

shippingPaymentForm = reduxForm({
  form: 'selectPayment',
  initialValues: {paymentType: 'BCA'},
  enableReinitialize: true
})(shippingPaymentForm);

export default shippingPaymentForm;
