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
import UpscaleUltraPost202Response from '../model/UpscaleUltraPost202Response';

/**
* PhotoEnhancement service.
* @module api/PhotoEnhancementApi
* @version 2.0
*/
export default class PhotoEnhancementApi {

    /**
    * Constructs a new PhotoEnhancementApi. 
    * @alias module:api/PhotoEnhancementApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the enhanceFacePost operation.
     * @callback module:api/PhotoEnhancementApi~enhanceFacePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RemovebgPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Face Enhancement
     * **Service Description:**   With our *enhance face* tool, you can turn your old, blurry photos into clear portraits and selfies.   Our AI technology will find faces, perform restoration and do color enhancement simultaneously.   It will improve the skin texture and sharpen details while keeping a good balance of realness and fidelity with much less artifacts.   **Limitations:** Supported image formats are JPG, PNG, TIFF and WEBP.   **Examples:**    Examples of where the face enhancement tool can be utilized include the following:     * Selfies    * Face macros (close up)    * Images with multiple faces    * Images with mid-range faces    * Results of professional photo shoots   **Source Image:**    If you plan to apply a mask to an image multiple times, we recommend you first upload the source image using the *Upload* method and then use the reference image ID. Otherwise, you can source the image by providing a file or a URL to an online image.   **Authorization:**      Requires an API key to be provided in the **X-Picsart-API-Key** request header. 
     * @param {Object} opts Optional parameters
     * @param {File} [image] Source image file (binary). (If this parameter is present, the other image source parameters must be empty.)
     * @param {String} [imageUrl] Source image URL. (If this parameter is present, the other image source parameters must be empty.)
     * @param {String} [imageId] Source image ID of an image previously uploaded to Picsart or result image ID from a different API. (If this parameter is present, the other image source parameters must be empty.)
     * @param {module:model/String} [format = 'JPG')] Optionally select one of the image formats (JPG is the default). Options are as follows:   * JPG   * PNG   * WEBP 
     * @param {module:api/PhotoEnhancementApi~enhanceFacePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RemovebgPost200Response}
     */
    enhanceFacePost(opts, callback) {
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
        'format': opts['format']
      };

      let authNames = ['apiKey'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = RemovebgPost200Response;
      return this.apiClient.callApi(
        '/enhance/face', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the upscaleEnhancePost operation.
     * @callback module:api/PhotoEnhancementApi~upscaleEnhancePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RemovebgPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Ultra Enhance
     * **Service Description:**   *Ultra enhance* is a new upscaling technique with a generative model which provides high frequency detail. It works well on images without noise and preserves details in a superior way.   **Limitations:** Up to 16 times upscaling on input images. Supported source image formats are JPG, PNG, TIFF and WEBP.    **Minimums/Maximums:**    * Up to 256Mpx output images   **Examples:**    Examples of where ultra enhance can be utilized include the following:    * Low resolution images    * Images that need smoothing and realistic details     * To de-noise an image    * Works best with the Face Enhance service   **Source Image:**    If you plan to upscale enhance an image several times, we recommend you first upload the source image using the *Upload* method and then use the reference image ID. Otherwise, you can source the image by providing a file or a URL to an online image.   **Authorization:**      Requires an API key to be provided in the **X-Picsart-API-Key** request header. 
     * @param {Object} opts Optional parameters
     * @param {File} [image] Source image file (binary). (If this parameter is present, the other image source parameters must be empty.)
     * @param {String} [imageUrl] Source image URL. (If this parameter is present, the other image source parameters must be empty.)
     * @param {String} [imageId] Source image ID of an image previously uploaded to Picsart or result image ID from a different API. (If this parameter is present, the other image source parameters must be empty.)
     * @param {module:model/Number} [upscaleFactor = 2)] Upscale an image with a given upscale factor. The upscale factor increases the imageâ€™s resolution without increasing its size. Upscale factor can be between 2 - 16 (default is 2). 
     * @param {module:model/String} [format = 'JPG')] Optionally select one of the image formats (JPG is chosen if left blank). Options are as follows:   * JPG   * PNG   * WEBP 
     * @param {module:api/PhotoEnhancementApi~upscaleEnhancePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RemovebgPost200Response}
     */
    upscaleEnhancePost(opts, callback) {
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
        'upscale_factor': opts['upscaleFactor'],
        'format': opts['format']
      };

      let authNames = ['apiKey'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = RemovebgPost200Response;
      return this.apiClient.callApi(
        '/upscale/enhance', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the upscalePost operation.
     * @callback module:api/PhotoEnhancementApi~upscalePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RemovebgPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upscale
     * **Service Description:**    The *upscale* service increases the resolutions of an image by a given upscale factor, without increasing its file size. Upscale increases the quality and resolution of your photos by leveraging predictive and generative AI to add pixels to your image. It works especially well on images without noise.  **Limitations:**    Images can be upscaled up to 8 times. Images can be upscaled with outputs up to 4800x4800 (16 Mpx). Supported source image formats are JPG, PNG, TIFF and WEBP.   **Minimums/Maximums:**    Upscale Factor    | Input Image Maximum Recommended Resolution (width x height)    ------------------| ----------------------------------------    2                 | 2000x2000    4                 | 1024x1024    6                 | 800x800    8                 | 600x600  **Examples:**    Examples of where the upscale service can be utilized include the following:   * High resolution images   **Rules:**    The image should have sharp details.  **Source Image:**    If you plan to upscale an image several times, we recommend you first upload the source image using the *Upload* method and then use the reference image ID. Otherwise, you can source the image by providing a file or a URL to an online image.  **Authorization:**    Requires an API key to be provided in the **X-Picsart-API-Key** request header. 
     * @param {Object} opts Optional parameters
     * @param {File} [image] Source image file (binary). (If this parameter is present, the other image source parameters must be empty.)
     * @param {String} [imageUrl] Source image URL. (If this parameter is present, the other image source parameters must be empty.)
     * @param {String} [imageId] Source image ID of an image previously uploaded to Picsart or result image ID from a different API. (If this parameter is present, the other image source parameters must be empty.)
     * @param {module:model/String} [upscaleFactor] Choose one of the upscale factors. The option are as follows   * 2x   * 4x   * 6x   * 8x 
     * @param {module:model/String} [format = 'JPG')] Optionally select one of the output image formats (JPG is chosen if left blank). Options are as follows:   * JPG   * PNG   * WEBP 
     * @param {module:api/PhotoEnhancementApi~upscalePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RemovebgPost200Response}
     */
    upscalePost(opts, callback) {
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
        'upscale_factor': opts['upscaleFactor'],
        'format': opts['format']
      };

      let authNames = ['apiKey'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = RemovebgPost200Response;
      return this.apiClient.callApi(
        '/upscale', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the upscaleUltraPost operation.
     * @callback module:api/PhotoEnhancementApi~upscaleUltraPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RemovebgPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upscale Ultra
     * **Service Description:** *Upscale Ultra* is a new upscaling technique which does upscaling with noise suppression. It works well on images with faces, small resolution images, stickers and objects with geometric shapes and clear edges. Upscale ultra increases the quality and resolution of low quality photos by leveraging predictive and generative AI technology in order to \"complete\" missing pixels for a best in class smoothing and enhancement effect. It works especially good on small resolution images with faces.  **Limitations:**   Images can be upscaled up to 16 times. Supported source image formats are JPG, PNG, TIFF and WEBP.   **Minimums/Maximums:**   * Up to 4Mpx (2048x2048) input images   * Up to 256Mpx output images  **Examples:**   Examples of where the upscale ultra service can be utilized include the following:    * Low resolution images    * Images that need smoothing  **Options:**   This service allows users to choose from *synchronous*, *asynchronous* and *auto-mode* (sync is default) type of processing. The asynchronous service is preferred when processing large final size image files or when using high upscaling factors. When done asynchronously, rather than receiving a URL to the finished image, you will receive a transaction_id to use with the GET method to retrieve the transformed image. Options are detailed below:   * **Sync**: issues a synchronous request, response is given when the result is ready. In case of processes which take too long (>55 seconds), the request returns an error after timeout. Based on the estimated (calculated by the algorithm) final size of an image, there is also an auto-switching mechanism which automatically switches the processing mode to the async mode, if the estimated final size of the respective image is larger than 4Mpx.   * **Async**: forces an asynchronous request, and the response, which is instantaneous, contains a \"transaction_id\" which is used to poll for the result. For async processing, the request runs in async mode either until it returns a result or stops after 24 hours.   * **Auto**: the processing mode decision is made automatically by the service, depending upon image size (estimated final size of an image should exceed 4Mpx to choose async automatically).    **Source Image:**     If you plan to upscale ultra an image several times, we recommend you first upload the source image using the *Upload* method and then use the reference image ID. Otherwise, you can source the image by providing a file or a URL to an online image.    **Authorization:**     Requires an API key to be provided in the **X-Picsart-API-Key** request header. 
     * @param {Object} opts Optional parameters
     * @param {File} [image] Source image file (binary). (If this parameter is present, the other image source parameters must be empty.)
     * @param {String} [imageUrl] Source image URL. (If this parameter is present, the other image source parameters must be empty.)
     * @param {String} [imageId] Source image ID of an image previously uploaded to Picsart or result image ID from a different API. (If this parameter is present, the other image source parameters must be empty.)
     * @param {module:model/Number} [upscaleFactor = 2)] Upscale an image with a given upscale factor. The upscale factor increases the imageâ€™s resolution without increasing its size. Upscale factor can be between 2 - 16 (default is 2). 
     * @param {module:model/String} [format = 'JPG')] Optionally select one of the image formats (JPG is default). Options are as follows:   * JPG   * PNG   * WEBP 
     * @param {module:model/String} [mode = 'sync')] Use this query parameter to establish the processing mode. Acceptable values are sync, async and auto (sync is default):   * sync: issues a synchronous request, response is given when the result is ready.   * async: forces an asynchronous request, the response, which is instantaneous, contains a \\\"transaction_id\\\" which is used to poll for the result.   * auto: the processing mode decision is made by the service, which depends upon the expected processing time. 
     * @param {module:api/PhotoEnhancementApi~upscaleUltraPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RemovebgPost200Response}
     */
    upscaleUltraPost(opts, callback) {
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
        'upscale_factor': opts['upscaleFactor'],
        'format': opts['format'],
        'mode': opts['mode']
      };

      let authNames = ['apiKey'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = RemovebgPost200Response;
      return this.apiClient.callApi(
        '/upscale/ultra', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the upscaleUltraTransactionIdGet operation.
     * @callback module:api/PhotoEnhancementApi~upscaleUltraTransactionIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RemovebgPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * **Service Description:** Use this method, along with transaction_id, to retrieve the upscale ultra finished image if the transformation was done asynchronously. **Authorization:**     Requires an API key to be provided in the **X-Picsart-API-Key** request header. 
     * @param {String} transactionId The ID returned from the POST method when it's done asynchronously.
     * @param {module:api/PhotoEnhancementApi~upscaleUltraTransactionIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RemovebgPost200Response}
     */
    upscaleUltraTransactionIdGet(transactionId, callback) {
      let postBody = null;
      // verify the required parameter 'transactionId' is set
      if (transactionId === undefined || transactionId === null) {
        throw new Error("Missing the required parameter 'transactionId' when calling upscaleUltraTransactionIdGet");
      }

      let pathParams = {
        'transaction_id': transactionId
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
      let returnType = RemovebgPost200Response;
      return this.apiClient.callApi(
        '/upscale/ultra/{transaction_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
