import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CommunityDataSource} from '../datasources';
import {LECTURE_COURSES, LectureCoursesRelations} from '../models';

export class LectureCoursesRepository extends DefaultCrudRepository<
LECTURE_COURSES,
  typeof LECTURE_COURSES.prototype.ID,
  LectureCoursesRelations
> {
  constructor(
    @inject('datasources.COMMUNITY') dataSource: CommunityDataSource,
  ) {
    super(LECTURE_COURSES, dataSource);
  }
}
