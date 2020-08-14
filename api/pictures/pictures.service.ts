import { GetPicturesService } from '@services/get-pictures.service';
import { AppError, CommonErrors } from '@helper/app-error';


export class PicturesService {

  async getPictures(url: string, getPicturesService: GetPicturesService) {

    let mediaInfo;

    try {
      mediaInfo = await getPicturesService.getPictures(url)
    } catch (e) {
      throw new AppError(CommonErrors.InternalServerError, e.message)
    }

    if (!mediaInfo) {
      throw new AppError(CommonErrors.BadRequest, "Can't extract media info. Please, check your URL")
    }

    return mediaInfo;

  }

}
