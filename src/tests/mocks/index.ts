const IS_RUNNING_ON_SERVER = typeof window === 'undefined';

export async function initMocks() {
  if (IS_RUNNING_ON_SERVER) {
    const { server } = await import('./server');
    server.listen({ onUnhandledRequest: 'bypass' });

    return;
  }

  const { worker } = await import('./browser');
  worker.start({ onUnhandledRequest: 'bypass' });
}
