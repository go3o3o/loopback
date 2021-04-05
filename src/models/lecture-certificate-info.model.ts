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
  TITLE?: string;

  @property({
    type: 'string',
  })
  SUBTITLE?: string;

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
