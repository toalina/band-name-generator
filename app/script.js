'use strict';

$(function() {
  $('#name').on('click', function() {
    // tells jquery to use ajax to go get something
    // .get(): request to 'adjective' route, then do the function
    $.get('adjective', function(response) {
      console.log(response);
      var adjective = response.word;
      $('#adjective').text(adjective);
    });

    $.get('verb', function(response) {
      console.log(response);
      var verb = response.word;
      $('#verb').text(verb);
    });

    $.get('noun', function(response) {
      console.log(response);
      var noun = response.word;
      $('#noun').text(noun);
    });
  });

  // make event handler: click button will send
  // a POST request to server
  // on "submit", this event will happen
  $('#submitWords').on('submit', function(e) {
    e.preventDefault();

    // get the text entered in text book and save to a variable
    var adjective = $('input[name=adjective]').val();
    var adjectivePost; //the obj to pass in

    if (adjective) {
      //this will get JSONified via jQuery
      adjectivePost = {word: adjective};
      // jQuery POST method, takes a route and a function
      $.post('adjective', adjectivePost, function(response) {
        console.log(response);
        var adjectiveRes = response.message;
        $('#adjectiveRes').text(adjectiveRes);

      });
      $('input[name=adjective]').val('');
    }

    var verb = $('input[name=verb]').val();
    var verbPost; //the obj to pass in

    if (verb) {
      //this will get JSONified via jQuery
      verbPost = {word: verb};
      // jQuery POST method, takes a route and a function
      $.post('verb', verbPost, function(response) {
        console.log(response);
        var verbRes = response.message;
        $('#verbRes').text(verbRes);

      });
      $('input[name=verb]').val('');

    }

    var noun = $('input[name=noun]').val();
    var nounPost; //the obj to pass in

    if (noun) {
      //this will get JSONified via jQuery
      nounPost = {word: noun};
      // jQuery POST method, takes a route and a function
      $.post('noun', nounPost, function(response) {
        console.log(response);
        var nounRes = response.message;
        $('#nounRes').text(nounRes);

      });
      $('input[name=noun]').val('');

    }

  });

});







