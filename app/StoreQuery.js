import Relay from 'react-relay';

export default {
  viewer: (Component, variables) => Relay.QL`
    query MainQuery {
      store {
        ${Component.getFragment('viewer', variables)}
      }
    }
  `,
};
