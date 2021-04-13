import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class LECTURE_COURSES extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  ID?: number;

  @property({
    type: 'string',
    required: true,
  })
  SKU_CODE: string;

  @property({
    type: 'string',
  })
  INSTITUTION_NAME?: string;

  @property({
    type: 'string',
  })
  SIGN_IMAGE_URL?: string;

  @property({
    type: 'string',
  })
  START_DATE?: string;

  @property({
    type: 'string',
  })
  END_DATE?: string;

  @property({
    type: 'string',
  })
  CERTIFICATE_DATE?: string;

  @property({
    type: 'string',
  })
  CERTIFICATE_TITLE?: string;

  @property({
    type: 'string',
  })
  CERTIFICATE_SUBTITLE?: string;

  @property({
    type: 'string',
  })
  COURSE_TITLE?: string;

  @property({
    type: 'string',
  })
  COURSE_DESCRIPTION?: string;

  @property({
    type: 'number',
  })
  CREDIT?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<LECTURE_COURSES>) {
    super(data);
  }
}

export interface LectureCoursesRelations {
  // describe navigational properties here
}

export type LectureCoursesWithRelations = LECTURE_COURSES & LectureCoursesRelations;
