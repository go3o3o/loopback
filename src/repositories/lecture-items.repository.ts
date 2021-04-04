import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MedistreamDataSource} from '../datasources';
import {LECTURE_ITEMS, LectureItemsRelations} from '../models';

export class LectureItemsRepository extends DefaultCrudRepository<
  LECTURE_ITEMS,
  typeof LECTURE_ITEMS.prototype.ID,
  LectureItemsRelations
> {
  constructor(
    @inject('datasources.medistream') dataSource: MedistreamDataSource,
  ) {
    super(LECTURE_ITEMS, dataSource);
  }
}
