import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
  type: 'postgres',
  host: 'postgres',
  port: 5432,
  database: 'postgresdb',
  username: 'admin1',
  password: 'pA55w0rd123',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
};

export default config;
