import { showAlert } from './alerts.js';

export const updateSettings = async (data, type) => {
  try {
    const url =
      type === 'password'
        ? '/api/v1/users/updateMyPassword'
        : '/api/v1/users/updateMe';

    const res = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const resData = await res.json();

    if (res.ok) {
      showAlert('success', `${type.toUpperCase()} updated successfully!`);
    } else {
      showAlert('error', resData.message);
    }
  } catch (err) {
    showAlert('error', 'Something went wrong! Please try again.');
  }
};
