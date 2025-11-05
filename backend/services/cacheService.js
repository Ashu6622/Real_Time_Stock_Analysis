const cache = new Map();
export function getCache(key) {
  return cache.get(key);
}

export function setCache(key, value, ttlMs = 10000) {
  cache.set(key, { value, expires: Date.now() + ttlMs });
}

export function getFresh(key) {
  const item = cache.get(key);
  if (!item) return null;
  if (Date.now() > item.expires) {
    cache.delete(key);
    return null;
  }
  return item.value;
}
