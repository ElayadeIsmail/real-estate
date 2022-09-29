import request from 'supertest';
import { app } from '../../app';
//

it('should create a new user', async () => {
    return request(app).get('/healthcheck').send({}).expect(200);
});
it('should create a new user', async () => {
    return request(app)
        .post('/auth/login')
        .send({
            email: 'sam@gmail.com',
            password: 'MyStrong@pASSWORD',
        })
        .expect(400);
});
it('should create a new user', async () => {
    return request(app).get('/listings').send().expect(200);
});
