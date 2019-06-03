# Using Request to call APIs

Hi class!  This afternoon we continued to work on our understanding of how the web works and in particular *when* responses become available.   We are starting to realize that a big concern when writing web applications is making sure we *wait* for requests to be processed.  In particular, when calling APIs, we have to be mindful that they are running in a server "far away", so it may take a while for them to responde.

The *callback* is fundamental to make sure that whenever we get a response, there will be some code there to act on it.   We refactored our *MetaWeather* application to return the temperature instead of simply displaying it.  This proved useful once we started building more interesting features on top of it.

I have committed the code we created this afternoon.  Please look at [weather.js](https://github.com/jugonzal/lhl-lectures/tree/master/w2d1bo-using-apis/code/weather.js)

