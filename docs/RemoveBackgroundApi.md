# PicsartProgrammableImageApis.RemoveBackgroundApi

All URIs are relative to *https://api.picsart.io/tools/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**removebgPost**](RemoveBackgroundApi.md#removebgPost) | **POST** /removebg | Remove &amp; Change Background



## removebgPost

> RemovebgPost200Response removebgPost(opts)

Remove &amp; Change Background

Discover the magic of seamless background removal with our removebg service, powered by cutting-edge AI technology. Our sophisticated algorithm effortlessly identifies and isolates the foreground,  ensuring every detail from the delicate intricacies of jewelry to the finest strands of hair is captured with unparalleled precision.  Designed to excel across a vast array of use cases, our service guarantees immaculate cutouts,  whether for professional product photos, dynamic campaign graphics, or personal images meant for creative exploration.  Experience flawless edges and exceptional detail preservation every time, elevating your images beyond the ordinary.    **Limitations:**    The recommended composition of an Image, in order to be optimally processed using the \&quot;removebg\&quot; service, is:   * less busy background   * high contrast (background/foreground)   * background/foreground is distinguishable by naked eye        The foreground should be visually clear, high contrast with relatively sharp edges. The foreground should also be comparably big in the photo. Supported source image formats are JPG, PNG, TIFF and WEBP.   **Examples:**    Examples of where the remove background service can be utilized include the following:   * Animals   * Products   * Apparel   * Person   * Cars   * Furniture  **Options:**   * You have two options for removing the background, either \&quot;cutout\&quot; or \&quot;mask\&quot;   * You can control background color   * You can control background blur   * You can control background height and width   * You have two scaling options, either \&quot;fit\&quot; or \&quot;fill\&quot;  **Source Image:**     If you plan to remove the background several times using different parameters from the list below, we recommend you first upload the source image using the *Upload* method and then use the reference image ID. Otherwise, you can source the image by providing a file or a URL to an online image.  **Authorization:**       Start transforming your images today! Just remember, accessing our powerful API requires an API key.    Make sure it&#39;s included in your request header **X-Picsart-API-Key** for smooth authorization.    This key unlocks the full potential of our remove background service,    ensuring you can seamlessly integrate these capabilities into your own platform.  Discover the possibilities with Picsart and transform the way you work with images. Whether it&#39;s for a product for sale, graphical materials for your best campaign, or just personal images for fun editing, you&#39;ll get clear edges with awesome detail preservation with our remove background service. 

### Example

```javascript
import PicsartProgrammableImageApis from 'picsart_programmable_image_apis';
let defaultClient = PicsartProgrammableImageApis.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new PicsartProgrammableImageApis.RemoveBackgroundApi();
let opts = {
  'image': "/path/to/file", // File | Source image file (binary). (If this parameter is present, the other image source parameters must be empty.)
  'imageUrl': "imageUrl_example", // String | Source image URL. (If this parameter is present, the other image source parameters must be empty.)
  'imageId': "imageId_example", // String | Source image ID of an image previously uploaded to Picsart or result image ID from a different API. (If this parameter is present, the other image source parameters must be empty.)
  'outputType': "'cutout'", // String | Select one of the two output options. If you submit a photo of a person, **cutout** returns the person as a sticker while **mask** returns a mask photo of the person. 
  'bgImage': "/path/to/file", // File | Source image file (binary). (If this parameter is present, the other image source parameters must be empty.) This only has an effect when output=cutout.
  'bgImageUrl': "bgImageUrl_example", // String | Source image URL. (If this parameter is present, the other image source parameters must be empty.) If this has a value, the output value is dismissed.
  'bgImageId': "bgImageId_example", // String | Source image ID of an image previously uploaded to Picsart or result image ID from a different API. (If this parameter is present, the other image source parameters must be empty.) See /upload method. If this has a value, the output value is dismissed.
  'bgColor': "bgColor_example", // String | Can be a hexcolor code (e.g., #82d5fa, #fff) or a color name (e.g., blue). For semi-transparency, 4-/8-digit hexcodes are also supported (e.g., #18d4ff87). (If this parameter is present, the other bg_ parameters must be empty). 
  'bgBlur': 0, // Number | Enter an integer value from 0 to +100.
  'bgWidth': 56, // Number | Size, in pixels, for the width. If left blank, the background is left at its original width. 
  'bgHeight': 56, // Number | Size, in pixels, for the height. If left blank, the background is left at its original height. 
  'scale': "'fit'", // String | Fit is where the longer side (width/height) fits the background. Fill is where the shorter side fits the background. Fit is the default. 
  'format': "'PNG'" // String | Optionally select one of the image formats (PNG is chosen if left blank). Options are as follows:   * JPG   * PNG   * WEBP 
};
apiInstance.removebgPost(opts, (error, data, response) => {
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
 **outputType** | **String**| Select one of the two output options. If you submit a photo of a person, **cutout** returns the person as a sticker while **mask** returns a mask photo of the person.  | [optional] [default to &#39;cutout&#39;]
 **bgImage** | **File**| Source image file (binary). (If this parameter is present, the other image source parameters must be empty.) This only has an effect when output&#x3D;cutout. | [optional] 
 **bgImageUrl** | **String**| Source image URL. (If this parameter is present, the other image source parameters must be empty.) If this has a value, the output value is dismissed. | [optional] 
 **bgImageId** | **String**| Source image ID of an image previously uploaded to Picsart or result image ID from a different API. (If this parameter is present, the other image source parameters must be empty.) See /upload method. If this has a value, the output value is dismissed. | [optional] 
 **bgColor** | **String**| Can be a hexcolor code (e.g., #82d5fa, #fff) or a color name (e.g., blue). For semi-transparency, 4-/8-digit hexcodes are also supported (e.g., #18d4ff87). (If this parameter is present, the other bg_ parameters must be empty).  | [optional] 
 **bgBlur** | **Number**| Enter an integer value from 0 to +100. | [optional] [default to 0]
 **bgWidth** | **Number**| Size, in pixels, for the width. If left blank, the background is left at its original width.  | [optional] 
 **bgHeight** | **Number**| Size, in pixels, for the height. If left blank, the background is left at its original height.  | [optional] 
 **scale** | **String**| Fit is where the longer side (width/height) fits the background. Fill is where the shorter side fits the background. Fit is the default.  | [optional] [default to &#39;fit&#39;]
 **format** | **String**| Optionally select one of the image formats (PNG is chosen if left blank). Options are as follows:   * JPG   * PNG   * WEBP  | [optional] [default to &#39;PNG&#39;]

### Return type

[**RemovebgPost200Response**](RemovebgPost200Response.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

