window.dynamicLoad = function() {
	import('./counter.js').then(counterModule => {
		console.log(counterModule.counter); // 0
        counterModule.incrementCounter();
		console.log(counterModule.counter); // 1
	});
}
