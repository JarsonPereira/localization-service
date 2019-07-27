import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { RegisterStateInput } from 'src/localizationModule/commands/inputs/state/registerState.input';
import { StateContract } from 'src/localizationModule/contracts/stateContract/state.contract';
import { StateModule } from 'src/localizationModule/modules/stateModule/state.module';

describe('StateController (e2e)', () => {
  let app;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [StateModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/states')
      .expect(200);

  });

  // exemplo de validação de classes
  it(' Deve retonar estado inválido ', () => {

    let input = new RegisterStateInput();
    input.name = 'Tocantins';
    // sigla vazia
    input.initials = '';

    let contract = new StateContract();
    let inputValid = contract.validate(input);

    return expect(false).toContain(inputValid);

  });

  it(' Deve retonar estado válido ', () => {

    let input = new RegisterStateInput();
    input.name = 'Tocantins';
    // sigla vazia
    input.initials = 'TO';

    let contract = new StateContract();
    let inputValid = contract.validate(input);

    return expect(true).toContain(inputValid);

  });



});
