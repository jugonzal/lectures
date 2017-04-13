## Managing State in HTTP

- About Cookies
  - From the browser
  - From DevTools
  - HTTP Headers

- Cookies for Authentication
  - Can we used the default (unencrypted cookies)? Why not?
    -

## Cookies are:

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

## Demos:

We used two diff mini express projects to demo.

### 1. language_selection

The first was use language switched: We demo'd using a `lang` cookie to switch between the preferred language for a user/browser. The user could click English or French to toggle their `lang` cookie.


### 2. user_authentication

Another more "sensitive" thing we usually want to store in a cookie is the user's username (usually their ID if that existed). However, we see that we need to encrypt the cookie b/c we a) don't want the user to SEE it perhaps but more importantly b) we don't want it to be easily tamper-able by the user or people in the middle.

