/**
 * Picsart Programmable Image APIs
 * ## Introduction Picsart Programmable Image APIs is a simple HTTP interface. The results are usually the URL of the output image. To get started, first you need to [get your API Key](https://picsart.io/login). Below you can find the sample codes to get started easily. Reference docs are given with more information about available parameters that can be adjusted.  ## Sample Run ``` curl -X POST \\ 'https://api.picsart.io/tools/1.0/removebg' \\ -H 'x-picsart-api-key: APIKEYHERE' \\ -F 'output_type=cutout' \\ -F 'image_url=https://cdn140.picsart.com/13902645939997000779.jpg' ```  ## API Key To try out our services you will need to  * [create an account](https://picsart.io/accounts/login), * create an app under [My Apps](https://picsart.io/my-apps/) * and get the API key required for authorization.  You can find more details about this process in the [Quickstart](https://picsart.io/api-quickstart).  ## Input File Input images of type JPG, PNG and WEBP are supported. Input image file size is 100 MB max. References to uploaded image files will be valid and can be used within 24 hours.  ## Output Formats You can request one of three formats, JPG, PNG, WEBP, via the format parameter. The result files will be available for use for 24 hours.  ## Rate Limit Users can process up to 100 requests per month during the demo run. When the rate limit is hit, the API will return 429 code with the info:   ```      {        \"fault\": {          \"faultstring\": \"Rate limit quota violation. Quota limit  exceeded. Identifier : _default\",           \"detail\": {             \"errorcode\": \"policies.ratelimit.QuotaViolation\"           }         }      }         ```  ## Authentication Authentication should be done via the provided API Key. API Key can be sent as a header:  ```  curl 'https://api.picsart.io/tools/1.0/effects' -H 'x-picsart-api-key: APIKEY'  ```  [Developer Guidelines](https://picsart.io/terms) 
 *
 * The version of the allybind document: 2.0
 * 
 *
 * 
 */


import ApiClient from './ApiClient';
import BalanceGet200Response from './model/BalanceGet200Response';
import EffectsGet200Response from './model/EffectsGet200Response';
import EffectsGet200ResponseDataInner from './model/EffectsGet200ResponseDataInner';
import Error from './model/Error';
import Model401Error from './model/Model401Error';
import RemovebgPost200Response from './model/RemovebgPost200Response';
import RemovebgPost200ResponseData from './model/RemovebgPost200ResponseData';
import UpscaleUltraPost202Response from './model/UpscaleUltraPost202Response';
import AdjustApi from './api/AdjustApi';
import ContentGenerationApi from './api/ContentGenerationApi';
import ConversionApi from './api/ConversionApi';
import EffectsApi from './api/EffectsApi';
import PhotoEnhancementApi from './api/PhotoEnhancementApi';
import RemoveBackgroundApi from './api/RemoveBackgroundApi';
import StyleTransferApi from './api/StyleTransferApi';
import SurfacemapApi from './api/SurfacemapApi';
import UtilitiesApi from './api/UtilitiesApi';


/**
* ## Introduction Picsart Programmable Image APIs is a simple HTTP interface. The results are usually the URL of the output image. To get started, first you need to [get your API Key](https://picsart.io/login). Below you can find the sample codes to get started easily. Reference docs are given with more information about available parameters that can be adjusted.  ## Sample Run &#x60;&#x60;&#x60; curl -X POST \\ &#39;https://api.picsart.io/tools/1.0/removebg&#39; \\ -H &#39;x-picsart-api-key: APIKEYHERE&#39; \\ -F &#39;output_type&#x3D;cutout&#39; \\ -F &#39;image_url&#x3D;https://cdn140.picsart.com/13902645939997000779.jpg&#39; &#x60;&#x60;&#x60;  ## API Key To try out our services you will need to  * [create an account](https://picsart.io/accounts/login), * create an app under [My Apps](https://picsart.io/my-apps/) * and get the API key required for authorization.  You can find more details about this process in the [Quickstart](https://picsart.io/api-quickstart).  ## Input File Input images of type JPG, PNG and WEBP are supported. Input image file size is 100 MB max. References to uploaded image files will be valid and can be used within 24 hours.  ## Output Formats You can request one of three formats, JPG, PNG, WEBP, via the format parameter. The result files will be available for use for 24 hours.  ## Rate Limit Users can process up to 100 requests per month during the demo run. When the rate limit is hit, the API will return 429 code with the info:   &#x60;&#x60;&#x60;      {        \&quot;fault\&quot;: {          \&quot;faultstring\&quot;: \&quot;Rate limit quota violation. Quota limit  exceeded. Identifier : _default\&quot;,           \&quot;detail\&quot;: {             \&quot;errorcode\&quot;: \&quot;policies.ratelimit.QuotaViolation\&quot;           }         }      }         &#x60;&#x60;&#x60;  ## Authentication Authentication should be done via the provided API Key. API Key can be sent as a header:  &#x60;&#x60;&#x60;  curl &#39;https://api.picsart.io/tools/1.0/effects&#39; -H &#39;x-picsart-api-key: APIKEY&#39;  &#x60;&#x60;&#x60;  [Developer Guidelines](https://picsart.io/terms) .<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var PicsartProgrammableImageApis = require('index'); // See note below*.
* var xxxSvc = new PicsartProgrammableImageApis.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new PicsartProgrammableImageApis.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new PicsartProgrammableImageApis.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new PicsartProgrammableImageApis.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 2.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The BalanceGet200Response model constructor.
     * @property {module:model/BalanceGet200Response}
     */
    BalanceGet200Response,

    /**
     * The EffectsGet200Response model constructor.
     * @property {module:model/EffectsGet200Response}
     */
    EffectsGet200Response,

    /**
     * The EffectsGet200ResponseDataInner model constructor.
     * @property {module:model/EffectsGet200ResponseDataInner}
     */
    EffectsGet200ResponseDataInner,

    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error,

    /**
     * The Model401Error model constructor.
     * @property {module:model/Model401Error}
     */
    Model401Error,

    /**
     * The RemovebgPost200Response model constructor.
     * @property {module:model/RemovebgPost200Response}
     */
    RemovebgPost200Response,

    /**
     * The RemovebgPost200ResponseData model constructor.
     * @property {module:model/RemovebgPost200ResponseData}
     */
    RemovebgPost200ResponseData,

    /**
     * The UpscaleUltraPost202Response model constructor.
     * @property {module:model/UpscaleUltraPost202Response}
     */
    UpscaleUltraPost202Response,

    /**
    * The AdjustApi service constructor.
    * @property {module:api/AdjustApi}
    */
    AdjustApi,

    /**
    * The ContentGenerationApi service constructor.
    * @property {module:api/ContentGenerationApi}
    */
    ContentGenerationApi,

    /**
    * The ConversionApi service constructor.
    * @property {module:api/ConversionApi}
    */
    ConversionApi,

    /**
    * The EffectsApi service constructor.
    * @property {module:api/EffectsApi}
    */
    EffectsApi,

    /**
    * The PhotoEnhancementApi service constructor.
    * @property {module:api/PhotoEnhancementApi}
    */
    PhotoEnhancementApi,

    /**
    * The RemoveBackgroundApi service constructor.
    * @property {module:api/RemoveBackgroundApi}
    */
    RemoveBackgroundApi,

    /**
    * The StyleTransferApi service constructor.
    * @property {module:api/StyleTransferApi}
    */
    StyleTransferApi,

    /**
    * The SurfacemapApi service constructor.
    * @property {module:api/SurfacemapApi}
    */
    SurfacemapApi,

    /**
    * The UtilitiesApi service constructor.
    * @property {module:api/UtilitiesApi}
    */
    UtilitiesApi
};
