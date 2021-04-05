import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {LECTURE_PROGRESS} from '../models';

const config: ModelCrudRestApiConfig = {
  model: LECTURE_PROGRESS,
  pattern: 'CrudRest',
  dataSource: 'COMMUNITY',
  basePath: '/lecture-progresses',
};
module.exports = config;
