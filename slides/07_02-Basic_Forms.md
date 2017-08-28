<!-- .slide: data-state="title" -->
# Bootstrap 4
Basic Forms

> > Speaker Notes:
Bootstrap gives you some fantastic styles to help you build forms. Let's take a look at some of the basic options and start working on a simple form.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-check-square-o"></i> Form Classes

<ul>
	<li class="fragment">`form-group`</li>
	<li class="fragment">`form-text`</li>
</ul>

> > Speaker Notes:
1. Form groups are the basic bootstrap form class. It can be used with any block element like fieldsets and divs. It adds a bit of spacing to the bottom of the element and sets the group to display block. It's also required for the proper layout of some elements.
1. There is another class that you can use for basic form text elements like paragraphs and text that belongs in forms.
1. There is also a special class for file inputs.
---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-check-square-o"></i> Form controls

<ul>
	<li class="fragment">`form-control`</li>
	<li class="fragment">`form-control-label`</li>
	<li class="fragment">`form-control-file`</li>
</ul>

> > Speaker Notes:
1. Form controls is the basic class for text based inputs, select and textareas.
1. There is a few related classes you can use including form-control-label for labels belonging to form controls.
1. There is an optional form-control-file specifically for file inputs you can also use.


## Demo

## Conclusion
If you don't like any of those options, you can use any of the column or flexbox layout options that you're familiar with. Make sure you take a look at the videos on working with the grid and flexbox layouts for more info.

```
<form>

  <fieldset class="form-group">
    <legend>Owner Info</legend>

    <div class="form-group">
      <label class="form-control-label" for="ownername">Owner name</label>
      <input class="form-control" type="text" id="ownername" placeholder="Your Name">
    </div><!-- form-group -->

    <div class="form-group">
      <label class="form-control-label" for="owneremail">Email address</label>
      <input class="form-control" type="email" id="owneremail" aria-describedby="emailHelp" placeholder="Enter email">
      <small class="form-text text-muted" id="emailHelp">We'll never share your email</small>
    </div><!-- form-group -->

  </fieldset><!-- fieldset -->
  <fieldset class="form-group">

    <legend>Pet Info</legend>

    <div class="form-group">
      <label class="form-control-label" for="petname">Pet name</label>
      <input class="form-control" type="text" id="petname" placeholder="Your Pet's name">
    </div><!-- form-group -->

    <div class="form-group">
      <label class="form-control-label" for="pettype">Pet type</label>
      <select class="form-control" id="pettype">
        <option>Choose</option>
        <option value="cat">Dog</option>
        <option value="cat">Cat</option>
        <option value="bird">Other</option>
      </select>
    </div><!-- form-group -->

    <div class="form-group">
      <label class="form-control-label" for="reasonforvisit">Reason for today's visit</label>
      <textarea class="form-control" id="reasonforvisit" rows="3"></textarea>
    </div><!-- form-group -->

    <div class="form-group">
      <label>Has your pet been spayed or neutered?</label>
      <div class="form-check">
      <label class="form-control-label" class="form-check-label">
        <input class="form-check-input" type="radio" name="spayneut" value="yes" checked> Yes
      </label>
      </div><!-- form-check -->

      <div class="form-check">
      <label class="form-control-label" class="form-check-label">
        <input class="form-check-input" type="radio" name="spayneut" value="no"> No
      </label>
      </div><!-- form-check -->
    </div><!-- form-group -->

    <div class="form-group">
      <label class="d-block">Has the pet had any of the following in the past 30 days</label>

      <div class="form-check form-check-inline">
        <label class="form-check-label">
          <input type="checkbox"> Abdominal pain
        </label>
      </div><!-- form-check -->

      <div class="form-check form-check-inline">
        <label class="form-check-label">
          <input type="checkbox"> Lack of appetite
        </label>
      </div><!-- form-check -->

      <div class="form-check form-check-inline">
        <label class="form-control-label" class="form-check-label">
          <input type="checkbox"> Weakness
        </label>
      </div><!-- form-check -->
    </div><!-- form-group -->

  </fieldset><!-- fieldset -->
  <button class="btn btn-primary" type="submit">Submit</button>
</form>


```