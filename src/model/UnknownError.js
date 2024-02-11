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
import UnknownErrorError from './UnknownErrorError';

/**
 * The UnknownError model module.
 * @module model/UnknownError
 * @version 1.0.0
 */
class UnknownError {
    /**
     * Constructs a new <code>UnknownError</code>.
     * @alias module:model/UnknownError
     * @param error {module:model/UnknownErrorError} 
     */
    constructor(error) { 
        
        UnknownError.initialize(this, error);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, error) { 
        obj['error'] = error;
    }

    /**
     * Constructs a <code>UnknownError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UnknownError} obj Optional instance to populate.
     * @return {module:model/UnknownError} The populated <code>UnknownError</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UnknownError();

            if (data.hasOwnProperty('error')) {
                obj['error'] = UnknownErrorError.constructFromObject(data['error']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UnknownError</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UnknownError</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UnknownError.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `error`
        if (data['error']) { // data not null
          UnknownErrorError.validateJSON(data['error']);
        }

        return true;
    }


}

UnknownError.RequiredProperties = ["error"];

/**
 * @member {module:model/UnknownErrorError} error
 */
UnknownError.prototype['error'] = undefined;






export default UnknownError;
