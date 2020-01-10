<!-- .slide: data-state="title" -->
# Bootstrap 4
PopOvers

> > Speaker Notes:
Popovers are another component that lets you display additional content triggered by events like clicks, They are almost exactly like popovers, but have a different style.

---
## Using PopOvers

<ul>
	<li class="fragment">`data-toggle="popover"`</li>
	<li class="fragment">`title="text"`</li>
	<li class="fragment">`data-content="content"`</li>
</ul>

> > Speaker Notes:
2. Tooltips use an extra library called tether, which is a separate installation. You can read more about it on [this website](http://tether.io).
3. In order to set these up, you simply add a data-toggle of popover to an element and then add a title attribute with some text in it.


---

## Activating

```javascript
$(function () {
  $('[data-toggle="popover"]').popover({ OPTIONS })
})
```
<!-- .element: data-trim="true" contenteditable="true" class="fragment" -->

https://getbootstrap.com/docs/4.0/components/popovers/
> > Speaker Notes:
1. Just like with popovers, you have to initialize them through some javascript and you can pass along some options.
2. Here's the default template, you can create your own template and pass it along with the template parameter of the configuration object.


---
## Common Options

<ul>
	<li class="fragment">`placement`
		<small style="line-height: 120%; vertical-align: text-bottom;">
			<code style="background:#5cb85c; color:white;">top</code>
			<code style="background:#5cb85c; color:white;">right</code>
			<code style="background:#5cb85c; color:white;">bottom</code>
			<code style="background:#5cb85c; color:white;">left</code>
		</small>
	</li>
	<li class="fragment">`trigger`
		<small style="line-height: 120%; vertical-align: text-bottom;">
			<code style="background:#5cb85c; color:white;">click</code>
			<code style="background:#5cb85c; color:white;">hover</code>
			<code style="background:#5cb85c; color:white;">focus</code>
		</small>
	</li>
	<li class="fragment">`container`</li>
</ul>

> > Speaker Notes:
1. There are a lot of options that you can pass through the data parameters or the configuration object. The three most common are the placement, which decides where the popover will appear.
2. The trigger, which by default is over hover, but can be configured to some other methods.
3. Finally, you can add some simple HTML into the title, but it has to be turned on.


## Conclusion
There are several more advanced options and configurations for popovers, so make sure you check the bootstrap documentation for even more options.

```
  <button type="button"
    class="btn btn-lg btn-danger"
    data-toggle="popover"
    title="Standard Checkups"
    data-content="Our standard checkups offer Ultrasounds, X-rays and dental cleanings."
  >Checkup Info
  </button>
```

```
<script>
$(function () {
  $('[data-toggle="popover"]').popover()
})
</script>
```
