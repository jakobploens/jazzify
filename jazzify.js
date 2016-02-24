/**
 * Jazzify adds helpers to vanilla JS and adds chaining functionality.
 *
 * @copyright Jakob Ploens 2016
 * @author    Jakob Ploens <jakob@2helden.com>
 * @version   1.3
 */


/**
 * -----------------------------------------------------------------------------
 * Object prototype functions
 * Use like object.addClass(), where object = document.querySelector('.elem')
 *
 * @since 1.0
 * -----------------------------------------------------------------------------
 */


/**
 * addClass
 *
 * @param  string class name
 * @return object
 * @since  1.0
 */
Object.prototype.addClass = function(className){
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
 * @param  string class name
 * @return object
 * @since  1.0
 */
Object.prototype.removeClass = function(className){
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
 * @param  string class name
 * @return object
 * @since  1.0
 */
Object.prototype.hasClass = function(className){
    if (this.classList){
        return this.classList.contains(className);
    } else {
        return new RegExp('(^| )' + className + '( |$)', 'gi').test(this.className);
    }
};

/**
 * toggleClass
 *
 * @param  string class name
 * @return object
 * @since  1.0
 */
Object.prototype.toggleClass = function(className){
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
 * @return object
 * @since  1.1
 */
Object.prototype.remove = function(){
    this.parentNode.removeChild(this);
};

/**
 * css
 *
 * @return object or css value
 * @since  1.1
 */
Object.prototype.css = function(name, value){
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
 * @return object or data value
 * @since  1.1
 */
Object.prototype.data = function(name, value){
    if(value && value !== ""){
        this.setAttribute('data-' + name) = value;
        return this;
    } else {
        return this.getAttribute('data-' + name);
    }
};

/**
 * attr
 *
 * @return object or attr value
 * @since  1.2
 */
Object.prototype.attr = function(name, value){
    if(value && value !== ""){
        this.setAttribute(name) = value;
        return this;
    } else {
        return this.getAttribute(name);
    }
};

/**
 * each
 * Useable on NodeLists only
 *
 * @since  1.2
 */
Object.prototype.each = function(callback, scope){
    for(var i = 0; i < this.length; i++){
        callback.call(scope, i, this[i]);
    }
};

/**
 * on
 * Attaches event on object
 *
 * @since  1.3
 */
Object.prototype.on = function(e, callback, capture){
    if(this.addEventListener){
        this.addEventListener(e, callback, capture || false);
    } else if(this.attachEvent){
        this.attachEvent('on' + e, callback);
    }
    return this;
};

/**
 * find
 * Returns nodelist or object
 *
 * @return object
 * @since  1.3
 */
Object.prototype.find = function(selector){
    var elements = this.querySelectorAll(selector);
    if(elements.length === 1) return elements[0];
    return elements;
};





/**
 * -----------------------------------------------------------------------------
 * Helper functions
 *
 * @since 1.0
 * -----------------------------------------------------------------------------
 */

/**
 * Short function to merge two objects.
 *
 * @param  object (gets overwritten)
 * @param  object (overwrites)
 * @return object (merged)
 */
var merge = function(objectA, objectB){
    var result = {};
    for(var attr in objectA){
        result[attr] = objectA[attr];
    }
    for(var attr in objectB){
        result[attr] = objectB[attr];
    }
    return result;
};

/**
 * Shortcut for document.find()
 */
var $ = function(selector){
    return document.find(selector);
};