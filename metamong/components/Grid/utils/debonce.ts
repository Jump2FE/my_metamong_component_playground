export default function debounce(func: Function, wait = 0): Function {
  let timeoutId: undefined | number | NodeJS.Timeout = undefined;
  let context: undefined | Function = undefined;
  let argsToInvoke: any = undefined;

  function clearTimer() {
    clearTimeout(timeoutId);
    timeoutId = undefined;
  }

  function invoke() {
    // Don't invoke if there's no pending callback.
    if (timeoutId == null) {
      return;
    }

    clearTimer();
    func.apply(context, argsToInvoke);
  }

  function fn(this: any, ...args: any[]) {
    clearTimer();
    argsToInvoke = args;
    context = this;
    timeoutId = setTimeout(function () {
      invoke();
    }, wait);
  }

  fn.cancel = clearTimer;
  fn.flush = invoke;
  return fn;
}
