import { stringArrayToObject } from '../../utils/reduxUtils';
import * as AlbumPhotosService from '../../services/AlbumPhotosService';

/* ------------- Auth actions' name ------------- */
export const actions = stringArrayToObject([
  'GET_PHOTOS' /* ,
  'SIGN_IN_SUCCESS',
  'SIGN_IN_FAILURE',
  'INIT' */
]);

export const actionCreators = {
  getPhotos(albumId) {
    return async dispatch => {
      const response = await AlbumPhotosService.getPhotos(albumId);
      if (response.ok) {
        const photos = response.data;
        dispatch({
          type: actions.GET_PHOTOS,
          payload: { photos }
        });
      }
    };
  }
};
