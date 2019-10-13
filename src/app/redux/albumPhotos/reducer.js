import Immutable from 'seamless-immutable';

import { actions } from './actions';

export const defaultState = {
  albumPhotos: []
};

/* eslint-disable complexity */
export function reducer(state = Immutable(defaultState), action) {
  switch (action.type) {
    case actions.GET_PHOTOS: {
      return { ...state, albumPhotos: action.payload.photos };
    }
    default: {
      return state;
    }
  }
}
