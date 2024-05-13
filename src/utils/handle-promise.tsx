export function handleResponse(response:any) {
    return response.text().then((text:string | any) => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
        if ([401].indexOf(response.status) !== -1) {
        }
  
        const error = (data && data.message) || response.statusText;
        return Promise.reject({ error, data, statusCode: response?.status });
      }
  
      return data;
    });
  }
  

export const API_URL = process.env.API_URL