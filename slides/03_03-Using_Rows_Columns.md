<!-- .slide: data-state="title" -->

# Bootstrap 4

Rows/Columns

> > Speaker Notes:

In conjuction with containers, rows prepare the content for a layout, and columns are what lets you take full advantage of the 12 column grid. Let's take a look at how columns work.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-th"></i> Rows

- <p contenteditable>`row(-cols(-BP)(-COL))`</p>
  <small style="line-height: 120%; vertical-align: text-bottom;">
  <b>BP:</b> <code style="background:#5cb85c; color:white;">sm</code> >576px
  <code style="background:#5cb85c; color:white;">md</code> >768px
  <code style="background:#5cb85c; color:white;">lg</code> >992px
  <code style="background:#5cb85c; color:white;">xl</code> >1200px
  </small><br>
  <small style="line-height: 120%; vertical-align: text-bottom;">
  <b>COL:</b> <code style="background:#D95357; color:white;">1-6</code></small>

- Only columns in rows
- `no-gutters` delete space between

> > Speaker Notes:

1. The row class prepares your layout for the grid. They use negative margins to remove the 15 pixel padding that the container class adds, so the columns can take the full width of the container.

1. You can pre-set how many columns fit inside each row, by using an additional class of row-cols and specifying a number between 1 and 6.

1. Columns normally have 30 pixels of in between the columns, but you can use a special class called .no-gutters to remove spacing between the columns

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-th"></i> Columns

- Up to 12 columns
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

1. You can divide the content in each row into up to 12 columns.

1. Columns can be set to automatically size using the col class, they can pass along a size at which they'll convert to the full width of the viewport and they can also be set to span a certain amount of rows. Sort of like an excel spreadsheet.

1. Adding a breakpoint to a column definition will determine when the column converts from taking the full width of the device or window.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-th"></i> Aligning Columns

- **Vertical** <p contenteditable>`align-TYP-DIR`</p>
  <small style="line-height: 120%; vertical-align: text-bottom;">
  <b>TYP:</b>
  <code style="background:#5cb85c; color:white;">items</code>
  <code style="background:#5cb85c; color:white;">self</code>
  </small><br>
  <small style="line-height: 120%; vertical-align: text-bottom;">
  <b>DIR:</b>
  <code style="background:#D95357; color:white;">start</code>
  <code style="background:#D95357; color:white;">center</code>
  <code style="background:#D95357; color:white;">end</code>
  </small><br>
- **Horizontal** <p contenteditable>`justify-content-DIR`</p>
  <small style="line-height: 120%; vertical-align: text-bottom;">
  <b>DIR:</b> <code style="background:#5cb85c; color:white;">start</code>
  <code style="background:#5cb85c; color:white;">center</code>
  <code style="background:#5cb85c; color:white;">end</code>
  <code style="background:#5cb85c; color:white;">around</code>
  <code style="background:#5cb85c; color:white;">between</code>
  </small><br>

> > Speaker Notes:

1. You can divide the content in each row into up to 12 columns.

1. Columns can be set to automatically size using the col class, they can pass along a size at which they'll convert to the full width of the viewport and they can also be set to span a certain amount of rows. Sort of like an excel spreadsheet.

1. Adding a breakpoint to a column definition will determine when the column converts from taking the full width of the device or window.
