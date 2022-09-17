import { apiHelper } from "../utils/helpers";
const myAccessKey = '2PigcF7MkXCOk_L694lbEv2iwpNEDxWPOW9qzmIH5ic'

export default {
  images: {
    getImages() {
      return apiHelper.get(`photos/?client_id=${myAccessKey}&per_page=30`)
    },
    getRandomImages() {
      return apiHelper.get(`photos/random?client_id=${myAccessKey}&count=30`)
    },
    searchImages({ keyword, page }) {
      return apiHelper.get(`/search/photos/?client_id=${myAccessKey}&page=${page}&per_page=30&query=${keyword}`)
    },
    searchImagesColorSort({ keyword, page, color, sort }) {
      return apiHelper.get(`/search/photos/?client_id=${myAccessKey}&page=${page}&per_page=30&query=${keyword}&color=${color}&order_by=${sort}`)
    },
  }
}

