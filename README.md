# JSONify

JSONify is a minimal (less than a KB!) HTML-form to JSON to HTML-form converting plugin for jQuery. It creates JSON string from the name-and-value pair of form fields, and can perform JSON to form initialization.

### Latest Release - v0.3

Now includes support for loading data from JSON to form, AKA "deJSONify", just like `jsonify()` extracts data from the form fields, `dejsonify()` can assign JSON data back to form fields. See usage section for more.

## Usage

JSONify can be included in your webpage as follows:
```javascript
<script type="text/javascript" src="js/jsonify.js"></script>
```
It provides two methods `jsonify()` and `dejsonify(data)` to perform Form Data to JSON and JSON to Form Data conversions.

#### `jsonify()`
---

This method converts form field values into standard JSON object, it can be called on any valid form element, which returns JSON string representing the form fields. Note that form fields must have `name` attribute in order to be included in JSON string.

Additionally, you can provide `stringify` parameter to method to specify whether to get JSON string or JSON object, using `jsonify({ stringify:true })` (default is `false`).

#### `dejsonify(data)`
---

This method performs _extact reverse_ operation of `jsonify`, call this method on any valid form element having `input` fields with attribute `name` specified, pass the parameter `data`, which can be a valid JSON `object` or `string`, and it will assign values of each item from `data` to the matching `name` of `input` fields.

## Example

Include in your webpage as:
```javascript
<script type="text/javascript" src="js/jsonify.js"></script>
```

Your form in page:
```html
<form id="myform">
	<label>Name:</label>
	<input type="text" name="name"/>
	<label>Email</label>
	<input type="text" name="email"/>
	<label>Password</label>
	<input type="password" name="password"/>
</form>
```

Calling `jsonify()` as follows:
```javascript
$("#myform").jsonify();
```

Returned JSON string:
```json
{"name":"Kushal","email":"catchmeifyoucan@gmail.com","password":"awesome"}
```

Calling `dejsonify()` as follows:
```javascript
$("#myform").dejsonify({
	"name": "Kushal",
	"email": "catchmeifyoucan@gmail.com",
	"password": "awesome"
});
```

And you'll have form items filled up with matching key names with `name` attribute of each field.

## Issues

Feel free to submit any issue OR helping to fix an issue.

##Version Information
* 0.1 - First Release.
* 0.2 - Option can be provided whether to create JSON string or JSON object.
* 0.3 - Support for JSON to form initialization added via method `dejsonify`.
* 0.3.1 - Fixes incorrect value population with `dejsonify` when input types `radio` and `checkbox` are present in form.


## Author

[Kushal Pandya](https://github.com/kushalpandya)
