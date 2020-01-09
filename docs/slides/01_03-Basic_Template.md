<!-- .slide: data-state="title" -->

# Bootstrap 4

Basic Template

> > Speaker Notes:
> > In order to get things going, let's talk about the minimum template required to work with Bootstrap.

---

## Using Scrollspy

- Download JS and CSS
- Basic HTML document
- jQuery
- Popper

> > Speaker Notes:

- In the last video, I showed you the different options for installing bootstrap. We're going to use the option where we download the files that we need locally.

- In addition to downloading bootstrap, you need to get two additional libraries to make things work properly. Bootstrap requires that you install a copy of jQuery. jQuery is a library that makes it easier to work with JavaScript. You can get a copy of jQuery at this URL.

- In order for certain components to work properly, you're going to need to download and install a copy of a library called popper. You can get more information about and download that library at this URL.

- As I mentioned, I already downloaded all of the files for you and placed them in the exercises for this course.

---

> > Speaker Notes:

Here's where you can find the bootstrap download. Let's click on this page

You're also going to need a library called Popper. You can get that at this URL. Now, finally you're going to need some code for a basic HTML document.

Now, if you're just using a CDN, you'll want to go to this URL in the Bootstrap framework website and scroll all the way down to this starter template. Now, this automatically includes all of the files that you need, including the Bootstrap CSS, as well as the Bootstrap JavaScript and the jQuery Slim as well as the Popper library. Now, jQuery Slim is a smaller version of the jQuery framework. Sometimes, you may want to include the regular version of that instead of this one. You can take a look at the jQuery website to see where you can download the regular version. As I've mentioned, I've already downloaded all the copies of the different libraries that you'll need and placed it in this Bootstrap folder. This is something that you can get by downloading the exercise files for this course. Now, you'll notice that I have the Popper as well as jQuery in the Bootstrap JavaScript here and then the bootstrap.min.css file right here for the CSS. Right now, I have an empty index.html page which is opened in an editor right here. What I'm going to do is go to Gist that I've prepared with all the code for you and from this page you want to hit the Raw button right here, and then copy all of this code. Then, go back into your index.html file and paste that and save it. Now, we've done a couple of things that are slightly different than the Bootstrap template that you saw on the Bootstrap framework website. Mainly, I've got a title of Bootstrap and I've also included something called a container. A container is a Bootstrap class that allows everything to fit to the default grid in Bootstrap. That's going to be a little bit useful. Now, another thing that I've done is, notice that I don't have the specific version numbers for the library. This is something that I like to do because I keep Bootstrap updated all the time. Now, I do that because when a new version of the library comes in-- Like, let's say we're using a new version of Bootstrap, what I usually do is download the version that I want to use and then just rename it bootstrap.min.js as opposed to like bootstrap4.0.1.min.js, that way I won't have to worry about the version numbers. You may be wondering why I am using the downloaded versions of the framework instead of the CDNs. The CDNs are really useful when you're deploying the website, because it's going to make it load a lot faster. As I mentioned in the previous video, if you're using CDNs then if you visited a website that is using the same links, then your website will load faster. But, during development you don't know when you're going to be in a location that doesn't have reliable network connections. That's why it's better to download all the files to a local folder and work off of your local hard drive. That's why I choose to do most of my development with a template like this as opposed to the template that you see in the Bootstrap website. You may want to use that one if you know that you are deploying, you're using the standard Bootstrap library with no customization and you want your website to load as fast as possible. Now, in addition to all this, I may want to include an additional style sheet file. It would usually go right underneath the Bootstrap framework. Make sure that you don't load it before. You want any additional styles to override your default Bootstrap styles. In the same way, notice that the last thing that you'll load right here is a Bootstrap JavaScript file. It uses Popper and jQuery, so those have to be loaded prior to this. In addition to that, if I was using my own scripts, I would make sure that I add them after this script tag right here. Now, that you have a great template, it's time to get started using the features of the framework.
