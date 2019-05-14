// const LocalStorageUtils = {
//   save: ({key, value}) => {
//     const stringifiedValue = JSON.stringify(value);
//     localStorage.setItem(key, stringifiedValue);
//   },
//   get: (key) => {
//     const stringifiedItem = localStorage.getItem(key);
//     const item = JSON.parse(stringifiedItem);
//     return item;
//   },
//   remove: (key) => {
//     localStorage.removeItem(key);
//   }
// };

// export default LocalStorageUtils;

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}; 

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch {
    // ignore write errors
  }
};