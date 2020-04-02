import React from 'react';
import App from './app';

export default { title: 'App' };

export const withText = () => <App message='Current value: ' />

export const withoutText = () => <App />