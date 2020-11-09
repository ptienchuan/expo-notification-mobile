import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';
import { NotificationStackParamList } from '../navigators/NotificationNavigator';
import { AppState } from '../store';
import { AppAction } from '../store/actions/notification';
import {
  fetchNotificationsThunk,
  seenNotificationThunk,
} from '../store/thunks/notification';
import Notification from '../screens/Notification/Notification';

type NavProps = {
  navigation: StackNavigationProp<NotificationStackParamList, 'Notification'>;
};

const mapStateToProps = (state: AppState, { navigation }: NavProps) => {
  return {
    navigation,
    notifications: state.notifications,
  };
};
export type StoreProps = ReturnType<typeof mapStateToProps>;

const mapDispatchTopProps = (dispatch: Dispatch<AppAction>) => {
  return {
    seenNotification: (id: string) =>
      dispatch(seenNotificationThunk(id) as any),
    fetchNotifications: () => dispatch(fetchNotificationsThunk() as any),
  };
};
export type DispatchProps = ReturnType<typeof mapDispatchTopProps>;

const NotificationContainer = connect(
  mapStateToProps,
  mapDispatchTopProps
)(Notification);

export default NotificationContainer;
