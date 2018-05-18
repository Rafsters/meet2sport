import ApiManager from 'utils/ApiManager';

const initialState = {
  events: [],
  initialValues: {
    event: 0,
  },
};

const actions = {
  getEvents: 'MY_EVENTS_GET_EVENTS',
};

export const getEvents = () => {
  const user = ApiManager.getUser();
  const promise = ApiManager.getAllWhere('events_users', 'userId', '==', user.id).then(events => (
    Promise.all(events.map(event => (
      ApiManager.getOne('events', event.eventId)
    )))
  ));

  return ({
    type: actions.getEvents,
    payload: promise,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.getEvents:
      return {
        ...state,
        events: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
