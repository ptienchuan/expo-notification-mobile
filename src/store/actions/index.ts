import { Action } from 'redux';
import { Notification } from '../../types/Notification';

interface AppAction extends Action<ACTION_TYPE> {
  payload?: any;
  error?: boolean;
  meta?: any;
}

enum ACTION_TYPE {
  SET_NOTIFICATIONS,
  SEEN_NOTIFICATION,
  SEEN_NOTIFICATIONS,
}

// TODO: Seprate AppAction to multiple type of actions

const setNotifications = (notifications: Notification[]): AppAction => {
  return {
    type: ACTION_TYPE.SET_NOTIFICATIONS,
    payload: { notifications },
  };
};

const seenNotifications = (ids: number[]): AppAction => {
  return {
    type: ACTION_TYPE.SEEN_NOTIFICATIONS,
    payload: { ids },
  };
};

const seenNotification = (id: number): AppAction => {
  return {
    type: ACTION_TYPE.SEEN_NOTIFICATION,
    payload: { id },
  };
};

export {
  ACTION_TYPE,
  AppAction,
  setNotifications,
  seenNotifications,
  seenNotification,
};
