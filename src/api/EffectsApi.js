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
import EffectsGet200Response from '../model/EffectsGet200Response';
import Error from '../model/Error';
import Model401Error from '../model/Model401Error';
import RemovebgPost200Response from '../model/RemovebgPost200Response';

/**
* Effects service.
* @module api/EffectsApi
* @version 2.0
*/
export default class EffectsApi {

    /**
    * Constructs a new EffectsApi. 
    * @alias module:api/EffectsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the effectsGet operation.
     * @callback module:api/EffectsApi~effectsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EffectsGet200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Effects
     * **Service Description:**   This service retrieves a list of supported effects.  **Authorization:**     Requires an API key to be provided in the **X-Picsart-API-Key** request header. 
     * @param {module:api/EffectsApi~effectsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EffectsGet200Response}
     */
    effectsGet(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = EffectsGet200Response;
      return this.apiClient.callApi(
        '/effects', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the effectsPost operation.
     * @callback module:api/EffectsApi~effectsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RemovebgPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * **Service Description:**   With the *effects* service you can apply up to 24 different effects to an image.  **Limitations:** Works best with color-rich photos. Supported source image formats are JPG, PNG, TIFF and WEBP.   **Examples:**   Examples of where effects can be used include the following:   * Works with all photo types   * Makes any photo stand out   * Helps with branding   * Great with look up tables (LUT)  **Options:** Choose the effect to apply  **Source Image:**   If you plan to apply effects to an image several times, we recommend you first upload the source image using the *Upload* method and then use the reference image ID. Otherwise, you can source the image by providing a file or a URL to an online image.  **Authorization:**     Requires an API key to be provided in the **X-Picsart-API-Key** request header. 
     * @param {Object} opts Optional parameters
     * @param {File} [image] Source image file (binary). (If this parameter is present, the other image source parameters must be empty.)
     * @param {String} [imageUrl] Source image URL. (If this parameter is present, the other image source parameters must be empty.)
     * @param {String} [imageId] Source image ID of an image previously uploaded to Picsart or result image ID from a different API. (If this parameter is present, the other image source parameters must be empty.)
     * @param {module:model/String} [effectName] Choose an effect from the dropdown menu. The list of effects are as follows   * apr1   * apr2   * apr3   * brnz1   * brnz2   * brnz3   * cyber1   * cyber2   * dodger   * food1   * food2   * icy1   * icy2   * icy3   * mnch1   * mnch2   * mnch3   * noise   * nature1   * nature2   * ntrl1   * ntrl2   * saturation   * sft1   * sft2   * sft3   * sft4   * shadow1   * shadow2   * sketcher1   * sketcher2   * tl1   * tl2   * urban1   * urban2   * water1   * water2   * pixelize   * popart 
     * @param {module:model/String} [format = 'JPG')] Optionally select one of the output image formats (JPG is chosen if left blank). Options are as follows:   * JPG   * PNG   * WEBP 
     * @param {module:api/EffectsApi~effectsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RemovebgPost200Response}
     */
    effectsPost(opts, callback) {
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
        'effect_name': opts['effectName'],
        'format': opts['format']
      };

      let authNames = ['apiKey'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = RemovebgPost200Response;
      return this.apiClient.callApi(
        '/effects', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the effectsPreviewsPost operation.
     * @callback module:api/EffectsApi~effectsPreviewsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RemovebgPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Effect Previews
     * **Service Description:**   The *effects previews* service applies an effect to a given input image and returns a preview (i.e., thumbnail) of the effect.  **Limitations:** Can apply up to 10 effects to an image in one call. To minimize the networking and processing loads, use the same input image size as the desired preview size. Supported source image formats are JPG, PNG, TIFF and WEBP.   **Minimums/Maximums:**   * Maximum height or width of preview image is 240px  **Options:**   * You can set the size of the preview image   * There are 24 different effects to choose from  **Source Image:**   If you want to preview more than 10 effects, we recommend you first upload the source image using the *Upload* method and then use the reference image ID. Otherwise, you can source the image by providing a file or a URL to an online image.  **Authorization:**     Requires an API key to be provided in the **X-Picsart-API-Key** request header. 
     * @param {Object} opts Optional parameters
     * @param {File} [image] Source image file (binary). (If this parameter is present, the other image source parameters must be empty.)
     * @param {String} [imageUrl] Source image URL. (If this parameter is present, the other image source parameters must be empty.)
     * @param {String} [imageId] Source image ID of an image previously uploaded to Picsart or result image ID from a different API. (If this parameter is present, the other image source parameters must be empty.)
     * @param {Array.<module:model/String>} [effectNames] Select up to 10 effects to preview by holding down the Ctrl key. The list of effects are as follows:   * icy1   * icy2   * icy3   * brnz1   * brnz2   * brnz3   * mnch1   * mnch2   * mnch3   * noise   * saturation   * cyber1   * cyber2   * food1   * food2   * nature1   * nature2   * urban1   * urban2   * water1   * water2   * shadow1   * shadow2   * sketcher1   * sketcher2 
     * @param {Number} [previewSize] Enter the width of the preview image. The max value is 240px. The default is 120px.
     * @param {module:model/String} [format = 'JPG')] Optionally select one of the image formats (JPG is default). Options are as follows:   * JPG   * PNG   * WEBP 
     * @param {module:api/EffectsApi~effectsPreviewsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RemovebgPost200Response}
     */
    effectsPreviewsPost(opts, callback) {
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
        'effect_names': this.apiClient.buildCollectionParam(opts['effectNames'], 'csv'),
        'preview_size': opts['previewSize'],
        'format': opts['format']
      };

      let authNames = ['apiKey'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = RemovebgPost200Response;
      return this.apiClient.callApi(
        '/effects/previews', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the masksPost operation.
     * @callback module:api/EffectsApi~masksPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RemovebgPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * **Service Description:**   The *masks* service applies a mask to an image.  **Limitations:** Supported source image formats are JPG, PNG, TIFF and WEBP.   **Options:** Each mask application offers five options:  * Blend: determines the appearance of the mask (7 choices)  * Mask type: determines the mask type (11 choices)  * Opacity: determines the opaqueness of the mask (0 to 100)  * Hue: determines the hue of the mask (-180 to 180)  * Mask flip: gives options to flip the mask (5 choices)  **Source Image:**   If you plan to apply a mask to an image multiple times, we recommend you first upload the source image using the *Upload* method and then use the reference image ID. Otherwise, you can source the image by providing a file or a URL to an online image.  **Authorization:**     Requires an API key to be provided in the **X-Picsart-API-Key** request header. 
     * @param {module:model/String} mask Select one of the mask types from the dropdown list. The options are as follows:   * lace1   * lace2   * lace3   * lace4   * shdw2   * shdw17   * rpl3   * rpl5   * prsm3   * prsm9   * prsm10 
     * @param {Object} opts Optional parameters
     * @param {File} [image] Source image file (binary). (If this parameter is present, the other image source parameters must be empty.)
     * @param {String} [imageUrl] Source image URL. (If this parameter is present, the other image source parameters must be empty.)
     * @param {String} [imageId] Source image ID of an image previously uploaded to Picsart or result image ID from a different API. (If this parameter is present, the other image source parameters must be empty.)
     * @param {module:model/String} [format = 'JPG')] Optionally select one of the image formats (JPG is default). Options are as follows:   * JPG   * PNG   * WEBP 
     * @param {module:model/String} [blend = 'screen')] Select one of the appearance types from the dropdown list (screen is chosen if left blank). The options are as follows:   * normal   * screen   * overlay   * multiply   * darken   * lighten   * add 
     * @param {Number} [opacity = 100)] Enter an integer value from 0 to +100. The larger the number, the greater the opacity. Default is 100.
     * @param {Number} [hue = 0)] Enter an integer value from -180 to +180. Default is 0.
     * @param {module:model/String} [maskFlip] Choose a mask flip option. The choices are as follows.   * left   * right   * mirror horizontal   * mirror vertical   * turnaround 
     * @param {module:api/EffectsApi~masksPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RemovebgPost200Response}
     */
    masksPost(mask, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'mask' is set
      if (mask === undefined || mask === null) {
        throw new Error("Missing the required parameter 'mask' when calling masksPost");
      }

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
        'blend': opts['blend'],
        'mask': mask,
        'opacity': opts['opacity'],
        'hue': opts['hue'],
        'mask_flip': opts['maskFlip']
      };

      let authNames = ['apiKey'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = RemovebgPost200Response;
      return this.apiClient.callApi(
        '/masks', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the masksPreviewsPost operation.
     * @callback module:api/EffectsApi~masksPreviewsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RemovebgPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * **Description:**   The *masks previews* service applies mask effects to a given input image and returns a preview (i.e., thumbnail) of the effect.  **Limitations:** To minimize the networking and processing loads, use the same input image size as the desired preview size. Supported source image formats are JPG, PNG, TIFF and WEBP.   **Minimums/Maximums:**   * Maximum height or width of preview image is 240px  **Options:**   * You can set the size of the preview image   * You can choose blend which determines the appearance of the mask   * You can choose mask type   * You can set the mask's opacity   * You can set the mask's hue   * You can choose a mask flip  **Source Image:**   If you want to preview multiple effects of the same image, we recommend you first upload the source image using the *Upload* method and then use the reference image ID. Otherwise, you can source the image by providing a file or a URL to an online image.  **Authorization:**     Requires an API key to be provided in the **X-Picsart-API-Key** request header. 
     * @param {Array.<module:model/String>} mask Select up to 10 mask types from the list by holding down Ctrl. The options are as follows   * lace1   * lace4   * shdw2   * shdw17   * fold5   * fold9   * rpl3   * rpl5   * prsm3   * prsm9   * prsm10 
     * @param {Object} opts Optional parameters
     * @param {File} [image] Source image file (binary). (If this parameter is present, the other image source parameters must be empty.)
     * @param {String} [imageUrl] Source image URL. (If this parameter is present, the other image source parameters must be empty.)
     * @param {String} [imageId] Source image ID of an image previously uploaded to Picsart or result image ID from a different API. (If this parameter is present, the other image source parameters must be empty.)
     * @param {module:model/String} [format = 'JPG')] Optionally select one of the image formats (JPG is chosen if left blank). Options are as follows:   * JPG   * PNG   * WEBP 
     * @param {module:model/String} [blend = 'screen')] Select one of the appearance types from the dropdown list (it will be _screen_ if left blank). The options are as follows.   * normal   * screen   * overlay   * multiply   * darken   * lighten   * add 
     * @param {Number} [opacity = 100)] Enter an integer value from 0 to +100. The larger the number, the greater the opacity.
     * @param {Number} [hue = 0)] Enter an integer value from -180 to +180.
     * @param {module:model/String} [maskFlip] Choose a mask flip option. The choices are as follows.   * left   * right   * mirror horizontal   * mirror vertical   * turnaround 
     * @param {Number} [previewSize = 120)] Enter the max size for the width or height of the preview image. The max value is 240px. If left blank it's 120px.
     * @param {module:api/EffectsApi~masksPreviewsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RemovebgPost200Response}
     */
    masksPreviewsPost(mask, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'mask' is set
      if (mask === undefined || mask === null) {
        throw new Error("Missing the required parameter 'mask' when calling masksPreviewsPost");
      }

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
        'blend': opts['blend'],
        'mask': this.apiClient.buildCollectionParam(mask, 'csv'),
        'opacity': opts['opacity'],
        'hue': opts['hue'],
        'mask_flip': opts['maskFlip'],
        'preview_size': opts['previewSize']
      };

      let authNames = ['apiKey'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = RemovebgPost200Response;
      return this.apiClient.callApi(
        '/masks/previews', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
