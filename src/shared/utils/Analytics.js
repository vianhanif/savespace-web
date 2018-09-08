import ReactGA from 'react-ga';

export const initGA = () => {
  //Unique Google Analytics tracking number
  ReactGA.initialize([
    {
      trackingId: 'UA-121843559-1',
      gaOptions: {name: 'ebaba.com'},
    },
    {
      trackingId: 'UA-121843559-2',
      debug: true
    }
  ]);
};

export const logPageView = () => {
  ReactGA.set({
    page: window.location.pathname
  });
  ReactGA.pageview(window.location.pathname);
};
