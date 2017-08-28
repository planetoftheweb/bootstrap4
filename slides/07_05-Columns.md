<!-- .slide: data-state="title" -->
# Bootstrap 4
Forms in Columns

>> Speaker Notes:
Bootstrap helps you lay out forms using the column grid. There's a few classes you should know about, so let's take a look.
---
<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-check-square-o"></i> Form Styles

<ul>
	<li class="fragment">needs `container`</li>
	<li class="fragment">Use `rows` `cols`</li>
	<li class="fragment">`col-form-label`</li>
</ul>

>> Speaker Notes:
1. Just like with any other column system, you need to have a container class in order to make this work.
2. You also need to use rows as well as columns together and you can make the layouts responsive. Pretty much anything you can do with columns you can do with forms, so make sure you check the videos on working with the grid systen,
3. There is a class you can add to labels to make them work better with col-form-label

## Demo

```
  <fieldset class="form-group">
    <legend>Owner Info</legend>

    <div class="form-group row">
      <label class="form-control-label col-md-2 text-md-right col-form-label" for="ownername">Owner</label>
      <div class="col-md-10">
        <input class="form-control" type="text" id="ownername" placeholder="Your Name">
      </div>
    </div><!-- form-group -->

    <div class="form-group row">
      <label class="form-control-label text-md-right  col-md-2" for="owneremail">Address</label>
      <div class="col-md-10">   
        <input class="form-control" type="text" id="owneremail" placeholder="Address">
      </div>
    </div><!-- form-group -->

    <div class="form-group row">
      <div class="form-group offset-md-2 col-6">
        <label class="form-control-label sr-only" for="ownercity">City</label>
        <input class="form-control" type="text" id="ownercity" placeholder="City">
      </div><!-- form-group -->

      <div class="form-group col-4">
        <label class="form-control-label sr-only" for="ownerzip">Zip</label>
       <input class="form-control" type="text" id="ownerzip" placeholder="Zip">
      </div><!-- form-group -->
    </div><!-- form-group -->

    <div class="form-group row">
      <div class="offset-md-2 col-md-10">
        <button class="btn btn-primary" type="submit">Submit</button>
      </div>
    </div>

  </fieldset><!-- fieldset -->
</form>
```

## Conclusion
Columns help make the forms easier to read as well as make it easier for you to lay out groups of input fields.