import { PromiseInterface } from "@/interface/promise";
import { API_URL, handleResponse } from "@/utils/handle-promise";

export const Product_Promise = {
    getAllProducts
}

function getAllProducts() {
  const requestPromise: PromiseInterface = {
    method: "GET",
  };

  return fetch(`https://dummyjson.com/products`, requestPromise).then(handleResponse)
}
