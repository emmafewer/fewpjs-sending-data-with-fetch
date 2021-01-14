function submitData(name, email) {
  let formData = {
    name: name,
    email: email
  };

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };
  
  return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
        return response.json();
    })
    .then(function(response_now_json) {
        // console.log(object);
        // let id = document.createElement(object);
        // document.body.appendChild(id);
        let div = document.createElement('div')
        div.textContent = response_now_json.id
        document.body.append(div)
    })
    .catch(function(error) {
        alert("Incorrect");
        // console.log(error.message);
        // let message = document.createElement(error.message);
        // body.appendChild(message);
        let div = document.createElement('div')
        div.textContent = error.message
        document.body.append(div)
    });
}
