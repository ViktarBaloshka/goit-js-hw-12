export let PAGE = 1;
export const PER_PAGE = 15;
const API_KEY = '35721413-e0710a9b17feed22ef75fc503';
export const params = {
  key: API_KEY,
  imageType: 'photo',
  orientation: 'horizontal',
  safeSearch: 'true',
  page: PAGE,
  per_page: PER_PAGE,
};
