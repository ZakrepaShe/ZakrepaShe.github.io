export const api = (token) => ({
  get: () => fetch(`https://api.github.com/user?access_token=${token}`).then(res => res.json()),
  patch: params => fetch(`https://api.github.com/user?access_token=${token}`, {
    method: 'PATCH',
    body: JSON.stringify(params),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
});