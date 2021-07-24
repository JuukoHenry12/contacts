import {DEV_BACKEND_URL,PROD_BACKEND_URL}from '@env'

const devEneviromentVariable={
  DEV_BACKEND_URL
};

const ProEneviromentVariable={
  PROD_BACKEND_URL
};

export default __DEV__? devEneviromentVariable:ProEneviromentVariable
 