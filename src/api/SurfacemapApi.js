/**
 * Picsart Programmable Image APIs
 * ## Introduction Picsart Programmable Image APIs is a simple HTTP interface. The results are usually the URL of the output image. To get started, first you need to [get your API Key](https://picsart.io/login). Below you can find the sample codes to get started easily. Reference docs are given with more information about available parameters that can be adjusted.  ## Sample Run ``` curl -X POST \\ 'https://api.picsart.io/tools/1.0/removebg' \\ -H 'x-picsart-api-key: APIKEYHERE' \\ -F 'output_type=cutout' \\ -F 'image_url=https://cdn140.picsart.com/13902645939997000779.jpg' ```  ## API Key To try out our services you will need to  * [create an account](https://picsart.io/accounts/login), * create an app under [My Apps](https://picsart.io/my-apps/) * and get the API key required for authorization.  You can find more details about this process in the [Quickstart](https://picsart.io/api-quickstart).  ## Input File Input images of type JPG, PNG and WEBP are supported. Input image file size is 100 MB max. References to uploaded image files will be valid and can be used within 24 hours.  ## Output Formats You can request one of three formats, JPG, PNG, WEBP, via the format parameter. The result files will be available for use for 24 hours.  ## Rate Limit Users can process up to 100 requests per month during the demo run. When the rate limit is hit, the API will return 429 code with the info:   ```      {        \"fault\": {          \"faultstring\": \"Rate limit quota violation. Quota limit  exceeded. Identifier : _default\",           \"detail\": {             \"errorcode\": \"policies.ratelimit.QuotaViolation\"           }         }      }         ```  ## Authentication Authentication should be done via the provided API Key. API Key can be sent as a header:  ```  curl 'https://api.picsart.io/tools/1.0/effects' -H 'x-picsart-api-key: APIKEY'  ```  [Developer Guidelines](https://picsart.io/terms) 
 *
 * The version of the allybind document: 2.0
 * 
 *
 * 
 */


import ApiClient from "../ApiClient";
import Error from '../model/Error';
import Model401Error from '../model/Model401Error';
import RemovebgPost200Response from '../model/RemovebgPost200Response';

/**
* Surfacemap service.
* @module api/SurfacemapApi
* @version 2.0
*/
export default class SurfacemapApi {

    /**
    * Constructs a new SurfacemapApi. 
    * @alias module:api/SurfacemapApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the surfacemapPost operation.
     * @callback module:api/SurfacemapApi~surfacemapPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RemovebgPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Surfacemap Image
     * **Service Description:**   With the *surface map* tool you can \"print\" a sticker over an (target) image.   Using a mask, the Surfacemap tool maps the sticker pixels using the texture and curves on the target image   thus ultimately giving a live-print-preview effect.  **Limitations:** We recommend following these rules when providing image, mask and sticker   * Image, mask and sticker - providing all three is required,   * The size of the mask and the image should be the same,   * The size of the sticker should match the \"masked\" area's size or proportions.  **Examples:** Examples of where the Surfacemap can be used include:   * T-shirt print preview   * Mug print preview   * Pillow print preview  **Source Images:**   You can source the image by providing a file, a URL to an online image, or a reference_id from a previously uploaded image.   This also applies to the mask and the sticker provided at the input   **Authorization:**     Requires an API key to be provided in the **X-Picsart-API-Key** request header. 
     * @param {Object} opts Optional parameters
     * @param {File} [image] Source image file (binary). (If this parameter is present, the other image source parameters must be empty.)
     * @param {String} [imageUrl] Source image URL. (If this parameter is present, the other image source parameters must be empty.)
     * @param {String} [imageId] Source image ID of an image previously uploaded to Picsart or result image ID from a different API. (If this parameter is present, the other image source parameters must be empty.)
     * @param {File} [mask] Source mask file (binary). (If this parameter is present, the other mask source parameters must be empty.)
     * @param {String} [maskUrl] Source mask URL. (If this parameter is present, the other mask source parameters must be empty.)
     * @param {String} [maskId] Source mask ID of an mask previously uploaded to Picsart or result mask ID from a different API. (If this parameter is present, the other mask source parameters must be empty.)
     * @param {File} [sticker] Source sticker file (binary). (If this parameter is present, the other sticker source parameters must be empty.)
     * @param {String} [stickerUrl] Source sticker URL. (If this parameter is present, the other sticker source parameters must be empty.)
     * @param {String} [stickerId] Source sticker ID of an sticker previously uploaded to Picsart or result sticker ID from a different API. (If this parameter is present, the other sticker source parameters must be empty.)
     * @param {module:model/String} [format = 'JPG')] Optionally select one of the image formats (JPG is chosen if left blank). Options are as follows:   * JPG   * PNG   * WEBP 
     * @param {module:api/SurfacemapApi~surfacemapPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RemovebgPost200Response}
     */
    surfacemapPost(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'image': opts['image'],
        'image_url': opts['imageUrl'],
        'image_id': opts['imageId'],
        'mask': opts['mask'],
        'mask_url': opts['maskUrl'],
        'mask_id': opts['maskId'],
        'sticker': opts['sticker'],
        'sticker_url': opts['stickerUrl'],
        'sticker_id': opts['stickerId'],
        'format': opts['format']
      };

      let authNames = ['apiKey'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = RemovebgPost200Response;
      return this.apiClient.callApi(
        '/surfacemap', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
