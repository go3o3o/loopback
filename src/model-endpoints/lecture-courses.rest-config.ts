import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {LECTURE_COURSES} from '../models';

const config: ModelCrudRestApiConfig = {
  model: LECTURE_COURSES,
  pattern: 'CrudRest',
  dataSource: 'COMMUNITY',
  basePath: '/lecture-courses',
};
module.exports = config;
