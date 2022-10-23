import importAll from './importAll'
  
importAll(require.context('./assets/component-02', false, /\.(png|jpe?g|svg)$/));


function headerBlock() {
    var div = document.getElementById('app');

    const newDiv = document.createElement("div");
    newDiv.classList.add("card-block");
    const newContent = document.createTextNode("Hi there and greetings!");
    newDiv.appendChild(newContent);

    div.appendChild(newDiv);
}

export default headerBlock