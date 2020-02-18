import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';

import { AsyncApplicationModule } from 'src/typeormAndJest/exp/app-async.module';
import { author } from 'src/deep/deep2/util';
describe('TypeOrm', () => {
  let server;
  let app: INestApplication;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [AsyncApplicationModule],
    }).compile();

    app = module.createNestApplication();
    server = app.getHttpServer();
    await app.init();
  });

  it(`should return created entity`, () => {
    expect(author()).toBe('jeff chung');
    // return request(server)
    //   .post('/photo')
    //   .expect(201, { name: 'Nest', description: 'Is great!', views: 6000 });
  });

  afterEach(async () => {
    // await app.close();
  });
});
