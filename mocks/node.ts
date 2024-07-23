import { setupServer } from 'msw/node';
import { handlers } from './handlers';

export const server = setupServer(...handlers);

server.events.on('request:start', ({ request }) => {
  console.log('Outgoing:', request.method, request.url);
});

server.events.on('request:match', ({ request }) => {
  console.log('Match:', request.method, request.url);
});
