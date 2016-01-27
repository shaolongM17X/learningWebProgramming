## A way to arrange navigation bar
##### Idea from mdl package by Google
[Template from Google](http://getmdl.io/templates/dashboard/index.html)
![Screenshot of Google mdl template's nav bar](nav-bar-example.png?raw=true "Optional Title")

1. Give the outside wrapper (like header) a **flex** property
2. If you want to center the items, use **align-items: center**
3. Then just put whatever you want on the left
4. When you want to put something on the right, here comes the magic:
5. put a div class="spacer", and give it a property **flex-grow = 1** while keep other items in the row of **flex-grow=0**
6. Then you can put whatever you want on the right hand side

##踩了个坑
### More specific rules have higher priority over general rules in CSS
