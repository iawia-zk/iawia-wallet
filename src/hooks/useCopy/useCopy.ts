import { useState } from 'react';

import { TUseCopyReturn } from './useCopy.types';

function useCopy(): TUseCopyReturn {
  const [copied, setCopied] = useState(false);

  async function copy(value: string) {
    try {
      if (navigator.clipboard) {
        setCopied(true);
        await navigator.clipboard.writeText(value);
      }
    } catch (e) {
      // no log
    } finally {
      setTimeout(() => setCopied(false), 750);
    }
  }

  return { copied, copy };
}

export default useCopy;
