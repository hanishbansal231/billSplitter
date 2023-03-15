let btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
   let name = document.querySelector('.name');
   let price = document.querySelector('.price');
   let perPerson = document.querySelector('.perPerson');
   let dishName = document.querySelector('#dishName').value;
   let dishAmount = document.querySelector('#dishAmount').value;
   let perPersonAmount = document.querySelector('#perPersonAmount').value;
   name.innerText = dishName;
   price.innerText = dishAmount +"/-";
   perPerson.innerText =dishAmount / perPersonAmount + "/- per person";
});