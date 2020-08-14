import { errorHandler } from '@helper/error-handler';
import { log } from '@helper/logger';
import { PicturesManager } from './pictures.manager';
import { PicturesUrl } from './pictures.interface';
import { GetPicturesService } from '@services/get-pictures.service';



export async function getPictures(event, context) {

  log('getPictures', event);

  try {

    const picturesManager = new PicturesManager();
    const paramUrl: PicturesUrl = event.query;
    const getPicturesService = new GetPicturesService();

    return await picturesManager.getPictures(paramUrl, getPicturesService);

  } catch (e) {

    errorHandler(e)

  }

}
