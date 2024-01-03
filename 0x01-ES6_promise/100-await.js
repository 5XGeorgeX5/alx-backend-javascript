import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  let user;
  let photo;

  try {
    [user, photo] = await Promise.all([createUser(), uploadPhoto()]);
    return {
      photo,
      user,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
