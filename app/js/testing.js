



var $instanceTestFunction = function test(a, b){

	this.a = a;
	this.b = b;
	//return this.a*this.b;

}
$instanceTestFunction.arg;

function getInstance(functionName){

	var instance = {};
	instance.__proto__ = functionName.prototype;
	
	return instance;

}
var obj = new $instanceTestFunction(2, 3);

//alert(typeof instance === 'function');

var newInstance = getInstance($instanceTestFunction);
//alert(obj.constructor);
//alert(newInstance.constructor);

//A promise is async value its just a first class object but will have value in future. 
//The reason for promise is not valid.
//Once error or return then there is not further no op.