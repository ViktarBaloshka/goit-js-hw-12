const params = {
  key: '35721413-e0710a9b17feed22ef75fc503',
  q: '',
  imageType: 'photo',
  orientation: 'horizontal',
  safeSearch: 'true',
};
const BASE_URL = 'https://pixabay.com/api/';
export function queryHttp(value) {
  params.q = value;
  const searchParams = new URLSearchParams(params).toString();
  return `${BASE_URL}/?${searchParams}`;
}

export function fetchPictures(query) {
  return fetch(queryHttp(query)).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
