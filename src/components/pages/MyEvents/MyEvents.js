import React from 'react';
import PropTypes from 'prop-types';
import { Text, List, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

import AppLayout from '../../ui/AppLayout';

import { eventShape } from './MyEvents.shapes';

import {
  ButtonWrapper,
  TextSmall,
  ListItemWrapper,
} from './MyEvents.styles';

class MyEvents extends React.Component {
  static propTypes = {
    events: PropTypes.arrayOf(eventShape).isRequired,
    getEvents: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.getEvents();
  }

  render() {
    return (
      <AppLayout pageTitle="Moje Wydarzenia" activeTab="events" withGoBack withoutPadding>
        <ButtonWrapper>
          <Button
            full
            onPress={() => { Actions.push('filter'); }}
          >
            <Text>Filtry</Text>
          </Button>
        </ButtonWrapper>
        <List>
          {this.props.events.map(event => (
            <ListItemWrapper
              key={event.id}
              onPress={() => { Actions.eventPreview({ eventId: event.id }); }}
            >
              <Text>{`${event.date} ${event.time}`}</Text>
              <TextSmall>{`${event.discipline} - ${event.lookingFor}`}</TextSmall>
            </ListItemWrapper>
          ))}
        </List>
      </AppLayout>
    );
  }
}

export default MyEvents;
