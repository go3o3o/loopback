import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';
require('dotenv').config()

const config = {
  name: 'COMMUNITY',
  connector: 'mysql',
  url: '',
  host: process.env.DATASOURCE_COMMUNITY_HOST,
  port: process.env.DATASOURCE_COMMUNITY_PORT,
  user: process.env.DATASOURCE_COMMUNITY_USER,
  password: process.env.DATASOURCE_COMMUNITY_PASSWORD,
  database: process.env.DATASOURCE_COMMUNITY_DATABASE
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class CommunityDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'COMMUNITY';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.COMMUNITY', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
