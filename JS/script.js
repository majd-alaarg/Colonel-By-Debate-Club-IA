//BACK TO TOP BUTTON STARTS//
//The following code is for the back-to-top button. The main purpose of the Javascript, is to select and toggle the CSS class selectors given a YOffset greater than 200. Essentially, if the user scrolls down by 200, the function is executed that manages the class selectors. Under the if part of the if/else statement
const backToTopButton = document.querySelector("#back-to-top-btn");
const nav = document.querySelector("nav");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
	if (window.pageYOffset > 200) { // Show backToTopButton
		if (!backToTopButton.classList.contains("btnEntrance")) {
			backToTopButton.classList.remove("btnExit");
			backToTopButton.classList.add("btnEntrance");
			backToTopButton.style.display = "block";
		}
	} else { //The following code is for the exit function of the back-to-top button. Given in an if/else function, the class of .btnExit is toggled under "else, under the situation in which the YOffset is smalller than 300, the .btnExit class is toggled and the .btnEntrance class is removed.
		if (backToTopButton.classList.contains("btnEntrance")) {
			backToTopButton.classList.remove("btnEntrance");
			backToTopButton.classList.add("btnExit");
			setTimeout(function () {
				backToTopButton.style.display = "none";
			}, 250);
		}
	}

	//NAV BAR RESIZE ON SCROLL
	if (window.innerWidth > 1125) {
		if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
			document.getElementById("nav").style.height = "80px";
		} else {
			document.getElementById("nav").style.height = "90px";
		}
	}

	//NAV BAR SHADOW ON SCROLL
	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
		document.getElementById("nav").style.boxShadow = "0 15px 40px rgba(0, 0, 1, .35)";
	} else {
		document.getElementById("nav").style.boxShadow = "0 10px 30px rgba(0, 0, 1, .15)";
	}
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);



//The following code is the function that manages what occurs once the button is clicked with the first line setting the EventLisetner As you can see, the "constant distance" and "constant duration" are being set to manage the back-to-top actions.
function smoothScrollBackToTop() {
	const targetPosition = 0;
	const startPosition = window.pageYOffset;
	const distance = targetPosition - startPosition;
	const duration = 40;
	let start = null;

	window.requestAnimationFrame(step);

	function step(timestamp) {
		if (!start) start = timestamp;
		const progress = timestamp - start;
		window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
		if (progress < duration) window.requestAnimationFrame(step);
	}
};



//The following code is for the accordion section on the FAQ part of the Contact page. I followed the lesson on it using the W3 Schools link given in class. It selects the accordion class, which is the visible header of the accordion. With an event-listener for click, the panel is shown while the "active" class properties, changing the "+"-->"-", in the CSS are toggled with the JS.//
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		this.classList.toggle("active2");
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
}
//Accordion toggle function ends//




//The following 4 lines were found in a Stackoverflow forum where there was discussion about the easing function without using a plugin. https://stackoverflow.com/questions/5207301/jquery-easing-functions-without-using-a-plugin
function easeInOutCubic(t, b, c, d) {
	t /= d / 2;
	if (t < 1) return c / 2 * t * t * t + b;
	t -= 2;
	return c / 2 * (t * t * t + 2) + b;
};

//BACK TO TOP BUTTON ENDS//

//The following code is for the automatic slide show coded. First few lines get the elements of "mySlides" and the "dot". Using a setTimeout function, the timing is set.
var slideIndex = 0;
showSlides();

function showSlides() {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slides.length) {
		slideIndex = 1
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" activeSlide", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " activeSlide";
	setTimeout(showSlides, 3000); // Change image every 3 seconds
}
//Slideshow function ends here


//CONTACT FORM SUBMISSION SCRIPT BEGINS
function contactForm2() {
	
	//Fetch inputted data
	userName = String(document.getElementById("name").value);
	userEmail = String(document.getElementById("email").value);
	userAddress = String(document.getElementById("address").value);
	userEmail = String(document.getElementById("email").value);
	userCity = String(document.getElementById("city").value);
	userYesStudent = String(document.getElementById("yes").value);
	userNoStudent = String(document.getElementById("no").value);
	userMessage = String(document.getElementById("review").value);
	
	// Validation of user-inputted data
	if (userName == "") {
		alert("Please enter your name.");
	} else if (userEmail == "") {
		alert("Please enter your email so we can get back to you!");
	} else if (userAddress == "") {
		alert("Please enter your address so we can help you!");
	} else if (userCity == "") {
		alert("Please enter your city so we can help you!");
	} else if (document.getElementById("yes").checked === false && document.getElementById("no").checked === false) {
		alert("Please indicate whether or not you are a Colonel By Student");
	} else if (userMessage == "") {
		alert("Please enter a message so we can help you!");
	} else {
		//Send data to the google form
		const scriptURL = 'https://script.google.com/macros/s/AKfycbz02WYMTa1p8EP8_sLZQFDrcImn5RtihKdz-SZB3PLe9vChxgoTjx6KKg2LsrhmJag7QA/exec'
		const form = document.forms['contact-submit-to-google-sheet']

		form.addEventListener('submit', e => {
			e.preventDefault()
			fetch(scriptURL, {
					method: 'POST',
					body: new FormData(form)
				})
				//Checking for success
				.then(response => console.log('Success!', response))
				.catch(error => console.error('Error!', error.message))
		})

		//Alert user. Confirm the contact form submission.
		alert("Thank you for contacting the Colonel By Debate Club. Check your email, you'll hear from us shortly!");
		
		alert("We've sent a confirmation letter to your email.");

		//Reload the page to refresh fields
		setTimeout(pageReload, 700);

		function pageReload() {
			location.reload();
		}
	}
}
//CONTACT FORM SUBMISSION SCRIPT ENDS
