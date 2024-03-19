# PicsartProgrammableImageApis.EffectsApi

All URIs are relative to *https://api.picsart.io/tools/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**effectsGet**](EffectsApi.md#effectsGet) | **GET** /effects | Effects
[**effectsPost**](EffectsApi.md#effectsPost) | **POST** /effects | 
[**effectsPreviewsPost**](EffectsApi.md#effectsPreviewsPost) | **POST** /effects/previews | Effect Previews
[**masksPost**](EffectsApi.md#masksPost) | **POST** /masks | 
[**masksPreviewsPost**](EffectsApi.md#masksPreviewsPost) | **POST** /masks/previews | 



## effectsGet

> EffectsGet200Response effectsGet()

Effects

**Service Description:**   This service retrieves a list of supported effects.  **Authorization:**     Requires an API key to be provided in the **X-Picsart-API-Key** request header. 

### Example

```javascript
import PicsartProgrammableImageApis from 'picsart_programmable_image_apis';
let defaultClient = PicsartProgrammableImageApis.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new PicsartProgrammableImageApis.EffectsApi();
apiInstance.effectsGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**EffectsGet200Response**](EffectsGet200Response.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## effectsPost

> RemovebgPost200Response effectsPost(opts)



**Service Description:**   With the *effects* service you can apply up to 24 different effects to an image.  **Limitations:** Works best with color-rich photos. Supported source image formats are JPG, PNG, TIFF and WEBP.   **Examples:**   Examples of where effects can be used include the following:   * Works with all photo types   * Makes any photo stand out   * Helps with branding   * Great with look up tables (LUT)  **Options:** Choose the effect to apply  **Source Image:**   If you plan to apply effects to an image several times, we recommend you first upload the source image using the *Upload* method and then use the reference image ID. Otherwise, you can source the image by providing a file or a URL to an online image.  **Authorization:**     Requires an API key to be provided in the **X-Picsart-API-Key** request header. 

### Example

```javascript
import PicsartProgrammableImageApis from 'picsart_programmable_image_apis';
let defaultClient = PicsartProgrammableImageApis.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new PicsartProgrammableImageApis.EffectsApi();
let opts = {
  'image': "/path/to/file", // File | Source image file (binary). (If this parameter is present, the other image source parameters must be empty.)
  'imageUrl': "imageUrl_example", // String | Source image URL. (If this parameter is present, the other image source parameters must be empty.)
  'imageId': "imageId_example", // String | Source image ID of an image previously uploaded to Picsart or result image ID from a different API. (If this parameter is present, the other image source parameters must be empty.)
  'effectName': "effectName_example", // String | Choose an effect from the dropdown menu. The list of effects are as follows   * apr1   * apr2   * apr3   * brnz1   * brnz2   * brnz3   * cyber1   * cyber2   * dodger   * food1   * food2   * icy1   * icy2   * icy3   * mnch1   * mnch2   * mnch3   * noise   * nature1   * nature2   * ntrl1   * ntrl2   * saturation   * sft1   * sft2   * sft3   * sft4   * shadow1   * shadow2   * sketcher1   * sketcher2   * tl1   * tl2   * urban1   * urban2   * water1   * water2   * pixelize   * popart 
  'format': "'JPG'" // String | Optionally select one of the output image formats (JPG is chosen if left blank). Options are as follows:   * JPG   * PNG   * WEBP 
};
apiInstance.effectsPost(opts, (error, data, response) => {
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
 **effectName** | **String**| Choose an effect from the dropdown menu. The list of effects are as follows   * apr1   * apr2   * apr3   * brnz1   * brnz2   * brnz3   * cyber1   * cyber2   * dodger   * food1   * food2   * icy1   * icy2   * icy3   * mnch1   * mnch2   * mnch3   * noise   * nature1   * nature2   * ntrl1   * ntrl2   * saturation   * sft1   * sft2   * sft3   * sft4   * shadow1   * shadow2   * sketcher1   * sketcher2   * tl1   * tl2   * urban1   * urban2   * water1   * water2   * pixelize   * popart  | [optional] 
 **format** | **String**| Optionally select one of the output image formats (JPG is chosen if left blank). Options are as follows:   * JPG   * PNG   * WEBP  | [optional] [default to &#39;JPG&#39;]

### Return type

[**RemovebgPost200Response**](RemovebgPost200Response.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## effectsPreviewsPost

> RemovebgPost200Response effectsPreviewsPost(opts)

Effect Previews

**Service Description:**   The *effects previews* service applies an effect to a given input image and returns a preview (i.e., thumbnail) of the effect.  **Limitations:** Can apply up to 10 effects to an image in one call. To minimize the networking and processing loads, use the same input image size as the desired preview size. Supported source image formats are JPG, PNG, TIFF and WEBP.   **Minimums/Maximums:**   * Maximum height or width of preview image is 240px  **Options:**   * You can set the size of the preview image   * There are 24 different effects to choose from  **Source Image:**   If you want to preview more than 10 effects, we recommend you first upload the source image using the *Upload* method and then use the reference image ID. Otherwise, you can source the image by providing a file or a URL to an online image.  **Authorization:**     Requires an API key to be provided in the **X-Picsart-API-Key** request header. 

### Example

```javascript
import PicsartProgrammableImageApis from 'picsart_programmable_image_apis';
let defaultClient = PicsartProgrammableImageApis.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new PicsartProgrammableImageApis.EffectsApi();
let opts = {
  'image': "/path/to/file", // File | Source image file (binary). (If this parameter is present, the other image source parameters must be empty.)
  'imageUrl': "imageUrl_example", // String | Source image URL. (If this parameter is present, the other image source parameters must be empty.)
  'imageId': "imageId_example", // String | Source image ID of an image previously uploaded to Picsart or result image ID from a different API. (If this parameter is present, the other image source parameters must be empty.)
  'effectNames': ["null"], // [String] | Select up to 10 effects to preview by holding down the Ctrl key. The list of effects are as follows:   * icy1   * icy2   * icy3   * brnz1   * brnz2   * brnz3   * mnch1   * mnch2   * mnch3   * noise   * saturation   * cyber1   * cyber2   * food1   * food2   * nature1   * nature2   * urban1   * urban2   * water1   * water2   * shadow1   * shadow2   * sketcher1   * sketcher2 
  'previewSize': 56, // Number | Enter the width of the preview image. The max value is 240px. The default is 120px.
  'format': "'JPG'" // String | Optionally select one of the image formats (JPG is default). Options are as follows:   * JPG   * PNG   * WEBP 
};
apiInstance.effectsPreviewsPost(opts, (error, data, response) => {
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
 **effectNames** | [**[String]**](String.md)| Select up to 10 effects to preview by holding down the Ctrl key. The list of effects are as follows:   * icy1   * icy2   * icy3   * brnz1   * brnz2   * brnz3   * mnch1   * mnch2   * mnch3   * noise   * saturation   * cyber1   * cyber2   * food1   * food2   * nature1   * nature2   * urban1   * urban2   * water1   * water2   * shadow1   * shadow2   * sketcher1   * sketcher2  | [optional] 
 **previewSize** | **Number**| Enter the width of the preview image. The max value is 240px. The default is 120px. | [optional] 
 **format** | **String**| Optionally select one of the image formats (JPG is default). Options are as follows:   * JPG   * PNG   * WEBP  | [optional] [default to &#39;JPG&#39;]

### Return type

[**RemovebgPost200Response**](RemovebgPost200Response.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## masksPost

> RemovebgPost200Response masksPost(mask, opts)



**Service Description:**   The *masks* service applies a mask to an image.  **Limitations:** Supported source image formats are JPG, PNG, TIFF and WEBP.   **Options:** Each mask application offers five options:  * Blend: determines the appearance of the mask (7 choices)  * Mask type: determines the mask type (11 choices)  * Opacity: determines the opaqueness of the mask (0 to 100)  * Hue: determines the hue of the mask (-180 to 180)  * Mask flip: gives options to flip the mask (5 choices)  **Source Image:**   If you plan to apply a mask to an image multiple times, we recommend you first upload the source image using the *Upload* method and then use the reference image ID. Otherwise, you can source the image by providing a file or a URL to an online image.  **Authorization:**     Requires an API key to be provided in the **X-Picsart-API-Key** request header. 

### Example

```javascript
import PicsartProgrammableImageApis from 'picsart_programmable_image_apis';
let defaultClient = PicsartProgrammableImageApis.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new PicsartProgrammableImageApis.EffectsApi();
let mask = "mask_example"; // String | Select one of the mask types from the dropdown list. The options are as follows:   * lace1   * lace2   * lace3   * lace4   * shdw2   * shdw17   * rpl3   * rpl5   * prsm3   * prsm9   * prsm10 
let opts = {
  'image': "/path/to/file", // File | Source image file (binary). (If this parameter is present, the other image source parameters must be empty.)
  'imageUrl': "imageUrl_example", // String | Source image URL. (If this parameter is present, the other image source parameters must be empty.)
  'imageId': "imageId_example", // String | Source image ID of an image previously uploaded to Picsart or result image ID from a different API. (If this parameter is present, the other image source parameters must be empty.)
  'format': "'JPG'", // String | Optionally select one of the image formats (JPG is default). Options are as follows:   * JPG   * PNG   * WEBP 
  'blend': "'screen'", // String | Select one of the appearance types from the dropdown list (screen is chosen if left blank). The options are as follows:   * normal   * screen   * overlay   * multiply   * darken   * lighten   * add 
  'opacity': 100, // Number | Enter an integer value from 0 to +100. The larger the number, the greater the opacity. Default is 100.
  'hue': 0, // Number | Enter an integer value from -180 to +180. Default is 0.
  'maskFlip': "maskFlip_example" // String | Choose a mask flip option. The choices are as follows.   * left   * right   * mirror horizontal   * mirror vertical   * turnaround 
};
apiInstance.masksPost(mask, opts, (error, data, response) => {
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
 **mask** | **String**| Select one of the mask types from the dropdown list. The options are as follows:   * lace1   * lace2   * lace3   * lace4   * shdw2   * shdw17   * rpl3   * rpl5   * prsm3   * prsm9   * prsm10  | 
 **image** | **File**| Source image file (binary). (If this parameter is present, the other image source parameters must be empty.) | [optional] 
 **imageUrl** | **String**| Source image URL. (If this parameter is present, the other image source parameters must be empty.) | [optional] 
 **imageId** | **String**| Source image ID of an image previously uploaded to Picsart or result image ID from a different API. (If this parameter is present, the other image source parameters must be empty.) | [optional] 
 **format** | **String**| Optionally select one of the image formats (JPG is default). Options are as follows:   * JPG   * PNG   * WEBP  | [optional] [default to &#39;JPG&#39;]
 **blend** | **String**| Select one of the appearance types from the dropdown list (screen is chosen if left blank). The options are as follows:   * normal   * screen   * overlay   * multiply   * darken   * lighten   * add  | [optional] [default to &#39;screen&#39;]
 **opacity** | **Number**| Enter an integer value from 0 to +100. The larger the number, the greater the opacity. Default is 100. | [optional] [default to 100]
 **hue** | **Number**| Enter an integer value from -180 to +180. Default is 0. | [optional] [default to 0]
 **maskFlip** | **String**| Choose a mask flip option. The choices are as follows.   * left   * right   * mirror horizontal   * mirror vertical   * turnaround  | [optional] 

### Return type

[**RemovebgPost200Response**](RemovebgPost200Response.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## masksPreviewsPost

> RemovebgPost200Response masksPreviewsPost(mask, opts)



**Description:**   The *masks previews* service applies mask effects to a given input image and returns a preview (i.e., thumbnail) of the effect.  **Limitations:** To minimize the networking and processing loads, use the same input image size as the desired preview size. Supported source image formats are JPG, PNG, TIFF and WEBP.   **Minimums/Maximums:**   * Maximum height or width of preview image is 240px  **Options:**   * You can set the size of the preview image   * You can choose blend which determines the appearance of the mask   * You can choose mask type   * You can set the mask&#39;s opacity   * You can set the mask&#39;s hue   * You can choose a mask flip  **Source Image:**   If you want to preview multiple effects of the same image, we recommend you first upload the source image using the *Upload* method and then use the reference image ID. Otherwise, you can source the image by providing a file or a URL to an online image.  **Authorization:**     Requires an API key to be provided in the **X-Picsart-API-Key** request header. 

### Example

```javascript
import PicsartProgrammableImageApis from 'picsart_programmable_image_apis';
let defaultClient = PicsartProgrammableImageApis.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new PicsartProgrammableImageApis.EffectsApi();
let mask = ["null"]; // [String] | Select up to 10 mask types from the list by holding down Ctrl. The options are as follows   * lace1   * lace4   * shdw2   * shdw17   * fold5   * fold9   * rpl3   * rpl5   * prsm3   * prsm9   * prsm10 
let opts = {
  'image': "/path/to/file", // File | Source image file (binary). (If this parameter is present, the other image source parameters must be empty.)
  'imageUrl': "imageUrl_example", // String | Source image URL. (If this parameter is present, the other image source parameters must be empty.)
  'imageId': "imageId_example", // String | Source image ID of an image previously uploaded to Picsart or result image ID from a different API. (If this parameter is present, the other image source parameters must be empty.)
  'format': "'JPG'", // String | Optionally select one of the image formats (JPG is chosen if left blank). Options are as follows:   * JPG   * PNG   * WEBP 
  'blend': "'screen'", // String | Select one of the appearance types from the dropdown list (it will be _screen_ if left blank). The options are as follows.   * normal   * screen   * overlay   * multiply   * darken   * lighten   * add 
  'opacity': 100, // Number | Enter an integer value from 0 to +100. The larger the number, the greater the opacity.
  'hue': 0, // Number | Enter an integer value from -180 to +180.
  'maskFlip': "maskFlip_example", // String | Choose a mask flip option. The choices are as follows.   * left   * right   * mirror horizontal   * mirror vertical   * turnaround 
  'previewSize': 120 // Number | Enter the max size for the width or height of the preview image. The max value is 240px. If left blank it's 120px.
};
apiInstance.masksPreviewsPost(mask, opts, (error, data, response) => {
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
 **mask** | [**[String]**](String.md)| Select up to 10 mask types from the list by holding down Ctrl. The options are as follows   * lace1   * lace4   * shdw2   * shdw17   * fold5   * fold9   * rpl3   * rpl5   * prsm3   * prsm9   * prsm10  | 
 **image** | **File**| Source image file (binary). (If this parameter is present, the other image source parameters must be empty.) | [optional] 
 **imageUrl** | **String**| Source image URL. (If this parameter is present, the other image source parameters must be empty.) | [optional] 
 **imageId** | **String**| Source image ID of an image previously uploaded to Picsart or result image ID from a different API. (If this parameter is present, the other image source parameters must be empty.) | [optional] 
 **format** | **String**| Optionally select one of the image formats (JPG is chosen if left blank). Options are as follows:   * JPG   * PNG   * WEBP  | [optional] [default to &#39;JPG&#39;]
 **blend** | **String**| Select one of the appearance types from the dropdown list (it will be _screen_ if left blank). The options are as follows.   * normal   * screen   * overlay   * multiply   * darken   * lighten   * add  | [optional] [default to &#39;screen&#39;]
 **opacity** | **Number**| Enter an integer value from 0 to +100. The larger the number, the greater the opacity. | [optional] [default to 100]
 **hue** | **Number**| Enter an integer value from -180 to +180. | [optional] [default to 0]
 **maskFlip** | **String**| Choose a mask flip option. The choices are as follows.   * left   * right   * mirror horizontal   * mirror vertical   * turnaround  | [optional] 
 **previewSize** | **Number**| Enter the max size for the width or height of the preview image. The max value is 240px. If left blank it&#39;s 120px. | [optional] [default to 120]

### Return type

[**RemovebgPost200Response**](RemovebgPost200Response.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

