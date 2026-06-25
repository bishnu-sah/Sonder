import type { NavigateFunction } from 'react-router-dom';

const authKeyPattern = /(auth|token|session|jwt|user)/i;

function clearAuthStorage(storage: Storage) {
  const keysToRemove: string[] = [];

  for (let index = 0; index < storage.length; index += 1) {
    const key = storage.key(index);

    if (key && authKeyPattern.test(key)) {
      keysToRemove.push(key);
    }
  }

  keysToRemove.forEach((key) => storage.removeItem(key));
}

export function logout(navigate: NavigateFunction) {
  clearAuthStorage(localStorage);
  clearAuthStorage(sessionStorage);
  navigate('/', { replace: true });
}
