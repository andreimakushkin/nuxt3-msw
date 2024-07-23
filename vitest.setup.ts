import { beforeAll, afterAll, afterEach } from 'vitest';
import { server } from '~/mocks/node';

beforeAll(() => {
    server.listen();
});

afterAll(() => {
    server.close();
});

afterEach(() => {
    server.resetHandlers();
});
