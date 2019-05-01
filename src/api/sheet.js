import validate from '../utils/validation';

function postData(row) {
  const validation = validate(row);
  if (!validation) return false;

  fetch(process.env.VUE_APP_LAMBDA_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain',
    },
    body: JSON.stringify({
      method: 'append',
      sheet: process.env.VUE_APP_LAMBDA_SHEET_TITLE,
      authorization: process.env.VUE_APP_LAMBDA_AUTH_TOKEN,
      ...row,
    }),
  })
    .then((resp) => {
      console.log(resp);
    })
    .catch(error => console.error(error));

  return true;
}

export default postData;
