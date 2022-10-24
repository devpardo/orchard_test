import importAll from './importAll'
import modal from './modal'

importAll(require.context('./assets/component-01/', false, /\.(png|jpe?g|svg)$/));
const storage = '/assets/component-01';

function headerBlock() {

    var div = document.getElementById('app');

    const newDiv = document.createElement('div');
    newDiv.classList.add('header-block', 'container');

    //Block 1
    const col1 = document.createElement('div')
    const block1 = document.createElement('div')
    col1.classList.add('col')
    block1.classList.add('block-1', 'block')


    const img = document.createElement('img')
    img.classList.add('banner')
    img.src = `${storage}/Image-01.jpg`
    img.setAttribute('data-zoom', `${storage}/Image-01@2x.jpg`)
    img.classList.add('img')
    block1.appendChild(img)
    col1.appendChild(block1)
    newDiv.appendChild(col1)
    
    //Block 2
    const col2 = document.createElement('div')
    const block2 = document.createElement('div');
    block2.classList.add('block-2', 'block');
    col2.classList.add('col')

    const img2 = document.createElement('img')
    img2.classList.add('banner-multiple')
    img2.src = `${storage}/Image-02.jpg`
    img2.setAttribute('data-zoom', `${storage}/Image-02@2x.jpg`)
    img2.classList.add('img')
    block2.appendChild(img2)

    const img3 = document.createElement('img')
    img3.classList.add('banner-multiple')
    img3.src = `${storage}/Image-03.jpg`
    img3.setAttribute('data-zoom', `${storage}/Image-03@2x.jpg`)
    img3.classList.add('img')
    block2.appendChild(img3)


    col2.appendChild(block2)
    newDiv.appendChild(col2)

    //Block 3
    const col3 = document.createElement('div')
    const block3 = document.createElement('div');
    block3.classList.add('block-3', 'block');
    col3.classList.add('col')
    
    const title = document.createElement('h3')
    title.classList.add('main-title')
    const titleText = document.createTextNode('Answer your body\'s needs')
    title.appendChild(titleText)

    const content = document.createElement('p')
    content.classList.add('content')
    let text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. `
    const contentText = document.createTextNode(text)
    content.appendChild(contentText)

    const reminder = document.createElement('h5')
    reminder.classList.add('reminder')
    const reminderText = document.createTextNode('Be mindful')
    reminder.appendChild(reminderText)

    const reminderContent = document.createElement('p')
    reminderContent.classList.add('reminder-content')
    let contentText2 = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's`
    const reminderContentText = document.createTextNode(contentText2)
    reminderContent.appendChild(reminderContentText)


    block3.appendChild(title)
    block3.appendChild(content)
    block3.appendChild(reminder)
    block3.appendChild(reminderContent)
    
    newDiv.appendChild(block3)

    col3.appendChild(block3)
    newDiv.appendChild(col3)
    
    div.appendChild(newDiv);

    newDiv.addEventListener('click', (e) => {
        if (e.path[0].dataset.zoom) {
            modal(e.path[0].dataset.zoom)
        } else {
            console.log(e.target);
        }
    })

    
}

export default headerBlock