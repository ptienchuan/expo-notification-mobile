import { Dispatch } from 'redux';
import { connect, MapStateToProps } from 'react-redux';
import { AppState } from '../store';
import { seenNotification, AppAction } from '../store/actions';
import Notification, {
  NotificationProps,
  NotificationNavProps,
  NotificationDispatchProps,
} from '../screens/Notification/Notification';

const mapStateToProps: MapStateToProps<
  NotificationProps,
  NotificationNavProps,
  AppState
> = (state, { navigation }) => {
  return {
    navigation,
    notifications: state.notifications,
  };
};

const mapDispatchTopProps = (
  dispatch: Dispatch<AppAction>
): NotificationDispatchProps => {
  return {
    seenNotification: (id) => dispatch(seenNotification(id)),
  };
};

const NotificationContainer = connect(
  mapStateToProps,
  mapDispatchTopProps
)(Notification);

export default NotificationContainer;
