import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MedistreamDataSource} from '../datasources';
import {LectureItems, LectureItemsRelations} from '../models';

export class LectureItemsRepository extends DefaultCrudRepository<
  LectureItems,
  typeof LectureItems.prototype.ID,
  LectureItemsRelations
> {
  constructor(
    @inject('datasources.medistream') dataSource: MedistreamDataSource,
  ) {
    super(LectureItems, dataSource);
  }
}
