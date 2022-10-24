import importAll from './importAll'
import modal from './modal'
  
importAll(require.context('./assets/component-02/', false, /\.(png|jpe?g|svg)$/));
const storage = '/assets/component-02';

function cardBlock() {

    let test = [
        {  
            id: 1,
            title: 'Summer Lunch Menu by Mark Best',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
            img: 'Image-01.jpg',
            imgZoom: 'Image-01@2x.jpg',
        },
        {
            id: 2,
            title: 'Summer Lunch Menu by Mark Best',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
            img: 'Image-02.jpg',
            imgZoom: 'Image-02@2x.jpg'
        },
        {
            id: 3,
            title: 'Summer Lunch Menu by Mark Best',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
            img: 'Image-03.jpg',
            imgZoom: 'Image-03@2x.jpg'
        }
    ];

   
    const div = document.getElementById('app');
    const cardDiv = document.createElement('div');
    const sectionHeader = document.createElement('h1');
    cardDiv.classList.add('card-block', 'container');

    //The header
    const header = document.createTextNode('All the latest from AEG')
    sectionHeader.appendChild(header)
    cardDiv.appendChild(sectionHeader)
    
    test.forEach(item => {
        const col = document.createElement('div')
        const cardItem = document.createElement('div')
        const cardContent = document.createElement('p')
        const cardHeader = document.createElement('h2')
        const img = document.createElement('img')
        img.classList.add('img')
        img.setAttribute('data-zoom', `${storage}/${item.imgZoom}`)
        

        col.classList.add('col')
        cardItem.classList.add('card')
        img.src = `${storage}/${item.img}`
        cardItem.appendChild(img)

         //The title
         const title = document.createTextNode(item.title)
         cardHeader.appendChild(title)
         cardItem.appendChild(cardHeader)

        //The content
        const text = document.createTextNode(item.content)
        cardContent.appendChild(text)
        cardItem.appendChild(cardContent)

        //The button
        const btn = document.createElement('a')
        const btnText = document.createTextNode('read more');
        btn.appendChild(btnText)
        btn.classList.add('btn', 'btn-readmore')
        cardItem.appendChild(btn)
        col.appendChild(cardItem)
        cardDiv.appendChild(col)
    })

    div.appendChild(cardDiv);

    cardDiv.addEventListener('click', (e) => {

        if (e.path[0].dataset.zoom) {
            modal(e.path[0].dataset.zoom)
        } else {
            console.log(e.target);
        }
    })
}

export default cardBlock