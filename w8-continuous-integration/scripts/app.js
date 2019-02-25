
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
var data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

let createTweetElement = (tweetData) => {
  let $article = $("<article>", {"class": "tweet"});
  let $header = $("<header>");
  let $tweetpic = $("<div>", {"class": "tweet-pic"});
  let $img = $("<img>");
  let $username = $("<div>", {"class": "tweet-username"}).text(tweetData.user.name);
  let $userhandle = $("<div>", {"class": "tweet-userhandle"}).text(tweetData.user.handle);
  let $content = $("<div>", {"class": "tweet-body"}).text(tweetData.content.text);
  let $footer = $("<footer>");
  let date = new Date(tweetData.created_at);
  let $date = $("<div>", {"class": "tweet-date"}).text(date.toDateString());
  let $symbols = $("<div>", {"class": "tweet-icons"})
        .append($("<i>", {"class": "fa fa-flag"}))
        .append($("<i>", {"class": "fa fa-retweet"}))
        .append($("<i>", {"class": "fa fa-heart"}));
  $img.attr("src", tweetData.user.avatars.small);
  $tweetpic.append($img);
  $header.append($tweetpic).append($username).append($userhandle);
  $footer.append($date).append($symbols);
  $article.append($header).append($content).append($footer);
  return $article;
};

let renderTweets = (arrayTweets) => {
  arrayTweets.forEach( (tweet) => {
    $('#tweets-container').append(createTweetElement(tweet));
  });
};

let loadTweets = () => {
  $.get("/tweets/").then(
    (data) => {
      renderTweets(data);
    },
    () => {
      tweetNotification("Could not load tweets");
    }
  );
};

let tweetNotification = (message) => {
  $("#tweet-notification").text(message).fadeTo(2000, 1, () => {
    $("#tweet-notification").fadeTo(2000, 0);       
  });
};

$( () => {
  renderTweets(data);

  //Ajax For Getting More Tweets
  $('main .new-tweet').on('submit', (event) => {
    //console.log('Performing Ajax Call');
    event.preventDefault();
    let text = $('main .new-tweet .new-tweet-input').val();
    if(text.length === 0) {
      tweetNotification("Tweet cannot be empty!");
      return false;
    }
    else if(text.length > 140) {
      tweetNotification("Tweet cannot exceed 140 characters!");
      return false;
    }

    $.post("/tweets/", { text: text }).then(
      (data) => {
        $('main .new-tweet .new-tweet-input').val('');
        $('main .counter').text(140);
        $('#tweets-container').empty();
        loadTweets(); 
        tweetNotification("Tweeted!!");
      },
      () => {
        //Flash box with error
        tweetNotification("Something went wrong :(");
      }
    );
  });

  $('.compose').on('click', (event) => {
    $('main .new-tweet').slideToggle("fast", () => {
      $('main .new-tweet .new-tweet-input').focus();
    });
  });
});