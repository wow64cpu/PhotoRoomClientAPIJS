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
import EditImageBadRequestError from './EditImageBadRequestError';

/**
 * The EditImageBadRequest model module.
 * @module model/EditImageBadRequest
 * @version 1.0.0
 */
class EditImageBadRequest {
    /**
     * Constructs a new <code>EditImageBadRequest</code>.
     * @alias module:model/EditImageBadRequest
     * @param error {module:model/EditImageBadRequestError} 
     */
    constructor(error) { 
        
        EditImageBadRequest.initialize(this, error);
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
     * Constructs a <code>EditImageBadRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EditImageBadRequest} obj Optional instance to populate.
     * @return {module:model/EditImageBadRequest} The populated <code>EditImageBadRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EditImageBadRequest();

            if (data.hasOwnProperty('error')) {
                obj['error'] = EditImageBadRequestError.constructFromObject(data['error']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EditImageBadRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EditImageBadRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EditImageBadRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `error`
        if (data['error']) { // data not null
          EditImageBadRequestError.validateJSON(data['error']);
        }

        return true;
    }


}

EditImageBadRequest.RequiredProperties = ["error"];

/**
 * @member {module:model/EditImageBadRequestError} error
 */
EditImageBadRequest.prototype['error'] = undefined;






export default EditImageBadRequest;

