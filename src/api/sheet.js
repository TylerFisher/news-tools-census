function postData(row) {
  fetch('https://691b2w8t8d.execute-api.us-east-1.amazonaws.com/Prod/', {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain',
    },
    body: JSON.stringify({
      method: 'append',
      sheet: 'news-tools-census',
      authorization: 'Token wapoeifgh4p234hgp',
      ...row,
    }),
  })
    .then((resp) => {
      console.log(resp);
    })
    .catch(error => console.error(error));
}

export default postData;
