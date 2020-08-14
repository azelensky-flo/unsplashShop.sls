import axios from 'axios';

const baseURL = 'https://api.unsplash.com';
const client_id = 'k_uAJlDjzQOJ1wE47nT83aMH6z-tj0_JsoTt9jzVbZI';

export class GetPicturesService {

  constructor() {

  }

  async getPictures(params) {
    const { data } = await axios({
      method: 'GET',
      url: `${baseURL}/photos`,
      params: {
        ...params,
        client_id,
      },
    });

    return data;
  }


}
