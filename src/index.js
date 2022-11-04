function component() {
  const element = document.createElement('div');
  element.innerHTML = "Hello, me!"

  return element;
}

document.body.appendChild(component());
