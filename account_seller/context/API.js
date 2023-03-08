const baseUrl = "https://jsonplaceholder.typicode.com";
const useFetchData = async (url) => {
  const userData = await fetch(`${baseUrl}/${url}`);
  return await userData.json();
};

export default useFetchData;
