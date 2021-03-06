import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {LECTURE_ITEMS} from '../models';

const config: ModelCrudRestApiConfig = {
  model: LECTURE_ITEMS,
  pattern: 'CrudRest',
  dataSource: 'COMMUNITY',
  basePath: '/lecture-items',
};
module.exports = config;
