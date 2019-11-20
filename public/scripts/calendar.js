$(document).ready(function () {
  
    let dates = [];
    $('#my-calendar').zabuto_calendar({
      language: 'en',
      data: dates,
      action: function (data) {
        //get the selected date
        let date = $('#' + this.id).data('date');
        //alert the date
        myFunction(dates, date, this);
      }
  });
  let myFunction = function (data, date, dayElement) {
    
    let removeIndex = dates.findIndex(item => item.date === date);
    if (dayElement.classList.contains('event')) {
      $(dayElement).removeClass('event');
      dates.splice(removeIndex, 1);
    } else {
      data.push({'date': date, 'badge': false});
      $(dayElement).addClass('event');
      
      let justDates = [];
      $.each(data, function (i, item) {
        $.each(item, function(key, value) {
          justDates.push(value);        
        });
        let b = [];
        b = (justDates.filter(Boolean))
        $("#calendar-dates").val(b);
        
        const generateRandomString = function() {
          let random = Math.random().toString(36).substring(2);
          return random += random;
          }
      
        let link = generateRandomString();
        $("#link").val(link)
      });     
    }
  };
});


