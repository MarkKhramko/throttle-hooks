import type { AnyFunction } from './types'
import { useRef, useState } from 'react'


export default function useThrottle(wait=400, leading=false, trailing=false) {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const func = useRef<AnyFunction | null>(null);
  const [previous, setPrevious] = useState<number>(0);

  const _clearTimer = () => {
    timer.current && clearTimeout(timer.current);
    timer.current = null;
  }

  const _later = (scope?: AnyFunction, args?: Array<any>) => {
    setPrevious(leading === false ? 0 : Date.now());
    _clearTimer();

    // Call.
    func.current?.apply(scope, args);
  };

  const _setFunction = (newFunction: AnyFunction, scope?: AnyFunction, args?: Array<any>) => {
    // Fixate current time.
    const now = Date.now();
    // Set new function.
    func.current = newFunction;

    if (!previous && leading === false)
      setPrevious(now);

    const remaining = wait - (now - previous);

    if (remaining <= 0 || remaining > wait) {

      _clearTimer();
      setPrevious(now);

      // Call.
      func.current?.apply(scope, args);
    }
    else if (timer.current === null && trailing !== false) {
      timer.current = setTimeout(() => _later(scope, args), remaining);
    }
  }

  return _setFunction;
}
