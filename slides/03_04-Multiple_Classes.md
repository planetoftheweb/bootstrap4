<!-- .slide: data-state="title" -->

# Bootstrap 4

Multiple Classes

> > Speaker Notes:

As you work with more complex layouts you may want to modify the grid depending on the width of the screen. Bootstrap lets you add multiple classes to rows and columns to control how the grid works in interesting ways. This is a lot easier than having to add different media queries in CSS.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-th"></i>Multiple Rows & Cols

- `container(-SIZ)`<br>
  <small style="line-height: 120%; vertical-align: text-bottom;"> <b>SIZ:</b>
  <code style="background:#5cb85c; color:white;">sm</code>
  <code style="background:#5cb85c; color:white;">md</code>
  <code style="background:#5cb85c; color:white;">lg</code>
  <code style="background:#5cb85c; color:white;">xl</code>
  <code style="background:#5cb85c; color:white;">fluid</code>
  </small><br>

- <p contenteditable>`row row-cols(-BP)(-COL)`</p>
  <small style="line-height: 120%; vertical-align: text-bottom;">
  <b>BP:</b> <code style="background:#5cb85c; color:white;">sm</code> >576px
  <code style="background:#5cb85c; color:white;">md</code> >768px
  <code style="background:#5cb85c; color:white;">lg</code> >992px
  <code style="background:#5cb85c; color:white;">xl</code> >1200px
  </small><br>
  <small style="line-height: 120%; vertical-align: text-bottom;">
  <b>COL:</b> <code style="background:#D95357; color:white;">1-6</code></small>

- <p contenteditable>`col(-BP)(-COL)`</p>
  <small style="line-height: 120%; vertical-align: text-bottom;">
  <b>BP:</b> <code style="background:#5cb85c; color:white;">sm</code> >576px
  <code style="background:#5cb85c; color:white;">md</code> >768px
  <code style="background:#5cb85c; color:white;">lg</code> >992px
  <code style="background:#5cb85c; color:white;">xl</code> >1200px
  </small><br>
  <small style="line-height: 120%; vertical-align: text-bottom;">
  <b>COL:</b> <code style="background:#D95357; color:white;">1-12</code></small>

> > Speaker Notes:

1. There are three relevant things to consider here, first is the availability of the container classes.
