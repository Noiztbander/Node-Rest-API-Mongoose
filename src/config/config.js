const dotenv = require("dotenv");

dotenv.config();

const {
  MONGO_DB_URL_PRODUCTION,
  MONGO_DB_URL_DEVELOPMENT,
  MONGO_DB_URL_TEST,
  ACCESS_TOKEN_SECRET,
  LOCAL_PORT,
  ATLAS_PORT,
  ENCRYPTION_SALT_DEVELOPMENT,
  ENCRYPTION_SALT_PRODUCTION,
} = process.env;

const CONFIG = {
  production: {
    app: {
      LOCAL_PORT: LOCAL_PORT || 27017,
      ATLAS_PORT: ATLAS_PORT,
    },
    db: {
      url: MONGO_DB_URL_PRODUCTION,
    },
    encrypt: {
      salt: ENCRYPTION_SALT_PRODUCTION,
    },
  },
  development: {
    app: {
      LOCAL_PORT: LOCAL_PORT || 27017,
      ATLAS_PORT: ATLAS_PORT,
    },
    db: {
      url: MONGO_DB_URL_DEVELOPMENT,
    },
    encrypt: {
      salt: ENCRYPTION_SALT_DEVELOPMENT,
    },
  },
  test: {
    app: {
      LOCAL_PORT: LOCAL_PORT || 27017,
      ATLAS_PORT: ATLAS_PORT,
    },
    db: {
      url: MONGO_DB_URL_TEST,
    },
    encrypt: {
      salt: ENCRYPTION_SALT_DEVELOPMENT,
    },
  },
};

module.exports = {
  config: CONFIG.development,
};