import React, {Fragment} from 'react';
import moment from 'moment';
import styled from 'styled-components';

const CheckoutCard = styled.div`
  border-radius: 4px;
  background-color: #ffffff;
  border: solid 1px #dfe3e6;
  margin-top: 1rem;
  padding: 1rem;
  h2 {
    font-size: 14px;
    color: #152934;
    font-weight: bold;
    margin-bottom: 8px;
  }
  .line {
    span {
      font-size: 12px;
      font-weight: 300;
      line-height: 1.5;
      color: #2c2c2c;
      margin-left: 30px;
      &.left {
        width: 100px;
        display: inline-block;
        margin-left: 0;
      }
    }
  }
  .history {
    margin-bottom: 8px;
    margin-left: 0;
    span {
      display: block;
      &.date {
        color: #78838b;
      }
      &.town {
        color: #2c2c2c;
        font-weight: 300;
        text-transform: uppercase;
      }
    }
  }
`;

const CheckoutStatus = ({active, trackingData}) => {
  return (
    <Fragment>
      {active ? (
        trackingData !== null ? (
          <div>
            <CheckoutCard>
              <h2>Informasi Pengiriman</h2>
              <div className="line">
                <span className="left">No. Resi</span> :{' '}
                <span>
                  {trackingData.data.summary.no_resi !== null
                    ? trackingData.data.summary.no_resi
                    : '-'}
                </span>
              </div>
              <div className="line">
                <span className="left">No. Order</span> :{' '}
                <span>
                  {trackingData.data.summary.order_number !== null
                    ? trackingData.data.summary.order_number
                    : '-'}
                </span>
              </div>
              <div className="line">
                <span className="left">Kurir</span> :{' '}
                <span style={{textTransform: 'uppercase'}}>
                  {trackingData.data.summary.courier !== null
                    ? trackingData.data.summary.courier
                    : '-'}
                </span>
              </div>
              <div className="line">
                <span className="left">Service</span> :{' '}
                <span style={{textTransform: 'uppercase'}}>
                  {trackingData.data.summary.method !== null
                    ? trackingData.data.summary.method
                    : '-'}
                </span>
              </div>
              <div className="line">
                <span className="left">Tanggal kirim</span> :{' '}
                <span>
                  {trackingData.data.summary.delivery_date !== null
                    ? moment(trackingData.data.summary.delivery_date).format(
                        'LL'
                      )
                    : '-'}
                </span>
              </div>
              <div className="line">
                <span className="left">Asal</span> :{' '}
                <span>
                  {' '}
                  {trackingData.data.summary.origin !== null
                    ? trackingData.data.summary.origin
                    : '-'}
                </span>
              </div>
              <div className="line">
                <span className="left">Tujuan</span> :{' '}
                <span>
                  {' '}
                  {trackingData.data.summary.destination !== null
                    ? trackingData.data.summary.destination
                    : '-'}{' '}
                </span>
              </div>
            </CheckoutCard>
            <CheckoutCard>
              <h2>History Pengiriman</h2>
              {trackingData.data.history.length > 0
                ? trackingData.data.history.map((hst, i) => {
                    <div className="history">
                      <span className="date">
                        {hst.date} - {hst.time}
                      </span>
                      <span className="town">
                        {hst.city}: {hst.status}
                      </span>
                    </div>;
                  })
                : 'Data not found'}
            </CheckoutCard>
          </div>
        ) : (
          <div>
            <CheckoutCard>
              <h2>Data not found</h2>
            </CheckoutCard>
          </div>
        )
      ) : null}
    </Fragment>
  );
};

export default CheckoutStatus;
