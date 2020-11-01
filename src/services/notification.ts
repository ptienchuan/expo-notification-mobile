import axios from 'axios';

type UrlType = 'hasId' | 'noId';

export const getUrl = (method: UrlType, id = ''): string => {
  const injectedId = method === 'noId' ? '' : `/${id}`;
  return `/notifications${injectedId}.json`;
};

const NotificationService = axios.create({
  baseURL: 'https://expo-notification-6e7a2.firebaseio.com',
});

export default NotificationService;
