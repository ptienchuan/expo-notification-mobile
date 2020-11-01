import { Action } from 'redux';
import { Notification } from '../../types/Notification';

export enum ACTION_TYPE {
  SET_NOTIFICATIONS,
  SEEN_NOTIFICATION,
  SEEN_NOTIFICATIONS,
}

export interface SetNotificationsAction extends Action<ACTION_TYPE> {
  payload: Notification[];
}
export interface SeenNotificationAction extends Action<ACTION_TYPE> {
  payload: string;
}
export type SeenNotificationsAction = Action<ACTION_TYPE>;
export type AppAction =
  | SeenNotificationAction
  | SetNotificationsAction
  | SeenNotificationAction;

const setNotifications = (
  notifications: Notification[]
): SetNotificationsAction => {
  return { type: ACTION_TYPE.SET_NOTIFICATIONS, payload: notifications };
};

const seenNotifications = (): SeenNotificationsAction => {
  return { type: ACTION_TYPE.SEEN_NOTIFICATIONS };
};

const seenNotification = (id: string): SeenNotificationAction => {
  return {
    type: ACTION_TYPE.SEEN_NOTIFICATION,
    payload: id,
  };
};

export { setNotifications, seenNotifications, seenNotification };
