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
* RemoveBackground service.
* @module api/RemoveBackgroundApi
* @version 2.0
*/
export default class RemoveBackgroundApi {

    /**
    * Constructs a new RemoveBackgroundApi. 
    * @alias module:api/RemoveBackgroundApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the removebgPost operation.
     * @callback module:api/RemoveBackgroundApi~removebgPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RemovebgPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove & Change Background
     * Discover the magic of seamless background removal with our removebg service, powered by cutting-edge AI technology. Our sophisticated algorithm effortlessly identifies and isolates the foreground,  ensuring every detail from the delicate intricacies of jewelry to the finest strands of hair is captured with unparalleled precision.  Designed to excel across a vast array of use cases, our service guarantees immaculate cutouts,  whether for professional product photos, dynamic campaign graphics, or personal images meant for creative exploration.  Experience flawless edges and exceptional detail preservation every time, elevating your images beyond the ordinary.    **Limitations:**    The recommended composition of an Image, in order to be optimally processed using the \"removebg\" service, is:   * less busy background   * high contrast (background/foreground)   * background/foreground is distinguishable by naked eye        The foreground should be visually clear, high contrast with relatively sharp edges. The foreground should also be comparably big in the photo. Supported source image formats are JPG, PNG, TIFF and WEBP.   **Examples:**    Examples of where the remove background service can be utilized include the following:   * Animals   * Products   * Apparel   * Person   * Cars   * Furniture  **Options:**   * You have two options for removing the background, either \"cutout\" or \"mask\"   * You can control background color   * You can control background blur   * You can control background height and width   * You have two scaling options, either \"fit\" or \"fill\"  **Source Image:**     If you plan to remove the background several times using different parameters from the list below, we recommend you first upload the source image using the *Upload* method and then use the reference image ID. Otherwise, you can source the image by providing a file or a URL to an online image.  **Authorization:**       Start transforming your images today! Just remember, accessing our powerful API requires an API key.    Make sure it's included in your request header **X-Picsart-API-Key** for smooth authorization.    This key unlocks the full potential of our remove background service,    ensuring you can seamlessly integrate these capabilities into your own platform.  Discover the possibilities with Picsart and transform the way you work with images. Whether it's for a product for sale, graphical materials for your best campaign, or just personal images for fun editing, you'll get clear edges with awesome detail preservation with our remove background service. 
     * @param {Object} opts Optional parameters
     * @param {File} [image] Source image file (binary). (If this parameter is present, the other image source parameters must be empty.)
     * @param {String} [imageUrl] Source image URL. (If this parameter is present, the other image source parameters must be empty.)
     * @param {String} [imageId] Source image ID of an image previously uploaded to Picsart or result image ID from a different API. (If this parameter is present, the other image source parameters must be empty.)
     * @param {module:model/String} [outputType = 'cutout')] Select one of the two output options. If you submit a photo of a person, **cutout** returns the person as a sticker while **mask** returns a mask photo of the person. 
     * @param {File} [bgImage] Source image file (binary). (If this parameter is present, the other image source parameters must be empty.) This only has an effect when output=cutout.
     * @param {String} [bgImageUrl] Source image URL. (If this parameter is present, the other image source parameters must be empty.) If this has a value, the output value is dismissed.
     * @param {String} [bgImageId] Source image ID of an image previously uploaded to Picsart or result image ID from a different API. (If this parameter is present, the other image source parameters must be empty.) See /upload method. If this has a value, the output value is dismissed.
     * @param {String} [bgColor] Can be a hexcolor code (e.g., #82d5fa, #fff) or a color name (e.g., blue). For semi-transparency, 4-/8-digit hexcodes are also supported (e.g., #18d4ff87). (If this parameter is present, the other bg_ parameters must be empty). 
     * @param {Number} [bgBlur = 0)] Enter an integer value from 0 to +100.
     * @param {Number} [bgWidth] Size, in pixels, for the width. If left blank, the background is left at its original width. 
     * @param {Number} [bgHeight] Size, in pixels, for the height. If left blank, the background is left at its original height. 
     * @param {module:model/String} [scale = 'fit')] Fit is where the longer side (width/height) fits the background. Fill is where the shorter side fits the background. Fit is the default. 
     * @param {module:model/String} [format = 'PNG')] Optionally select one of the image formats (PNG is chosen if left blank). Options are as follows:   * JPG   * PNG   * WEBP 
     * @param {module:api/RemoveBackgroundApi~removebgPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RemovebgPost200Response}
     */
    removebgPost(opts, callback) {
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
        'output_type': opts['outputType'],
        'bg_image': opts['bgImage'],
        'bg_image_url': opts['bgImageUrl'],
        'bg_image_id': opts['bgImageId'],
        'bg_color': opts['bgColor'],
        'bg_blur': opts['bgBlur'],
        'bg_width': opts['bgWidth'],
        'bg_height': opts['bgHeight'],
        'scale': opts['scale'],
        'format': opts['format']
      };

      let authNames = ['apiKey'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = RemovebgPost200Response;
      return this.apiClient.callApi(
        '/removebg', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
