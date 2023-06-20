import { setupServer } from 'msw/node';

import { handlers } from './api/handlers';

export const server = setupServer(...handlers);
