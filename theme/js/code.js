/********************************************************

focking copy@paste

********************************************************/


$('div').attr('unselectable', 'on').select(function() {return false}).css({
  '-moz-user-select': '-moz-none',
  '-o-user-select': 'none',
  '-khtml-user-select': 'none',
  '-webkit-user-select': 'none',
  'user-select': 'none'
});


$("body").on("contextmenu", false);

/********************************************************

add rooms in form

********************************************************/

$(document).ready(function(){


  var i = ($('.room-count-and-s input').size())/2 + 1;
  
  var calcInputs = '<p class="room-count-inputs">'+
                    '<input type="number"  class="form-control input-s" id="inputEmail'+i+'" placeholder="S(m2)">'+
                    '<input type="text" class="form-control input-p" id="nputEmail'+i+'" placeholder="покрытие">'+
                    '</p>';

  //add
  $('.btn-room-plus').click(function() {
    $(calcInputs).fadeIn('slow').appendTo('.room-count-and-s');
    i++;
  });
  //remove last
  $('.btn-room-minus').click(function() {
  if(i > 1) {
    $('.room-count-inputs:last').remove();
    i--; 
  }
  });
  
  //reset
  $('#reset').click(function() {
  while(i > 2) {
    $('.room-count-inputs:last').remove();
    i--;
  }
  });
  

});




/********************************************************

galery animate filter

********************************************************/

$(function() {

  var $container = $('.gal-anim').isotope({
    itemSelector: '.galery-item-pic',
      hiddenStyle: {
    opacity: 0
  },
  visibleStyle: {
    opacity: 1
  }
  });

  $('.galery-tag-btn-wrapp').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    $container.isotope({ filter: filterValue });
  });

    // change is-checked class on buttons
  $('.galery-tag-btn-wrapp').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
});


/********************************************************

google map

********************************************************/


var data = [
  [ 55.7781116,37.5221794,
    "Центральный офис-склад CPSystem Телефон единой справочной: Москва (495) 665-75-05, (495) 665-53-55, Интернет магазин по России (Бесплатный номер 8-800-700-65-69) Отдел по работе с физ.лицами: sales@cpsystem.ru Отдел по работе с корпоративными клиентами и сотрудничеству: corp@cpsystem.ru Отдел доставки: dostavka@cpsystem.ru Отдел маркетинга: marketing@cpsystem.ru"
  ],
  [
    55.749792,37.632495,
    "Режим работы: ежедневно с 10:00 до 20:00 Телефон: +7-967-282-31-07, +7-495-225-62-85. Телефон/факс: +7 (495) 645 82 26. Эл.почта: info@santehkomfort.ru ICQ: 452-485-942"
  ],
  [
    55.918715,37.1570568,
    "Пятницкое шоссе, деревня Брёхово, Солнечногорский район, Московская область, Россия"
  ],
  [
     55.622192,37.4329951,
     "ГК АРВ Офис и склад: поселение Московский, складской комплекс д. Саларьево Тел: +7 (495) 617-11-66, +7 (495) 617-11-44   Время работы: пн-сб 9-00 - 18-00"
  ],
  [
     56.0118139,37.2300153,
     "Московская область Ленинградское шоссе 37 км, Торговый комплекс Ржавки павильоны 73 и 74"
  ]

];


var data2 = [
[
55.7386645,37.6540904,
'Салоны-магазины ГК "Паркет Холл" E-mail: info@parquet-hall.ru Адрес: Москва, ул. Большие Каменщики, д. 8 Телефон: (495) 995-77-77 (отдел по работе с архитекторами и дизайнерами) Телефон менеджера по продаже мебели: (495) 995-77-77 Часы работы: магазин ежедневно с 09:00 до 20:00, отдел шлифовальной техники с 08:00 до 20:00 ежедневно, отдел по работе с архитекторами и дизайнерами, ежедневно с 09:30 до 20:00 улица Большие Каменщики, 8, Москва, Россия'
],
[
55.7043988,37.5754587,
'E-mail: info@parquet-hall.ru Адрес: Москва, Ленинский пр-т, д. 43 Телефон: (495) 995-77-77, директор Ермишкина Светлана - sermishkina@parquet-hall.ru Часы работы: ежедневно с 9:00 до 20:00, без обеда и выходных Ленинский проспект, 43, Москва, Россия'
],[
55.7520547,37.6706922,
'E-mail: info@parquet-hall.ru Адрес: Москва, ул. Нижняя Сыромятническая, д.10, стр.10, директор - Горбунова Наталья, ngorbunova@parquet-hall.ru Телефон: (495) 995-77-77 Часы работы: понедельник-пятница с 10:00 до 20:00, суббота с 11.00 до 19.00, воскресенье c 12:00 до 16:00 Нижняя Сыромятническая улица, 10с10, Москва, Россия'
],[
55.7104941,37.5847762,
'E-mail: info@parquet-hall.ru Адрес: Москва, Ленинский проспект, д. 30 Телефон: (495) 995-77-77 Телефон менеджера по продаже мебели: (495) 995-77-77 Часы работы: магазин с 9:00 до 20:00 ежедневно, отдел шлифовальной техники с 8:00 до 20:00 ежедневно'
],[
55.7869049,37.2336956,
'Адрес: Московская область, Красногорский р-н, вблизи дер. Михалково, 26-й км автодороги Москва-Рига «Балтия», ТЦ «Твой дом» на Новой Риге, эт.2 Телефон: (495) 995-77-77доб.7785,7786, директор Волобуев Владислав - vvolobuev@parquet-hall.ru'
],[
55.7230162,37.5756043,
'E-mail: info@parquet-hall.ru Адрес: Москва, Комсомольский проспект, д. 38/16 Телефон: (495) 995-77-77 Телефон менеджера по продаже мебели: (495) 995-77-77 Часы работы: ежедневно с 09:00 до 20:00 отдел по работе с архитекторами и дизайнерами komsmag@parquet-hall.ru'
],[
55.884652,37.603774,
'E-mail: info@parguet-hall.ru Адрес: Москва, ул. Пришвина, д. 26, 2 этаж, павильон D9 Телефон: (495) 995-77-77доб.7763, директор Барсуков Павел - pbarsukov@parquet-hall.ru Часы работы: Ежедневно с 10:00 до 21:00, без обеда и выходных'
],[
55.8279289,37.4894752,
'E-mail: info@parquet-hall.ru Адрес: Ленинградское шоссе д. 25 "Центр Дизайна Ленинградский", 3-й этаж Телефон: (495) 995-77-77 Часы работы: Ежедневно с 11.00-20.00, без выходных'
],[
55.77271,37.494828,
'E-mail: info@parquet-hall.ru Адрес: ул. Мневники, д.10, корп. 1 Телефон: (495) 995-77-77 Часы работы: Будни с 10:00 до 20:00, суббота-воскресенье с 10:00 до 19:00'
],[
55.7846426,37.5209943,
'E-mail: grandpark@parquet-hall.ru Адрес: Москва, ул. Гризодубовой, д. 4 Телефон: (495) 995-77-77 Часы работы: с 9:00 до 20:00, ежедневно, отдел шлифовальной техники с 8:00 до 20:00, ежедневно'
],[
55.7196518,37.418464,
'E-mail: info@parquet-hall.ru Адрес: Москва, Можайское шоссе, 32 Телефон: (495) 995-77-77 Часы работы: время работы: понедельник-воскресенье: с 9-00 до 20-00;отдел шлифовальной техники: с 9:00 до 20:00, ежедневно'
],[
55.6664798,37.5520374,
'E-mail: info@parquet-hall.ru Адрес: Москва, ул. Профсоюзная, д. 45 Телефон: (495) 995-77-77 Часы работы: магазин с 9:00 до 20:00 ежедневно, сервисный отдел с 9:00 до 20:00 ежедневно'
],[
55.848738,37.637766,
'E-mail: info@parquet-hall.ru Адрес: Москва, Лазоревый пр-д, д. 3 (заезд через пр-д. Серебрякова) Телефон: (495) 995-77-77 Телефон менеджера по продаже мебели: (495) 995-77-77 Часы работы: магазин с 9:00 до 20:00 ежедневно, отдел шлифовальной техники с 8:00 до 20:00 Аренда шлифовальной техники тел. (495) 995-77-77. Продажа шлифовальной техники тел. (495) 995-77-77'
],[
55.6924755,37.5532857,
'E-mail: info@parquet-hall.ru Адрес: Москва, Ленинский проспект, д. 66 Телефон: (495) 995-77-77 Сервисный отдел Леглер: (495) 995-77-77(7714) Часы работы: ежедневно с 09:00 до 20:00'
],[
55.6729745,37.5835258,
'E-mail: info@parquet-hall.ru Адрес: Москва, Нахимовский проспект, д. 24, '/'Экспострой'/', павильон 3, этаж 1, сектор B, Ряд 9 стенд 315 и павильон 3, этаж 1, сектор B, Ряд 5 стенд 165 Телефон: (495) 995-77-77 Часы работы: ежедневно пн.-сб.: с 10:00 до 20:00, вс.: с 10:00 до 19:00'
],[
55.864891,37.582855,
'Адрес: г.Москва, Алтуфьевское шоссе, д.37 График работы склада для самовывоза: 11:00-18:00 будни Суббота, Воскресенье выходной Обращаем Ваше внимание, что въезд на территорию складского комплекса платный и составляет 100 рублей.'
]
];

var data3 = [
  [ 48.6704194,44.5033339,
    "Волгоград, Россия"
  ],
  [
    68.9674564,33.0857923,
    "Мурманск, Мурманская область, Россия"
  ],
  [
    64.5611935,40.5559949,
    "Архангельск, Архангельская область, Россия"
  ],
  [
     61.7396115,50.8190446,
     "Сыктывкар, республика Коми, Россия"
  ],
  [
     66.5580064,66.6051276,
     "Салехард, Ямало-Ненецкий автономный округ, Россия"
  ],
    [
     69.340806,88.0971593,
     "Норильск, Красноярский край, Россия"
  ],
    [
     48.4648446,135.113427,
     "Хабаровск, Россия"
  ],
    [
     43.173706,132.0358371,
     "Владивосток, Приморский край, Россия"
  ],
    [
     52.2983873,104.267158,
     "Иркутск, Иркутская область, Россия"
  ],
    [
     56.0267294,92.865734,
     "Красноярск, Красноярский край, Россия"
  ],
    [
     55.3982994,86.0854035,
     "Кемерово, Кемеровская область, Россия"
  ],
    [
     54.969977,82.9494049,
     "Новосибирск, Новосибирская область, Россия"
  ],
    [
     53.3332399,83.6672356,
     "Барнаул, Алтайский край, Россия"
  ],
    [
     54.9858759,73.3561389,
     "Омск, Омская область, Россия"
  ],
    [
     57.1740859,65.5719995,
     "Тюмень, Тюменская область, Россия"
  ],
    [
     55.1522298,61.4085706,
     "Челябинск, Челябинская область, Россия"
  ],
    [
     56.813891,60.6549335,
     "Екатеринбург, Свердловская область, Россия"
  ],
    [
     56.813891,60.6549335,
     "Магнитогорск, Челябинская область, Россия"
  ],
    [
     54.8087795,56.0208735,
     "Уфа, республика Башкортостан, Россия"
  ],
    [
     58.020486,56.2342755,
     "Пермь, Пермский край, Россия"
  ],
    [
     56.8645602,53.2026947,
     "Ижевск, республика Удмуртская, Россия"
  ],
    [
     58.5855414,49.6709259,
     "Киров Кировская обл. Россия"
  ],
    [
     56.635033,47.89974,
     "Йошкар-Ола, республика Марий эл, Россия"
  ],
    [
     55.7955015,49.073303,
     "Казань, республика Татарстан, Россия"
  ],
    [
     53.260908,50.198077,
     "Самара, Самарская область, Россия"
  ],
    [
     51.7909394,55.1024233,
     "Оренбург, Оренбургская область, Россия"
  ],
    [
     56.29274,43.9267452,
     "Нижний Новгород, Нижегородская область, Россия"
  ],
    [
     54.197253,45.175309,
     "Саранск, городской округ Саранск, Республика Мордовия, Россия"
  ],
    [
     48.6704194,44.5033339,
     "Волгоград, Волгоградская область, Россия"
  ],
    [
     51.534272,46.0101404,
     "Саратов, Саратовская область, Россия"
  ],
      [
     46.3600004,48.0567574,
     "Астрахань, Астраханская область, Россия"
  ],
      [
     40.1326984,49.8312369,
     "Баку, Азербайджан"
  ],
      [
     43.6017215,39.7251289,
     "Сочи, Краснодарский край, Россия"
  ],
      [
     45.053548,39.016056,
     "Краснодар, Россия"
  ],
      [
     47.2610085,39.6279999,
     "Ростов-на-Дону, Ростовская область, Россия"
  ],
      [
     50.5895025,36.5731346,
     "Белгород, Россия"
  ],
      [
     51.3089589,37.8385904,
     "Старый Оскол, Белгородская область, Россия"
  ],
      [
     51.6756889,39.2361645,
     "Воронеж, Воронежская область, Россия"
  ],
      [
     52.602193,39.6256595,
     "Липецк, Россия"
  ],
      [
     52.728953,41.4362541,
     "Тамбов, Россия"
  ],
      [
     51.7120075,36.1822814,
     "Курск, Курская область, Россия"
  ],
      [
     52.9744125,36.0777354,
     "Орел, Россия"
  ],
      [
     53.280029,34.346962,
     "Брянск, Россия"
  ],
      [
     54.184814,37.6274468,
     "Тула, Россия"
  ],
      [
     54.5355736,36.2486939,
     "Калуга, Калужская область, Россия"
  ],
      [
     55.622192,37.4329951,
     "Хорошевское шоссе, 35к2, Москва, Россия"
  ],
      [
     57.0061726,40.9821055,
     "Иваново, Россия"
  ],
      [
     57.6524585,39.8645171,
     "Ярославль, Россия"
  ],
      [
     59.222129,39.8759647,
     "Вологда, Россия"
  ],
      [
     56.859633,35.8894701,
     "Тверь, Тверская область, Россия"
  ],
      [
     58.5561955,31.3124346,
     "Великий Новгород, Новгородская область, Россия"
  ],
      [
     59.9174455,30.3250575,
     "Представительство г. Санкт-Петербург 193171, г. Санкт-Петербург, ул. Бабушкина, д. 36, корпус 1, литер Д Тел: (812) 560-60-19, (812) 560-84-75, 913-05-25, 915-05-25 info@spb.dnt.ru"
  ],
      [
     57.800526,28.3483345,
     "Псков, Россия"
  ],
      [
     53.9016528,30.3515768,
     "Могилев, Могилевская область, Беларусь"
  ],
      [
     50.4020355,30.5326905,
     "Киев, Украина"
  ],
      [
     46.9998691,28.8581765,
     "Кишинев, Молдавия"
  ],
      [
     44.9756484,34.146509,
     "Республика Крым, г.Симферополь, ул. Кубанская, 12, оф. 3 Тел: +7 (978) 78-333-48 (812) 560-60-19, (812) 560-84-75, 913-05-25, 915-05-25 +380 (99) 08-46-000 +380 (97) 03-46-000 +380 (93) 08-56-000 info@crimea.dnt.ru"
  ],
      [
     55.622192,37.4329951,
     "Пятницкое шоссе, деревня Брёхово, Солнечногорский район, Московская область, Россия"
  ]
  

];

window.onload = function initialize() {

//cp

   var pos = new google.maps.LatLng(55.7778353,37.5204767);
   var mapOptions = {
      center: pos,
      zoom: 9,
      disableDefaultUI: true,
      //zoomControl: true,
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
   };

    var map = new google.maps.Map(document.getElementById("map_cpsystem"),  mapOptions);



  var infowindow = new google.maps.InfoWindow();
  var marker, i;

   //феерическая расстановка точек

    for (i = 0; i < data.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(data[i][0],data[i][1]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent('<p class="main-about-p">'+data[i][2]+'</p>');
          infowindow.open(map, marker);
        }
      })(marker, i));
    }



//holl

var pos2 = new google.maps.LatLng(55.7778353,37.5204767);
   var mapOptions = {
      center: pos2,
      zoom: 10,
      disableDefaultUI: true,
      //zoomControl: true,
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
   };

    var map2 = new google.maps.Map(document.getElementById("map_parketholl"),  mapOptions);

var infowindow2 = new google.maps.InfoWindow();

    for (i = 0; i < data2.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(data2[i][0],data2[i][1]),
        map: map2
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow2.setContent('<p class="main-about-p ">'+data2[i][2]+'</p>');
          infowindow2.open(map2, marker);
        }
      })(marker, i));
    }



//dillers

   var pos3 = new google.maps.LatLng(61.7396115,50.8190446);
   var mapOptions = {
      center: pos3,
      zoom: 4,
      //disableDefaultUI: true,
      //zoomControl: true,
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
   };

    var map3 = new google.maps.Map(document.getElementById("map_dillers"),  mapOptions);



  var infowindow4 = new google.maps.InfoWindow();



    for (i = 0; i < data3.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(data3[i][0],data3[i][1]),
        map: map3
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow4.setContent('<p class="main-about-p">'+data3[i][2]+'</p>');
          infowindow4.open(map3, marker);
        }
      })(marker, i));
    }


//crimea

   var pos4 = new google.maps.LatLng(44.9756484,34.146509);
   var mapOptions = {
      center: pos4,
      zoom: 14,
      disableDefaultUI: true,
      //zoomControl: true,
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
   };

    var map4 = new google.maps.Map(document.getElementById("map_crimea"),  mapOptions);



  var infowindow = new google.maps.InfoWindow();
  var marker, i;


      marker = new google.maps.Marker({
        position: new google.maps.LatLng(44.9756484,34.146509),
        map: map4
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent('<p class="main-about-p">Представительство г. Крым, г. Севастополь. Республика Крым, г.Симферополь, ул. Кубанская, 12, оф. 3 Тел: +7 (978) 78-333-48 +380 (99) 08-46-000 +380 (97) 03-46-000 +380 (93) 08-56-000 info@crimea.dnt.ru</p>');
          infowindow.open(map4, marker);
        }
      })(marker, i));



//spb

   var pos5 = new google.maps.LatLng(59.879965,30.439721);
   var mapOptions = {
      center: pos5,
      zoom: 14,
      disableDefaultUI: true,
      //zoomControl: true,
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
   };

    var map5 = new google.maps.Map(document.getElementById("map_spb"),  mapOptions);



  var infowindow5 = new google.maps.InfoWindow();



      marker = new google.maps.Marker({
        position: new google.maps.LatLng(59.879965,30.439721),
        map: map5
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow5.setContent('<p class="main-about-p">193171, г.Санкт-Петербург, ул.Бабушкина, д.36, корпус 1, литер Д тел./факс:(812) 560-60-19, (812) 560-84-75 913-05-25, 915-05-25 +7 911 960-35-77 +7 911 975-44-84 e-mail:info@spb.dnt.ru, interremstroy@mail.ru</p>');
          infowindow5.open(map5, marker);
        }
      })(marker, i));


};