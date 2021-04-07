# OMDb API Demo app

The demo app was created as a React app from scratch. All configurations were added manually and can be updated in more flexible way.

The first idea was to add an input field and a "Search" button, so user could add a search term and then click the button to send the API call.

But then I decided to add a search when user just is typing the search query. The only one issue with such approach is that there can be too many requests to the API, so I added debouncing logic.

### To run the app:
```
npm install
```
```
npm start
```

### To run tests (just sample snaphot tests were added):
```
npm test
```


In React string variables in views are escaped automatically, so the app should be safe for the XSS attacks