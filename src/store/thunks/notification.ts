import { ThunkAction } from 'redux-thunk';
import { AppState } from '..';
import {
  SetNotificationsAction,
  setNotifications,
} from '../actions/notification';
import NotificationService, { getUrl } from '../../services/notification';
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
  }: { data: NotificationResponse } = await NotificationService.get(
    getUrl('noId')
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

export { fetchNotificationsThunk };
