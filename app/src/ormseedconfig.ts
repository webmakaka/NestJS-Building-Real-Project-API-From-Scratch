import { ormconfig } from 'src/ormconfig';
import { DataSource } from 'typeorm';

const ormseedconfig = {
  ...ormconfig,
  migrations: [__dirname + '/seeds/**/*{.ts,js}'],
};

const PostgresDataSource = new DataSource({
  ...ormseedconfig,
});

PostgresDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });

export default PostgresDataSource;
