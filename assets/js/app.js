
 $(document).ready(function () {
  //Items
  var $card = $(".c-card_b");
  var $container = $(".innercustom");
  var $bike = $(".innercustom img");

  //Moving Animation Event
  $container.on("mousemove", function (e) {
    let xAxis = (window.innerWidth / 2 - e.clientX) / 30;
    let yAxis = (window.innerHeight / 2 - e.clientY) / 30;
    $card.css("transform", `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`);
  });

  //Animate on Hover
  $container.hover(function () {
    $card.toggleClass("has-transform");
    $bike.toggleClass("has-transform");
  });

  //Pop Back on mouseleave
  $container.on("mouseleave", function () {
    $card.css("transform", `rotateY(0deg) rotateX(0deg)`);
  });

  /* p1 card */
  var $cardP1 = $(".p1Card .c-card_b");
  var $containerP1 = $(".p1Card");
  var $bikeP1 = $(".p1Card img");

  //Moving Animation Event
  $containerP1.on("mousemove", function (e) {
    let xAxisP1 = (window.innerWidth / 2 - e.clientX) / 30;
    let yAxisP1 = (window.innerHeight / 2 - e.clientY) / 30;
    $card.css("transform", `rotateY(${xAxisP1}deg) rotateX(${yAxisP1}deg)`);
  });

  //Animate on Hover
  $containerP1.hover(function () {
    $cardP1.toggleClass("has-transform");
    $bikeP1.toggleClass("has-transform");
  });

  //Pop Back on mouseleave
  $containerP1.on("mouseleave", function () {
    $cardP1.css("transform", `rotateY(0deg) rotateX(0deg)`);
  });
  /* p1 card */


  function theKingIsBlackPageCallback(n) {
    return {
      type: 'image',
      src: 'books/image/theKingIsBlack/'+(n+1)+'.jpg',
      interactive: false
    };
  }
if($('#flipBookPDF').lenght>0){
  $('#flipBookPDF').FlipBook({
    pageCallback: theKingIsBlackPageCallback,
    pages: 40,
    propertiesCallback: function(props) {
      props.cssLayersLoader = function(n, clb) {// n - page number
        clb([{
          css: '.hd {margin-top: 200px;background-color: red;}',
          html: '<h1 class="hd">CSS3 Layer - Hello</h1>',
          js: function (jContainer) {
            console.log(jContainer);
            return {
              hide: function() {console.log('hide');},
              hidden: function() {console.log('hidden');},
              show: function() {console.log('show');},
              shown: function() {console.log('shown');},
              dispose: function() {console.log('dispose');}
            };
          }
        }]);
      };
      props.cover.color = 0x000000;
      return props;
    },
    template: {
      html: 'templates/default-book-view.html',
      styles: [
        'css/short-white-book-view.css'
      ],
      links: [
        {
          rel: 'stylesheet',
          href: 'css/font-awesome.min.css'
        }
      ],
      script: 'js/default-book-view.js',
      sounds: {
        startFlip: 'sounds/start-flip.mp3',
        endFlip: 'sounds/end-flip.mp3'
      }
    }
  });
}
  $('.demo-msg').css('display','none !important');
});