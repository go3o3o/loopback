import {Entity, model, property} from '@loopback/repository';

@model()
export class LECTURE_ITEMS extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  ID?: number;

  @property({
    type: 'number',
  })
  ARTICLE_ID: number;

  @property({
    type: 'number',
  })
  LECTURE_COURSES_ID: number;

  @property({
    type: 'string',
    required: true,
  })
  PRODUCT_ID: string;

  @property({
    type: 'string',
    required: true,
  })
  VARIANT_SKU: string;

  @property({
    type: 'string',
  })
  MEDIA_CONTENT_KEY?: string;

  @property({
    type: 'number',
  })
  COURSE_ID: number;

  @property({
    type: 'number',
  })
  CONTROLLED: number;

  @property({
    type: 'number',
  })
  MARK: number;

  @property({
    type: 'string',
  })
  REQUIREMENT: string;


  constructor(data?: Partial<LECTURE_ITEMS>) {
    super(data);
  }
}

export interface LectureItemsRelations {
  // describe navigational properties here
}

export type LectureItemsWithRelations = LECTURE_ITEMS & LectureItemsRelations;
