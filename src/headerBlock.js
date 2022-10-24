import importAll from './importAll'
importAll(require.context('./assets/component-01/', false, /\.(png|jpe?g|svg)$/));
const storage = '/assets/component-01';

function headerBlock() {

    //console.log(images);
    var div = document.getElementById('app');

    const newDiv = document.createElement("div");
    newDiv.classList.add("header-block", "container");

    //Block 1
    const col1 = document.createElement("div")
    const block1 = document.createElement("div")
    col1.classList.add("col")
    block1.classList.add("block-1", "block")


    const img = document.createElement('img')
    img.classList.add('banner')
    img.src = `${storage}/Image-01.jpg`

    block1.appendChild(img)
    col1.appendChild(block1)
    newDiv.appendChild(col1)
    
    //Block 2
    const col2 = document.createElement("div")
    const block2 = document.createElement("div");
    block2.classList.add("block-2", "block");
    col2.classList.add("col")

    const img2 = document.createElement('img')
    img2.classList.add('banner-multiple')
    img2.src = `${storage}/Image-02.jpg`
    block2.appendChild(img2)

    const img3 = document.createElement('img')
    img3.classList.add('banner-multiple')
    img3.src = `${storage}/Image-03.jpg`
    block2.appendChild(img3)


    col2.appendChild(block2)
    newDiv.appendChild(col2)

    //Block 3
    const col3 = document.createElement("div")
    const block3 = document.createElement("div");
    block3.classList.add("block-3", "block");
    col3.classList.add("col")
    
    const title = document.createElement("h3")
    const titleText = document.createTextNode('fasdddfasdfasdfasdd')
    title.appendChild(titleText)

    block3.appendChild(title)
    newDiv.appendChild(block3)

    col3.appendChild(block3)
    newDiv.appendChild(col3)
    
    div.appendChild(newDiv);

    newDiv.addEventListener('click', (e) => {
        console.log(e.target);
    })
}

export default headerBlock