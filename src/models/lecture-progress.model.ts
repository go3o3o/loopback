import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class LECTURE_PROGRESS extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  ID?: number;

  @property({
    type: 'number',
    required: true,
  })
  USER_ID: number;

  @property({
    type: 'number',
    required: true,
  })
  ARTICLE_ID: number;

  @property({
    type: 'string',
  })
  PRODUCT_ID?: string;

  @property({
    type: 'string',
  })
  VARIANT_SKU?: string;

  @property({
    type: 'number',
  })
  TOTAL_RUNTIME?: number;

  @property({
    type: 'number',
  })
  PLAYTIME?: number;

  @property({
    type: 'number',
  })
  PLAYTIME_RAW?: number;

  @property({
    type: 'number',
  })
  PLAYTIME_RATIO?: number;

  @property({
    type: 'number',
  })
  LAST_PLAYPOINT?: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<LECTURE_PROGRESS>) {
    super(data);
  }
}

export interface LectureProgressRelations {
  // describe navigational properties here
}

export type LectureProgressWithRelations = LECTURE_PROGRESS & LectureProgressRelations;
