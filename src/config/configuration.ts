export default () => ({
  type: process.env.TYPEORM_CONNECTION_TYPE,
  host: process.env.TYPEORM_HOST,
  port: parseInt(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: process.env.TYPEORM_ENTITIES,
  synchronize: false,
});
