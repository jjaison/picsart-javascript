# PicsartProgrammableImageApis.ConversionApi

All URIs are relative to *https://api.picsart.io/tools/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**vectorizerPost**](ConversionApi.md#vectorizerPost) | **POST** /vectorizer | Image Vectorizer



## vectorizerPost

> RemovebgPost200Response vectorizerPost(opts)

Image Vectorizer

**Service Description:**   With the *vectorizer* tool you can instantly turn your raster image into high quality vector graphic as it converts a PNG image to a SVG image.   Using geometric figures, like curves and lines, the vectorizer converts the pixel information of raster input into vector image, which can be enlarged and edited without quality loss.  **Limitations:** We recommend keeping files up to 2048 on each side. Supported source image formats are JPG, PNG, TIFF and WEBP. Output is always SVG.  **Examples:** Examples of where the vectorizer can be used include:   * Icons   * Logos   * Illustrations   * Graphics   * Shapes  **Options:** If the original does not meet the recommended file size, you can downscale with downscale_to parameter.  **Minimums/Maximums:**   * Images up to 8K  **Source Image:**   You can source the image by providing a file, a URL to an online image, or a reference_id from a previously uploaded image.  **Authorization:**     Requires an API key to be provided in the **X-Picsart-API-Key** request header. 

### Example

```javascript
import PicsartProgrammableImageApis from 'picsart_programmable_image_apis';
let defaultClient = PicsartProgrammableImageApis.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new PicsartProgrammableImageApis.ConversionApi();
let opts = {
  'image': "/path/to/file", // File | Source image file (binary). (If this parameter is present, the other image source parameters must be empty.)
  'imageUrl': "imageUrl_example", // String | Source image URL. (If this parameter is present, the other image source parameters must be empty.)
  'imageId': "imageId_example", // String | Source image ID of an image previously uploaded to Picsart or result image ID from a different API. (If this parameter is present, the other image source parameters must be empty.)
  'downscaleTo': 2048 // Number | Large images can be downscaled. Use -1 to turn off downscaling. Otherwise the image is scaled by 0.5 until max(width, height) < downscale_to.
};
apiInstance.vectorizerPost(opts, (error, data, response) => {
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
 **downscaleTo** | **Number**| Large images can be downscaled. Use -1 to turn off downscaling. Otherwise the image is scaled by 0.5 until max(width, height) &lt; downscale_to. | [optional] [default to 2048]

### Return type

[**RemovebgPost200Response**](RemovebgPost200Response.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

