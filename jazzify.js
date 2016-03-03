/**
 * Jazzify adds cross browser helpers and chaining functionality to vanilla JS.
 *
 * @copyright Jakob Ploens 2016
 * @author    Jakob Ploens <jakob@2helden.com>
 * @version   1.4
 */


/**
 * -----------------------------------------------------------------------------
 * Element prototype functions
 *
 * @since 1.0
 * -----------------------------------------------------------------------------
 */

/**
 * find
 * Returns nodelist or object
 *
 * @param String Selector
 * @param Boolean Force return of NodeList
 * @return Element or NodeList
 * @since  1.3
 */
Element.prototype.find = function(selector, nodelist){
    var elements = this.querySelectorAll(selector);
    if(elements.length === 1 && !nodelist) return elements[0];
    return elements;
};

/**
 * addClass
 *
 * @param  String Class name
 * @return Element
 * @since  1.0
 */
Element.prototype.addClass = function(className){
    if(this.classList){
        this.classList.add(className);
    } else {
        this.className += ' ' + className;
    }

    return this;
};

/**
 * removeClass
 *
 * @param  String Class name
 * @return Element
 * @since  1.0
 */
Element.prototype.removeClass = function(className){
    if (this.classList){
        this.classList.remove(className);
    } else {
        this.className = this.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }

    return this;
};

/**
 * hasClass
 *
 * @param  String Class name
 * @return Boolean
 * @since  1.0
 */
Element.prototype.hasClass = function(className){
    if (this.classList){
        return this.classList.contains(className);
    } else {
        return new RegExp('(^| )' + className + '( |$)', 'gi').test(this.className);
    }
};

/**
 * toggleClass
 *
 * @param  String Class name
 * @return Element
 * @since  1.0
 */
Element.prototype.toggleClass = function(className){
    if(this.classList){
        this.classList.toggle(className);

    } else {
        var classes = thus.className.split(' ');
        var existingIndex = classes.indexOf(className);

        if(existingIndex >= 0){
            classes.splice(existingIndex, 1);
        } else {
            classes.push(className);
        }
        this.className = classes.join(' ');
    }

    return this;
};

/**
 * remove
 *
 * @since  1.1
 */
Element.prototype.remove = function(){
    this.parentNode.removeChild(this);
};

/**
 * prependChild
 *
 * @param  Element Child
 * @return Element
 * @since  1.4
 */
Element.prototype.prependChild = function(child){
    this.insertBefore(child, this.firstChild);
    return child;
};

/**
 * css
 *
 * @param String Name/Attribute
 * @param String Value
 * @return Element or String
 * @since  1.1
 */
Element.prototype.css = function(name, value){
    if(value && value !== ""){
        this.style[name] = value;
        return this;
    } else {
        return this.style[name];
    }
};

/**
 * data
 *
 * @param String Name/Attribute
 * @param String Value
 * @return Element or String
 * @since  1.1
 */
Element.prototype.data = function(name, value){
    if(value && value !== ""){
        this.setAttribute('data-' + name, value);
        return this;
    } else {
        return this.getAttribute('data-' + name);
    }
};

/**
 * attr
 *
 * @param String Name/Attribute
 * @param String Value
 * @return Element or String
 * @since  1.2
 */
Element.prototype.attr = function(name, value){
    if(value && value !== ""){
        this.setAttribute(name, value);
        return this;
    } else {
        return this.getAttribute(name);
    }
};

/**
 * removeAttr
 *
 * @return Element
 * @since  1.4
 */
Element.prototype.removeAttr = function(name){
    this.removeAttribute(name);
    return this;
};

/**
 * on
 * Attaches event on object
 *
 * @param String Event name
 * @param Function Callback function
 * @param Boolean Capture
 * @return Element
 * @since  1.3
 */
Element.prototype.on = function(e, callback, capture){
    if(this.addEventListener){
        this.addEventListener(e, callback, capture || false);
    } else if(this.attachEvent){
        this.attachEvent('on' + e, callback);
    }
    return this;
};




/**
 * -----------------------------------------------------------------------------
 * NodeList prototype functions
 *
 * @since 1.2
 * -----------------------------------------------------------------------------
 */

/**
 * each
 *
 * @param Function Callback
 * @param String Function's scope
 * @return NodeList
 * @since  1.2
 */
NodeList.prototype.each = function(callback, scope){
    for(var i = 0; i < this.length; i++){
        callback.call(scope, i, this[i]);
    }
    return this;
};

/**
 * on
 * Adds on() events on each element from Nodelist
 *
 * @param String Event name
 * @param Function Callback function
 * @param Boolean Capture
 * @return NodeList
 * @since  1.4
 */
NodeList.prototype.on = function(e, callback, capture){
    this.each(function(i, el){
        el.on(e, callback, capture);
    });
    return this;
};

/**
 * first
 * Returns first of nodelist
 *
 * @return Element
 * @since  1.4
 */
NodeList.prototype.first = function(){
    return this[0];
};

/**
 * last
 * Returns last of nodelist
 *
 * @return Element
 * @since  1.4
 */
NodeList.prototype.last = function(){
    return this[this.length - 1];
};



/**
 * -----------------------------------------------------------------------------
 * Object functions
 *
 * @since 1.0
 * -----------------------------------------------------------------------------
 */

/**
 * Merge Objects
 * Merges object into this.
 *
 * @param  Object Object that will be merged into this
 * @return Object Result object
 * @since  1.0
 */
Object.prototype.mergeWith = function(object){
    for(var attr in object){
        this[attr] = object[attr];
    }
    return this;
};





/**
 * -----------------------------------------------------------------------------
 * Helper functions
 *
 * @since 1.0
 * -----------------------------------------------------------------------------
 */

/**
 * Shortcut for document.find()
 */
window.$ = function(selector){
    return document.find(selector);
};