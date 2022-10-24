function modal(param) {

    let modal = document.getElementById('modal')
    let img = document.getElementById('modalImg')

    img.src = `${param}`;

    modal.style.display = 'block';

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            img.src = '';
        }
    }
}

export default modal