# PhotoRoomApi.DefaultApi

All URIs are relative to *https://beta-sdk.photoroom.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountDetails**](DefaultApi.md#accountDetails) | **GET** /v1/account | Account Details
[**editImageGet**](DefaultApi.md#editImageGet) | **GET** /v1/render | [BETA] Edit Image v1
[**editImagePost**](DefaultApi.md#editImagePost) | **POST** /v1/render | [BETA] Edit Image v1
[**instantBackgroundGet**](DefaultApi.md#instantBackgroundGet) | **GET** /v1/instant-backgrounds | [BETA] Generate Background
[**instantBackgroundPost**](DefaultApi.md#instantBackgroundPost) | **POST** /v1/instant-backgrounds | [BETA] Generate Background
[**removeBackground**](DefaultApi.md#removeBackground) | **POST** /v1/segment | Remove Background
[**v2EditGet**](DefaultApi.md#v2EditGet) | **GET** /v2/edit | [BETA] Edit Image v2
[**v2EditPost**](DefaultApi.md#v2EditPost) | **POST** /v2/edit | [BETA] Edit Image v2



## accountDetails

> AccountDetails200Response accountDetails()

Account Details

Get current account details, including remaining credits balance and monthly quota

### Example

```javascript
import PhotoRoomApi from 'photo_room_api';
let defaultClient = PhotoRoomApi.ApiClient.instance;
// Configure API key authorization: x-api-key
let x-api-key = defaultClient.authentications['x-api-key'];
x-api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//x-api-key.apiKeyPrefix = 'Token';

let apiInstance = new PhotoRoomApi.DefaultApi();
apiInstance.accountDetails((error, data, response) => {
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

[**AccountDetails200Response**](AccountDetails200Response.md)

### Authorization

[x-api-key](../README.md#x-api-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## editImageGet

> File editImageGet(templateId, opts)

[BETA] Edit Image v1

Render an image using a template. A detailed tutorial is available [here](https://www.photoroom.com/api/docs/image-editing-api-documentation)

### Example

```javascript
import PhotoRoomApi from 'photo_room_api';
let defaultClient = PhotoRoomApi.ApiClient.instance;
// Configure API key authorization: x-api-key
let x-api-key = defaultClient.authentications['x-api-key'];
x-api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//x-api-key.apiKeyPrefix = 'Token';

let apiInstance = new PhotoRoomApi.DefaultApi();
let templateId = 592dd982-4a1b-4cd9-ab11-21481d5a0064; // String | 
let opts = {
  'apiKey': 4a5b60936c3a934hqb3cf5838b390dc3d4dfc9da, // String | 
  'imageUrl': https://s3.amazonaws.com/a.storyblok.com/f/191576/1024x1024/d25e1a99d7/sample-05.png, // String | 
  'conceptUrl': https://s3.amazonaws.com/a.storyblok.com/f/191576/1024x1024/d25e1a99d7/sample-05.png // String | 
};
apiInstance.editImageGet(templateId, opts, (error, data, response) => {
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
 **templateId** | **String**|  | 
 **apiKey** | **String**|  | [optional] 
 **imageUrl** | **String**|  | [optional] 
 **conceptUrl** | **String**|  | [optional] 

### Return type

**File**

### Authorization

[x-api-key](../README.md#x-api-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: image/png, application/json


## editImagePost

> File editImagePost(templateId, opts)

[BETA] Edit Image v1

Render an image using a template. A detailed tutorial is available [here](https://www.photoroom.com/api/docs/image-editing-api-documentation)

### Example

```javascript
import PhotoRoomApi from 'photo_room_api';
let defaultClient = PhotoRoomApi.ApiClient.instance;
// Configure API key authorization: x-api-key
let x-api-key = defaultClient.authentications['x-api-key'];
x-api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//x-api-key.apiKeyPrefix = 'Token';

let apiInstance = new PhotoRoomApi.DefaultApi();
let templateId = "templateId_example"; // String | The ID of the template to render
let opts = {
  'imageFile': "/path/to/file", // File | The image file to render
  'imageUrl': "imageUrl_example" // String | Deprecated, use `imageFile` instead.
};
apiInstance.editImagePost(templateId, opts, (error, data, response) => {
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
 **templateId** | **String**| The ID of the template to render | 
 **imageFile** | **File**| The image file to render | [optional] 
 **imageUrl** | **String**| Deprecated, use &#x60;imageFile&#x60; instead. | [optional] 

### Return type

**File**

### Authorization

[x-api-key](../README.md#x-api-key)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: image/png, application/json


## instantBackgroundGet

> File instantBackgroundGet(imageUrl, prompt, opts)

[BETA] Generate Background

Generate background for an image given a prompt

### Example

```javascript
import PhotoRoomApi from 'photo_room_api';
let defaultClient = PhotoRoomApi.ApiClient.instance;
// Configure API key authorization: x-api-key
let x-api-key = defaultClient.authentications['x-api-key'];
x-api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//x-api-key.apiKeyPrefix = 'Token';

let apiInstance = new PhotoRoomApi.DefaultApi();
let imageUrl = https://s3.amazonaws.com/a.storyblok.com/f/191576/1024x1024/d25e1a99d7/sample-05.png; // String | 
let prompt = A beautiful sunset; // String | 
let opts = {
  'apiKey': 4a5b60936c3a934hqb3cf5838b390dc3d4dfc9da, // String | 
  'negativePrompt': No palm trees, // String | 
  'seed': 789645120 // String | 
};
apiInstance.instantBackgroundGet(imageUrl, prompt, opts, (error, data, response) => {
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
 **imageUrl** | **String**|  | 
 **prompt** | **String**|  | 
 **apiKey** | **String**|  | [optional] 
 **negativePrompt** | **String**|  | [optional] 
 **seed** | **String**|  | [optional] 

### Return type

**File**

### Authorization

[x-api-key](../README.md#x-api-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: image/png, application/json


## instantBackgroundPost

> File instantBackgroundPost(prompt, opts)

[BETA] Generate Background

Generate background for an image given a prompt

### Example

```javascript
import PhotoRoomApi from 'photo_room_api';
let defaultClient = PhotoRoomApi.ApiClient.instance;
// Configure API key authorization: x-api-key
let x-api-key = defaultClient.authentications['x-api-key'];
x-api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//x-api-key.apiKeyPrefix = 'Token';

let apiInstance = new PhotoRoomApi.DefaultApi();
let prompt = "prompt_example"; // String | The prompt to generate the background
let opts = {
  'imageFile': "/path/to/file", // File | The image file to render
  'imageUrl': "imageUrl_example", // String | Deprecated, use `imageFile` instead.
  'negativePrompt': "negativePrompt_example", // String | Use it to guide the AI in avoiding these elements during the background generation process
  'seed': "seed_example" // String | Seed used to generate the background. Can be used to get similar looking results for the same prompt
};
apiInstance.instantBackgroundPost(prompt, opts, (error, data, response) => {
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
 **prompt** | **String**| The prompt to generate the background | 
 **imageFile** | **File**| The image file to render | [optional] 
 **imageUrl** | **String**| Deprecated, use &#x60;imageFile&#x60; instead. | [optional] 
 **negativePrompt** | **String**| Use it to guide the AI in avoiding these elements during the background generation process | [optional] 
 **seed** | **String**| Seed used to generate the background. Can be used to get similar looking results for the same prompt | [optional] 

### Return type

**File**

### Authorization

[x-api-key](../README.md#x-api-key)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: image/png, application/json


## removeBackground

> File removeBackground(opts)

Remove Background

Remove background from an image

### Example

```javascript
import PhotoRoomApi from 'photo_room_api';
let defaultClient = PhotoRoomApi.ApiClient.instance;
// Configure API key authorization: x-api-key
let x-api-key = defaultClient.authentications['x-api-key'];
x-api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//x-api-key.apiKeyPrefix = 'Token';

let apiInstance = new PhotoRoomApi.DefaultApi();
let opts = {
  'imageFile': "/path/to/file", // File | The image file to render
  'format': "'png'", // String | The format of the resulting image
  'channels': "'rgba'", // String | The channels of the resulting image
  'bgColor': "bgColor_example", // String | The background color of the resulting image. Can be a hex code (`#FF00FF`) or a HTML color (`red`, `green`, etc.)
  'size': "'full'", // String | Will resize the output to the specified size. Can be `preview` (0.25 Megapixels), `medium` (1.5 MP), `hd` (4 MP) or `full` (36 MP, can be slower for large images). Useful for mobile apps that need smaller images. Setting preview uses 0.25 credit
  'crop': "'false'" // String | If `true`, the image returned is cropped to the cutout border. Transparent pixels are removed from the border
};
apiInstance.removeBackground(opts, (error, data, response) => {
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
 **imageFile** | **File**| The image file to render | [optional] 
 **format** | **String**| The format of the resulting image | [optional] [default to &#39;png&#39;]
 **channels** | **String**| The channels of the resulting image | [optional] [default to &#39;rgba&#39;]
 **bgColor** | **String**| The background color of the resulting image. Can be a hex code (&#x60;#FF00FF&#x60;) or a HTML color (&#x60;red&#x60;, &#x60;green&#x60;, etc.) | [optional] 
 **size** | **String**| Will resize the output to the specified size. Can be &#x60;preview&#x60; (0.25 Megapixels), &#x60;medium&#x60; (1.5 MP), &#x60;hd&#x60; (4 MP) or &#x60;full&#x60; (36 MP, can be slower for large images). Useful for mobile apps that need smaller images. Setting preview uses 0.25 credit | [optional] [default to &#39;full&#39;]
 **crop** | **String**| If &#x60;true&#x60;, the image returned is cropped to the cutout border. Transparent pixels are removed from the border | [optional] [default to &#39;false&#39;]

### Return type

**File**

### Authorization

[x-api-key](../README.md#x-api-key)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: image/png, application/json


## v2EditGet

> File v2EditGet(opts)

[BETA] Edit Image v2

This endpoint processes an image, removing the background if specified, and applies various transformations such as scaling, padding, and margin adjustments. It accepts URL input for the image. The output size, background color or image, and other parameters can be customized.

### Example

```javascript
import PhotoRoomApi from 'photo_room_api';
let defaultClient = PhotoRoomApi.ApiClient.instance;
// Configure API key authorization: x-api-key
let x-api-key = defaultClient.authentications['x-api-key'];
x-api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//x-api-key.apiKeyPrefix = 'Token';

let apiInstance = new PhotoRoomApi.DefaultApi();
let opts = {
  'backgroundColor': "'transparent'", // String | Color of the background. If omitted, background will be transparent unless `background.imageUrl` or `background.imageFile` is provided. Can be a hex color without the hash sign (example: `FF0000`, `FFF`, `FF0000EE`) or color name (examples: `red`, `blue`)  Can't be provided if `removeBackground` is set to `false`
  'backgroundImageUrl': "backgroundImageUrl_example", // String | URL of the image to use as a background. The GET endpoint accepts `background.imageUrl` only. In the POST endpoint, you can specify either `background.imageUrl` or `background.imageFile`, but not both. If `background.imageUrl` is provided, neither `background.imageFile` nor `background.prompt` can be provided, and vice versa.  Can't be provided if `removeBackground` is set to `false`
  'backgroundNegativePrompt': "backgroundNegativePrompt_example", // String | A negative prompt to use for guiding the background generation process; If provided, the generation algorithm will try to avoid properties listed in the negativePrompt.
  'backgroundPrompt': "backgroundPrompt_example", // String | Prompt to use for guiding the background generation process.
  'backgroundScaling': "'fill'", // String | Whether the background should fit or fill (default) the output image If set to `fit`, the empty pixels will be transparent  Can only be provided if `background.imageUrl` or `background.imageFile` is provided
  'backgroundSeed': 3.4, // Number | Seed used to generate the background. Can be used to get similar looking results for the same prompt.
  'ignorePaddingAndSnapOnCroppedSides': true, // Boolean | If set to `true` (default), cropped sides of the subject will snap to the edges For instance, for a portrait image cropped below the elbows, the subject will be aligned at the bottom even if a bottom padding is provided (but it will still respect bottom margin)  Can't be provided if `removeBackground` is set to `false`  (See positioning section of the documentation for more information)
  'imageUrl': "imageUrl_example", // String | URL of the main image used by the API. The GET endpoint accepts `imageUrl` only. In the POST endpoint, you can specify either `imageUrl` or `imageFile`, but not both. If `imageUrl` is provided, `imageFile` can't be provided and vice versa.
  'lightingMode': "lightingMode_example", // String | Lighting mode to use on the main image used by the API. If set to `ai.auto`, the lighting will be automatically adjusted
  'margin': 0, // Number | [Advanced] Margin around the subject. Expressed in a ratio of the output image size. Unlike `padding`, margin is never ignored even on cropped sides of the subject. (See positioning section of the documentation for more information)
  'marginBottom': 3.4, // Number | [Advanced] Bottom Margin, overrides margin argument on the Bottom side if provided
  'marginLeft': 3.4, // Number | [Advanced] Left Margin, overrides margin argument on the left side
  'marginRight': 3.4, // Number | [Advanced] Right Margin, overrides margin argument on the right side if provided
  'marginTop': 3.4, // Number | [Advanced] Top Margin, overrides margin argument on the Top side if provided
  'maxHeight': 3.4, // Number | Maximum output height. Can only be provided if `outputSize` is `originalImage` or `croppedSubject`. Useful for: redimensioning while keeping the aspect ratio
  'maxWidth': 3.4, // Number | Maximum output width. Can only be provided if `outputSize` is `originalImage` or `croppedSubject`. Useful for: resizing an image while keeping the aspect ratio
  'outputSize': "'originalImage'", // String | Output size of the image. In the form of either: - `widthxheight` for a custom size (example: `200x400`) - `originalImage` to keep the original image dimensions - `croppedSubject` to use the size of the foreground dimensions after cropping around it
  'padding': 0, // Number | Padding around the subject. Unlike `margin`, it will be ignored on cropped sides of the subject if the option is enabled Expressed in a ratio of the size of the document, minus margins (similar to CSS) (See positioning section of the documentation for more information)
  'paddingBottom': 3.4, // Number | Bottom Padding, overrides padding argument on the Bottom side if provided
  'paddingLeft': 3.4, // Number | Left Padding, overrides padding argument on the left side
  'paddingRight': 3.4, // Number | Right Padding, overrides padding argument on the right side if provided
  'paddingTop': 3.4, // Number | Top Padding, overrides padding argument on the Top side if provided
  'referenceBox': "'subjectBox'", // String | [Advanced] `subjectBox` by default. When set to `originalImage`, the padding / margin will be around the original image and not the cropped subject.  It can lead to the subject disappearing when scaling is set to 'fill', for instance if the subject is on the left of a landscape image and outputSize is a square.  Most use cases don't require this option. It is useful if you'd like to maintain subject positioning in the original image.  Can't be provided if `removeBackground` is set to `false`  (See positioning section of the documentation for more information)
  'removeBackground': true, // Boolean | If enabled (default), the background of the image will be removed using PhotoRoom's award-winning algorithm
  'scaling': "'fit'", // String | Whether the subject should fit (default) or fill the output image If set to `fit`, the empty pixels will be transparent  Can only be provided if `imageUrl` or `imageFile` is provided
  'shadowMode': "shadowMode_example" // String | Shadow generation mode to use on the main image used by the API. If set to `ai.soft`, a soft shadow will be generated If set to `ai.hard`, a hard shadow will be generated If set to `ai.floating`, a floating shadow will be generated
};
apiInstance.v2EditGet(opts, (error, data, response) => {
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
 **backgroundColor** | **String**| Color of the background. If omitted, background will be transparent unless &#x60;background.imageUrl&#x60; or &#x60;background.imageFile&#x60; is provided. Can be a hex color without the hash sign (example: &#x60;FF0000&#x60;, &#x60;FFF&#x60;, &#x60;FF0000EE&#x60;) or color name (examples: &#x60;red&#x60;, &#x60;blue&#x60;)  Can&#39;t be provided if &#x60;removeBackground&#x60; is set to &#x60;false&#x60; | [optional] [default to &#39;transparent&#39;]
 **backgroundImageUrl** | **String**| URL of the image to use as a background. The GET endpoint accepts &#x60;background.imageUrl&#x60; only. In the POST endpoint, you can specify either &#x60;background.imageUrl&#x60; or &#x60;background.imageFile&#x60;, but not both. If &#x60;background.imageUrl&#x60; is provided, neither &#x60;background.imageFile&#x60; nor &#x60;background.prompt&#x60; can be provided, and vice versa.  Can&#39;t be provided if &#x60;removeBackground&#x60; is set to &#x60;false&#x60; | [optional] 
 **backgroundNegativePrompt** | **String**| A negative prompt to use for guiding the background generation process; If provided, the generation algorithm will try to avoid properties listed in the negativePrompt. | [optional] 
 **backgroundPrompt** | **String**| Prompt to use for guiding the background generation process. | [optional] 
 **backgroundScaling** | **String**| Whether the background should fit or fill (default) the output image If set to &#x60;fit&#x60;, the empty pixels will be transparent  Can only be provided if &#x60;background.imageUrl&#x60; or &#x60;background.imageFile&#x60; is provided | [optional] [default to &#39;fill&#39;]
 **backgroundSeed** | **Number**| Seed used to generate the background. Can be used to get similar looking results for the same prompt. | [optional] 
 **ignorePaddingAndSnapOnCroppedSides** | **Boolean**| If set to &#x60;true&#x60; (default), cropped sides of the subject will snap to the edges For instance, for a portrait image cropped below the elbows, the subject will be aligned at the bottom even if a bottom padding is provided (but it will still respect bottom margin)  Can&#39;t be provided if &#x60;removeBackground&#x60; is set to &#x60;false&#x60;  (See positioning section of the documentation for more information) | [optional] [default to true]
 **imageUrl** | **String**| URL of the main image used by the API. The GET endpoint accepts &#x60;imageUrl&#x60; only. In the POST endpoint, you can specify either &#x60;imageUrl&#x60; or &#x60;imageFile&#x60;, but not both. If &#x60;imageUrl&#x60; is provided, &#x60;imageFile&#x60; can&#39;t be provided and vice versa. | [optional] 
 **lightingMode** | **String**| Lighting mode to use on the main image used by the API. If set to &#x60;ai.auto&#x60;, the lighting will be automatically adjusted | [optional] 
 **margin** | **Number**| [Advanced] Margin around the subject. Expressed in a ratio of the output image size. Unlike &#x60;padding&#x60;, margin is never ignored even on cropped sides of the subject. (See positioning section of the documentation for more information) | [optional] [default to 0]
 **marginBottom** | **Number**| [Advanced] Bottom Margin, overrides margin argument on the Bottom side if provided | [optional] 
 **marginLeft** | **Number**| [Advanced] Left Margin, overrides margin argument on the left side | [optional] 
 **marginRight** | **Number**| [Advanced] Right Margin, overrides margin argument on the right side if provided | [optional] 
 **marginTop** | **Number**| [Advanced] Top Margin, overrides margin argument on the Top side if provided | [optional] 
 **maxHeight** | **Number**| Maximum output height. Can only be provided if &#x60;outputSize&#x60; is &#x60;originalImage&#x60; or &#x60;croppedSubject&#x60;. Useful for: redimensioning while keeping the aspect ratio | [optional] 
 **maxWidth** | **Number**| Maximum output width. Can only be provided if &#x60;outputSize&#x60; is &#x60;originalImage&#x60; or &#x60;croppedSubject&#x60;. Useful for: resizing an image while keeping the aspect ratio | [optional] 
 **outputSize** | **String**| Output size of the image. In the form of either: - &#x60;widthxheight&#x60; for a custom size (example: &#x60;200x400&#x60;) - &#x60;originalImage&#x60; to keep the original image dimensions - &#x60;croppedSubject&#x60; to use the size of the foreground dimensions after cropping around it | [optional] [default to &#39;originalImage&#39;]
 **padding** | **Number**| Padding around the subject. Unlike &#x60;margin&#x60;, it will be ignored on cropped sides of the subject if the option is enabled Expressed in a ratio of the size of the document, minus margins (similar to CSS) (See positioning section of the documentation for more information) | [optional] [default to 0]
 **paddingBottom** | **Number**| Bottom Padding, overrides padding argument on the Bottom side if provided | [optional] 
 **paddingLeft** | **Number**| Left Padding, overrides padding argument on the left side | [optional] 
 **paddingRight** | **Number**| Right Padding, overrides padding argument on the right side if provided | [optional] 
 **paddingTop** | **Number**| Top Padding, overrides padding argument on the Top side if provided | [optional] 
 **referenceBox** | **String**| [Advanced] &#x60;subjectBox&#x60; by default. When set to &#x60;originalImage&#x60;, the padding / margin will be around the original image and not the cropped subject.  It can lead to the subject disappearing when scaling is set to &#39;fill&#39;, for instance if the subject is on the left of a landscape image and outputSize is a square.  Most use cases don&#39;t require this option. It is useful if you&#39;d like to maintain subject positioning in the original image.  Can&#39;t be provided if &#x60;removeBackground&#x60; is set to &#x60;false&#x60;  (See positioning section of the documentation for more information) | [optional] [default to &#39;subjectBox&#39;]
 **removeBackground** | **Boolean**| If enabled (default), the background of the image will be removed using PhotoRoom&#39;s award-winning algorithm | [optional] [default to true]
 **scaling** | **String**| Whether the subject should fit (default) or fill the output image If set to &#x60;fit&#x60;, the empty pixels will be transparent  Can only be provided if &#x60;imageUrl&#x60; or &#x60;imageFile&#x60; is provided | [optional] [default to &#39;fit&#39;]
 **shadowMode** | **String**| Shadow generation mode to use on the main image used by the API. If set to &#x60;ai.soft&#x60;, a soft shadow will be generated If set to &#x60;ai.hard&#x60;, a hard shadow will be generated If set to &#x60;ai.floating&#x60;, a floating shadow will be generated | [optional] 

### Return type

**File**

### Authorization

[x-api-key](../README.md#x-api-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: image/png, application/json


## v2EditPost

> File v2EditPost(opts)

[BETA] Edit Image v2

This endpoint processes an image, removing the background if specified, and applies various transformations such as scaling, padding, and margin adjustments. It accepts binary data for the image. The output size, background color or image, and other parameters can be customized.

### Example

```javascript
import PhotoRoomApi from 'photo_room_api';
let defaultClient = PhotoRoomApi.ApiClient.instance;
// Configure API key authorization: x-api-key
let x-api-key = defaultClient.authentications['x-api-key'];
x-api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//x-api-key.apiKeyPrefix = 'Token';

let apiInstance = new PhotoRoomApi.DefaultApi();
let opts = {
  'backgroundColor': "'transparent'", // String | Color of the background. If omitted, background will be transparent unless `background.imageUrl` or `background.imageFile` is provided. Can be a hex color without the hash sign (example: `FF0000`, `FFF`, `FF0000EE`) or color name (examples: `red`, `blue`)  Can't be provided if `removeBackground` is set to `false`
  'backgroundImageUrl': "backgroundImageUrl_example", // String | URL of the image to use as a background. The GET endpoint accepts `background.imageUrl` only. In the POST endpoint, you can specify either `background.imageUrl` or `background.imageFile`, but not both. If `background.imageUrl` is provided, neither `background.imageFile` nor `background.prompt` can be provided, and vice versa.  Can't be provided if `removeBackground` is set to `false`
  'backgroundNegativePrompt': "backgroundNegativePrompt_example", // String | A negative prompt to use for guiding the background generation process; If provided, the generation algorithm will try to avoid properties listed in the negativePrompt.
  'backgroundPrompt': "backgroundPrompt_example", // String | Prompt to use for guiding the background generation process.
  'backgroundScaling': "'fill'", // String | Whether the background should fit or fill (default) the output image If set to `fit`, the empty pixels will be transparent  Can only be provided if `background.imageUrl` or `background.imageFile` is provided
  'backgroundSeed': 3.4, // Number | Seed used to generate the background. Can be used to get similar looking results for the same prompt.
  'ignorePaddingAndSnapOnCroppedSides': true, // Boolean | If set to `true` (default), cropped sides of the subject will snap to the edges For instance, for a portrait image cropped below the elbows, the subject will be aligned at the bottom even if a bottom padding is provided (but it will still respect bottom margin)  Can't be provided if `removeBackground` is set to `false`  (See positioning section of the documentation for more information)
  'imageFile': "/path/to/file", // File | Bytes of the main image used by the API. Only available in the POST request  If provided, `imageUrl` can't be provided
  'lightingMode': "lightingMode_example", // String | Lighting mode to use on the main image used by the API. If set to `ai.auto`, the lighting will be automatically adjusted
  'margin': 0, // Number | [Advanced] Margin around the subject. Expressed in a ratio of the output image size. Unlike `padding`, margin is never ignored even on cropped sides of the subject. (See positioning section of the documentation for more information)
  'marginBottom': 3.4, // Number | [Advanced] Bottom Margin, overrides margin argument on the Bottom side if provided
  'marginLeft': 3.4, // Number | [Advanced] Left Margin, overrides margin argument on the left side
  'marginRight': 3.4, // Number | [Advanced] Right Margin, overrides margin argument on the right side if provided
  'marginTop': 3.4, // Number | [Advanced] Top Margin, overrides margin argument on the Top side if provided
  'maxHeight': 3.4, // Number | Maximum output height. Can only be provided if `outputSize` is `originalImage` or `croppedSubject`. Useful for: redimensioning while keeping the aspect ratio
  'maxWidth': 3.4, // Number | Maximum output width. Can only be provided if `outputSize` is `originalImage` or `croppedSubject`. Useful for: resizing an image while keeping the aspect ratio
  'outputSize': "'originalImage'", // String | Output size of the image. In the form of either: - `widthxheight` for a custom size (example: `200x400`) - `originalImage` to keep the original image dimensions - `croppedSubject` to use the size of the foreground dimensions after cropping around it
  'padding': 0, // Number | Padding around the subject. Unlike `margin`, it will be ignored on cropped sides of the subject if the option is enabled Expressed in a ratio of the size of the document, minus margins (similar to CSS) (See positioning section of the documentation for more information)
  'paddingBottom': 3.4, // Number | Bottom Padding, overrides padding argument on the Bottom side if provided
  'paddingLeft': 3.4, // Number | Left Padding, overrides padding argument on the left side
  'paddingRight': 3.4, // Number | Right Padding, overrides padding argument on the right side if provided
  'paddingTop': 3.4, // Number | Top Padding, overrides padding argument on the Top side if provided
  'referenceBox': "'subjectBox'", // String | [Advanced] `subjectBox` by default. When set to `originalImage`, the padding / margin will be around the original image and not the cropped subject.  It can lead to the subject disappearing when scaling is set to 'fill', for instance if the subject is on the left of a landscape image and outputSize is a square.  Most use cases don't require this option. It is useful if you'd like to maintain subject positioning in the original image.  Can't be provided if `removeBackground` is set to `false`  (See positioning section of the documentation for more information)
  'removeBackground': true, // Boolean | If enabled (default), the background of the image will be removed using PhotoRoom's award-winning algorithm
  'scaling': "'fit'", // String | Whether the subject should fit (default) or fill the output image If set to `fit`, the empty pixels will be transparent  Can only be provided if `imageUrl` or `imageFile` is provided
  'shadowMode': "shadowMode_example" // String | Shadow generation mode to use on the main image used by the API. If set to `ai.soft`, a soft shadow will be generated If set to `ai.hard`, a hard shadow will be generated If set to `ai.floating`, a floating shadow will be generated
};
apiInstance.v2EditPost(opts, (error, data, response) => {
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
 **backgroundColor** | **String**| Color of the background. If omitted, background will be transparent unless &#x60;background.imageUrl&#x60; or &#x60;background.imageFile&#x60; is provided. Can be a hex color without the hash sign (example: &#x60;FF0000&#x60;, &#x60;FFF&#x60;, &#x60;FF0000EE&#x60;) or color name (examples: &#x60;red&#x60;, &#x60;blue&#x60;)  Can&#39;t be provided if &#x60;removeBackground&#x60; is set to &#x60;false&#x60; | [optional] [default to &#39;transparent&#39;]
 **backgroundImageUrl** | **String**| URL of the image to use as a background. The GET endpoint accepts &#x60;background.imageUrl&#x60; only. In the POST endpoint, you can specify either &#x60;background.imageUrl&#x60; or &#x60;background.imageFile&#x60;, but not both. If &#x60;background.imageUrl&#x60; is provided, neither &#x60;background.imageFile&#x60; nor &#x60;background.prompt&#x60; can be provided, and vice versa.  Can&#39;t be provided if &#x60;removeBackground&#x60; is set to &#x60;false&#x60; | [optional] 
 **backgroundNegativePrompt** | **String**| A negative prompt to use for guiding the background generation process; If provided, the generation algorithm will try to avoid properties listed in the negativePrompt. | [optional] 
 **backgroundPrompt** | **String**| Prompt to use for guiding the background generation process. | [optional] 
 **backgroundScaling** | **String**| Whether the background should fit or fill (default) the output image If set to &#x60;fit&#x60;, the empty pixels will be transparent  Can only be provided if &#x60;background.imageUrl&#x60; or &#x60;background.imageFile&#x60; is provided | [optional] [default to &#39;fill&#39;]
 **backgroundSeed** | **Number**| Seed used to generate the background. Can be used to get similar looking results for the same prompt. | [optional] 
 **ignorePaddingAndSnapOnCroppedSides** | **Boolean**| If set to &#x60;true&#x60; (default), cropped sides of the subject will snap to the edges For instance, for a portrait image cropped below the elbows, the subject will be aligned at the bottom even if a bottom padding is provided (but it will still respect bottom margin)  Can&#39;t be provided if &#x60;removeBackground&#x60; is set to &#x60;false&#x60;  (See positioning section of the documentation for more information) | [optional] [default to true]
 **imageFile** | **File**| Bytes of the main image used by the API. Only available in the POST request  If provided, &#x60;imageUrl&#x60; can&#39;t be provided | [optional] 
 **lightingMode** | **String**| Lighting mode to use on the main image used by the API. If set to &#x60;ai.auto&#x60;, the lighting will be automatically adjusted | [optional] 
 **margin** | **Number**| [Advanced] Margin around the subject. Expressed in a ratio of the output image size. Unlike &#x60;padding&#x60;, margin is never ignored even on cropped sides of the subject. (See positioning section of the documentation for more information) | [optional] [default to 0]
 **marginBottom** | **Number**| [Advanced] Bottom Margin, overrides margin argument on the Bottom side if provided | [optional] 
 **marginLeft** | **Number**| [Advanced] Left Margin, overrides margin argument on the left side | [optional] 
 **marginRight** | **Number**| [Advanced] Right Margin, overrides margin argument on the right side if provided | [optional] 
 **marginTop** | **Number**| [Advanced] Top Margin, overrides margin argument on the Top side if provided | [optional] 
 **maxHeight** | **Number**| Maximum output height. Can only be provided if &#x60;outputSize&#x60; is &#x60;originalImage&#x60; or &#x60;croppedSubject&#x60;. Useful for: redimensioning while keeping the aspect ratio | [optional] 
 **maxWidth** | **Number**| Maximum output width. Can only be provided if &#x60;outputSize&#x60; is &#x60;originalImage&#x60; or &#x60;croppedSubject&#x60;. Useful for: resizing an image while keeping the aspect ratio | [optional] 
 **outputSize** | **String**| Output size of the image. In the form of either: - &#x60;widthxheight&#x60; for a custom size (example: &#x60;200x400&#x60;) - &#x60;originalImage&#x60; to keep the original image dimensions - &#x60;croppedSubject&#x60; to use the size of the foreground dimensions after cropping around it | [optional] [default to &#39;originalImage&#39;]
 **padding** | **Number**| Padding around the subject. Unlike &#x60;margin&#x60;, it will be ignored on cropped sides of the subject if the option is enabled Expressed in a ratio of the size of the document, minus margins (similar to CSS) (See positioning section of the documentation for more information) | [optional] [default to 0]
 **paddingBottom** | **Number**| Bottom Padding, overrides padding argument on the Bottom side if provided | [optional] 
 **paddingLeft** | **Number**| Left Padding, overrides padding argument on the left side | [optional] 
 **paddingRight** | **Number**| Right Padding, overrides padding argument on the right side if provided | [optional] 
 **paddingTop** | **Number**| Top Padding, overrides padding argument on the Top side if provided | [optional] 
 **referenceBox** | **String**| [Advanced] &#x60;subjectBox&#x60; by default. When set to &#x60;originalImage&#x60;, the padding / margin will be around the original image and not the cropped subject.  It can lead to the subject disappearing when scaling is set to &#39;fill&#39;, for instance if the subject is on the left of a landscape image and outputSize is a square.  Most use cases don&#39;t require this option. It is useful if you&#39;d like to maintain subject positioning in the original image.  Can&#39;t be provided if &#x60;removeBackground&#x60; is set to &#x60;false&#x60;  (See positioning section of the documentation for more information) | [optional] [default to &#39;subjectBox&#39;]
 **removeBackground** | **Boolean**| If enabled (default), the background of the image will be removed using PhotoRoom&#39;s award-winning algorithm | [optional] [default to true]
 **scaling** | **String**| Whether the subject should fit (default) or fill the output image If set to &#x60;fit&#x60;, the empty pixels will be transparent  Can only be provided if &#x60;imageUrl&#x60; or &#x60;imageFile&#x60; is provided | [optional] [default to &#39;fit&#39;]
 **shadowMode** | **String**| Shadow generation mode to use on the main image used by the API. If set to &#x60;ai.soft&#x60;, a soft shadow will be generated If set to &#x60;ai.hard&#x60;, a hard shadow will be generated If set to &#x60;ai.floating&#x60;, a floating shadow will be generated | [optional] 

### Return type

**File**

### Authorization

[x-api-key](../README.md#x-api-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: image/png, application/json

