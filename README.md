# sp-list-filter
Looks through SharePoint lists under web and return an array of lists that pass the truth test.

## Installation
```
npm install sp-list-filter --save
```

## Usage
```js
var listFilter = require('sp-list-filter');

var options = {
    'webUrl': 'web url',
    'useAppContextSite': false,
    'filters': {
        'baseTemplate': 100 // Or baseType
    }
};

listFilter(options, function (lists) {
    // Do something
}, function (sender, args) {
    // Error
});

// Or pass a function to options.filters
var options = {
    'webUrl': 'web url',
    'useAppContextSite': false,
    'filters': function (list) {
        return list.get_baseType() === 0;
    }
};
```

## License
MIT.
