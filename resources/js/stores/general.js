import { defaineStore } from 'pinia';

export const useGeneralStore = defaineStore('general', {
  state: () => ({
      isPostOverlay: false,
      isCropperModal: false,
      isImageDisplay: null
  }),
    persist: true
});
