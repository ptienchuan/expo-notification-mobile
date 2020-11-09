import { ThunkAction } from 'redux-thunk';
import { AppState } from '..';
import {
  SetNotificationsAction,
  setNotifications,
  SeenNotificationAction,
  seenNotification,
} from '../actions/notification';
import NotificationService from '../../services/notification';
import { Notification } from '../../types/Notification';
import { timestampToString } from '../../helpers/date';

type NotificationResponse = {
  [id: string]: Omit<Notification, 'id'>;
};
const fetchNotificationsThunk = (): ThunkAction<
  void,
  AppState,
  unknown,
  SetNotificationsAction
> => async (dispatch) => {
  const {
    data,
  }: Record<'data', NotificationResponse> = await NotificationService.get(
    '/notifications.json'
  );
  const ids: string[] = Object.keys(data);
  const notifications: Notification[] = [];
  ids.forEach((id) => {
    const notification: Notification = { ...data[id], id };
    notification.sendAtString = timestampToString(notification.sendAt);
    notifications.push(notification);
  });

  dispatch(setNotifications(notifications));
};

const seenNotificationThunk = (
  id: string
): ThunkAction<void, AppState, unknown, SeenNotificationAction> => async (
  dispatch
) => {
  const apiUrl = `/notifications/${id}.json`;
  NotificationService.patch(apiUrl, { seen: true });

  dispatch(seenNotification(id));
};

export { fetchNotificationsThunk, seenNotificationThunk };
