// В pixabay-api.js
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

export const requestsData = inputData => {
  return fetch(
    `https://pixabay.com/api/?key=45097598-139b329fd073a7b3efd511e46&q=${inputData}&image_type=photo&orientation=horizontal&safesearch=true`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length <= 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
      console.log(data);
      return data;
    });
};
