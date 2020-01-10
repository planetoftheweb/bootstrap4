<!-- .slide: data-state="title" -->

# Bootstrap 4

Layout Grid Containers

> > Speaker Notes:

One of the main reasons people use bootstrap is to be able to easily layout content that's responsive. This is the most important thing you should master in bootstrap.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-th"></i> The Grid

- Responsive 12-column
- Flexbox Based
- `container` `row` `column`

> > Speaker Notes:

1. The grid is a responsive 12-column system for creating just about any layout you can think of.
1. It uses a technology called flexbox that makes it easier to create complex layouts with minimal code.
1. In order to work with the grid, you neet to masters three simple classes.

- First is containers, which can be used with or without the grid to align content either to the screen or to center within a set of measurements
- Next is rows and columns, they work together to allow you to create the layouts. The rows prepare the columns for layout. Columns are both complex and extremely flexible, so we'll cover them in a separate video. Let's take a look at containers.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-th"></i> Grid Containers

- `container(-SIZ)`<br>
  <small style="line-height: 120%; vertical-align: text-bottom;"> <b>SIZ:</b>
  <code style="background:#5cb85c; color:white;">sm</code>
  <code style="background:#5cb85c; color:white;">md</code>
  <code style="background:#5cb85c; color:white;">lg</code>
  <code style="background:#5cb85c; color:white;">xl</code>
  <code style="background:#5cb85c; color:white;">fluid</code>
  </small><br>
- 15px padding

> > Speaker Notes:

1. There are different types of containers, you can use a container class by itself or add a series of sizing options. The regular container class makes your layout center and snaps to different sizes as your screen changes.
   If you add a fluid class, then the content will always align to the screen size. The rest of the size attributes let you determine at which point the layout will switch to a full width layout.

1) You should also note that when you use a container class, you get 15px padding on each side to make sure things like text don't align with the edges of things. So if you want something to be full width, don't use a container class on that element.

---

## Container Sizing

|                        | Extra small <small>< 576px</small> | Small <small> ≥ 576px</small> | Medium <small>≥768px</small> | Large <small>≥992px</small> | Extra large <small>≥1200px</small> |
| ---------------------- | :--------------------------------: | :---------------------------: | :--------------------------: | :-------------------------: | :--------------------------------: |
| .container             |              **100%**              |             540px             |             20px             |            960px            |               1140px               |
| .container&#8209;sm    |              **100%**              |             540px             |            720px             |            960px            |               1140px               |
| .container&#8209;md    |              **100%**              |           **100%**            |            720px             |            960px            |               1140px               |
| .container&#8209;lg    |              **100%**              |           **100%**            |           **100%**           |            960px            |               1140px               |
| .container&#8209;xl    |              **100%**              |           **100%**            |           **100%**           |          **100%**           |               1140px               |
| .container&#8209;fluid |              **100%**              |           **100%**            |           **100%**           |          **100%**           |              **100%**              |

> > Speaker Notes:

Here's more of a detailed look on how the containers work. You can see that the container and the container-sm class are identical and that the container-fluid is always responsive to the width. The other classes will essentially let you make the width responsive UNTIL a certain breakpoint and then start adhearing to the grid.
