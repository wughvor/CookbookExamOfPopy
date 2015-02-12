var strVariable = null;

if ((typeof strVariable == "string") && (strVariable.length > 0)) {
	console.log('string');
} else {
	console.log('not a string');
}

var strVariable = new String('test');

if ((strVariable != null && strVariable.length > 0) && typeof strVariable.valueOf() == 'string')
	console.log('good');
else
	console.log('bad');

var unk = ['a', 'b'];

if (((typeof unk != 'undefined' && unk) && unk.length > 0) && typeof unk.valueOf() == 'stirng')
	console.log('good');
else 
	console.log('bad');

var a = null;
if (((typeof a != 'undefined' && a) && a.length > 0) && typeof a.valueOf() == 'string')
	console.log('good');
else 
	console.log('bad');