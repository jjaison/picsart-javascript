# PicsartProgrammableImageApis.AdjustApi

All URIs are relative to *https://api.picsart.io/tools/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adjustPost**](AdjustApi.md#adjustPost) | **POST** /adjust | Adjust
[**editPost**](AdjustApi.md#editPost) | **POST** /edit | Basic Editing



## adjustPost

> RemovebgPost200Response adjustPost(opts)

Adjust

**Service Description:**   The *adjust* service applies adjustments to an input image. There are 11 different adjustments in all available. The adjust service can be used with all photo types.  **Limitations:** Supported source image formats are JPG, PNG, TIFF and WEBP.  **Options:** Adjustment options include the following:   * Adjust brightness and/or contrast   * Adjust clarity and/or saturation   * Adjust hue and/or shadows   * Adjust highlights and/or temperature   * Adjust noise or sharpen the image  **Rules:**   * At least one adjustment setting must be chosen   * If you choose an adjustment setting value out of the allowed range, the default value of 0 is used instead.  **Source Image:**   If you plan to apply adjustments multiple times to an image, we recommend you first upload the source image using the *Upload* method and then use the reference image ID. Otherwise, you can source the image by providing a file or a URL to an online image.  **Authorization:**     Requires an API key to be provided in the **X-Picsart-API-Key** request header. 

### Example

```javascript
import PicsartProgrammableImageApis from 'picsart_programmable_image_apis';
let defaultClient = PicsartProgrammableImageApis.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new PicsartProgrammableImageApis.AdjustApi();
let opts = {
  'image': "/path/to/file", // File | Source image file (binary). (If this parameter is present, the other image source parameters must be empty.)
  'imageUrl': "imageUrl_example", // String | Source image URL. (If this parameter is present, the other image source parameters must be empty.)
  'imageId': "imageId_example", // String | Source image ID of an image previously uploaded to Picsart or result image ID from a different API. (If this parameter is present, the other image source parameters must be empty.)
  'brightness': 0, // Number | Enter an integer value from -100 to +100.
  'contrast': 0, // Number | Enter an integer value from -100 to +100.
  'clarity': 0, // Number | Enter an integer value from -100 to +100.
  'saturation': 0, // Number | Enter an integer value from -100 to +100.
  'hue': 0, // Number | Enter an integer value from -100 to +100.
  'shadows': 0, // Number | Enter an integer value from -100 to +100.
  'highlights': 0, // Number | Enter an integer value from -100 to +100.
  'temperature': 0, // Number | Enter an integer value from -100 to +100.
  'sharpen': 0, // Number | Enter an integer value from 0 to +100.
  'noise': 0, // Number | Enter an integer value from 0 to +100.
  'vignette': 0, // Number | Enter an integer value from 0 to +100.
  'format': "'JPG'" // String | Optionally select one of the image formats (JPG is default). Options are as follows:   * JPG   * PNG   * WEBP 
};
apiInstance.adjustPost(opts, (error, data, response) => {
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
 **brightness** | **Number**| Enter an integer value from -100 to +100. | [optional] [default to 0]
 **contrast** | **Number**| Enter an integer value from -100 to +100. | [optional] [default to 0]
 **clarity** | **Number**| Enter an integer value from -100 to +100. | [optional] [default to 0]
 **saturation** | **Number**| Enter an integer value from -100 to +100. | [optional] [default to 0]
 **hue** | **Number**| Enter an integer value from -100 to +100. | [optional] [default to 0]
 **shadows** | **Number**| Enter an integer value from -100 to +100. | [optional] [default to 0]
 **highlights** | **Number**| Enter an integer value from -100 to +100. | [optional] [default to 0]
 **temperature** | **Number**| Enter an integer value from -100 to +100. | [optional] [default to 0]
 **sharpen** | **Number**| Enter an integer value from 0 to +100. | [optional] [default to 0]
 **noise** | **Number**| Enter an integer value from 0 to +100. | [optional] [default to 0]
 **vignette** | **Number**| Enter an integer value from 0 to +100. | [optional] [default to 0]
 **format** | **String**| Optionally select one of the image formats (JPG is default). Options are as follows:   * JPG   * PNG   * WEBP  | [optional] [default to &#39;JPG&#39;]

### Return type

[**RemovebgPost200Response**](RemovebgPost200Response.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## editPost

> RemovebgPost200Response editPost(opts)

Basic Editing

**Service Description:**   The *Edit* service applies basic image editing to an input image.   The basic editing operations are resize, crop, flip, rotate and perspective manipulation.   **Limitations:** Supported image formats are JPG, PNG, TIFF and WEBP. The resultant image cannot be bigger than the original source image. To get greater resolution, see the Upscale services.   **Options:**    * Define the crop dimensions: width and height    * Define the area of the cutout      * If the area is not defined, the cut out will be done with center-crop.    * Rotate the image      * By degrees (+180 to -180)      * The original image, after rotation, may be zoomed to fill in the area    * Flip the image: horizontally or vertically    * Choose the perspective view of the image: horizontal or vertical   **Rules:**    * If you choose an Edit setting value out of the allowed range, the default value of the field will be used instead (see documentation below).   **Source Image:**    If you plan to apply a mask to an image multiple times, we recommend you first upload the source image using the *Upload* method and then use the reference image ID. Otherwise, you can source the image by providing a file or a URL to an online image.   **Authorization:**      Requires an API key to be provided in the **X-Picsart-API-Key** request header. 

### Example

```javascript
import PicsartProgrammableImageApis from 'picsart_programmable_image_apis';
let defaultClient = PicsartProgrammableImageApis.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new PicsartProgrammableImageApis.AdjustApi();
let opts = {
  'image': "/path/to/file", // File | Source image file (binary). (If this parameter is present, the other image source parameters must be empty.)
  'imageUrl': "imageUrl_example", // String | Source image URL. (If this parameter is present, the other image source parameters must be empty.)
  'imageId': "imageId_example", // String | Source image ID of an image previously uploaded to Picsart or result image ID from a different API. (If this parameter is present, the other image source parameters must be empty.)
  'format': "'JPG'", // String | Optionally select one of the image formats (JPG is chosen if left blank). Options are as follows:   * JPG   * PNG   * WEBP 
  'mode': "mode_example", // String | For *crop* mode, the outcome image will be center-cropped with the given size (width, height). For the *resize* mode, the smallest size will be fitted to preserve the original proportion of the image. When the outcome size is not provided with width and height, no cropping or resizing will be applied (see alternative options such as rotate, flip and perspective).
  'size': 56, // Number | When defined, this parameter overrides and applies the value for both width and height.
  'width': 56, // Number | Width of outcome image. If the provided width is larger than the original width of the file, the original size of the image will be selected. When crop size is defined, but the x,y starting position is not provided, the crop will be a center-crop (i.e., equally cutting from each side).
  'height': 56, // Number | Height of outcome image. If the provided height is larger than the original width of the file, the original size of the image will be selected. When crop size is defined, but the x,y starting position is not provided, the crop will be a center-crop (i.e, equally cutting from each side).
  'flip': "flip_example", // String | Choose a way to flip the image.
  'rotate': 0, // Number | Enter a float value to rotate the image from -180 to +180. Default is 0.
  'perspectiveHorizontal': 0, // Number | The horizontal perspective after edits.
  'perspectiveVertical': 0, // Number | The vertical perspective after edits.
  'quality': 90 // Number | This refers to the level of accuracy of the image processing. The greater the quality (i.e., the larger the number), the larger the image file size. The default value is 90, which is a good compromise between quality and file size.
};
apiInstance.editPost(opts, (error, data, response) => {
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
 **mode** | **String**| For *crop* mode, the outcome image will be center-cropped with the given size (width, height). For the *resize* mode, the smallest size will be fitted to preserve the original proportion of the image. When the outcome size is not provided with width and height, no cropping or resizing will be applied (see alternative options such as rotate, flip and perspective). | [optional] 
 **size** | **Number**| When defined, this parameter overrides and applies the value for both width and height. | [optional] 
 **width** | **Number**| Width of outcome image. If the provided width is larger than the original width of the file, the original size of the image will be selected. When crop size is defined, but the x,y starting position is not provided, the crop will be a center-crop (i.e., equally cutting from each side). | [optional] 
 **height** | **Number**| Height of outcome image. If the provided height is larger than the original width of the file, the original size of the image will be selected. When crop size is defined, but the x,y starting position is not provided, the crop will be a center-crop (i.e, equally cutting from each side). | [optional] 
 **flip** | **String**| Choose a way to flip the image. | [optional] 
 **rotate** | **Number**| Enter a float value to rotate the image from -180 to +180. Default is 0. | [optional] [default to 0]
 **perspectiveHorizontal** | **Number**| The horizontal perspective after edits. | [optional] [default to 0]
 **perspectiveVertical** | **Number**| The vertical perspective after edits. | [optional] [default to 0]
 **quality** | **Number**| This refers to the level of accuracy of the image processing. The greater the quality (i.e., the larger the number), the larger the image file size. The default value is 90, which is a good compromise between quality and file size. | [optional] [default to 90]

### Return type

[**RemovebgPost200Response**](RemovebgPost200Response.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

