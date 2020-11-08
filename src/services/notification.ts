import axios from 'axios';

const NotificationService = axios.create({
  baseURL: 'https://expo-notification-6e7a2.firebaseio.com',
});

export default NotificationService;
