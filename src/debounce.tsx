import type { AnyFunction } from './types'
import { useRef } from 'react'


export default function useDebounce(wait=400, leading=false) {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const func = useRef<AnyFunction | null>(null);

  const _clearTimer = () => {
    timer.current && clearTimeout(timer.current);
    timer.current = null;
  }
  
  const _setFunction = (newFunction: AnyFunction, scope?: AnyFunction, args?: Array<any>) => {

    // Leading (Call on first)
    if (leading === true) {
      func.current = newFunction;

      // If timer not active, call.
      if (timer.current === null)
        func.current?.apply(scope, args);

      _clearTimer();
      timer.current = setTimeout(() => _clearTimer(), wait);
    }
    // Default (Call on last)
    else{
      _clearTimer();

      func.current = newFunction;

      timer.current = setTimeout(() => {
        func.current?.apply(scope, args);
        _clearTimer();
      }, wait);
    }
  }

  return _setFunction;
}
