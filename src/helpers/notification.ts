import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import NotificationService from '../services/notification';

const getExpoToken = async (): Promise<string> => {
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );
  let finalStatus = existingStatus;
  if (existingStatus !== 'granted') {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }
  if (finalStatus !== 'granted') {
    alert('Failed to get push token for push notification!');
    return '';
  }
  const token = (await Notifications.getExpoPushTokenAsync()).data;

  return token;
};

type ListTokenResponse = {
  [id: string]: { token: string };
};
const storeToken = async (): Promise<boolean> => {
  try {
    const apiURL = '/expoTokens.json';
    const token = await getExpoToken();
    const {
      data,
    }: Record<'data', ListTokenResponse> = await NotificationService.get(
      apiURL
    );
    const isExistToken = Object.values(data).some(
      ({ token: dbToken }) => dbToken === token
    );

    if (!isExistToken) await NotificationService.post(apiURL, { token });

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export { storeToken };
