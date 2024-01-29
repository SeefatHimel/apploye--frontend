export const setLocalStorage = (key: string, value: any) => {
    localStorage.setItem(`${key}`, JSON.stringify(value));
};

export const getLocalStorageItem = (key: string) => {
    console.log("🚀 ~ getLocalStorageItem ~ key:", key);
    if (!key) return null;
    try {
        return JSON.parse(localStorage.getItem(`${key}`) ?? "");
    } catch (error) {
        return null;
    }
};
