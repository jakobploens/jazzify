# Jazzify

Jazzify is a collection of often used little helper functions. Like jQuery in easy and lightweight.

### Moral License / Support me

You can buy a moral license and support me with buying me a cup of coffee via [PayPal](https://www.paypal.me/jakobploens/3,50).

### Functions

```javascript
var object = document.querySelector('.selector');

// Returns either an object or the NodeList. Shortcut for document.find(selector)
var object = $('.selector');

// Find element(s) in given scope
element.find('.selector');

// Add className to object
element.addClass('className');

// Remove className from object
element.removeClass('className');

// Returns true if object has className
element.hasClass('className');

// Toggle a class of object
element.toggleClass('className');

// Remove object from DOM
element.remove();

// Prepend Child
element.prependChild(child);

// Add CSS to object or get style
element.css('style', 'value');

// Get or set data
element.data('name', 'value');

// Get or set attribute
element.attr('name', 'value');

// Removes attribute
element.removeAttr('name');

// Attach event handlers
element.on('event', callback);

// Loop through a NodeList with multiple elements
elements.each(function(index, element){
    // do something. element is the current element.
});

// Attach event handlers
elements.on('event', callback);

// Get first of NodeList
elements.first();

// Get last of NodeList
elements.last();

// Merge two objects
object.mergeWith(object);
```