import React from 'react';
import PropTypes from 'prop-types';
import { Text, List, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';

import AppLayout from '../../ui/AppLayout';

import { placeShape } from './Places.shapes';

import { PageWrapper } from './Places.styles';

class Places extends React.Component {
  static propTypes = {
    places: PropTypes.arrayOf(placeShape).isRequired,
    getPlaces: PropTypes.func.isRequired,
  };


  componentWillMount() {
    this.props.getPlaces();
  }


  render() {
    return (
      <AppLayout pageTitle="Miejsca" activeTab="places" withGoBack>
        <PageWrapper>
          <List>
            {this.props.places.map(place => (
              <ListItem onPress={() => { Actions.push('home'); }} key={place.id}><Text>{`${place.street} ${place.number}, ${place.city}`}</Text></ListItem>
                    ))}
          </List>
        </PageWrapper>
      </AppLayout>
    );
  }
}

export default Places;
