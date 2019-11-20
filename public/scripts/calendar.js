$(document).ready(function () {

    let dates = [
      // {
      // //     'date': '2019-11-11',
      // //     'badge': true,
      // //     'title': 'Meeting with John'
      // // },
      // // {
      // //     'date': '2019-11-13',
      // //     'badge': false,
      // //     'title': 'Go to market'
      // // },
      // // {
      // //   'date': '2019-11-15',
      // //   'badge': false,
      // //   'title': 'Go to market'
      // }
  ];
    $('#my-calendar').zabuto_calendar({
      language: 'en',
      data: dates,
      action: function (data) {
          //get the selected date
          var date = $('#' + this.id).data('date');
          //alert the date
          myFunction(dates, date, this);
        }

  });
  let myFunction = function (data, date, dayElement) {
    console.log(data);
    if (dayElement.classList.contains('event')) {
      $(dayElement).removeClass('event');
    } else {
      data.push({'date': date, 'badge': false, 'title': 'test'});
      $(dayElement).addClass('event');
    }
  };



});


