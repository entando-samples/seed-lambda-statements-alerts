/* eslint-disable-next-line import/prefer-default-export */
export const DOMAIN = process.env.REACT_APP_DOMAIN;
let SERVICE_URL;

export function setServiceURL(serviceURL) {
  SERVICE_URL = serviceURL;
}
export function getServiceURL() {
  return SERVICE_URL;
}
