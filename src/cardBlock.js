import importAll from './importAll'
  
importAll(require.context('./assets/component-02/', false, /\.(png|jpe?g|svg)$/));
const storage = '/assets/component-02';

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
            img: 'Image-03.jpg'
        }
    ];

   
    const div = document.getElementById('app');
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card-block", "container");
    
    test.forEach(item => {
        const col = document.createElement('div')
        const cardItem = document.createElement('div')
        const cardContent = document.createElement('p')
        const img = document.createElement('img')

        col.classList.add("col")
        cardItem.classList.add("card")
        img.src = `${storage}/${item.img}`
        cardItem.appendChild(img)

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
        console.log(e.target);
    })
}

export default cardBlock