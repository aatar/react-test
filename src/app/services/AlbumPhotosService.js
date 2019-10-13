import api from '../config/api';

export async function getPhotos(albumId) {
  return api.get(`/albums/${albumId}/photos`);
}
