## Managing State in HTTP

We started the morning with a few exercises, we explored cookies as they exists/travel in the request header, response header and through our DevTools/Application dashboard... or even `document.cookie` in the console.


### Cookies are:

- Used to identify diff information about a "client" (ie browser / user)
- KV (Key-value) pair of data
- Stored on the client (Browser, etc)
- Readable/Writable by the client
- Readable/Writable by the the server (eg: `"Set-Cookie"` response header)
  - When set on the server, it sends back a Set-Cookie response header for the browser to then update its cookies
- Transmitted with every HTTP request (HTTP via `"Cookie"` header)
- Therefore, not to be trusted (can be tampered with).
- Also, should be sent over HTTPS if sensitive
  - One approach is to just say "well, everything is sensitive. Encrypt it all. Therefore, always use HTTPS". It's a small performance hit these days thanks to powerful mobile and desktop devices, so why not? I agree.
- Domain specific: It would not make sense for `news.ycombinator.com` to be able to read my `facebook.com` cookies
- Also have other options like expiration, httpsOnly

## Demos

We used two different mini projects to demo:

The first was use language switched: We demo'd using a `lang` cookie to switch between the preferred language for a user/browser. The user could click English or French to toggle their `lang` cookie.

- [language_selection](https://github.com/jugonzal/lhl-lectures/tree/master/w2d4-cookies/language_selection)

Another more "sensitive" thing we usually want to store in a cookie is the user's username (usually their ID if that existed). However, we see that we need to encrypt the cookie b/c we 

  - don't want the user to SEE it perhaps but more importantly 
  - we don't want it to be easily tamper-able by the user or people in the middle.

### [user_authentication](https://github.com/jugonzal/lhl-lectures/tree/master/w2d4-cookies/user_authentication)

In this folder you will find three different versions of the same app, with progressively better security:

  - [Simple authentication](https://github.com/jugonzal/lhl-lectures/blob/master/w2d4-cookies/user_authentication/server.initial.js) where cookies are used to store user/pwd.  Not great!
  - [Encrypted authentication](https://github.com/jugonzal/lhl-lectures/blob/master/w2d4-cookies/user_authentication/server.final.js) where password has been encrypted to our OWN protection, but still weak.
  - [Token authentication](https://github.com/jugonzal/lhl-lectures/blob/master/w2d4-cookies/user_authentication/server.final.hash.js) where the only thing stored in a cookie is a random/unique token created upon authentication.

At the end of the lecture we went on a trip about how the advertising world is an accomplice to tracking you no matter where you go.  Bottom line: you should be paranoid about the ways in which sites use cookies.  
