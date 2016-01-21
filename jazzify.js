/**
 * Jazzify adds helpers to vanilla JS and adds chaining functionality.
 *
 * @copyright Jakob Ploens 2016
 * @author    Jakob Ploens <jakob@2helden.com>
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
        this.classList.contains(className);
    } else {
        new RegExp('(^| )' + className + '( |$)', 'gi').test(this.className);
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
};

/**
 * Short function to merge two objects.
 *
 * @param  object (gets overwritten)
 * @param  object (overwrites)
 * @return object (merged)
 */
function merge(objectA, objectB){
    var result = {};
    for(var attr in objectA){
        result[attr] = objectA[attr];
    }
    for(var attr in objectB){
        result[attr] = objectB[attr];
    }
    return result;
}