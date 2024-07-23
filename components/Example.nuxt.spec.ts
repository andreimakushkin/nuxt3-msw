import { registerEndpoint, renderSuspended } from '@nuxt/test-utils/runtime';
import Example from '~/components/Example.vue';
import { screen } from '@testing-library/vue';
import { it, describe } from 'vitest';

// Built-in function registerEndpoint works, but it's not flexible

// registerEndpoint('/example', () => {
//   return {
//     id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
//     url: 'https://example.com',
//   };
// });


describe('Example', () => {
  it('example with msw', async () => {
    await renderSuspended(Example);

    screen.getByText('Example');
    screen.getByText('https://example.com');
  });
});
