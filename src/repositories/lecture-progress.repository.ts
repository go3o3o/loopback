import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CommunityDataSource} from '../datasources';
import {LectureProgressRelations, LECTURE_PROGRESS} from '../models';

export class LectureProgressRepository extends DefaultCrudRepository<
  LECTURE_PROGRESS,
  typeof LECTURE_PROGRESS.prototype.ID,
  LectureProgressRelations
> {
  constructor(
    @inject('datasources.COMMUNITY') dataSource: CommunityDataSource,
  ) {
    super(LECTURE_PROGRESS, dataSource);
  }
}
