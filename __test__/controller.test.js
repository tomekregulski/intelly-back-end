const app = require('../app');
const supertest = require('supertest');

it('Gets a non-existent endpoint', async () => {
  await supertest(app)
    .get('/api')
    .expect(404)
    .then((response) => {
      expect(response.body.error.message).toBe('Not Found');
    });
});

it('Calls the whole-foods-timeframe-data endpoint without a roles parameter', async () => {
  await supertest(app)
    .get('/api/whole-foods-timeframe-data/')
    .expect(400)
    .then((response) => {
      expect(response.body.error.message).toBe('You must log in to continue');
    });
});

it('Calls the whole-foods-timeframe-data endpoint without an access parameter', async () => {
  await supertest(app)
    .get('/api/whole-foods-timeframe-data/')
    .set('roles', 'ROLE_ADMIN')
    .expect(400)
    .then((response) => {
      expect(response.body.error.message).toBe(
        'You do not have access to this service'
      );
    });
});

it('Calls the whole-foods-timeframe-data endpoint with a mismatched access parameter', async () => {
  await supertest(app)
    .get('/api/whole-foods-timeframe-data/')
    .set('roles', 'ROLE_ADMIN')
    .set('access', 'reports')
    .expect(400)
    .then((response) => {
      expect(response.body.error.message).toBe(
        'You do not have access to this service'
      );
    });
});

it('Calls the whole-foods-timeframe-data endpoint without the a brand header', async () => {
  await supertest(app)
    .get('/api/whole-foods-timeframe-data/')
    .set('roles', 'ROLE_ADMIN')
    .set('access', 'retail-data')
    .set('timeframe', '20210309')
    .expect(400)
    .then((response) => {
      expect(response.body.error.message).toBe('You must specify a brand');
    });
});

it('Calls the whole-foods-timeframe-data endpoint without a timeframe header', async () => {
  await supertest(app)
    .get('/api/whole-foods-timeframe-data/')
    .set('roles', 'ROLE_ADMIN')
    .set('access', 'retail-data')
    .set('brand', 'simmer')
    .expect(400)
    .then((response) => {
      expect(response.body.error.message).toBe('You must specify a timeframe');
    });
});
