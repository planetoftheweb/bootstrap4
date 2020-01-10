<!-- .slide: data-state="title" -->

# Bootstrap 4

Card Layout

> > Speaker Notes:

There is a number of ways to control the layout of your cards. Some are simpler than others and what's different is how the elements align.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-list-alt"></i> Card Layout Containers

- `card-group`
- `card-deck`
- `card-columns`

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-list-alt"></i> Using the Grid

- <p contenteditable>`row row(-cols(-BP)(-COL))`</p>
  <small style="line-height: 120%; vertical-align: text-bottom;">
  <b>BP:</b> <code style="background:#5cb85c; color:white;">sm</code> >576px
  <code style="background:#5cb85c; color:white;">md</code> >768px
  <code style="background:#5cb85c; color:white;">lg</code> >992px
  <code style="background:#5cb85c; color:white;">xl</code> >1200px
  </small><br>
  <small style="line-height: 120%; vertical-align: text-bottom;">
  <b>COL:</b> <code style="background:#D95357; color:white;">1-6</code></small>

> > Speaker Notes:

Bootstrap has three different classes to make it simpler to create columns.

1. The first is card-group. It creates a group that's similar to a button group. The cards come together with a shared border.
1. There's a second class called card-deck. If you want spacing between the columns, this is the easiest way to set things up.
1. There's also card-columns. This makes a really interesting layout where the cards align similarly to what you would see in pinterest.
1. You can also, of course use the grid and the addition of the new rows-cols classes is really helpful.

## Demo

## Conclusion

You should practice the different layout controls. The built in column formats are definitely the easiest, but you pay for it with a lack of customization.
