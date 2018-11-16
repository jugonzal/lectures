Hi all, we had already gone through the basic principles of managing user authentication on Week 2.  Still, we did a quick review of what we had covered back then:  cookies, sessions, encryption, best practices for managing passwords.

Yet, I convinced you that this whole encryption needed another look and things got interesting.  We started by talking about the [Byzantine General's Problem](https://en.wikipedia.org/wiki/Byzantine_fault_tolerance#Byzantine_Generals'_Problem) which provides good context for realizing we can't just rely on a secure medium to exchange valuable information when trying to reach consensus.

From there we went on to understand the most basic implementation
of encryption (VERY WEAK!):

[ROT13](https://en.wikipedia.org/wiki/ROT13)

```
ABCDEFGHIJKLM
|||||||||||||
NOPQRSTUVWXYZ
```

In this case the word `HELLO` becomes `URYYB`.  Or `LONG` becomes `YBAT`.
We talked about the weaknesses of this algorithm and other simple encryption methods.
Among them the fact that they can be easily detected by simple
frequency analysis. More importantly, this algorithm is *symmetrical* which means that if I have the encrypted version of a word, I can work backwards to recover it.

This is why Public Key cryptography is the standard these days:  it provides a robust set of algorithms with fairly decent strength, but more importantly it is assymetrical.

The [Diffie Hellman key exchange](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange) provides an elegant solution to the problem of negotiating a common secret across an unreliable medium. But if you really want to get into this stuff I suggest you go back to study [Modular Arithmetic](https://en.wikipedia.org/wiki/Modular_arithmetic#Computational_complexity) because many modern encryption algorithms are based on it.

The essence of PKI or public key infrastructure is that by generating two keys, one public and one private, messages can only move in one direction:

Message 
  -> Public Key 
    -> Encrypted Message 
      -> Private Key 
        -> Decrypted Message

Message 
  -> Private Key 
    -> Signed Message 
      -> Public Key 
        -> Verified Message

Notice how I'm talking about Encrypted vs Signed messages.  They are both encrypted just
the same, but the fact that I typically make my Public key available to EVERYONE,
makes it possible for all to send me encrypted messages.   However, since I'm the ONLY
person with my private key, everyone can confirm and verify that a Signed message
came from me and no one else.

To create your own set of keys, you can use `ssh-keygen`.   Remember that when generating
a new pair of keys intended to be installed in a server, you should NOT use a 
passphrase.   However, for a key that will be use for [Digital Signatures](https://en.wikipedia.org/wiki/Digital_signature#Industry_standards), you probably
want to add the passphrase as an extra layer of security.

We talked briefly about how `HTTPS` is, in fact, using Public Key Infrastructure to make
every single HTTP request between a browser and a server secure.  You can read more about [HTTPS on Wikipedia](https://en.wikipedia.org/wiki/HTTPS)

WARNING: The following code is here for reference but until the big companies that provide Single-Sign-On services come forward with a code of conduct that guarantees these transactions will be protected, I'm not endorsing this as a proper technique.

With that in mind we worked on a very common problem related to User Authentication:
Single Sign-on.  We have all seen the myriad of websites that allow you to go
in by using your Facebook or Twitter credentials.   We talked briefly about
the benefits about such an ecosystem where trust can be outsourced.   However,
we also covered some of the dangers if we leave it to others to manage our 
digital personas.   (Did you remember to go through your Facebook Apps permissions
and review all the 3rd party applications that have access to ALL your info?)

We spent the next few minutes going through the Facebook documentation to 
implement Single Sign-On for our project.   Surpringly it was more process than
code.  A few things to remember:

- You'll need to configure an App in your Facebook profile.  This App will give you the 
Client ID and Client Secret needed.
- When setting up the App, Facebook cares about what your domain and callback URLs are,
so you may need to configure your domain first (or use the `/etc/hosts` file to fake it
during development)

And then we learned about a framework that abstracts all the complexity of 
managing user authentication via SSO with many other sites.  The framework
requires you to manage the configuration to connect to other sites, but will
provide a unified approach to use those permissions within your app:

http://passportjs.org/

And lastly, here is that example of integration Passport with Express using the 
Facebook strategy:

https://github.com/passport/express-4.x-facebook-example

