let sendButton = document.querySelector('button');

function send() {
  let name = document.querySelector('#nameValue').value;
  let phone = document.querySelector('#phoneValue').value;
  let url = 'https://script.google.com/macros/s/AKfycbz9gJNch20Usl0J9Gyl344c2trrIJAKtyItK00jtUlHCTNmjYI/exec'
  let data = {
    "name": name,
    "phone": phone,
    "demand": '需求',
    "timecode": new Date()
  }
  fetch(url, {
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    return res.json()
  }).then(data => {
    console.log(data)
  }).catch(e => {
    console.log(e)
  })
  // $.ajax({
  //   url,
  //   data: {
  //     "name": name,
  //     "phone": phone,
  //     "demand": '需求',
  //     "timecode": new Date()
  //   },
  //   crossDomain: true,
  //   dataType: "JSON",
  //   success: function(response) {
  //     if(response == "成功"){
  //       alert("成功");
  //     }
  //   },
  // });
};

sendButton.addEventListener('click', send);