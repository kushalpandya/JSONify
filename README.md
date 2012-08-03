# JSONify

JSONify is a minimal (only 257 bytes!) HTML-form to JSON converting plugin for jQuery. It creates JSON string from the name-and-value pair of form fields.

## Usage

JSONify can be included in your web project as follows:

    <script type="text/javascript" src="js/jsonify.js"></script>

It provides single method `jsonify()` which can be called on any valid form element, and returns JSON string representing form fields.

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

Calling `jsonify()`:
```javascript
    $("#myform").jsonify();
```

Returned JSON string:
```json
    {"name":"Kushal","email":"catchmeifyoucan@gmail.com","password":"awesome"}
```

## Issues

The plugin may not be perfect, so feel free to submit any issue OR helping to fix an issue.

## Author

[Kushal Pandya](https://github.com/kushalpandya)