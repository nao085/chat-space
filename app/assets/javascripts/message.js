$(function() {

  function buildHTML(message) {
    var messageContent = message.content? message.content : "";
    var messageImage = message.image_url? `<img src="${ message.image_url }">` : ``;
    var html =`
         <div class="message">
           <div class="message__upper-info">
             <div class="message__upper-info__talker" > ${message.user_name}    
           </div>
           <div class="message__upper-info__date" > ${message.date}
           </div>
         </div>
         <div class="message__text">
         <div class="message-text__content" >${ messageContent }</div>
         ${ messageImage }
         </div>
        </div>`
    return html;
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');

    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message) {
      var html = buildHTML(message);
      $('.messages').append(html);
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      $('#new_message')[0].reset();
      $('.form__submit').prop('disabled', false);
    })

    .fail(function() {
        alert("メッセージを入力してください");
        $('.form__submit').prop('disabled', false);
    });
  });
});