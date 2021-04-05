import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class LECTURE_CERTIFICATE_INFO extends Entity {
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
  ARTICLE_ID: number;

  @property({
    type: 'string',
  })
  NAME?: string;

  @property({
    type: 'string',
  })
  SIGN_URL?: string;

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
  PROGRAM_TITLE?: string;

  @property({
    type: 'string',
  })
  DESCRIPTION?: string;

  @property({
    type: 'number',
  })
  CREDIT?: string;

  @property({
    type: 'string',
  })
  CREATED_BY?: string;

  @property({
    type: 'string',
  })
  UPDATED_BY?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<LECTURE_CERTIFICATE_INFO>) {
    super(data);
  }
}

export interface LectureCertificateInfoRelations {
  // describe navigational properties here
}

export type LectureCertificateInfoWithRelations = LECTURE_CERTIFICATE_INFO & LectureCertificateInfoRelations;
