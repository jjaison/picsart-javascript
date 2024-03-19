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
* Adjust service.
* @module api/AdjustApi
* @version 2.0
*/
export default class AdjustApi {

    /**
    * Constructs a new AdjustApi. 
    * @alias module:api/AdjustApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the adjustPost operation.
     * @callback module:api/AdjustApi~adjustPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RemovebgPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adjust
     * **Service Description:**   The *adjust* service applies adjustments to an input image. There are 11 different adjustments in all available. The adjust service can be used with all photo types.  **Limitations:** Supported source image formats are JPG, PNG, TIFF and WEBP.  **Options:** Adjustment options include the following:   * Adjust brightness and/or contrast   * Adjust clarity and/or saturation   * Adjust hue and/or shadows   * Adjust highlights and/or temperature   * Adjust noise or sharpen the image  **Rules:**   * At least one adjustment setting must be chosen   * If you choose an adjustment setting value out of the allowed range, the default value of 0 is used instead.  **Source Image:**   If you plan to apply adjustments multiple times to an image, we recommend you first upload the source image using the *Upload* method and then use the reference image ID. Otherwise, you can source the image by providing a file or a URL to an online image.  **Authorization:**     Requires an API key to be provided in the **X-Picsart-API-Key** request header. 
     * @param {Object} opts Optional parameters
     * @param {File} [image] Source image file (binary). (If this parameter is present, the other image source parameters must be empty.)
     * @param {String} [imageUrl] Source image URL. (If this parameter is present, the other image source parameters must be empty.)
     * @param {String} [imageId] Source image ID of an image previously uploaded to Picsart or result image ID from a different API. (If this parameter is present, the other image source parameters must be empty.)
     * @param {Number} [brightness = 0)] Enter an integer value from -100 to +100.
     * @param {Number} [contrast = 0)] Enter an integer value from -100 to +100.
     * @param {Number} [clarity = 0)] Enter an integer value from -100 to +100.
     * @param {Number} [saturation = 0)] Enter an integer value from -100 to +100.
     * @param {Number} [hue = 0)] Enter an integer value from -100 to +100.
     * @param {Number} [shadows = 0)] Enter an integer value from -100 to +100.
     * @param {Number} [highlights = 0)] Enter an integer value from -100 to +100.
     * @param {Number} [temperature = 0)] Enter an integer value from -100 to +100.
     * @param {Number} [sharpen = 0)] Enter an integer value from 0 to +100.
     * @param {Number} [noise = 0)] Enter an integer value from 0 to +100.
     * @param {Number} [vignette = 0)] Enter an integer value from 0 to +100.
     * @param {module:model/String} [format = 'JPG')] Optionally select one of the image formats (JPG is default). Options are as follows:   * JPG   * PNG   * WEBP 
     * @param {module:api/AdjustApi~adjustPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RemovebgPost200Response}
     */
    adjustPost(opts, callback) {
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
        'brightness': opts['brightness'],
        'contrast': opts['contrast'],
        'clarity': opts['clarity'],
        'saturation': opts['saturation'],
        'hue': opts['hue'],
        'shadows': opts['shadows'],
        'highlights': opts['highlights'],
        'temperature': opts['temperature'],
        'sharpen': opts['sharpen'],
        'noise': opts['noise'],
        'vignette': opts['vignette'],
        'format': opts['format']
      };

      let authNames = ['apiKey'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = RemovebgPost200Response;
      return this.apiClient.callApi(
        '/adjust', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the editPost operation.
     * @callback module:api/AdjustApi~editPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RemovebgPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Basic Editing
     * **Service Description:**   The *Edit* service applies basic image editing to an input image.   The basic editing operations are resize, crop, flip, rotate and perspective manipulation.   **Limitations:** Supported image formats are JPG, PNG, TIFF and WEBP. The resultant image cannot be bigger than the original source image. To get greater resolution, see the Upscale services.   **Options:**    * Define the crop dimensions: width and height    * Define the area of the cutout      * If the area is not defined, the cut out will be done with center-crop.    * Rotate the image      * By degrees (+180 to -180)      * The original image, after rotation, may be zoomed to fill in the area    * Flip the image: horizontally or vertically    * Choose the perspective view of the image: horizontal or vertical   **Rules:**    * If you choose an Edit setting value out of the allowed range, the default value of the field will be used instead (see documentation below).   **Source Image:**    If you plan to apply a mask to an image multiple times, we recommend you first upload the source image using the *Upload* method and then use the reference image ID. Otherwise, you can source the image by providing a file or a URL to an online image.   **Authorization:**      Requires an API key to be provided in the **X-Picsart-API-Key** request header. 
     * @param {Object} opts Optional parameters
     * @param {File} [image] Source image file (binary). (If this parameter is present, the other image source parameters must be empty.)
     * @param {String} [imageUrl] Source image URL. (If this parameter is present, the other image source parameters must be empty.)
     * @param {String} [imageId] Source image ID of an image previously uploaded to Picsart or result image ID from a different API. (If this parameter is present, the other image source parameters must be empty.)
     * @param {module:model/String} [format = 'JPG')] Optionally select one of the image formats (JPG is chosen if left blank). Options are as follows:   * JPG   * PNG   * WEBP 
     * @param {module:model/String} [mode] For *crop* mode, the outcome image will be center-cropped with the given size (width, height). For the *resize* mode, the smallest size will be fitted to preserve the original proportion of the image. When the outcome size is not provided with width and height, no cropping or resizing will be applied (see alternative options such as rotate, flip and perspective).
     * @param {Number} [size] When defined, this parameter overrides and applies the value for both width and height.
     * @param {Number} [width] Width of outcome image. If the provided width is larger than the original width of the file, the original size of the image will be selected. When crop size is defined, but the x,y starting position is not provided, the crop will be a center-crop (i.e., equally cutting from each side).
     * @param {Number} [height] Height of outcome image. If the provided height is larger than the original width of the file, the original size of the image will be selected. When crop size is defined, but the x,y starting position is not provided, the crop will be a center-crop (i.e, equally cutting from each side).
     * @param {module:model/String} [flip] Choose a way to flip the image.
     * @param {Number} [rotate = 0)] Enter a float value to rotate the image from -180 to +180. Default is 0.
     * @param {Number} [perspectiveHorizontal = 0)] The horizontal perspective after edits.
     * @param {Number} [perspectiveVertical = 0)] The vertical perspective after edits.
     * @param {Number} [quality = 90)] This refers to the level of accuracy of the image processing. The greater the quality (i.e., the larger the number), the larger the image file size. The default value is 90, which is a good compromise between quality and file size.
     * @param {module:api/AdjustApi~editPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RemovebgPost200Response}
     */
    editPost(opts, callback) {
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
        'format': opts['format'],
        'mode': opts['mode'],
        'size': opts['size'],
        'width': opts['width'],
        'height': opts['height'],
        'flip': opts['flip'],
        'rotate': opts['rotate'],
        'perspective_horizontal': opts['perspectiveHorizontal'],
        'perspective_vertical': opts['perspectiveVertical'],
        'quality': opts['quality']
      };

      let authNames = ['apiKey'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = RemovebgPost200Response;
      return this.apiClient.callApi(
        '/edit', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
