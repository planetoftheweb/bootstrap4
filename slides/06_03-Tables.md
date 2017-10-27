<!-- .slide: data-state="title" -->
# Bootstrap 4
Tables

> > Speaker Notes:
One of the best features in Bootstrap is the addition of tables.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-table"></i> Table Classes

<ul>
	<li class="fragment">`table`</li>
	<li class="fragment">`table-dark`</li>
</ul>

> > Speaker Notes:

1. Tables look really great when you add the table class. Bootstrap adds some additional spacing and underlines.
1. You can use the table-dark style to create a table with a black background and white text.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-table"></i> Style Classes
<ul>
  <li class="fragment">`table-striped`</li>
  <li class="fragment">`table-bordered`</li>
  <li class="fragment">`table-hover`</li>
</ul>

> > Speaker Notes:


---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-table"></i> Head Colors

<ul>
  <li class="fragment">`thead-light`</li>
  <li class="fragment">`thead-dark`</li>
</ul>

> > Speaker Notes:
1. There's a few classes you can use to control the style of table heads
1. You can use thead-light
1. You can use thead-dark

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-table"></i> Color Options

<ul>
  <li class="fragment"><p contenteditable>`table-COLOR` TRs &amp; TDs</p>
    <small style="line-height: 120%; vertical-align: text-bottom;">
    <code style="background:rgba(0,0,0,.075); color:#555;">active</code>
    <code style="background:#b8daff; color:#555;">primary</code>
    <code style="background:#dddfe2; color:#555;">secondary</code>
    <code style="background:#c3e6cb; color:#555;">success</code>
    <code style="background:#f5c6cb; color:#555;">danger</code>
    <code style="background:#ffeeba; color:#555;">warning</code>
    <code style="background:#bee5eb; color:#555;">info</code>
    <code style="background:#fdfdfe; color:#555;">light</code>
    <code style="background:#c6c8ca; color:#555;">dark</code>
    </small>
  </li>
  <li class="fragment"><p contenteditable>`bg-COLOR` TRs &amp; TDs</p>
		<small style="line-height: 120%; vertical-align: text-bottom;">
    <code style="background-color:#007bff; color: white;">primary</code>
    <code style="background-color:#28a745; color: white;">success</code>
    <code style="background-color:#dc3545; color: white;">danger</code>
    <code style="background-color:#ffc107; color: white;">warning</code>
    <code style="background-color:#17a2b8; color: white;">info</code>
    </small>
	</li>
  <li class="fragment"><p contenteditable>`text-COLOR` for text</p>
		<small style="line-height: 120%; vertical-align: text-bottom;">
    <code style="background-color:transparent; color:#007bff">primary</code>
    <code style="background-color:transparent; color:#868e96">secondary</code>
    <code style="background-color:transparent; color:#28a745">success</code>
    <code style="background-color:transparent; color:#dc3545">danger</code>
    <code style="background-color:transparent; color:#ffc107">warning</code>
    <code style="background-color:transparent; color:#17a2b8">info</code>
    <code style="background-color:transparent; color:#f8f9fa; background-color:gray;">light</code>
    <code style="background-color:transparent; color:#343a40">dark</code>
    </small>
	</li>
</ul>

> > Speaker Notes:
1. There's a few classes you can use to control the style of table heads
1. You can use thead-light
1. You can use thead-dark

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-table"></i> Size/Responsive

<ul>
	<li class="fragment">`table-sm`</li>
	<li class="fragment">
  <p contenteditable>`table-responsive(-BP)`</p>
  <small style="line-height: 120%; vertical-align: text-bottom;">
    <b>BP:</b> <code style="background:#5cb85c; color:white;">sm</code> >576px
    <code style="background:#5cb85c; color:white;">md</code> >768px
    <code style="background:#5cb85c; color:white;">lg</code> >992px
    <code style="background:#5cb85c; color:white;">xl</code> >1200px
    </small><br>

  </li>
</ul>

> > Speaker Notes:
1. You can add borders to the table using table-bordered.
2. You can also create a style that changes the background to a slight gray background when the mouse is over it.
3. If the content is too wide, then you can use table-responsive class which allows you to scroll horizontally if the content doesn't fit. This is actually new in this version of bootstrap. In the older version you had to wrap a container around the table, so this is definitely better.

## Conclusion
Tables is one of those features I really like about bootstrap. Styling tables can be challenging with CSS, so these styles are really awesome.
