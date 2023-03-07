const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      // .then(response => response.json())
      .then(response => {
        if(!response.ok) {
          throw new Error('Something went wrong.')
        }
        return response.json()
      })
}

const addUrl = (title, long_url) => {
  return fetch('http://localhost:3001/api/v1/urls',
    {
      method: 'POST',
      headers: {'Content-Type': "application/json"},
      body: JSON.stringify({ title: title, long_url: long_url })
    })
    .then(response => {
      if(!response.ok) {
        throw new Error('Something went wrong.')
      }
      return response.json()
    })
}

const deleteUrl = (id) => {
  return fetch(`http://localhost:3001/api/v1/urls/${id}`,
  {
    method:'DELETE'
  })
}

export { getUrls, addUrl, deleteUrl }