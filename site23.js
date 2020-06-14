$(document).ready(function(){


$("#rspmnu").click(function(){
 $('#rspmnuelm').slideToggle();
});

function blinker() {
    $('.blink_txt').fadeOut(500);
    $('.blink_txt').fadeIn(500);
}
setInterval(blinker, 1000);


 $(document.body).on('click', '.g_t_inf_chlst' ,function(e){
  e.preventDefault();
  var er_this = $(this);
  $('.game_tbl_info2 div').removeClass('active_srvrs').addClass('g_t_inf_chlst');
  er_this.removeClass('g_t_inf_chlst').addClass('active_srvrs');
  var server_id = er_this.data('clink');
  var mainsrvr = er_this.data('mainsrvr');
  if (mainsrvr == 1) {
   var myiframe = '<iframe width="100%" height="100%" frameborder="0" allowfullscreen=""  src="'+base_url+'home/iframe/'+server_id+'/1" scrolling="no"></iframe>';
  } else {
   var myiframe = '<iframe width="100%" height="100%" frameborder="0" allowfullscreen=""  src="'+base_url+'home/iframe/'+server_id+'" scrolling="no"></iframe>';
  }
  $("#ifrm_holder").html(myiframe);

 });


 $('.given_dateshow').each(function() {
       var $this=$(this);
  var utcTime=$this.data('programstart');
  var utcTimes=$this.data('programends');
  var endTimes=moment(utcTimes,'YYYY-MM-DD HH:mm');
  var startTime=moment(utcTime,'YYYY-MM-DD HH:mm');
  var endTime=moment.utc().format("YYYY-MM-DD HH:mm");
  var y=endTimes.diff(endTime,'minutes');
  var x=startTime.diff(endTime,'minutes');
  switch (true) {
      case (x > 30):
          var localTime = moment.utc(utcTime).toDate();
       $this.parent().find(".stsrt58").text(moment(localTime).format('LT').replace("PM", "مساء").replace("AM", "صباحا"));
       localTime = moment(localTime).format('YYYY-MM-DD HH:mm:ss');
       $this.countdowntimer({
           dateAndTime : localTime
       });
          break;
      case (x > 0 ):
          $this.parent().find(".stsrt58").html('<div class="">يبدأ قريبا</div>');
          var localTime = moment.utc(utcTime).toDate();
       localTime = moment(localTime).format('YYYY-MM-DD HH:mm:ss');
       $this.countdowntimer({
           dateAndTime : localTime
       });
          break;
      case (y > 0 ):
          $this.parent().find(".stsrt58").html('<div class="blink_txt fximres1">جارية الان</div>');
          break;
      default:
          $this.parent().find(".stsrt58").html('<div class="fximres1" >انتهى</div>');
          break;
  }

 });

 $('.given_date').each(function() {

    var $this = $(this);
    var utcTime = $this.data('gamestart');
    var utcTimes = $this.data('gameends');

    var startTime = moment(utcTime, 'YYYY-MM-DD HH:mm');
    var endTimes = moment(utcTimes, 'YYYY-MM-DD HH:mm');
    var endTime = moment.utc().format("YYYY-MM-DD HH:mm");

    var x = startTime.diff(endTime, 'minutes');
    var y = endTimes.diff(endTime, 'minutes');

    switch (true) {
        case (x > 30):
            var localTime = moment.utc(utcTime).toDate();
            $this.parent().find(".stsrt58").text(moment(localTime).format('LT').replace("PM", "مساءا").replace("AM", "صباحا"));
            localTime = moment(localTime).format('YYYY-MM-DD HH:mm:ss');
            $this.countdowntimer({
                dateAndTime : localTime
            });
            break;
        case (x > 0 ):
            $this.parent().find(".stsrt58").html('<div class="">تبدأ قريبا</div>');
            var localTime = moment.utc(utcTime).toDate();
            localTime = moment(localTime).format('YYYY-MM-DD HH:mm:ss');
            $this.countdowntimer({
                dateAndTime : localTime
            });
            break;
        case (y > 0 ):
            $this.parent().find(".stsrt58").html('<div class="blink_txt fximres1">جارية الان</div>');
            break;
        default:
                       var elemt = $this.parent().find(".stsrt58");
                elemt.addClass('endedstyle');
    	        elemt.html('<div class="blink_txt fximres1"> شاهد الأهداف</div>');
           break;
    }

 });



});
