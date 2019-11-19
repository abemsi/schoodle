$(document).ready(function () {


    $('#my-calendar').zabuto_calendar({
      language: 'en',
      data: [
          {
              'date': '2019-11-11',
              'badge': true,
              'title': 'Meeting with John'
          },
          {
              'date': '2019-11-13',
              'badge': false,
              'title': 'Go to market'
          }
      ],
      action: function () {
          //get the selected date
          var date = $('#' + this.id).data('date');
          //alert the date
          $('#calendar-dates').val(date);
          console.log('You clicked date: ' + date);
        },

      eventClick: function(date) {
       
      }
  });
});


