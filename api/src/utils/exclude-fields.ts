// Exclude keys from Object
export function excludeFields<T, Key extends keyof T>(
    obj: T,
    ...keys: Key[]
): Omit<T, Key> {
    for (let key of keys) {
        delete obj[key];
    }
    return obj;
}
