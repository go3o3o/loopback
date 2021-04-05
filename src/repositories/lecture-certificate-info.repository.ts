import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CommunityDataSource} from '../datasources';
import {LectureCertificateInfoRelations, LECTURE_CERTIFICATE_INFO} from '../models';

export class LECTURE_CERTIFICATE_INFORepository extends DefaultCrudRepository<
  LECTURE_CERTIFICATE_INFO,
  typeof LECTURE_CERTIFICATE_INFO.prototype.ID,
  LectureCertificateInfoRelations
> {
  constructor(
    @inject('datasources.COMMUNITY') dataSource: CommunityDataSource,
  ) {
    super(LECTURE_CERTIFICATE_INFO, dataSource);
  }
}
