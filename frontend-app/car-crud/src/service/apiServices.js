
import { Constants } from '../helpers/constant'
import constant from "./constant";

/***************************** API URL **************************/
const apiUrl = constant.API_URL
/******************************************************************/

export const ApiServices = {
  callServicePostWithBodyData: async (URL, apiBody) => {
    return new Promise(async (resolve, reject) => {
      await fetch(apiUrl + URL, {
        method: "POST",
        headers: {

          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiBody)
      })
        .then(responseData => responseData.json())
        .then((response, error) => {
          if (response) {
            return resolve(response)

          } else {
            return reject(error)
          }
        })
        .catch(error => {
          console.log("error", apiUrl + URL, ">>>>>>>", error);

          if (error.message == Constants.ERROR_COMETCHAT_LOGOUT) {
            return reject(Constants.ERROR_MESSAGE_COMETCHAT_LOGOUT);
          } else if (error.message == Constants.ERROR_NETWORK_REQUEST_FAILED) {
            return reject(Constants.NO_INTERNET);
          } else if (typeof error == String(undefined)) {
            return reject("");
          } else {
            return reject(error);
          }
        })
    })
  },
  callServicePutWithBodyData: async (URL, apiBody) => {
    return new Promise(async (resolve, reject) => {
      await fetch(apiUrl + URL, {
        method: "PUT",
        headers: {

          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiBody)
      })
        .then(responseData => responseData.json())
        .then((response, error) => {
          if (response) {
            return resolve(response)

          } else {
            return reject(error)
          }
        })
        .catch(error => {
          console.log("error", apiUrl + URL, ">>>>>>>", error);

          if (error.message == Constants.ERROR_COMETCHAT_LOGOUT) {
            return reject(Constants.ERROR_MESSAGE_COMETCHAT_LOGOUT);
          } else if (error.message == Constants.ERROR_NETWORK_REQUEST_FAILED) {
            return reject(Constants.NO_INTERNET);
          } else if (typeof error == String(undefined)) {
            return reject("");
          } else {
            return reject(error);
          }
        })
    })
  },
  callServiceGet: async (URL) => {
    return new Promise(async (resolve, reject) => {
      await fetch(apiUrl + URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      })
        .then(responseData => responseData.json())
        .then((response, error) => {
          if (response) {
            return resolve(response)

          } else {
            return reject(error)
          }
        })
        .catch(error => {
          console.log("error", apiUrl + URL, ">>>>>>>", error);

          if (error.message == Constants.ERROR_COMETCHAT_LOGOUT) {
            return reject(Constants.ERROR_MESSAGE_COMETCHAT_LOGOUT);
          } else if (error.message == Constants.ERROR_NETWORK_REQUEST_FAILED) {
            return reject(Constants.NO_INTERNET);
          } else if (typeof error == String(undefined)) {
            return reject("");
          } else {
            return reject(error);
          }
        })
    })
  },
  callServicePostWithFormData: async (URL, apiBody) => {
    return new Promise(async (resolve, reject) => {
      await fetch(apiUrl + URL, {
        method: "POST",
        headers: {

        },
        body: apiBody
      })
        .then(responseData => responseData.json())
        .then((response, error) => {
          if (response) {
            return resolve(response)

          } else {
            return reject(error)
          }
        })
        .catch(error => {
          console.log("error", error)
          console.log("error", apiUrl + URL, ">>>>>>>", error);

          if (error.message == Constants.ERROR_COMETCHAT_LOGOUT) {
            return reject(Constants.ERROR_MESSAGE_COMETCHAT_LOGOUT);
          } else if (error.message == Constants.ERROR_NETWORK_REQUEST_FAILED) {
            return reject(Constants.NO_INTERNET);
          } else if (typeof error == String(undefined)) {
            return reject("");
          } else {
            return reject(error);
          }
        })
    })
  },
  callServicePutWithFormData: async (URL, apiBody) => {
    return new Promise(async (resolve, reject) => {
      await fetch(apiUrl + URL, {
        method: "PUT",
        headers: {


        },
        body: apiBody
      })
        .then(responseData => responseData.json())
        .then((response, error) => {
          if (response) {
            console.log("response", apiUrl + URL, ">>>>>>>", response);
            return resolve(response)

          } else {
            console.log("error", apiUrl + URL, ">>>>>>>", error);
            return reject(error)
          }
        })
        .catch(error => {
          console.log("error", apiUrl + URL, ">>>>>>>", error);

          if (error.message == Constants.ERROR_COMETCHAT_LOGOUT) {
            return reject(Constants.ERROR_MESSAGE_COMETCHAT_LOGOUT);
          } else if (error.message == Constants.ERROR_NETWORK_REQUEST_FAILED) {
            return reject(Constants.NO_INTERNET);
          } else if (typeof error == String(undefined)) {
            return reject("");
          } else {
            return reject(error);
          }
        })
    })
  },
  callServiceDelete: async (URL) => {
    return new Promise(async (resolve, reject) => {
      await fetch(apiUrl + URL, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        }
      })
        .then(responseData => responseData.json())
        .then((response, error) => {
          if (response) {
            return resolve(response)

          } else {
            return reject(error)
          }
        })
        .catch(error => {
          console.log("error", apiUrl + URL, ">>>>>>>", error);

          if (error.message == Constants.ERROR_COMETCHAT_LOGOUT) {
            return reject(Constants.ERROR_MESSAGE_COMETCHAT_LOGOUT);
          } else if (error.message == Constants.ERROR_NETWORK_REQUEST_FAILED) {
            return reject(Constants.NO_INTERNET);
          } else if (typeof error == String(undefined)) {
            return reject("");
          } else {
            return reject(error);
          }
        })
    })
  },


}

