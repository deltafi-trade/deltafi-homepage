export function scheduleWithInterval(func: () => void, delay: number) {
  func();
  const interval = setInterval(func, delay);
  return () => clearInterval(interval);
}
