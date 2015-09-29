var listFilter = require('../index.js');

var getQueryStringParameter = function (param) {
    var params = document.URL.split("?")[1].split("&");
    var strParams = "";

    for (var i = 0; i < params.length; i = i + 1) {
        var singleParam = params[i].split("=");

        if (singleParam[0] == param) {
            return decodeURIComponent(singleParam[1]);
        }
    }
};

var hostWebUrl = getQueryStringParameter('SPHostUrl');

var options = {
    'webUrl': hostWebUrl,
    'useAppContextSite': true,
    'filters': {
        'baseTemplate': 100
    }
};

listFilter(options, function (lists) {
    var html = '<p>The lists based on "Custom" list template under host web are:</p>';
    html += '<ul>';

    for (var i = 0, length = lists.length; i < length; i++) {
        html += '<li>' + lists[i].get_title() + '</li>';
    }

    html += '</ul>';

    $('#message').html(html);
}, function (sender, args) {
    $('#message').text(args.get_message());
});
