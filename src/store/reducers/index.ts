import { Reducer } from 'redux';
import { AppAction, ACTION_TYPE } from '../actions';
import { Notification } from '../../types/Notification';
import { NOTIFICATION_DUMMY } from '../../constants/Notification';

interface AppState {
  notifications: Notification[];
}

const iniState: AppState = {
  notifications: NOTIFICATION_DUMMY,
};

const appReducer: Reducer<AppState, AppAction> = (state = iniState, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_NOTIFICATIONS:
      return { ...state, notifications: action.payload.notifications };

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
          return notification.id === action.payload.id
            ? { ...notification, seen: true }
            : notification;
        }),
      };

    default:
      return state;
  }
};

export { AppState };
export default appReducer;
