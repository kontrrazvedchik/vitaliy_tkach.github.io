$(function() {

  // data

  var cData = {
    items: 
    [
      {
        "name": "Myke Gerard Tyson",
        "foto": "http://www.zastavki.com/pictures/1152x864/2013/_Mike_tyson_ready_for_battle_053510_9.jpg",
        "img": "https://im0-tub-ua.yandex.net/i?id=9ef32a539434e892b573a062fa3835d4-l&n=13",
        "title": "Boxer",
        "record": [
          "wins: 50 (44 KOs)",
          "loss: 6 (5 KOs)",
          "drawn: 0"
        ],
        "contacts": {
            "fb": "https://www.facebook.com" 
        },
      },
      {
        "name": "Evander Holyfield",
        "foto": "http://www.magmire.net/wp-content/uploads/Evander-Holyfield.jpg",
        "img": "http://content.answcdn.com/main/content/img/getty/4/8/88815248.jpg",
        "title": "Boxer",
        "record": [
          "wins: 44 (29 KOs)",
          "loss: 10 (2 KOs)",
          "drawn: 2"
        ],
        "contacts": {
          "fb": "https://www.facebook.com"
        },
      },
      {
        "name": "Lennox Lewis",
        "foto": "http://www.gogetnews.info/uploads/posts/2013-10/1381428628_lennoks-lyuis-gotov-dratsya-s-klichko-za-dvoynoy-gonorar-video.jpg",
        "img": "http://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/performer%20images/p322022/lennoxlewis-1.jpg",
        "title": "Boxer",
        "record": [
          "wins: 41 (32 KOs)",
          "loss: 2 (2 KOs)",
          "drawn: 1"
        ],
        "contacts": {
          "fb": "https://www.facebook.com"
        },
      },
      {
        "name": "Wladimir Klitschko",
        "foto": "http://vse-zdes.ua/media/k2/items/cache/f45c67357622c31d6c1b01b85dd4b5e3_XL.jpg",
        "img": "http://www.boxnews.com.ua/photos/1868/Wladimir-Klitschko-Ruslan-Chagaev49.jpg",
        "title": "Boxer",
        "record": [
          "wins: 64 (53 KOs)",
          "loss: 4 (3 KOs)",
          "drawn: 0"
        ],
        "contacts": {
          "fb": "https://www.facebook.com"
        },
      },
      {
        "name": "George Foreman",
        "foto": "https://im0-tub-ua.yandex.net/i?id=8e68af234a6c39486ad1d1f4e17c18e2-l&n=13",
        "img": "https://im0-tub-ua.yandex.net/i?id=c2492097a8c5cb67e2cb9acf64565a74-l&n=13",
        "title": "Boxer",
        "record": [
          "wins: 76 (68 KOs)",
          "loss: 5 (1 KOs)",
          "drawn: 0"
        ],
        "contacts": {
          "fb": "https://www.facebook.com"
        },
      },
      {
        "name": "Muhammad Ali",
        "foto": "http://babaimage.com/images/muhammad-ali-discharged-from-hospital-after-pneumonia-scare-tsm-plug.jpg",
        "img": "https://otvet.imgsmail.ru/download/216426503_380fe957372c0bffc115955f4fc24be7_800.jpg",
        "title": "Boxer",
        "record": [
          "wins: 56 (37 KOs)",
          "loss: 5 (1 KOs)",
          "drawn: 0"
        ],
        "contacts": {
          "fb": "https://www.facebook.com"
        },
      },
      {
        "name": "Kostya Tszyu",
        "foto": "http://www.boxnews.com.ua/photos/282/kostya-tszyu25.jpg",
        "img": "http://australia-world.ru/images/photos/medium/9de1e18390434c0c5b823ff5bfb2694c.jpg",
        "title": "Boxer",
        "record": [
          "wins: 31 (25 KOs)",
          "loss: 2 (2 KOs)",
          "drawn: 0"
        ],
        "contacts": {
          "fb": "https://www.facebook.com"
        },
      },
      {
        "name": "Anthony Joshua",
        "foto": "http://e3.365dm.com/16/06/1600x900/gettyimages-528174836-1-2048x1536_3480136.jpg?20160608130006",
        "img": "http://tofight.ru/wp-content/uploads/2015/03/Anthony-Joshua-012.jpg",
        "title": "Boxer",
        "record": [
          "wins: 18 (18 KOs)",
          "loss: 0 (0 KOs)",
          "drawn: 0"
        ],
        "contacts": {
          "fb": "https://www.facebook.com"
        },
      },
      {
        "name": "Vasyl Lomachenko",
        "foto": "http://u35132.netangels.ru/files/news/738/27366.jpg",
        "img": "https://news.pn/photo/9b2da8860b164459b7c37db96c44fd6b.i1200x795x669.jpeg",
        "title": "Boxer",
        "record": [
          "wins: 7 (5 KOs)",
          "loss: 1 (0 KOs)",
          "drawn: 0"
        ],
        "contacts": {
          "fb": "https://www.facebook.com"
        },
      },
      {
        "name": "Manny Pacquiao",
        "foto": "http://youfight.info/media/k2/galleries/1982/pakyao5.jpg",
        "img": "http://youfight.info/media/k2/items/cache/2995cd82b97900bb9a05b75472fae37c_XL.jpg",
        "title": "Boxer",
        "record": [
          "wins: 59 (38 KOs)",
          "loss: 6 (3 KOs)",
          "drawn: 2"
        ],
        "contacts": {
          "fb": "https://www.facebook.com"
        },
      },
      {
        "name": "Fedor Emelianenko",
        "foto": "https://st.kp.yandex.net/im/kadr/2/8/2/kinopoisk.ru-Fedor-Emelianenko-2826718.jpg",
        "img": "http://data.photo.sibnet.ru/upload/imgbig/129820727234.jpg",
        "title": "Bellator",
        "record": [
          "wins: 36 (28 KOs)",
          "loss: 4 (4 KOs)",
          "drawn: 0"
        ],
        "contacts": {
          "fb": "https://www.facebook.com"
        },
      },
      {
        "name": "Vitor Belfort",
        "foto": "http://www.bloodandsweat.ru/foto/news/b17d595704159399eb0a2107f0c49966.jpg",
        "img": "http://www.ufc-buzz.com/images/pics/vitor-belfort.jpg",
        "title": "UFC",
        "record": [
          "wins: 25 (21 KOs)",
          "loss: 14 (9 KOs)",
          "drawn: 0"
        ],
        "contacts": {
          "fb": "https://www.facebook.com"
        },
      },
      {
        "name": "Randy Couture",
        "foto": "http://www.mixfightnews.ru/foto/news/26c7adc7e9d5adc2a5c373866b114785.jpg",
        "img": "https://im0-tub-ua.yandex.net/i?id=dcc489f4374f4e90269e9d3170b3e10f&n=33&h=215&w=175",
        "title": "UFC",
        "record": [
          "wins: 19 (11 KOs)",
          "loss: 11 (10 KOs)",
          "drawn: 0"
        ],
        "contacts": {
          "fb": "https://www.facebook.com"
        },         
      }
      ]
  };
  
  // templating forms

  function renderUserForm(data) {

    $.extend(data, {version:'John Resig micro tmpl() function'});
    $('#userform1').html( tmpl('usertmpl', data) );
    
    var templateString = $('#usertmpl').html();
    $.extend(data, {version:'   Lodash _.template() function'});
    $('#userform2').html( _.template(templateString)(data) );
  }
  
  // render carousel
  $('.carousel-hider').html( tmpl('carouseltmpl', cData) );

  var data = cData.items[cData.items.length-1];
  renderUserForm(data);

  // carousel init
  
  $('carousel-list').carousel();

  $('.carousel-item a')    
    .click(function(e) {
      data = cData.items[$(this).closest('li').index()];
      renderUserForm(data);
      e.preventDefault();
      e.stopPropagation();
    });



});