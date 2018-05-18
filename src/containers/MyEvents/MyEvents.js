import React from 'react';
import { connect } from 'react-redux';
import MyEvents from 'components/pages/MyEvents';

import { getEvents } from './store';

const MyEventsPage = props => (
  <MyEvents {...props} />
);

const mapStateToProps = state => ({
  ...state.selectEvents,
});

export default connect(mapStateToProps, { getEvents })(MyEventsPage);
