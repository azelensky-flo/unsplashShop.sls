import { errorHandler } from '@helper/error-handler';
import { log } from '@helper/logger';
import { PicturesManager } from './pictures.manager';
import { PicturesInterface } from './pictures.interface';

export async function getPictures(event) {
  log('getPictures', event);

  try {
    const picturesManager = new PicturesManager();
    const param = event.query;
    return await picturesManager.getPictures(param);
  } catch (e) {
    errorHandler(e);
  }

}
