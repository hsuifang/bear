let sendButton = document.querySelector('button');

function send() {
  var data = {
    'name' : '',
    'email':'09999999999',
    'timecode': new Date(),
    'memo': ''
  }
  $.ajax({
    type: "GET",
    url: "https://script.google.com/macros/s/AKfycbz9gJNch20Usl0J9Gyl344c2trrIJAKtyItK00jtUlHCTNmjYI/exec",
    data: data,
    dataType: "JSON",
    success: function (response) {
      console.log(response)
      alert('HI 熊熊')
    }
  });
};

sendButton.addEventListener('click', send);