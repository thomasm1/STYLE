$(document).ready(function() {

  function tiltCube(div, tilt, reset) {
    $(div).hover(function() {
      $('.cube').removeClass('resetUp resetDown resetLeft resetRight resetUpLeft resetUpRight resetDownLeft resetDownRight').addClass(tilt);
    }, function() {
      setTimeout(function() {
        $('.cube').removeClass('tiltUp tiltDown tiltLeft tiltRight tiltUpLeft tiltUpRight tiltDownLeft tiltDownRight').addClass(reset);
      }, 100);
      setTimeout(function() {
        $('.cube').removeClass(reset);
      }, 400);
    });
  }

  function spinCube(dot, spin) {
    dot.on('click', function() {
      $('.cube').addClass(spin);
      $('.direction').fadeOut();
      setTimeout(function() {
        $('.cube').removeClass(spin);
        $('.direction').fadeIn();
      }, 1450);
    });
  }

  $('.cube, .direction').on('mouseover', function() {
    $('.instructions').delay(1000).fadeOut();
  });

  tiltCube($('.north'), 'tiltDown', 'resetDown');
  tiltCube($('.south'), 'tiltUp', 'resetUp');
  tiltCube($('.west'), 'tiltRight', 'resetRight');
  tiltCube($('.east'), 'tiltLeft', 'resetLeft');
  tiltCube($('.nw'), 'tiltDownRight', 'resetDownRight');
  tiltCube($('.ne'), 'tiltDownLeft', 'resetDownLeft');
  tiltCube($('.sw'), 'tiltUpRight', 'resetUpRight');
  tiltCube($('.se'), 'tiltUpLeft', 'resetUpLeft');
  spinCube($('.top'), 'spinDown');
  spinCube($('.bottom'), 'spinUp');
  spinCube($('.left'), 'spinRight');
  spinCube($('.right'), 'spinLeft');

  $('.front').on('click', function() {
    $('.cube').toggleClass('A B');
    $('body').css('pointer-events', 'none');
    $('.direction').fadeOut(100);
    $('.front').addClass('explodeFront');
    $('.top').addClass('explodeTop');
    $('.bottom').addClass('explodeBottom');
    $('.left').addClass('explodeLeft');
    $('.right').addClass('explodeRight');
    $('.back').addClass('explodeBack');
    if ($('.cube').hasClass('B')) {
      $('.cube').addClass('spinDiagonal');
    }
    setTimeout(function() {
      $('body').css('pointer-events', 'auto');
      $('.direction').fadeIn();
      $('.front').removeClass('explodeFront');
      $('.top').removeClass('explodeTop');
      $('.bottom').removeClass('explodeBottom');
      $('.left').removeClass('explodeLeft');
      $('.right').removeClass('explodeRight');
      $('.back').removeClass('explodeBack');
      $('.cube').removeClass('spinDiagonal');
    }, 1850);
  });



});