# PicsartProgrammableImageApis.UtilitiesApi

All URIs are relative to *https://api.picsart.io/tools/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**balanceGet**](UtilitiesApi.md#balanceGet) | **GET** /balance | Balance
[**uploadPost**](UtilitiesApi.md#uploadPost) | **POST** /upload | 



## balanceGet

> BalanceGet200Response balanceGet()

Balance

**Service Description:**   Check your balance of credits.  **Authorization:**     Requires an API key to be provided in the **X-Picsart-API-Key** request header. 

### Example

```javascript
import PicsartProgrammableImageApis from 'picsart_programmable_image_apis';
let defaultClient = PicsartProgrammableImageApis.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new PicsartProgrammableImageApis.UtilitiesApi();
apiInstance.balanceGet((error, data, response) => {
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

[**BalanceGet200Response**](BalanceGet200Response.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## uploadPost

> RemovebgPost200Response uploadPost(opts)



**Service Description**   The *upload* service is used to upload an image when you want to apply several transformations to it.   By uploading an image first, you&#39;ll receive a transaction_id which you can use repeatedly for transformations and thereby avoid having to upload an image for each and every one.   If you&#39;re sure you only want to do a single transformation to an image, there&#39;s no benefit to using this service. Just jump right to that service.   **Limitations:** Supported source image formats are JPG, PNG, TIFF and WEBP.     **Source Image:**    You can source the image by providing a file or a URL to an online image.   **Authorization:**      Requires an API key to be provided in the **X-Picsart-API-Key** request header. 

### Example

```javascript
import PicsartProgrammableImageApis from 'picsart_programmable_image_apis';
let defaultClient = PicsartProgrammableImageApis.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new PicsartProgrammableImageApis.UtilitiesApi();
let opts = {
  'image': "/path/to/file", // File | Source image file (binary). (If this parameter is present, the other image source parameters must be empty.)
  'imageUrl': "imageUrl_example" // String | Source image URL. (If this parameter is present, the other image source parameters must be empty.)
};
apiInstance.uploadPost(opts, (error, data, response) => {
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

### Return type

[**RemovebgPost200Response**](RemovebgPost200Response.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

