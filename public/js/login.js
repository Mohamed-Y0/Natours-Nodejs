import { showAlert } from './alerts.js';

export const login = async (email, password) => {
  try {
    const res = await fetch('/api/v1/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      showAlert('success', 'Logged In Successfully!');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    } else {
      alert(`Error: ${data.message}`);
    }
  } catch (err) {
    console.log(err);
    showAlert('error', 'Network error or server is down!');
  }
};

export const logout = async () => {
  try {
    const res = await fetch('/api/v1/users/logout', {
      method: 'GET',
    });

    const data = await res.json();

    if (res.ok || data.status === 'success') {
      location.reload();
    }
  } catch (error) {
    console.log(error);
    showAlert('error', 'Error logging out! Try again.');
  }
};
