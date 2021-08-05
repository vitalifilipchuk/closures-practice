let createCounter = function() {
	// privateCounter becomes a "private" variable because of function expression closure
	// variable created with "var" is usually global, but we can make it "private" with function expression
	var privateCounter = 0;
	function changeBy(val) {
		privateCounter += val;
	}
	return {
		add: function() {
	    	changeBy(1);
	    },
	    sub: function() {
	    	changeBy(-1);
	    },
	    value: function() {
	    	return privateCounter;
	    }
	}
}

function initCounters() {
	let counters = document.querySelectorAll('.counter');
	counters.forEach(item => {
		//each counter gets their own "local" function and "remembers" it in their LexicalEnvironment
		let counterInstance = createCounter();
		item.addEventListener('click', function(e) {
			let valueContainer = this.querySelector('.counter-value');
			if (e.target.classList.contains('counter-sub')) {
				counterInstance.sub();
				valueContainer.innerHTML = counterInstance.value();
			}
			else if (e.target.classList.contains('counter-add')) {
				counterInstance.add();
				valueContainer.innerHTML = counterInstance.value();
			}
		});
	});
}

initCounters();