type StorageOptions = {
  ttl?: number; // in milliseconds (optional expiry)
};

export function setStorage<T>(key: string, value: T, options?: StorageOptions) {
  const item = {
    value,
    expiry: options?.ttl ? Date.now() + options.ttl : null,
  };
  localStorage.setItem(key, JSON.stringify(item));
}

export function getStorage<T>(key: string): T | null {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) return null;

  try {
    const item = JSON.parse(itemStr);

    if (item.expiry && Date.now() > item.expiry) {
      // expired → clear and return null
      localStorage.removeItem(key);
      return null;
    }
    return item.value as T;
  } catch {
    return null;
  }
}

export function removeStorage(key: string) {
  localStorage.removeItem(key);
}

export function clearStorage() {
  localStorage.clear();
}
