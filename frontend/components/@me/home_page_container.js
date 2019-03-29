import { getServers } from '../../actions/server_actions';
import { getUser } from '../../actions/user_actions';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import homePage from './home_page';


const msp = (state, ownProps) =>({
  userId: ownProps.match.params.userId,
  user: state.entities.users[ownProps.match.params.userId] || {},
});

const mdp = dispatch => ({
  getServers: () => dispatch(getServers()),
  getUser: (id) => dispatch(getUser(id)),
  logout: () => dispatch(logout())
});

export default connect(msp,mdp)(homePage);