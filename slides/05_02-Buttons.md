<!-- .slide: data-state="title" -->
# Bootstrap 4
Basic Buttons

> > Speaker Notes:
There are a number of classes to help you create buttons, so let's take a look in this video.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-hand-o-up"></i> Button Options

<ul>
	<li class="fragment">`btn` basic class</li>
	<li class="fragment"><p contenteditable>`btn-SIZ`</p>
		<small style="line-height: 120%; vertical-align: text-bottom;">		<b>SIZ:</b>
			<code style="background:#5cb85c; color:white;">sm</code>
			<code style="background:#5cb85c; color:white;">lg</code>
		</small><br>
	</li>
	<li class="fragment">`<a>` `<button>` `<input>`</li>
</ul>

> > Speaker Notes:
1. The basic class for buttons is btn and it has a few options that you can work with.
2. You can include an optional size using the btn-size class for optional small or large buttons. There used to be more, but they have been simplified into these two. You don't use a class for regular size buttons and then use an sm class for a small button and lg class for larger buttons.
3. You can use the button classes on anchor tags, button or input fields and they will look exactly the same.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-hand-o-up"></i> Button Colors

<ul>
	<li><p contenteditable>`btn-COLOR`</p>
		<small style="line-height: 120%; vertical-align: text-bottom;">
			<code style="background:#007bff; color:white;">primary</code>
      <code style="background:#868e96; color:white;">secondary</code>
      <code style="background:#28a745; color:white;">success</code>
      <code style="background:#dc3545; color:white;">danger</code><br>
			<code style="background:#ffc107; color:white;">warning</code>
      <code style="background:#17a2b8; color:white;">info</code>
      <code style="background:#f8f9fa; color:black;">light</code>
      <code style="background:#343a40; color:white;">dark</code>
		</small>
	</li>
	<li class="fragment"><p contenteditable>`btn-outline-COLOR`</p>
		<small style="line-height: 120%; vertical-align: text-bottom;">
      <code style="background: transparent; border: 1px solid #007bff; color: #007bff;">primary</code>
      <code style="background: transparent; border: 1px solid #868e96; color: #868e96;">secondary</code>
      <code style="background: transparent; border: 1px solid #28a745; color: #28a745;">success</code>
      <code style="background: transparent; border: 1px solid #dc3545; color: #dc3545;">danger</code><br>
			<code style="background: transparent; border: 1px solid #ffc107; color: #ffc107;">warning</code>
      <code style="background: transparent; border: 1px solid #17a2b8; color: #17a2b8;">info</code>
      <code style="background: transparent; border: 1px solid #f8f9fa; color: #f8f9fa;">light</code>
      <code style="background: transparent; border: 1px solid #343a40; color: #343a40;">dark</code>
		</small>
	</li>
</ul>

> > Speaker Notes:
1. There's a few options for colors or contextual classes that will yield certain colors. If you're coming from the old version of bootstrap, you'll notice an extra secondary option as well as a link style that will make a button look like a regular link, but retain button functionality.
2. There is also an option for outline buttons which mimic most of the regular color classes.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-hand-o-up"></i> Other Options

<ul>
	<li>`btn-block` full width</li>
	<li class="fragment">`active`</li>
	<li class="fragment">`disabled`</li>
</ul>

> > Speaker Notes:
1. There are some additional options to make a button take up the full width of it's container, which is common when working on mobile devices.
2. There is an active class makes the button look like it's active
3. And of course the disabled class displays as disabled

## Demo

## Conclusion
Buttons can be used inside menus, forms and in other components, so they're an integral part of working with bootstrap.

```

<h2>Types</h2>
<a class="btn btn-primary" href="#" role="button">Link</a>
<button class="btn btn-primary" type="submit">Button</button>
<input class="btn btn-primary" type="submit" value="Input">

<h2>Contextual Classes</h2>
<button class="btn" >Default</button>
<button class="btn btn-primary" >Primary</button>
<button class="btn btn-secondary" >Secondary</button>
<button class="btn btn-success" >Success</button>
<button class="btn btn-info" >Info</button>
<button class="btn btn-warning" >Warning</button>
<button class="btn btn-danger" >Danger</button>
<button class="btn btn-link" >Link</button>

<h2>Outline</h2>
<button class="btn btn-outline-primary">Primary</button>
<button class="btn btn-outline-secondary">Secondary</button>
<button class="btn btn-outline-success">Success</button>
<button class="btn btn-outline-info">Info</button>
<button class="btn btn-outline-warning">Warning</button>
<button class="btn btn-outline-danger">Danger</button>

<h2>Sizes</h2>
<button class="btn btn-success">Default</button>
<button class="btn btn-success btn-lg">Large</button>
<button class="btn btn-success btn-sm">Small</button>
<button class="btn btn-success btn-block">Block</button>

<h2>States</h2>
<h3>Active</h3>
<button class="btn btn-info">Regular Button</button>
<button class="btn btn-info active">Active Button</button>

<h3>Disabled</h3>
<button class="btn btn-info">Regular Button</button>
<button class="btn btn-info disabled">Disabled Button</button>
<a href="#" class="btn btn-link disabled">Disabled Link Button</a>


```
