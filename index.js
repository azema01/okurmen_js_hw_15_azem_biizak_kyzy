document.addEventListener('DOMContentLoaded', () => {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', function () {
    console.log(this.responseText);
    renderData(JSON.parse(this.responseText));
  });

  xhr.open('GET', 'https://restcountries.com/v3.1/all');
  xhr.send();

  const countries = document.querySelector('#countries')
  function renderData(data) {
    data.map(item => {
      const name = document.createElement('p');
      const flag = document.createElement('img');
      const center = document.createElement('item.capital');


      name.innerHTML = item.name.common
      flag.setAttribute('src', item.flags.svg);
      flag.style.width = '100px';
      flag.style.height = 'auto';
      center.innerHTML = item.capital 
      // region.innerHTML = item.region
      // subregion.innerHTML = item.subregion


      countries.appendChild(name);
      countries.appendChild(flag);
      countries.appendChild(center);
      // countries.appendChild(region);
      // countries.appendChild(subregion);
      

      console.log(item);
    });
  }
});