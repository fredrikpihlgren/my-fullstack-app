



function imgChecker(imageurl) {
	//console.log(imageurl);
	if (!imageurl.startsWith("http")) {
		return ` /img/${imageurl} `
	}
	return imageurl;
}

module.exports = imgChecker;