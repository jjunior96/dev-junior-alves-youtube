'use client';

import { useServerInsertedHTML } from 'next/navigation';
import * as React from 'react';

import createCache from '@emotion/cache';
import type {
  EmotionCache,
  Options as OptionsOfCreateCache
} from '@emotion/cache';
import { CacheProvider as DefaultCacheProvider } from '@emotion/react';

export type EmotionCacheProviderProps = {
  options: Omit<OptionsOfCreateCache, 'insertionPoint'>;
  CacheProvider?: (props: {
    value: EmotionCache;
    children: React.ReactNode;
  }) => React.JSX.Element | null;
  children: React.ReactNode;
};

export function EmotionCacheProvider({
  children,
  ...rest
}: EmotionCacheProviderProps) {
  const { options, CacheProvider = DefaultCacheProvider } = rest;

  const [{ cache, flush }] = React.useState(() => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const cache = createCache(options);
    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted: string[] = [];
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) {
      return null;
    }
    let styles = '';
    // eslint-disable-next-line no-restricted-syntax
    for (const name of names) {
      styles += cache.inserted[name];
    }
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(' ')}`}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: styles
        }}
      />
    );
  });

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
