import { ConnectionOptions, DataSource } from 'typeorm';

export const ormconfig: ConnectionOptions = {
  type: 'postgres',
  host: 'postgres',
  port: 5432,
  database: 'postgresdb',
  username: 'admin1',
  password: 'pA55w0rd123',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrations: [__dirname + '/migrations/**/*{.ts,js}'],
};

const PostgresDataSource = new DataSource({
  ...ormconfig,
});

PostgresDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });

export default PostgresDataSource;
