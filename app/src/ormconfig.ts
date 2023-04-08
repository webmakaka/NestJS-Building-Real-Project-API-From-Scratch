import { ConnectionOptions, DataSource } from 'typeorm';

export const ormconfig: ConnectionOptions = {
  type: 'postgres',
  host: 'postgres',
  port: 5432,
  database: 'postgresdb',
  username: 'admin1',
  password: 'pA55w0rd123',
};

const PostgresDataSource = new DataSource({
  ...ormconfig,
  synchronize: false,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/**/*{.ts,js}'],
});

PostgresDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });

export default PostgresDataSource;
