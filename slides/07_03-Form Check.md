<!-- .slide: data-state="title" -->
# Bootstrap 4
Checkboxes &amp; Radio Inputs

>> Speaker Notes:
It's really common to have layouts where text an images are side by side and the content doesn't wrap. For this task, bootstrap gives you a series of media classes that are much simpler to use now that they're based on flexbox.

---
<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-check-square-o"></i> Form Check Classes

<ul>
	<li class="fragment">`form-check`</li>
	<li class="fragment">`form-check-label`</li>
	<li class="fragment">`form-check-input`</li>
	<li class="fragment">`form-check-inline`</li>
	
</ul>

>> Speaker Notes:
1. Form-check is for both checkboxes and radio buttons. They require slightly different layouts. It's a bit different because it doesn't go in the input fields, but instead on the container.
1. Form-check-label is specifically for labels that belong to these types of fields.
2. form-check-input goes in the checkbox or radio button.
3. Checkboxes and radio buttons display as block elements by default. If you want them to display side by side, you can use form-check-inline.

## Demo

## Conclusion
Form check

```
  <fieldset class="form-group">

    <legend>Pet Medical Data</legend>

    <div class="form-group">
      <label>Has your pet been spayed or neutered?</label>

      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="radio" name="spayneut" value="yes" checked> Yes
        </label>
      </div><!-- form-check -->

      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="radio" name="spayneut" value="no"> No
        </label>
      </div><!-- form-check -->

    </div><!-- form-group -->

    <div class="form-group">
      <label class="d-block">Has the pet had any of the following in the past 30 days</label>

      <div class="form-check form-check-inline">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox"> Abdominal pain
        </label>
      </div><!-- form-check -->

      <div class="form-check form-check-inline">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox"> Lack of appetite
        </label>
      </div><!-- form-check -->

      <div class="form-check form-check-inline">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox"> Weakness
        </label>
      </div><!-- form-check -->
    </div><!-- form-group -->

  </fieldset><!-- form-group -->
```