<!-- .slide: data-state="title" -->
# Bootstrap 4
Tooltips

>> Speaker Notes:
Tooltips are a great way to show additional information on links and buttons.

---
## Using Tooltips

<ul>
	<li class="fragment">Links or Controls</li>
	<li class="fragment">Uses <a href="http://tether.io/">Tether</a> Library</li>
	<li class="fragment">`data-toggle="tooltip"`</li>
	<li class="fragment">`title="text"`</li>
</ul>

>> Speaker Notes:
1. You should only use tooltips on HTML elements that are focusable like links and form controls because of problems with usability.
2. Tooltips use an extra library called tether, which is a separate installation. You can read more about it on [this website](http://tether.io).
3. In order to set these up, you simply add a data-toggle of tooltip to an element and then add a title attribute with some text in it.


---

## Activating

<ul>
	<li class="fragment">JavaScript or `data`</li>
</ul>

```javascript
$(function () {
  $('[data-toggle="tooltip"]').tooltip({ OPTIONS })
})
```
<!-- .element: data-trim="true" contenteditable="true" class="fragment" -->

```
<div class="tooltip tooltip-top" role="tooltip">
  <div class="tooltip-arrow"></div>
  <div class="tooltip-inner">
    Some tooltip text!
  </div>
</div>
```
<!-- .element: data-trim="true" contenteditable="true" class="fragment" -->

>> Speaker Notes:
1. Tooltips are configured in one of two ways, you can use javascript by using a configuration object, or use data attributes.
2. They are not turned on by default so they have to be activated by using some javascript.
3. The HTML that gets generated for each tooltip looks like this, just in case you want to style it yourself.




---
## Common Options

<ul>
	<li class="fragment">`placement`
		<small style="line-height: 220%; vertical-align: text-bottom;">
			<code style="background:#5cb85c; color:white;">top</code>
			<code style="background:#5cb85c; color:white;">right</code>
			<code style="background:#5cb85c; color:white;">bottom</code>
			<code style="background:#5cb85c; color:white;">left</code>
		</small>
	</li>
	<li class="fragment">`trigger` 
		<small style="line-height: 220%; vertical-align: text-bottom;">
			<code style="background:#5cb85c; color:white;">click</code>
			<code style="background:#5cb85c; color:white;">hover</code>
			<code style="background:#5cb85c; color:white;">focus</code>
		</small>
	</li>
	<li class="fragment">`html` 
		<small style="line-height: 220%; vertical-align: text-bottom;">
			<code style="background:#5cb85c; color:white;">true</code>
			<code style="background:#5cb85c; color:white;">false</code>
		</small>
	</li>
</ul>

>> Speaker Notes:
1. There are a lot of options that you can pass through the data parameters or the configuration object. The three most common are the placement, which decides where the tooltip will appear.
2. The trigger, which by default is over hover, but can be configured to some other methods.
3. Finally, you can add some simple HTML into the title, but it has to be turned on.


## Conclusion
There are several more advanced options and configurations for tooltips, so make sure you check the bootstrap documentation for even more options.

```
<a href="#" data-toggle="tooltip" data-trigger="click" data-html="true" data-placement="bottom" title="Senior <em>exams</em>, Ultrasound, X-ray, and dental cleanings">traditional</a>
```

```
<script>
  $(function () {
    $('[data-toggle="tooltip"]').tooltip({
    })
  })
```

