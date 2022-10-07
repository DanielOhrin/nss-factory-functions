const computer = {
	id: 1,
	manufacturer: "Apple",
	make: "Macbook",
	model: "Pro",
	specs: {
		memory: 32,
		hardDrive: "500 GB",
		processor: 2.4
	}
}

const representInHTML = (obj) => {
    return `<section id="computer--${obj.id}">\n    <h1>${obj.manufacturer} ${obj.make}</h1>\n    <div>Model: ${obj.model}</div>\n    <div>Memory: ${obj.specs.memory} GB</div>\n    <div>Hard drive space: ${obj.specs.hardDrive}</div>\n    <div>Processor speed: ${obj.specs.processor} Ghz</div>\n</section>`
}

console.log(representInHTML(computer));