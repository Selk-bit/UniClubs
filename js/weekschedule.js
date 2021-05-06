var d = new Date();
var day = 1;

$(document).ready(function(){
    var width =$( window ).width();

    if (width<1200) {
        $('.day').remove();
        swicthDay(day);
    }
});
$(window).resize(function() {
    var wsize=$(window).width();
    if(wsize < 1200){
        $('.day').remove();
        swicthDay(day);
    }else{
        $('.day').remove();
        $('.days-of-week th').fadeIn('slow');
        $('.days-of-week td').fadeIn('slow');
    }
});


function scrolplus(){
    var daysNo=$('.days-of-week').attr('end');
    var daystart=$('.days-of-week').attr('start');
    if (daysNo === undefined){daysNo = 7;}if (daystart === undefined) {daystart = 1;}
    if (day==daysNo){day=daystart-1;}
    day=day+1;
    $('.day').remove();
    swicthDay(day);
}

function scrolminus(){
    var daysNo=$('.days-of-week').attr('end');
    var daystart=$('.days-of-week').attr('start');
    if (daysNo === undefined){daysNo = 7;}if (daystart === undefined) {daystart = 1;}
    if (day==daystart){day=daysNo;day++;}
    day=day-1;
    $('.day').remove();
    swicthDay(day);
}

function swicthDay(day){
    //table selector
    $('.days-of-week th').hide();
    $('.days-of-week td').hide();
    $('.days-of-week').find('th:nth-child('+day+')').prepend('<i class="fa fa-angle-left day dayminus pull-left" style="display:inline-block;  cursor: pointer;" onclick="scrolminus();"></i>').append('<i class="fa fa-angle-right day dayplus pull-right" style="display:inline-block;  cursor: pointer;" onclick="scrolplus();"></i>').fadeIn('slow');
    $('.days-of-week').find('td:nth-child('+day+')').fadeIn('slow');
    console.log(day);
}