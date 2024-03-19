# PicsartProgrammableImageApis.PhotoEnhancementApi

All URIs are relative to *https://api.picsart.io/tools/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**enhanceFacePost**](PhotoEnhancementApi.md#enhanceFacePost) | **POST** /enhance/face | Face Enhancement
[**upscaleEnhancePost**](PhotoEnhancementApi.md#upscaleEnhancePost) | **POST** /upscale/enhance | Ultra Enhance
[**upscalePost**](PhotoEnhancementApi.md#upscalePost) | **POST** /upscale | Upscale
[**upscaleUltraPost**](PhotoEnhancementApi.md#upscaleUltraPost) | **POST** /upscale/ultra | Upscale Ultra
[**upscaleUltraTransactionIdGet**](PhotoEnhancementApi.md#upscaleUltraTransactionIdGet) | **GET** /upscale/ultra/{transaction_id} | 



## enhanceFacePost

> RemovebgPost200Response enhanceFacePost(opts)

Face Enhancement

**Service Description:**   With our *enhance face* tool, you can turn your old, blurry photos into clear portraits and selfies.   Our AI technology will find faces, perform restoration and do color enhancement simultaneously.   It will improve the skin texture and sharpen details while keeping a good balance of realness and fidelity with much less artifacts.   **Limitations:** Supported image formats are JPG, PNG, TIFF and WEBP.   **Examples:**    Examples of where the face enhancement tool can be utilized include the following:     * Selfies    * Face macros (close up)    * Images with multiple faces    * Images with mid-range faces    * Results of professional photo shoots   **Source Image:**    If you plan to apply a mask to an image multiple times, we recommend you first upload the source image using the *Upload* method and then use the reference image ID. Otherwise, you can source the image by providing a file or a URL to an online image.   **Authorization:**      Requires an API key to be provided in the **X-Picsart-API-Key** request header. 

### Example

```javascript
import PicsartProgrammableImageApis from 'picsart_programmable_image_apis';
let defaultClient = PicsartProgrammableImageApis.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new PicsartProgrammableImageApis.PhotoEnhancementApi();
let opts = {
  'image': "/path/to/file", // File | Source image file (binary). (If this parameter is present, the other image source parameters must be empty.)
  'imageUrl': "imageUrl_example", // String | Source image URL. (If this parameter is present, the other image source parameters must be empty.)
  'imageId': "imageId_example", // String | Source image ID of an image previously uploaded to Picsart or result image ID from a different API. (If this parameter is present, the other image source parameters must be empty.)
  'format': "'JPG'" // String | Optionally select one of the image formats (JPG is the default). Options are as follows:   * JPG   * PNG   * WEBP 
};
apiInstance.enhanceFacePost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image** | **File**| Source image file (binary). (If this parameter is present, the other image source parameters must be empty.) | [optional] 
 **imageUrl** | **String**| Source image URL. (If this parameter is present, the other image source parameters must be empty.) | [optional] 
 **imageId** | **String**| Source image ID of an image previously uploaded to Picsart or result image ID from a different API. (If this parameter is present, the other image source parameters must be empty.) | [optional] 
 **format** | **String**| Optionally select one of the image formats (JPG is the default). Options are as follows:   * JPG   * PNG   * WEBP  | [optional] [default to &#39;JPG&#39;]

### Return type

[**RemovebgPost200Response**](RemovebgPost200Response.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## upscaleEnhancePost

> RemovebgPost200Response upscaleEnhancePost(opts)

Ultra Enhance

**Service Description:**   *Ultra enhance* is a new upscaling technique with a generative model which provides high frequency detail. It works well on images without noise and preserves details in a superior way.   **Limitations:** Up to 16 times upscaling on input images. Supported source image formats are JPG, PNG, TIFF and WEBP.    **Minimums/Maximums:**    * Up to 256Mpx output images   **Examples:**    Examples of where ultra enhance can be utilized include the following:    * Low resolution images    * Images that need smoothing and realistic details     * To de-noise an image    * Works best with the Face Enhance service   **Source Image:**    If you plan to upscale enhance an image several times, we recommend you first upload the source image using the *Upload* method and then use the reference image ID. Otherwise, you can source the image by providing a file or a URL to an online image.   **Authorization:**      Requires an API key to be provided in the **X-Picsart-API-Key** request header. 

### Example

```javascript
import PicsartProgrammableImageApis from 'picsart_programmable_image_apis';
let defaultClient = PicsartProgrammableImageApis.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new PicsartProgrammableImageApis.PhotoEnhancementApi();
let opts = {
  'image': "/path/to/file", // File | Source image file (binary). (If this parameter is present, the other image source parameters must be empty.)
  'imageUrl': "imageUrl_example", // String | Source image URL. (If this parameter is present, the other image source parameters must be empty.)
  'imageId': "imageId_example", // String | Source image ID of an image previously uploaded to Picsart or result image ID from a different API. (If this parameter is present, the other image source parameters must be empty.)
  'upscaleFactor': 2, // Number | Upscale an image with a given upscale factor. The upscale factor increases the imageâ€™s resolution without increasing its size. Upscale factor can be between 2 - 16 (default is 2). 
  'format': "'JPG'" // String | Optionally select one of the image formats (JPG is chosen if left blank). Options are as follows:   * JPG   * PNG   * WEBP 
};
apiInstance.upscaleEnhancePost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image** | **File**| Source image file (binary). (If this parameter is present, the other image source parameters must be empty.) | [optional] 
 **imageUrl** | **String**| Source image URL. (If this parameter is present, the other image source parameters must be empty.) | [optional] 
 **imageId** | **String**| Source image ID of an image previously uploaded to Picsart or result image ID from a different API. (If this parameter is present, the other image source parameters must be empty.) | [optional] 
 **upscaleFactor** | **Number**| Upscale an image with a given upscale factor. The upscale factor increases the imageâ€™s resolution without increasing its size. Upscale factor can be between 2 - 16 (default is 2).  | [optional] [default to 2]
 **format** | **String**| Optionally select one of the image formats (JPG is chosen if left blank). Options are as follows:   * JPG   * PNG   * WEBP  | [optional] [default to &#39;JPG&#39;]

### Return type

[**RemovebgPost200Response**](RemovebgPost200Response.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## upscalePost

> RemovebgPost200Response upscalePost(opts)

Upscale

**Service Description:**    The *upscale* service increases the resolutions of an image by a given upscale factor, without increasing its file size. Upscale increases the quality and resolution of your photos by leveraging predictive and generative AI to add pixels to your image. It works especially well on images without noise.  **Limitations:**    Images can be upscaled up to 8 times. Images can be upscaled with outputs up to 4800x4800 (16 Mpx). Supported source image formats are JPG, PNG, TIFF and WEBP.   **Minimums/Maximums:**    Upscale Factor    | Input Image Maximum Recommended Resolution (width x height)    ------------------| ----------------------------------------    2                 | 2000x2000    4                 | 1024x1024    6                 | 800x800    8                 | 600x600  **Examples:**    Examples of where the upscale service can be utilized include the following:   * High resolution images   **Rules:**    The image should have sharp details.  **Source Image:**    If you plan to upscale an image several times, we recommend you first upload the source image using the *Upload* method and then use the reference image ID. Otherwise, you can source the image by providing a file or a URL to an online image.  **Authorization:**    Requires an API key to be provided in the **X-Picsart-API-Key** request header. 

### Example

```javascript
import PicsartProgrammableImageApis from 'picsart_programmable_image_apis';
let defaultClient = PicsartProgrammableImageApis.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new PicsartProgrammableImageApis.PhotoEnhancementApi();
let opts = {
  'image': "/path/to/file", // File | Source image file (binary). (If this parameter is present, the other image source parameters must be empty.)
  'imageUrl': "imageUrl_example", // String | Source image URL. (If this parameter is present, the other image source parameters must be empty.)
  'imageId': "imageId_example", // String | Source image ID of an image previously uploaded to Picsart or result image ID from a different API. (If this parameter is present, the other image source parameters must be empty.)
  'upscaleFactor': "upscaleFactor_example", // String | Choose one of the upscale factors. The option are as follows   * 2x   * 4x   * 6x   * 8x 
  'format': "'JPG'" // String | Optionally select one of the output image formats (JPG is chosen if left blank). Options are as follows:   * JPG   * PNG   * WEBP 
};
apiInstance.upscalePost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image** | **File**| Source image file (binary). (If this parameter is present, the other image source parameters must be empty.) | [optional] 
 **imageUrl** | **String**| Source image URL. (If this parameter is present, the other image source parameters must be empty.) | [optional] 
 **imageId** | **String**| Source image ID of an image previously uploaded to Picsart or result image ID from a different API. (If this parameter is present, the other image source parameters must be empty.) | [optional] 
 **upscaleFactor** | **String**| Choose one of the upscale factors. The option are as follows   * 2x   * 4x   * 6x   * 8x  | [optional] 
 **format** | **String**| Optionally select one of the output image formats (JPG is chosen if left blank). Options are as follows:   * JPG   * PNG   * WEBP  | [optional] [default to &#39;JPG&#39;]

### Return type

[**RemovebgPost200Response**](RemovebgPost200Response.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## upscaleUltraPost

> RemovebgPost200Response upscaleUltraPost(opts)

Upscale Ultra

**Service Description:** *Upscale Ultra* is a new upscaling technique which does upscaling with noise suppression. It works well on images with faces, small resolution images, stickers and objects with geometric shapes and clear edges. Upscale ultra increases the quality and resolution of low quality photos by leveraging predictive and generative AI technology in order to \&quot;complete\&quot; missing pixels for a best in class smoothing and enhancement effect. It works especially good on small resolution images with faces.  **Limitations:**   Images can be upscaled up to 16 times. Supported source image formats are JPG, PNG, TIFF and WEBP.   **Minimums/Maximums:**   * Up to 4Mpx (2048x2048) input images   * Up to 256Mpx output images  **Examples:**   Examples of where the upscale ultra service can be utilized include the following:    * Low resolution images    * Images that need smoothing  **Options:**   This service allows users to choose from *synchronous*, *asynchronous* and *auto-mode* (sync is default) type of processing. The asynchronous service is preferred when processing large final size image files or when using high upscaling factors. When done asynchronously, rather than receiving a URL to the finished image, you will receive a transaction_id to use with the GET method to retrieve the transformed image. Options are detailed below:   * **Sync**: issues a synchronous request, response is given when the result is ready. In case of processes which take too long (&gt;55 seconds), the request returns an error after timeout. Based on the estimated (calculated by the algorithm) final size of an image, there is also an auto-switching mechanism which automatically switches the processing mode to the async mode, if the estimated final size of the respective image is larger than 4Mpx.   * **Async**: forces an asynchronous request, and the response, which is instantaneous, contains a \&quot;transaction_id\&quot; which is used to poll for the result. For async processing, the request runs in async mode either until it returns a result or stops after 24 hours.   * **Auto**: the processing mode decision is made automatically by the service, depending upon image size (estimated final size of an image should exceed 4Mpx to choose async automatically).    **Source Image:**     If you plan to upscale ultra an image several times, we recommend you first upload the source image using the *Upload* method and then use the reference image ID. Otherwise, you can source the image by providing a file or a URL to an online image.    **Authorization:**     Requires an API key to be provided in the **X-Picsart-API-Key** request header. 

### Example

```javascript
import PicsartProgrammableImageApis from 'picsart_programmable_image_apis';
let defaultClient = PicsartProgrammableImageApis.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new PicsartProgrammableImageApis.PhotoEnhancementApi();
let opts = {
  'image': "/path/to/file", // File | Source image file (binary). (If this parameter is present, the other image source parameters must be empty.)
  'imageUrl': "imageUrl_example", // String | Source image URL. (If this parameter is present, the other image source parameters must be empty.)
  'imageId': "imageId_example", // String | Source image ID of an image previously uploaded to Picsart or result image ID from a different API. (If this parameter is present, the other image source parameters must be empty.)
  'upscaleFactor': 2, // Number | Upscale an image with a given upscale factor. The upscale factor increases the imageâ€™s resolution without increasing its size. Upscale factor can be between 2 - 16 (default is 2). 
  'format': "'JPG'", // String | Optionally select one of the image formats (JPG is default). Options are as follows:   * JPG   * PNG   * WEBP 
  'mode': "'sync'" // String | Use this query parameter to establish the processing mode. Acceptable values are sync, async and auto (sync is default):   * sync: issues a synchronous request, response is given when the result is ready.   * async: forces an asynchronous request, the response, which is instantaneous, contains a \\\"transaction_id\\\" which is used to poll for the result.   * auto: the processing mode decision is made by the service, which depends upon the expected processing time. 
};
apiInstance.upscaleUltraPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image** | **File**| Source image file (binary). (If this parameter is present, the other image source parameters must be empty.) | [optional] 
 **imageUrl** | **String**| Source image URL. (If this parameter is present, the other image source parameters must be empty.) | [optional] 
 **imageId** | **String**| Source image ID of an image previously uploaded to Picsart or result image ID from a different API. (If this parameter is present, the other image source parameters must be empty.) | [optional] 
 **upscaleFactor** | **Number**| Upscale an image with a given upscale factor. The upscale factor increases the imageâ€™s resolution without increasing its size. Upscale factor can be between 2 - 16 (default is 2).  | [optional] [default to 2]
 **format** | **String**| Optionally select one of the image formats (JPG is default). Options are as follows:   * JPG   * PNG   * WEBP  | [optional] [default to &#39;JPG&#39;]
 **mode** | **String**| Use this query parameter to establish the processing mode. Acceptable values are sync, async and auto (sync is default):   * sync: issues a synchronous request, response is given when the result is ready.   * async: forces an asynchronous request, the response, which is instantaneous, contains a \\\&quot;transaction_id\\\&quot; which is used to poll for the result.   * auto: the processing mode decision is made by the service, which depends upon the expected processing time.  | [optional] [default to &#39;sync&#39;]

### Return type

[**RemovebgPost200Response**](RemovebgPost200Response.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## upscaleUltraTransactionIdGet

> RemovebgPost200Response upscaleUltraTransactionIdGet(transactionId)



**Service Description:** Use this method, along with transaction_id, to retrieve the upscale ultra finished image if the transformation was done asynchronously. **Authorization:**     Requires an API key to be provided in the **X-Picsart-API-Key** request header. 

### Example

```javascript
import PicsartProgrammableImageApis from 'picsart_programmable_image_apis';
let defaultClient = PicsartProgrammableImageApis.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new PicsartProgrammableImageApis.PhotoEnhancementApi();
let transactionId = "transactionId_example"; // String | The ID returned from the POST method when it's done asynchronously.
apiInstance.upscaleUltraTransactionIdGet(transactionId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionId** | **String**| The ID returned from the POST method when it&#39;s done asynchronously. | 

### Return type

[**RemovebgPost200Response**](RemovebgPost200Response.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

