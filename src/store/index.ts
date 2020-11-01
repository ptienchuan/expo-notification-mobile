import {
  AppAction,
  ACTION_TYPE,
  SeenNotificationAction,
  SetNotificationsAction,
} from './actions/notification';
import { Notification } from '../types/Notification';

export interface AppState {
  notifications: Notification[];
}

const iniState: AppState = {
  notifications: [],
};

const appReducer = (state = iniState, action: AppAction): AppState => {
  switch (action.type) {
    case ACTION_TYPE.SET_NOTIFICATIONS:
      return {
        ...state,
        notifications: (action as SetNotificationsAction).payload,
      };
    case ACTION_TYPE.SEEN_NOTIFICATIONS:
      return {
        ...state,
        notifications: state.notifications.map((notification) => {
          return { ...notification, seen: true };
        }),
      };
    case ACTION_TYPE.SEEN_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications.map((notification) => {
          return notification.id === (action as SeenNotificationAction).payload
            ? { ...notification, seen: true }
            : notification;
        }),
      };
    default:
      return state;
  }
};

export default appReducer;
