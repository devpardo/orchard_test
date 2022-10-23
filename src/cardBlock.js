import importAll from './importAll'
  
importAll(require.context('./assets/component-02', false, /\.(png|jpe?g|svg)$/));

function cardBlock() {

    let test = [
        {  
            id: 1,
            title: 'Summer Lunch Menu by Mark Best',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
            img: 'Image-01.jpg'
        },
        {
            id: 2,
            title: 'Summer Lunch Menu by Mark Best',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
            img: 'Image-02.jpg'
        },
        {
            id: 3,
            title: 'Summer Lunch Menu by Mark Best',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
            img: 'Image-01.jpg'
        }
    ];

   
    let div = document.getElementById('app');
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("header-block");
    
    test.forEach(item => {
        let cardItem = document.createElement('div')
        let cardContent = document.createElement('p')
        let img = document.createElement('img')

        //The item Image
        //img.src = `/assets/${item.img}`
        img.src = `http://localhost:3000/assets/${item.img}`
        cardItem.appendChild(img)

        //The content
        let text = document.createTextNode(item.content)
        cardContent.appendChild(text)
        cardItem.appendChild(cardContent)

        //The button
        let btn = document.createElement('a')
        let btnText = document.createTextNode('read more');
        btn.appendChild(btnText)
        btn.classList.add('btn', 'btn-readmore')
        cardItem.appendChild(btn)
        cardDiv.appendChild(cardItem)
    })

    div.appendChild(cardDiv);

    cardDiv.addEventListener('click', () => {
        console.log('fadsf');
    })
}

export default cardBlock