import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {LECTURE_ITEMS} from '../models';
import {LectureItemsRepository} from '../repositories';

export class LectureItemsController {
  constructor(
    @repository(LectureItemsRepository)
    public lectureItemsRepository : LectureItemsRepository,
  ) {}

  @post('/lecture-items')
  @response(200, {
    description: 'LectureItems model instance',
    content: {'application/json': {schema: getModelSchemaRef(LECTURE_ITEMS)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LECTURE_ITEMS, {
            title: 'NewLectureItems',
            exclude: ['ID'],
          }),
        },
      },
    })
    lectureItems: Omit<LECTURE_ITEMS, 'ID'>,
  ): Promise<LECTURE_ITEMS> {
    return this.lectureItemsRepository.create(lectureItems);
  }

  @get('/lecture-items/count')
  @response(200, {
    description: 'LectureItems model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(LECTURE_ITEMS) where?: Where<LECTURE_ITEMS>,
  ): Promise<Count> {
    return this.lectureItemsRepository.count(where);
  }

  @get('/lecture-items')
  @response(200, {
    description: 'Array of LectureItems model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(LECTURE_ITEMS, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(LECTURE_ITEMS) filter?: Filter<LECTURE_ITEMS>,
  ): Promise<LECTURE_ITEMS[]> {
    return this.lectureItemsRepository.find(filter);
  }

  @patch('/lecture-items')
  @response(200, {
    description: 'LectureItems PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LECTURE_ITEMS, {partial: true}),
        },
      },
    })
    lectureItems: LECTURE_ITEMS,
    @param.where(LECTURE_ITEMS) where?: Where<LECTURE_ITEMS>,
  ): Promise<Count> {
    return this.lectureItemsRepository.updateAll(lectureItems, where);
  }

  @get('/lecture-items/{id}')
  @response(200, {
    description: 'LectureItems model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(LECTURE_ITEMS, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(LECTURE_ITEMS, {exclude: 'where'}) filter?: FilterExcludingWhere<LECTURE_ITEMS>
  ): Promise<LECTURE_ITEMS> {
    return this.lectureItemsRepository.findById(id, filter);
  }

  @patch('/lecture-items/{id}')
  @response(204, {
    description: 'LectureItems PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LECTURE_ITEMS, {partial: true}),
        },
      },
    })
    lectureItems: LECTURE_ITEMS,
  ): Promise<void> {
    await this.lectureItemsRepository.updateById(id, lectureItems);
  }

  @put('/lecture-items/{id}')
  @response(204, {
    description: 'LectureItems PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() lectureItems: LECTURE_ITEMS,
  ): Promise<void> {
    await this.lectureItemsRepository.replaceById(id, lectureItems);
  }

  @del('/lecture-items/{id}')
  @response(204, {
    description: 'LectureItems DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.lectureItemsRepository.deleteById(id);
  }
}
