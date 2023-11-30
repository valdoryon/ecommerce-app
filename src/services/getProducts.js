export const getProducts = (link, setState, setIsLoading) => {
  fetch(link)
    .then((response) => response.json())
    .then((json) => {
      setState(json);
      setIsLoading(false);
    });
};
