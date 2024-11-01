var procedimento = "";

function fibonacci(n) {
	if (n == 0){
	    procedimento = procedimento + " Fibonacci(0) = 0";
		return (0);
		}
	else if (n == 1){
	    procedimento = procedimento + " Fibonacci(1) = 1";
		return (1);
		}
	else{
	    var x = n-1;
		var y = n-2;
	    procedimento = procedimento + " Fibonacci(" + n + ") = Fibonacci(" + x + ") + Fibonacci(" + y + ") \n";
		return (fibonacci(n - 1) + fibonacci(n - 2));
		}
}	    
function fib(form) {
	form.resultado.value = fibonacci(form.texto.value);
	meuform.txtarea.value = procedimento;
}
			
function limpar(){
    meuform.texto.value = "";
}