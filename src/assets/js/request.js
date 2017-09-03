export default axios.create({
  baseURL: 'http://192.168.33.89/api',
  timeout: 10000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
})
