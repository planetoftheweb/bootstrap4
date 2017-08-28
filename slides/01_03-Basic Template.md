<!-- .slide: data-state="title" -->
# Bootstrap 4
Basic Template

>> Speaker Notes:
In order to get things going, let's talk about the minimum template required to work with Bootstrap.

---

## Using Scrollspy

<ul>
	<li class="fragment">Download JS &amp; CSS</li>
	<li class="fragment">Basic HTML document</li>
	<li class="fragment">jQuery</li>
	<li class="fragment">Tether</li>
</ul>

>> Speaker Notes:
1. You can install Bootstrap in one of four ways. The first is to simply download the pre-compiled Bootstrap CSS and JavaScript files. That works well if you need to install a copy of bootstrap that will work even without an internet connection.

3. The second way to install Bootstrap is to download the source files. This way, you download not just the css and javascript but all of the files that the developers used to create bootstrap, which includes everything including the original sass files and the documentation. You probably only want to do this if you want to contribute to the project or customize bootstrap. We wont be talking about this option in this course.

1. The third way is to use CDNs. A CDN is a content delivery network, which means a place that hosts common libraries like Bootstrap. When someone visits a site that uses  a CDN link, their browser will check it's cache or memory to see if the visitor has been to a similar site that's also using the same link. If that's the case, then the browser will load the cached version of the library. Since it's already stored in memory, that makes the new site load faster since the browser won't have to request the file.

1.The last way is to use a package manager. That means using something like NPM, Bower, Composer or NuGet. These are advanced installations that make it easier to work with package managers that help you work with more complex projects.

To get instructions and to download a copy of bootstrap manually, you can go to this URL https://v4-alpha.getbootstrap.com/getting-started/download/#package-managers.
