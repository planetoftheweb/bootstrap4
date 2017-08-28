<!-- .slide: data-state="title" -->
#Bootstrap 4
Essential Training

>> You can create author's notes.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-html5"></i> What is Bootstrap?

- A framework
- Mobile first
- Responsive design
- Battle tested
- Uses modern web technologies

>> 
# Note
Anything after the note special characters won't appear on the slides, but will still be in the markdown file. That means you can write your speaking notes here.

---
## Video

  <video controls>
    <source data-src="http://planetoftheweb.com/i/video.mp4" type="video/mp4" />
  </video>

  
>> Note:
You could make this a background video using `<!-- .slide: data-background-video="http://planetoftheweb.com/i/video.mp4" -->`

---
<!-- .slide: data-state="textonimage" data-background-image="http://planetoftheweb.com/i/bridge.jpg" -->

## Background with an image
And some text, small shadow...

---

<!-- .slide: data-state="bar" -->

## Installation: Advanced

- Downloading source
- Using build tools
- Sass or LESS
- GitHub repo
- Custom build

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-font"></i> Typography

<ul>
	<li>`Reboot.css` styles</li>
	<li>`Rems` vs `Ems`</li></li>
	<li>Avoid `margin-top`</li>
</ul>

>> Speaker Notes:
1. There is a special portion at the beginning of the bootstrap styles called reboot.css. It normalizes styles so that they look similar in different platforms for consistent display. Unlike other normalizing css templates, it's somewhat opinionated.

2. Bootstrap uses Rems, a font measurement system that makes it easier to control both the size of fonts across the entire browser and within individual components. That's going to make it easier to 

3. In CSS, vertical margins can collapse and that makes it confusing to calculate the proper spacing in between different elements. To avoid this, bootstrap adds margin only at the bottom of elements.

---

## Easiest Electron App

```javascript
var electron = require('electron');
var BrowserWindow = electron.BrowserWindow;
var app = electron.app;

app.on('ready', function() {
  var appWindow;
  appWindow = new BrowserWindow();
  appWindow.loadURL('http://raybo.org');
});
```
<!-- .element: data-trim="true" contenteditable="true" class="fragment" -->

---

## Embedded Code
<small>Here's a sample of an embeded CodePen into a slide with bootstrap loaded.</small>

<iframe height='300' scrolling='no' title='Bootstrap 4' src='//codepen.io/planetoftheweb/embed/bgdOzX/?height=300&theme-id=27192&default-tab=html,result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/planetoftheweb/pen/bgdOzX/'>Bootstrap 4</a> by Ray Villalobos (<a href='http://codepen.io/planetoftheweb'>@planetoftheweb</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

---

## Another Codepen

<iframe height='300' scrolling='no' title='Bootstrap justify-content-center' src='//codepen.io/planetoftheweb/embed/ZLWmQK/?height=300&theme-id=27192&default-tab=html,result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/planetoftheweb/pen/ZLWmQK/'>Bootstrap justify-content-center</a> by Ray Villalobos (<a href='http://codepen.io/planetoftheweb'>@planetoftheweb</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

---

## Column Metrics

<small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor sapien nec arcu gravida, pellentesque dictum sapien condimentum. Nunc eget quam id metus maximus consequat in quis massa.</small>

| |  Extra small <small>< 768px</small> | Small <small> ≥ 768px</small> | Medium <small>≥992px</small> | Large <small>≥1200px</small> |
|---|---|---|---|---|
| **Container**	| Auto | 750px | 970px | 1170px |
| **Size**	| .col-xs- | .col-sm- | .col-md- | .col-lg- |
| **Column width** | Auto | ~62px | ~81px | ~97px |


---

## What’s a Framework?

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor sapien nec arcu gravida, pellentesque dictum sapien condimentum. Nunc eget quam id metus maximus consequat in quis massa.

---

## When Should I Use Bootstrap?

1. Excellent for small, quick projects<!-- .element: class="fragment"-->
2. Prototyping and scaffolding sites<!-- .element: class="fragment"-->
3. Also great for larger projects<!-- .element: class="fragment"-->
  - Customize your install<!-- .element: class="fragment"-->

---
## Installation: Basic

- CDNs<!-- .element: class="fragment"-->
- Download and install<!-- .element: class="fragment"-->
- Requires jQuery<!-- .element: class="fragment"-->
