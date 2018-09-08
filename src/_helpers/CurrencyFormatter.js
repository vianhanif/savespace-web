export const CurrencyFormatter = (value, currency, floating) => {
  let formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: floating
  });

  return formatter.format(value);
};
