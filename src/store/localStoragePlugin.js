function localStoragePlugin(store) {
  const previousStore = JSON.parse(localStorage.getItem('store'));

  if (previousStore) {
    store.replaceState(previousStore);
  }

  store.subscribe((mutation, state) => {
    localStorage.setItem('store', JSON.stringify(state));
  });
}

export default localStoragePlugin;
