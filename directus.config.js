module.exports = function (env) {
  return {
    // Railway inputs
    ADMIN_EMAIL: env.ADMIN_EMAIL,
    ADMIN_PASSWORD: env.ADMIN_PASSWORD,
    KEY: env.KEY,
    SECRET: env.SECRET,

    // Reference: https://docs.railway.app/deploy/exposing-your-app
    PORT: env.PORT,

    // Reference: https://docs.railway.app/develop/variables#railway-provided-variables
    PUBLIC_URL: `http://0.0.0.0:${env.PORT}`,

    // Database variables from Railway PostgreSQL Plugin
    // Reference: https://docs.railway.app/plugins/postgresql
    DB_CLIENT: 'pg',
    DB_HOST: env.PGHOST,
    DB_PORT: env.PGPORT,
    DB_DATABASE: env.PGDATABASE,
    DB_USER: env.PGUSER,
    DB_PASSWORD: env.PGPASSWORD,

    STORAGE_LOCATIONS: 'cloudinary',
    STORAGE_CLOUDINARY_DRIVER: 'cloudinary',
    STORAGE_CLOUDINARY_CLOUD_NAME: env.CLOUDINARY_NAME,
    STORAGE_CLOUDINARY_API_KEY: env.CLOUDINARY_KEY,
    STORAGE_CLOUDINARY_API_SECRET: env.CLOUDINARY_SECRET,
    STORAGE_CLOUDINARY_ACCESS_MODE: 'public',

    MAX_PAYLOAD_SIZE: '50mb',
    CACHE_ENABLED: 'true',
    CACHE_TTL: '7days',
  };
};
