import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {LECTURE_CERTIFICATE_INFO} from '../models';

const config: ModelCrudRestApiConfig = {
  model: LECTURE_CERTIFICATE_INFO,
  pattern: 'CrudRest',
  dataSource: 'COMMUNITY',
  basePath: '/lecture-certificate-infos',
};
module.exports = config;
