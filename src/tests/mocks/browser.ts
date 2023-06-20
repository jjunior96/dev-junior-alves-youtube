'use client';

import { setupWorker } from 'msw';

import { handlers } from './api/handlers';

export const worker = setupWorker(...handlers);
