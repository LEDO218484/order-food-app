async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);

  const resData = await response.json();

  if (!response.ok) {
    throw new Error(
      resData.message || "Somthing went wrong, failed to send Request failed!"
    );
  }
  return resData;
}

export default function useHttp() {
  async function sendRequest() {
    try {
      const resData = sendHttpRequest();
    } catch (error) {
        
    }
  }
}
