import { Action } from 'redux';
import { Notification } from '../../types/Notification';

export enum ACTION_TYPE {
  FETCH_NOTIFICATIONS,
  SEEN_NOTIFICATION,
  SEEN_NOTIFICATIONS,
}

export interface FetchNotificationsAction extends Action<ACTION_TYPE> {
  payload: Notification[];
}

export interface SeenNotificationAction extends Action<ACTION_TYPE> {
  payload: number;
}

export type SeenNotificationsAction = Action<ACTION_TYPE>;

export type AppAction =
  | SeenNotificationAction
  | FetchNotificationsAction
  | SeenNotificationAction;

const fetchNotifications = (): FetchNotificationsAction => {
  return {
    type: ACTION_TYPE.FETCH_NOTIFICATIONS,
    payload: [],
  };
};

const seenNotifications = (): SeenNotificationsAction => {
  return { type: ACTION_TYPE.SEEN_NOTIFICATIONS };
};

const seenNotification = (id: number): SeenNotificationAction => {
  return {
    type: ACTION_TYPE.SEEN_NOTIFICATION,
    payload: id,
  };
};

export { fetchNotifications, seenNotifications, seenNotification };
