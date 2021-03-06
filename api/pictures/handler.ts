import { errorHandler } from '@helper/error-handler';
import { log } from '@helper/logger';
import { PicturesManager } from './pictures.manager';
import { GetPicturesService } from '@services/get-pictures.service';



export async function getPictures(event) {

  log('getPictures', event);

  try {

    const picturesManager = new PicturesManager();
    const param = event.query;
    const getPicturesService = new GetPicturesService();

    return await picturesManager.getPictures(param, getPicturesService);

  } catch (e) {

    errorHandler(e)

  }

}
