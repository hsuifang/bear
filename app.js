let sendButton = document.querySelector('button');

function send() {
  var data = {
    'name' : '',
    'phone':'09999999999',
    'time': new Date(),
    'demand': ''
  }
  $.ajax({
    type: "get",
    url: "https://script.google.com/macros/s/AKfycbz9gJNch20Usl0J9Gyl344c2trrIJAKtyItK00jtUlHCTNmjYI/exec",
    data: data,
    dataType: "JSON",
    success: function (response) {
      console.log(response);
      alert('感謝您的訂購！！');
    }
  });
  // let name = document.querySelector('#nameValue').value;
  // let phone = document.querySelector('#phoneValue').value;
  // let url = 'https://script.google.com/macros/s/AKfycbz9gJNch20Usl0J9Gyl344c2trrIJAKtyItK00jtUlHCTNmjYI/exec'
  // let data = {
  //   "name": name,
  //   "phone": phone,
  //   "demand": '需求',
  //   "timecode": new Date()
  // }
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