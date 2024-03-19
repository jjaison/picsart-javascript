# PicsartProgrammableImageApis.SurfacemapApi

All URIs are relative to *https://api.picsart.io/tools/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**surfacemapPost**](SurfacemapApi.md#surfacemapPost) | **POST** /surfacemap | Surfacemap Image



## surfacemapPost

> RemovebgPost200Response surfacemapPost(opts)

Surfacemap Image

**Service Description:**   With the *surface map* tool you can \&quot;print\&quot; a sticker over an (target) image.   Using a mask, the Surfacemap tool maps the sticker pixels using the texture and curves on the target image   thus ultimately giving a live-print-preview effect.  **Limitations:** We recommend following these rules when providing image, mask and sticker   * Image, mask and sticker - providing all three is required,   * The size of the mask and the image should be the same,   * The size of the sticker should match the \&quot;masked\&quot; area&#39;s size or proportions.  **Examples:** Examples of where the Surfacemap can be used include:   * T-shirt print preview   * Mug print preview   * Pillow print preview  **Source Images:**   You can source the image by providing a file, a URL to an online image, or a reference_id from a previously uploaded image.   This also applies to the mask and the sticker provided at the input   **Authorization:**     Requires an API key to be provided in the **X-Picsart-API-Key** request header. 

### Example

```javascript
import PicsartProgrammableImageApis from 'picsart_programmable_image_apis';
let defaultClient = PicsartProgrammableImageApis.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new PicsartProgrammableImageApis.SurfacemapApi();
let opts = {
  'image': "/path/to/file", // File | Source image file (binary). (If this parameter is present, the other image source parameters must be empty.)
  'imageUrl': "imageUrl_example", // String | Source image URL. (If this parameter is present, the other image source parameters must be empty.)
  'imageId': "imageId_example", // String | Source image ID of an image previously uploaded to Picsart or result image ID from a different API. (If this parameter is present, the other image source parameters must be empty.)
  'mask': "/path/to/file", // File | Source mask file (binary). (If this parameter is present, the other mask source parameters must be empty.)
  'maskUrl': "maskUrl_example", // String | Source mask URL. (If this parameter is present, the other mask source parameters must be empty.)
  'maskId': "maskId_example", // String | Source mask ID of an mask previously uploaded to Picsart or result mask ID from a different API. (If this parameter is present, the other mask source parameters must be empty.)
  'sticker': "/path/to/file", // File | Source sticker file (binary). (If this parameter is present, the other sticker source parameters must be empty.)
  'stickerUrl': "stickerUrl_example", // String | Source sticker URL. (If this parameter is present, the other sticker source parameters must be empty.)
  'stickerId': "stickerId_example", // String | Source sticker ID of an sticker previously uploaded to Picsart or result sticker ID from a different API. (If this parameter is present, the other sticker source parameters must be empty.)
  'format': "'JPG'" // String | Optionally select one of the image formats (JPG is chosen if left blank). Options are as follows:   * JPG   * PNG   * WEBP 
};
apiInstance.surfacemapPost(opts, (error, data, response) => {
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
 **mask** | **File**| Source mask file (binary). (If this parameter is present, the other mask source parameters must be empty.) | [optional] 
 **maskUrl** | **String**| Source mask URL. (If this parameter is present, the other mask source parameters must be empty.) | [optional] 
 **maskId** | **String**| Source mask ID of an mask previously uploaded to Picsart or result mask ID from a different API. (If this parameter is present, the other mask source parameters must be empty.) | [optional] 
 **sticker** | **File**| Source sticker file (binary). (If this parameter is present, the other sticker source parameters must be empty.) | [optional] 
 **stickerUrl** | **String**| Source sticker URL. (If this parameter is present, the other sticker source parameters must be empty.) | [optional] 
 **stickerId** | **String**| Source sticker ID of an sticker previously uploaded to Picsart or result sticker ID from a different API. (If this parameter is present, the other sticker source parameters must be empty.) | [optional] 
 **format** | **String**| Optionally select one of the image formats (JPG is chosen if left blank). Options are as follows:   * JPG   * PNG   * WEBP  | [optional] [default to &#39;JPG&#39;]

### Return type

[**RemovebgPost200Response**](RemovebgPost200Response.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

