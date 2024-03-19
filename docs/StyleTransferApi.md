# PicsartProgrammableImageApis.StyleTransferApi

All URIs are relative to *https://api.picsart.io/tools/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**styletransferPost**](StyleTransferApi.md#styletransferPost) | **POST** /styletransfer | Style Transfer



## styletransferPost

> RemovebgPost200Response styletransferPost(opts)

Style Transfer

**Service Description:**   The *style transfer* tool transfers a style from a reference image to a content image. The smart algorithm blends the two images together so the output looks like the content image, but \&quot;painted\&quot; in the style of the reference image.   **Limitations:** Works best with graphics reference images. Works best with nature content images. Supported source image formats are JPG, PNG, TIFF and WEBP.  **Examples:**   Examples of where the style transfer tool can be used include the following:   * Magic filters   * To convert an image to a piece of art   * To generate unique results   * To recreate the style of a famous painting  **Options:**   * You can choose from five different levels of transfer  **Source Image:**   If you plan to transfer styles to an image multiple times, we recommend you first upload the source image using the *Upload* method and then use the reference image ID. Otherwise, you can source the image by providing a file or a URL to an online image.  **Authorization:**     Requires an API key to be provided in the **X-Picsart-API-Key** request header. 

### Example

```javascript
import PicsartProgrammableImageApis from 'picsart_programmable_image_apis';
let defaultClient = PicsartProgrammableImageApis.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new PicsartProgrammableImageApis.StyleTransferApi();
let opts = {
  'image': "/path/to/file", // File | Source image file (binary). (If this parameter is present, the other image source parameters must be empty.)
  'imageUrl': "imageUrl_example", // String | Source image URL. (If this parameter is present, the other image source parameters must be empty.)
  'imageId': "imageId_example", // String | Source image ID of an image previously uploaded to Picsart or result image ID from a different API. (If this parameter is present, the other image source parameters must be empty.)
  'level': "'l1'", // String | Select a level from the dropdown menu. Smaller numbers preserve more from the original image, bigger numbers make the original image look closer to the reference image. The level options are as follows.   * l1   * l2   * l3   * l4   * l5 
  'format': "'JPG'", // String | Optionally select one of the image formats (JPG is chosen if left blank). Options are as follows:   * JPG   * PNG   * WEBP 
  'referenceImage': "/path/to/file", // File | Source image file (binary). (If this parameter is present, the other image source parameters must be empty.)
  'referenceImageId': "referenceImageId_example", // String | Enter the Picsart image ID if you previously uploaded the image.
  'referenceImageUrl': "referenceImageUrl_example" // String | Source image URL. (If this parameter is present, the other image source parameters must be empty.)
};
apiInstance.styletransferPost(opts, (error, data, response) => {
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
 **level** | **String**| Select a level from the dropdown menu. Smaller numbers preserve more from the original image, bigger numbers make the original image look closer to the reference image. The level options are as follows.   * l1   * l2   * l3   * l4   * l5  | [optional] [default to &#39;l1&#39;]
 **format** | **String**| Optionally select one of the image formats (JPG is chosen if left blank). Options are as follows:   * JPG   * PNG   * WEBP  | [optional] [default to &#39;JPG&#39;]
 **referenceImage** | **File**| Source image file (binary). (If this parameter is present, the other image source parameters must be empty.) | [optional] 
 **referenceImageId** | **String**| Enter the Picsart image ID if you previously uploaded the image. | [optional] 
 **referenceImageUrl** | **String**| Source image URL. (If this parameter is present, the other image source parameters must be empty.) | [optional] 

### Return type

[**RemovebgPost200Response**](RemovebgPost200Response.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

