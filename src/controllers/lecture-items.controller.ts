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
import {LectureItems} from '../models';
import {LectureItemsRepository} from '../repositories';

export class LectureItemsController {
  constructor(
    @repository(LectureItemsRepository)
    public lectureItemsRepository : LectureItemsRepository,
  ) {}

  @post('/lecture-items')
  @response(200, {
    description: 'LectureItems model instance',
    content: {'application/json': {schema: getModelSchemaRef(LectureItems)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LectureItems, {
            title: 'NewLectureItems',
            exclude: ['ID'],
          }),
        },
      },
    })
    lectureItems: Omit<LectureItems, 'ID'>,
  ): Promise<LectureItems> {
    return this.lectureItemsRepository.create(lectureItems);
  }

  @get('/lecture-items/count')
  @response(200, {
    description: 'LectureItems model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(LectureItems) where?: Where<LectureItems>,
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
          items: getModelSchemaRef(LectureItems, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(LectureItems) filter?: Filter<LectureItems>,
  ): Promise<LectureItems[]> {
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
          schema: getModelSchemaRef(LectureItems, {partial: true}),
        },
      },
    })
    lectureItems: LectureItems,
    @param.where(LectureItems) where?: Where<LectureItems>,
  ): Promise<Count> {
    return this.lectureItemsRepository.updateAll(lectureItems, where);
  }

  @get('/lecture-items/{id}')
  @response(200, {
    description: 'LectureItems model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(LectureItems, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(LectureItems, {exclude: 'where'}) filter?: FilterExcludingWhere<LectureItems>
  ): Promise<LectureItems> {
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
          schema: getModelSchemaRef(LectureItems, {partial: true}),
        },
      },
    })
    lectureItems: LectureItems,
  ): Promise<void> {
    await this.lectureItemsRepository.updateById(id, lectureItems);
  }

  @put('/lecture-items/{id}')
  @response(204, {
    description: 'LectureItems PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() lectureItems: LectureItems,
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
