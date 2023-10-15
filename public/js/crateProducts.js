


let form = document.querySelector('#create-product')
  form.addEventListener('submit', (event) => {
  event.preventDefault();
  let errors = 0;
  let body = {};
  if (event.target['name'].value == "") {
    errors++;
  }
  if (event.target['price'].value == "") {
    errors++;
  }
  if (event.target['description'].value == "") {
    errors++;
  }
  if (event.target['discount'].value == "") {
    errors++;
  }
  if (event.target['brand'].value == "") {
    errors++;
  }

  if (errors > 0) {
    console.log(errors);
     errors = 0
     console.log(errors);
    alert('hay campos sin completar');
  } else {
    body.name = event.target['name'].value;
    body.price = event.target['price'].value;
    body.description = event.target['description'].value;
    body.discount = event.target['discount'].value;
    body.brand = event.target['brand'].value;
    body.file = event.target['file'].value;
    
    const formData  = new FormData();
      
    for(const name in body) {
      formData.append(name, body[name]);
    }

    let options = {
      method: 'POST',
      Headers: {
        'Content-Type': 'multipart/form-data'
      },
      body: formData
      //body: JSON.stringify(body)
    }

    console.log(options);
    fetch('http://127.0.0.1:3003/products/create', options)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(_error => {
        alert('error en la carga')
      })
    alert('se cargo correctamente a la db');
    
  }
    


});
