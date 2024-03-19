/**
 * Picsart Programmable Image APIs
 * ## Introduction Picsart Programmable Image APIs is a simple HTTP interface. The results are usually the URL of the output image. To get started, first you need to [get your API Key](https://picsart.io/login). Below you can find the sample codes to get started easily. Reference docs are given with more information about available parameters that can be adjusted.  ## Sample Run ``` curl -X POST \\ 'https://api.picsart.io/tools/1.0/removebg' \\ -H 'x-picsart-api-key: APIKEYHERE' \\ -F 'output_type=cutout' \\ -F 'image_url=https://cdn140.picsart.com/13902645939997000779.jpg' ```  ## API Key To try out our services you will need to  * [create an account](https://picsart.io/accounts/login), * create an app under [My Apps](https://picsart.io/my-apps/) * and get the API key required for authorization.  You can find more details about this process in the [Quickstart](https://picsart.io/api-quickstart).  ## Input File Input images of type JPG, PNG and WEBP are supported. Input image file size is 100 MB max. References to uploaded image files will be valid and can be used within 24 hours.  ## Output Formats You can request one of three formats, JPG, PNG, WEBP, via the format parameter. The result files will be available for use for 24 hours.  ## Rate Limit Users can process up to 100 requests per month during the demo run. When the rate limit is hit, the API will return 429 code with the info:   ```      {        \"fault\": {          \"faultstring\": \"Rate limit quota violation. Quota limit  exceeded. Identifier : _default\",           \"detail\": {             \"errorcode\": \"policies.ratelimit.QuotaViolation\"           }         }      }         ```  ## Authentication Authentication should be done via the provided API Key. API Key can be sent as a header:  ```  curl 'https://api.picsart.io/tools/1.0/effects' -H 'x-picsart-api-key: APIKEY'  ```  [Developer Guidelines](https://picsart.io/terms) 
 *
 * The version of the allybind document: 2.0
 * 
 *
 * 
 */

import ApiClient from '../ApiClient';

/**
 * The RemovebgPost200ResponseData model module.
 * @module model/RemovebgPost200ResponseData
 * @version 2.0
 */
class RemovebgPost200ResponseData {
    /**
     * Constructs a new <code>RemovebgPost200ResponseData</code>.
     * @alias module:model/RemovebgPost200ResponseData
     */
    constructor() { 
        
        RemovebgPost200ResponseData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RemovebgPost200ResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RemovebgPost200ResponseData} obj Optional instance to populate.
     * @return {module:model/RemovebgPost200ResponseData} The populated <code>RemovebgPost200ResponseData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RemovebgPost200ResponseData();

            if (data.hasOwnProperty('image_id')) {
                obj['image_id'] = ApiClient.convertToType(data['image_id'], 'String');
            }
            if (data.hasOwnProperty('image_url')) {
                obj['image_url'] = ApiClient.convertToType(data['image_url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RemovebgPost200ResponseData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RemovebgPost200ResponseData</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['image_id'] && !(typeof data['image_id'] === 'string' || data['image_id'] instanceof String)) {
            throw new Error("Expected the field `image_id` to be a primitive type in the JSON string but got " + data['image_id']);
        }
        // ensure the json data is a string
        if (data['image_url'] && !(typeof data['image_url'] === 'string' || data['image_url'] instanceof String)) {
            throw new Error("Expected the field `image_url` to be a primitive type in the JSON string but got " + data['image_url']);
        }

        return true;
    }


}



/**
 * @member {String} image_id
 */
RemovebgPost200ResponseData.prototype['image_id'] = undefined;

/**
 * @member {String} image_url
 */
RemovebgPost200ResponseData.prototype['image_url'] = undefined;






export default RemovebgPost200ResponseData;

