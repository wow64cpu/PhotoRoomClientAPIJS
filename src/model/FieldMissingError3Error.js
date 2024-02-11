/**
 * PhotoRoom API
 * The power of PhotoRoom, automated.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: api-help@photorom.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The FieldMissingError3Error model module.
 * @module model/FieldMissingError3Error
 * @version 1.0.0
 */
class FieldMissingError3Error {
    /**
     * Constructs a new <code>FieldMissingError3Error</code>.
     * @alias module:model/FieldMissingError3Error
     * @param message {String} The message describing the error
     */
    constructor(message) { 
        
        FieldMissingError3Error.initialize(this, message);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, message) { 
        obj['message'] = message;
    }

    /**
     * Constructs a <code>FieldMissingError3Error</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FieldMissingError3Error} obj Optional instance to populate.
     * @return {module:model/FieldMissingError3Error} The populated <code>FieldMissingError3Error</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FieldMissingError3Error();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FieldMissingError3Error</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FieldMissingError3Error</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of FieldMissingError3Error.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }

        return true;
    }


}

FieldMissingError3Error.RequiredProperties = ["message"];

/**
 * The message describing the error
 * @member {String} message
 */
FieldMissingError3Error.prototype['message'] = undefined;






export default FieldMissingError3Error;

