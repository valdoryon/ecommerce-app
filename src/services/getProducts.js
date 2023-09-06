export const getProducts = (link, setState) => {
  fetch(link)
    .then(response => response.json())
    .then((json) => {
      setState(json)
    })
}
