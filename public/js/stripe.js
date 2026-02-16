import { showAlert } from './alerts.js';

const stripe =
  typeof Stripe !== 'undefined'
    ? Stripe(
        'pk_test_51T0vEKB1mqSgrbQGtfqpjYj9sCunj2aKMLiI2yl2ex6Mw9lNOLuvB5VE3rd46NMmXd7rmXGXxmtlOQlTKIrsKLNA007XcAHnnP',
      )
    : null;

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const response = await fetch(
      `http://localhost:8080/api/v1/bookings/checkout-session/${tourId}`,
    );
    const data = await response.json();
    console.log(data);

    // 2) Redirect to stripe checkout page using the URL from the server
    if (data.session && data.session.url) {
      window.location.assign(data.session.url);
    } else {
      console.error('Session URL not found!');
    }
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
