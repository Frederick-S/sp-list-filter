var each = require('sp-each');
var contextHelper = require('sp-context-helper');

module.exports = function (options, done, error) {
    var contextWrapper = contextHelper(options.webUrl, options.useAppContextSite);
    var clientContext = contextWrapper.clientContext;
    var web = contextWrapper.web;
    var lists = web.get_lists();

    clientContext.load(lists);
    clientContext.executeQueryAsync(function () {
        var filters = options.filters;
        var listCollection = [];

        if (typeof filters === 'function') {
            each(lists, function (list) {
                if (filters(list)) {
                    listCollection.push(list);
                }
            });
        } else {
            each(lists, function (list) {
                if (filters.baseTemplate && list.get_baseTemplate() === filters.baseTemplate) {
                    listCollection.push(list);
                } else if (filters.baseType && list.get_baseType() === filters.baseType) {
                    listCollection.push(list);
                }
            });
        }

        done(listCollection);
    }, error);
};
