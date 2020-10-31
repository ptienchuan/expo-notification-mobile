import { connect, MapStateToProps } from 'react-redux';
import { AppState } from '../store';
import NotificationDetail, {
  NotificationDetailProps,
} from '../screens/NotificationDetail/NotificationDetail';

const mapStateToProps: MapStateToProps<
  NotificationDetailProps,
  NotificationDetailProps,
  AppState
> = (_, { route }) => {
  return {
    route,
  };
};

const NotificationContainer = connect(mapStateToProps)(NotificationDetail);

export default NotificationContainer;
