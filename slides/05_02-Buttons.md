<!-- .slide: data-state="title" -->
# Bootstrap 4
Basic Buttons

>> Speaker Notes:
There are a number of classes to help you create buttons, so let's take a look in this video.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-hand-o-up"></i> Button Options

<ul>
	<li class="fragment">`btn` basic class</li>
	<li class="fragment"><p contenteditable>`btn-SIZ`</p>
		<small style="line-height: 220%; vertical-align: text-bottom;">		<b>SIZ:</b>
			<code style="background:#5cb85c; color:white;">sm</code>
			<code style="background:#5cb85c; color:white;">lg</code>
		</small><br>
	</li>
	<li class="fragment">`<a>` `<button>` `<input>`</li>
</ul>

>> Speaker Notes:
1. The basic class for buttons is btn and it has a few options that you can work with.
2. You can include an optional size using the btn-size class for optional small or large buttons. There used to be more, but they have been simplified into these two. You don't use a class for regular size buttons and then use an sm class for a small button and lg class for larger buttons.
3. You can use the button classes on anchor tags, button or input fields and they will look exactly the same.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-hand-o-up"></i> Button Colors

<ul>
	<li><p contenteditable>`btn-COLOR`</p>
		<small style="line-height: 220%; vertical-align: text-bottom;">
			<code style="background:#0275d8; color:white;">primary</code>
			<code style="background:#FFF; border: 1px solid #ccc; color:292b2c;">secondary</code>
			<code style="background:#5cb85c; color:white;">success</code>
			<code style="background:#5bc0de; color:white;">info</code><br>
			<code style="background:#f0ad4e; color:white;">warning</code>
			<code style="background:#D9534E; color:white;">danger</code>
			<code style="background:none;"><a href="#" style="color: #0275d8; text-decoration: underline">link</a></code>
		</small>
	</li>
	<li class="fragment"><p contenteditable>`btn-outline-COLOR`</p>
		<small style="line-height: 220%; vertical-align: text-bottom;">
			<code style="background:#FFF; border: 1px solid #ccc; color:#0275d8;">primary</code>
			<code style="background:#FFF; border: 1px solid #ccc; color:#292b2c;">secondary</code>
			<code style="background:#FFF; border: 1px solid #ccc; color:#5cb85c;">success</code><br>
			<code style="background:#FFF; border: 1px solid #ccc; color:#5bc0de;">info</code>
			<code style="background:#FFF; border: 1px solid #ccc; color:#f0ad4e;">warning</code>
			<code style="background:#FFF; border: 1px solid #ccc; color:#D9534E;">danger</code>
		</small>
	</li>
</ul>

>> Speaker Notes:
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

>> Speaker Notes:
1. There are some additional options to make a button take up the full width of it's container, which is common when working on mobile devices.
2. There is an active class makes the button look like it's active
3. And of course the disabled class displays as disabled and prevents you from clicking the button through styles.

## Demo

## Conclusion
Buttons can be used inside menus, forms and in other components, so they're an integral part of working with bootstrap.