<!-- .slide: data-state="title" -->
# Bootstrap 4
Input Groups

> > Speaker Notes:
We've already looked at how to turn form elements into inline elements. There's a variation of this called inut groups  that allow you to put form elements in a horizontal layout with an integrated look. Let's check it out.
---
<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-check-square-o"></i> Input Group

<ul>
	<li class="fragment">`input-group-addon`</li>
	<li class="fragment">Add on each side</li>
	<li class="fragment">Other elements</li>
</ul>

> > Speaker Notes:
1. The main class for these input groups is called input-group-addon and it adds an inline element right next to the input field. It has a style that makes them look like a single group.
2. You can add one of these on each side of the form or even a couple on each side.
3. You can add other elements like checkboxes and buttons to these forms. Let's take a look.

## Demo

```
     <div class="form-group">
      <label class="form-control-label" for="owneremail">Donation Amount</label>
      <div class="input-group">
        <span class="input-group-addon">
          <label class="form-control-label sr-only" for="ownername">confirm</label>
          <input type="checkbox" checked aria-label="Checkbox for confirming donation">          
        </span>
        <span class="input-group-addon">$</span>
        <input type="text" class="form-control" placeholder="Donation Amount">
        <span class="input-group-addon">.00</span>
      </div>
    </div>
```

```
    <form class="form-inline">
      <div class="input-group">
        <label class="form-control-label sr-only" for="search">Search</label>
        <input type="text" id="search" class="form-control" placeholder="Search for...">
        <span class="input-group-btn">
          <button class="btn btn-info" type="button">Go!</button>
        </span>
      </div>
    </form>

```

## Conclusion
Input groups are a pretty handy style that let's you make very consise forms for elements like search or add a bit of pizzaz to your existing elements.