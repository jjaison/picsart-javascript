# PicsartProgrammableImageApis.ContentGenerationApi

All URIs are relative to *https://api.picsart.io/tools/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**backgroundTexturePost**](ContentGenerationApi.md#backgroundTexturePost) | **POST** /background/texture | Texture Generator



## backgroundTexturePost

> RemovebgPost200Response backgroundTexturePost(opts)

Texture Generator

**Service Description:**   The *texture generator* tool generates a background texture pattern for the input image. You can create unlimited textures from the same texture source image.  **Limitations:** Works best with colorful source images. Supported source image formats are JPG, PNG, TIFF and WEBP.  **Examples:**      Examples of where the texture generator tool can be used include the following:   * Backgrounds   * Patterns   * Tiles  **Options:**   * You can control width and height of the output image   * You can control the x and y offset, from the center, of the pattern   * You can choose from five different patterns   * You can scale and/or rotate the pattern  **Source Image:**   If you want to apply multiple textures to the same image, we recommend you first upload the source image using the *Upload* method and then use the reference image ID. Otherwise, you can source the image by providing a file or a URL to an online image.  **Authorization:**     Requires an API key to be provided in the **X-Picsart-API-Key** request header. 

### Example

```javascript
import PicsartProgrammableImageApis from 'picsart_programmable_image_apis';
let defaultClient = PicsartProgrammableImageApis.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new PicsartProgrammableImageApis.ContentGenerationApi();
let opts = {
  'image': "/path/to/file", // File | Source image file (binary). (If this parameter is present, the other image source parameters must be empty.)
  'imageUrl': "imageUrl_example", // String | Source image URL. (If this parameter is present, the other image source parameters must be empty.)
  'imageId': "imageId_example", // String | Source image ID of an image previously uploaded to Picsart or result image ID from a different API. (If this parameter is present, the other image source parameters must be empty.)
  'format': "'JPG'", // String | Optionally select one of the image formats (JPG is chosen if left blank). Options are as follows:   * JPG   * PNG   * WEBP 
  'width': 1024, // Number | Specify the width of the output image in pixels. The default is 1024 and the maximum acceptable value is 8000.
  'height': 1024, // Number | Specify the width of the output image in pixels. The default is 1024 and the maximum acceptable value is 8000.
  'offsetX': 0, // Number | Specify the pattern location, with x(width). Calculation starts from the center of the image. Default is 0.
  'offsetY': 0, // Number | Specify the pattern location  with y(height). Calculation starts from the center of the image. Default is 0.
  'pattern': "'hex'", // String | Choose a pattern for the background texture. Default is hex.
  'rotate': 0, // Number | Enter an integer value to rotate the texture pattern from -180 to +180. Default is 0.
  'scale': 1 // Number | Enter a floating point number between 0.5 - 10.0 to scale the background texture. Default is 1.0.
};
apiInstance.backgroundTexturePost(opts, (error, data, response) => {
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
 **format** | **String**| Optionally select one of the image formats (JPG is chosen if left blank). Options are as follows:   * JPG   * PNG   * WEBP  | [optional] [default to &#39;JPG&#39;]
 **width** | **Number**| Specify the width of the output image in pixels. The default is 1024 and the maximum acceptable value is 8000. | [optional] [default to 1024]
 **height** | **Number**| Specify the width of the output image in pixels. The default is 1024 and the maximum acceptable value is 8000. | [optional] [default to 1024]
 **offsetX** | **Number**| Specify the pattern location, with x(width). Calculation starts from the center of the image. Default is 0. | [optional] [default to 0]
 **offsetY** | **Number**| Specify the pattern location  with y(height). Calculation starts from the center of the image. Default is 0. | [optional] [default to 0]
 **pattern** | **String**| Choose a pattern for the background texture. Default is hex. | [optional] [default to &#39;hex&#39;]
 **rotate** | **Number**| Enter an integer value to rotate the texture pattern from -180 to +180. Default is 0. | [optional] [default to 0]
 **scale** | **Number**| Enter a floating point number between 0.5 - 10.0 to scale the background texture. Default is 1.0. | [optional] [default to 1]

### Return type

[**RemovebgPost200Response**](RemovebgPost200Response.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

