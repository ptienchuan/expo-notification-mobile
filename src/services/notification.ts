import axios from 'axios';

const notificationService = axios.create({
  baseURL: 'https://expo-notification-6e7a2.firebaseio.com',
});

export default notificationService;
