# picsart_programmable_image_apis

PicsartProgrammableImageApis - JavaScript client for picsart_programmable_image_apis
## Introduction
Picsart Programmable Image APIs is a simple HTTP interface. The results are usually the URL of the output image.
To get started, first you need to [get your API Key](https://picsart.io/login). Below you can find the sample codes to get started easily.
Reference docs are given with more information about available parameters that can be adjusted.

## Sample Run
```
curl -X POST \\
'https://api.picsart.io/tools/1.0/removebg' \\
-H 'x-picsart-api-key: APIKEYHERE' \\
-F 'output_type=cutout' \\
-F 'image_url=https://cdn140.picsart.com/13902645939997000779.jpg'
```

## API Key
To try out our services you will need to 
* [create an account](https://picsart.io/accounts/login),
* create an app under [My Apps](https://picsart.io/my-apps/)
* and get the API key required for authorization.

You can find more details about this process in the [Quickstart](https://picsart.io/api-quickstart).

## Input File
Input images of type JPG, PNG and WEBP are supported. Input image file size is 100 MB max.
References to uploaded image files will be valid and can be used within 24 hours.

## Output Formats
You can request one of three formats, JPG, PNG, WEBP, via the format parameter. The result files will be available for use for 24 hours.

## Rate Limit
Users can process up to 100 requests per month during the demo run. When the rate limit is hit, the API will return 429 code with the info:
  ```
     {
       \"fault\": {
         \"faultstring\": \"Rate limit quota violation. Quota limit  exceeded. Identifier : _default\",
          \"detail\": {
            \"errorcode\": \"policies.ratelimit.QuotaViolation\"
          }
        }
     }      
  ```

## Authentication
Authentication should be done via the provided API Key. API Key can be sent as a header:
 ```
 curl 'https://api.picsart.io/tools/1.0/effects' -H 'x-picsart-api-key: APIKEY'
 ```

[Developer Guidelines](https://picsart.io/terms)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install picsart_programmable_image_apis --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your picsart_programmable_image_apis from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var PicsartProgrammableImageApis = require('picsart_programmable_image_apis');

var defaultClient = PicsartProgrammableImageApis.ApiClient.instance;
// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix['X-Picsart-API-Key'] = "Token"

var api = new PicsartProgrammableImageApis.AdjustApi()
var opts = {
  'image': "/path/to/file", // {File} Source image file (binary). (If this parameter is present, the other image source parameters must be empty.)
  'imageUrl': "imageUrl_example", // {String} Source image URL. (If this parameter is present, the other image source parameters must be empty.)
  'imageId': "imageId_example", // {String} Source image ID of an image previously uploaded to Picsart or result image ID from a different API. (If this parameter is present, the other image source parameters must be empty.)
  'brightness': 0, // {Number} Enter an integer value from -100 to +100.
  'contrast': 0, // {Number} Enter an integer value from -100 to +100.
  'clarity': 0, // {Number} Enter an integer value from -100 to +100.
  'saturation': 0, // {Number} Enter an integer value from -100 to +100.
  'hue': 0, // {Number} Enter an integer value from -100 to +100.
  'shadows': 0, // {Number} Enter an integer value from -100 to +100.
  'highlights': 0, // {Number} Enter an integer value from -100 to +100.
  'temperature': 0, // {Number} Enter an integer value from -100 to +100.
  'sharpen': 0, // {Number} Enter an integer value from 0 to +100.
  'noise': 0, // {Number} Enter an integer value from 0 to +100.
  'vignette': 0, // {Number} Enter an integer value from 0 to +100.
  'format': "'JPG'" // {String} Optionally select one of the image formats (JPG is default). Options are as follows:   * JPG   * PNG   * WEBP 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.adjustPost(opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.picsart.io/tools/1.0*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*PicsartProgrammableImageApis.AdjustApi* | [**adjustPost**](docs/AdjustApi.md#adjustPost) | **POST** /adjust | Adjust
*PicsartProgrammableImageApis.AdjustApi* | [**editPost**](docs/AdjustApi.md#editPost) | **POST** /edit | Basic Editing
*PicsartProgrammableImageApis.ContentGenerationApi* | [**backgroundTexturePost**](docs/ContentGenerationApi.md#backgroundTexturePost) | **POST** /background/texture | Texture Generator
*PicsartProgrammableImageApis.ConversionApi* | [**vectorizerPost**](docs/ConversionApi.md#vectorizerPost) | **POST** /vectorizer | Image Vectorizer
*PicsartProgrammableImageApis.EffectsApi* | [**effectsGet**](docs/EffectsApi.md#effectsGet) | **GET** /effects | Effects
*PicsartProgrammableImageApis.EffectsApi* | [**effectsPost**](docs/EffectsApi.md#effectsPost) | **POST** /effects | 
*PicsartProgrammableImageApis.EffectsApi* | [**effectsPreviewsPost**](docs/EffectsApi.md#effectsPreviewsPost) | **POST** /effects/previews | Effect Previews
*PicsartProgrammableImageApis.EffectsApi* | [**masksPost**](docs/EffectsApi.md#masksPost) | **POST** /masks | 
*PicsartProgrammableImageApis.EffectsApi* | [**masksPreviewsPost**](docs/EffectsApi.md#masksPreviewsPost) | **POST** /masks/previews | 
*PicsartProgrammableImageApis.PhotoEnhancementApi* | [**enhanceFacePost**](docs/PhotoEnhancementApi.md#enhanceFacePost) | **POST** /enhance/face | Face Enhancement
*PicsartProgrammableImageApis.PhotoEnhancementApi* | [**upscaleEnhancePost**](docs/PhotoEnhancementApi.md#upscaleEnhancePost) | **POST** /upscale/enhance | Ultra Enhance
*PicsartProgrammableImageApis.PhotoEnhancementApi* | [**upscalePost**](docs/PhotoEnhancementApi.md#upscalePost) | **POST** /upscale | Upscale
*PicsartProgrammableImageApis.PhotoEnhancementApi* | [**upscaleUltraPost**](docs/PhotoEnhancementApi.md#upscaleUltraPost) | **POST** /upscale/ultra | Upscale Ultra
*PicsartProgrammableImageApis.PhotoEnhancementApi* | [**upscaleUltraTransactionIdGet**](docs/PhotoEnhancementApi.md#upscaleUltraTransactionIdGet) | **GET** /upscale/ultra/{transaction_id} | 
*PicsartProgrammableImageApis.RemoveBackgroundApi* | [**removebgPost**](docs/RemoveBackgroundApi.md#removebgPost) | **POST** /removebg | Remove &amp; Change Background
*PicsartProgrammableImageApis.StyleTransferApi* | [**styletransferPost**](docs/StyleTransferApi.md#styletransferPost) | **POST** /styletransfer | Style Transfer
*PicsartProgrammableImageApis.SurfacemapApi* | [**surfacemapPost**](docs/SurfacemapApi.md#surfacemapPost) | **POST** /surfacemap | Surfacemap Image
*PicsartProgrammableImageApis.UtilitiesApi* | [**balanceGet**](docs/UtilitiesApi.md#balanceGet) | **GET** /balance | Balance
*PicsartProgrammableImageApis.UtilitiesApi* | [**uploadPost**](docs/UtilitiesApi.md#uploadPost) | **POST** /upload | 


## Documentation for Models

 - [PicsartProgrammableImageApis.BalanceGet200Response](docs/BalanceGet200Response.md)
 - [PicsartProgrammableImageApis.EffectsGet200Response](docs/EffectsGet200Response.md)
 - [PicsartProgrammableImageApis.EffectsGet200ResponseDataInner](docs/EffectsGet200ResponseDataInner.md)
 - [PicsartProgrammableImageApis.Error](docs/Error.md)
 - [PicsartProgrammableImageApis.Model401Error](docs/Model401Error.md)
 - [PicsartProgrammableImageApis.RemovebgPost200Response](docs/RemovebgPost200Response.md)
 - [PicsartProgrammableImageApis.RemovebgPost200ResponseData](docs/RemovebgPost200ResponseData.md)
 - [PicsartProgrammableImageApis.UpscaleUltraPost202Response](docs/UpscaleUltraPost202Response.md)


## Documentation for Authorization


Authentication schemes defined for the API:
### apiKey


- **Type**: API key
- **API key parameter name**: X-Picsart-API-Key
- **Location**: HTTP header

