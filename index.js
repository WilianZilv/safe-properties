/**
 * Get a deeply nested property without throwing error if it doesn't exists
 * @param {Object} target Object
 * @param {String} prop Ex: 'address.street'
 * @param {any} defaultValue
 */
module.exports.get = (target, prop, defaultValue = undefined) =>
    prop.split(".").reduce((item, key) => {
        if (item !== undefined) return item[key];
        return defaultValue;
    }, target);
/**
 * Call a deeply nested function without throwing error if it doesn't exists
 * @param {Object} target Object
 * @param {String} prop Ex: 'my.cool.function'
 * @param {any} args Pass the function parameters
 */
module.exports.call = (target, prop, ...args) => {
    const func = this.get(target, prop);
    if (func) return func(...args);
};
