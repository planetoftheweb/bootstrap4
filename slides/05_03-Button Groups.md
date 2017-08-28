<!-- .slide: data-state="title" -->
# Bootstrap 4
Button Groups

>> Speaker Notes:
There are a number of classes to help you create buttons, so let's take a look in this video.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-hand-o-up"></i> Button Group Classes

<ul>
	<li class="fragment">`btn-group`</li>
	<li class="fragment">`btn-group-vertical`</li>
	<li class="fragment">`btn-toolbar`</li>
	<li class="fragment">`aria-label`</li>
</ul>

>> Speaker Notes:
1. There are two options to group together buttons in bootstrap. To group some buttons together, you can use the btn-group class.
2. There's also a vertical option for button groups that stacks the buttons on top of one another.
3. Finally, there is a toolbar option that lets you create groups of btn-groups
4. When you're creating button groups, it's a good idea to use the aria-label property to add context to your button groups.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-hand-o-up"></i> Button Group Options

<ul>
	<li><p contenteditable>`btn-group-SIZ`</p>
		<small style="line-height: 220%; vertical-align: text-bottom;">		<b>SIZ:</b>
			<code style="background:#5cb85c; color:white;">sm</code>
			<code style="background:#5cb85c; color:white;">lg</code>
		</small><br>
	</li>
</ul>

>> Speaker Notes:
1. There are a couple of options for choosing the size of button groups just like with buttons. There used to be more, but they have been simplified into these two. You don't use a class for regular size buttons and then use an sm class for a small button and lg class for larger buttons.

## Demo

## Conclusion
As I mentioned, you'll see these colors prop up all over bootstrap to handle different elements and that includes buttons, cards and other interface items.

```
<div class="btn-toolbar mb-2" aria-label"Pet Options">
  <div class="btn-group mr-2" aria-label"Pet Type">
    <button type="button" class="btn btn-secondary">Cat</button>
    <button type="button" class="btn btn-secondary active">Dog</button>
    <button type="button" class="btn btn-secondary">Fish</button>
    <button type="button" class="btn btn-secondary">Bird</button>
  </div>

  <div class="btn-group" aria-label"Pet Grouping">
    <button type="button" class="btn btn-primary">Amphibian</button>
    <button type="button" class="btn btn-primary">Reptile</button>
    <button type="button" class="btn btn-primary active">Other</button>
  </div>
</div>
```