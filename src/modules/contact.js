export function contactUs() {
    const container = document.querySelector('#content');
    const div = document.createElement('div');
    div.setAttribute('id', 'page')
    div.classList.add('contact')
    container.appendChild(div);
    const para = document.createElement('p');
    div.appendChild(para);

    para.innerHTML = 'Restaurant,</br>street 123,</br>new road,</br>newyork';
}