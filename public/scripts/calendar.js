$(document).ready(function () {
  $('#my-calendar').zabuto_calendar({
      language: 'en',
      data: [
          {
              'date': '2018-01-11',
              'badge': true,
              'title': 'Meeting with John'
          },
          {
              'date': '2018-01-13',
              'badge': false,
              'title': 'Go to market'
          }
      ],
      action: function () {
          //get the selected date
          let date = $('#' + this.id).data('date');
          //alert the date
          $('#calendar-dates').val(date);
          alert('You clicked date: ' + date);
        },

      eventClick: function(date) {
        $(this).css('background-color', 'orange');
      }
  });
});


