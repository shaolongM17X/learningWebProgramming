
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    var street = $("#street").val();
    var city = $("#city").val();
    var size = 'size=1600x900';
    var googleMapKey ="AIzaSyCbJGsO69nn038trabhcZW_xPqqjF3ZbG8";
    var img_src = 'url("' + 'https://maps.googleapis.com/maps/api/streetview?' + "location="+street + " " + city + "&" +size + "&" +"key="+ googleMapKey+'")';
    //console.log(img_src);
    $body.css("background-image", img_src);

    var nytAPIkey = "b177b7b2a5d8a3658656f2022d840665:11:74065543";
    var date = getDateInNumber();
    //console.log(date);
    var nyt_url = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ city + "&begin_date="+date+"&end_date="+date+"&api-key=" + nytAPIkey;
    $.getJSON(nyt_url, function(data){
        data.response.docs.forEach(function(article){
            $nytElem.append(
                "<li class='article'>"+
                "<a href = " + article.web_url + ">"+article.headline.main+"</a>"+
                "<p>" + article.snippet +"</p>"
                +"</li>"
                );
        });
    }).error(function() {
        $nytElem.append("<p>shenmegui</p>");
    });

    var wiki_url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + city + "&format=json&callback=wikiCallback";

    $.ajax({
        url: wiki_url,
        dataType: 'jsonp',
        success: function(res) {
            res[1].forEach(function(article){
                var url = 'http://en.wikipedia.org/wiki/'+article;
                $wikiElem.append('<li><a href="'+url+'">' + article+"</a></li>")
            });
        }
    });
    return false;
};

$('#form-container').submit(loadData);

function getDateInNumber() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth()+1;
    if (month < 10) {
        month = "0" + month;
    }
    var year = date.getFullYear();
    return ""+ year + month + day;    
}
// loadData();
