let sendButton = document.querySelector('button');

function send() {
  let name = document.querySelector('#nameValue').value;
  let phone = document.querySelector('#phoneValue').value;
  let url = 'https://spreadsheets.google.com/feeds/cells/1ppewigMFQe3UdxTR4RYwHl-sX3s9b66jnGfykdRz9dQ/1/public/values?alt=json'
  $.ajax({
    type: "get",
    url: "https://script.google.com/macros/s/AKfycbz9gJNch20Usl0J9Gyl344c2trrIJAKtyItK00jtUlHCTNmjYI/exec",
    data: {
      "name": name,
      "phone": phone,
      "demand": '需求',
      "timecode": new Date()
    },
    crossDomain: true,
    dataType: "JSON",
    success: function(response) {
      if(response == "成功"){
        alert("成功");
      }
    },
  });
};

sendButton.addEventListener('click', send);