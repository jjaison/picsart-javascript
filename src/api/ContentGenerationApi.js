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
* ContentGeneration service.
* @module api/ContentGenerationApi
* @version 2.0
*/
export default class ContentGenerationApi {

    /**
    * Constructs a new ContentGenerationApi. 
    * @alias module:api/ContentGenerationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the backgroundTexturePost operation.
     * @callback module:api/ContentGenerationApi~backgroundTexturePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RemovebgPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Texture Generator
     * **Service Description:**   The *texture generator* tool generates a background texture pattern for the input image. You can create unlimited textures from the same texture source image.  **Limitations:** Works best with colorful source images. Supported source image formats are JPG, PNG, TIFF and WEBP.  **Examples:**      Examples of where the texture generator tool can be used include the following:   * Backgrounds   * Patterns   * Tiles  **Options:**   * You can control width and height of the output image   * You can control the x and y offset, from the center, of the pattern   * You can choose from five different patterns   * You can scale and/or rotate the pattern  **Source Image:**   If you want to apply multiple textures to the same image, we recommend you first upload the source image using the *Upload* method and then use the reference image ID. Otherwise, you can source the image by providing a file or a URL to an online image.  **Authorization:**     Requires an API key to be provided in the **X-Picsart-API-Key** request header. 
     * @param {Object} opts Optional parameters
     * @param {File} [image] Source image file (binary). (If this parameter is present, the other image source parameters must be empty.)
     * @param {String} [imageUrl] Source image URL. (If this parameter is present, the other image source parameters must be empty.)
     * @param {String} [imageId] Source image ID of an image previously uploaded to Picsart or result image ID from a different API. (If this parameter is present, the other image source parameters must be empty.)
     * @param {module:model/String} [format = 'JPG')] Optionally select one of the image formats (JPG is chosen if left blank). Options are as follows:   * JPG   * PNG   * WEBP 
     * @param {Number} [width = 1024)] Specify the width of the output image in pixels. The default is 1024 and the maximum acceptable value is 8000.
     * @param {Number} [height = 1024)] Specify the width of the output image in pixels. The default is 1024 and the maximum acceptable value is 8000.
     * @param {Number} [offsetX = 0)] Specify the pattern location, with x(width). Calculation starts from the center of the image. Default is 0.
     * @param {Number} [offsetY = 0)] Specify the pattern location  with y(height). Calculation starts from the center of the image. Default is 0.
     * @param {module:model/String} [pattern = 'hex')] Choose a pattern for the background texture. Default is hex.
     * @param {Number} [rotate = 0)] Enter an integer value to rotate the texture pattern from -180 to +180. Default is 0.
     * @param {Number} [scale = 1)] Enter a floating point number between 0.5 - 10.0 to scale the background texture. Default is 1.0.
     * @param {module:api/ContentGenerationApi~backgroundTexturePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RemovebgPost200Response}
     */
    backgroundTexturePost(opts, callback) {
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
        'width': opts['width'],
        'height': opts['height'],
        'offset_x': opts['offsetX'],
        'offset_y': opts['offsetY'],
        'pattern': opts['pattern'],
        'rotate': opts['rotate'],
        'scale': opts['scale']
      };

      let authNames = ['apiKey'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = RemovebgPost200Response;
      return this.apiClient.callApi(
        '/background/texture', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
