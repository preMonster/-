const render = () => {
  document.getElementById('container').innerHTML = `'Hello, render with staticHtml'`
  return Promise.resolve();
};

((global) => {
  global['staticApp'] = {
    bootstrap: () => {
      console.log('purehtml bootstrap');
      return Promise.resolve();
    },
    mount: () => {
      console.log('purehtml mount');
      return render();
    },
    unmount: () => {
      console.log('purehtml unmount');
      return Promise.resolve();
    },
  };
})(window);
