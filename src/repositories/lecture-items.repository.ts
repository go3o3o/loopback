import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CommunityDataSource} from '../datasources';
import {LectureItemsRelations, LECTURE_ITEMS} from '../models';

export class LectureItemsRepository extends DefaultCrudRepository<
  LECTURE_ITEMS,
  typeof LECTURE_ITEMS.prototype.ID,
  LectureItemsRelations
> {
  constructor(
    @inject('datasources.COMMUNITY') dataSource: CommunityDataSource,
  ) {
    super(LECTURE_ITEMS, dataSource);
  }
}
