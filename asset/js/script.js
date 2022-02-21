const nav_toggle = document.getElementById("nav_toggle"),
	nav_menu = document.getElementById("nav_menu"),
	theme_btn = document.getElementById("bx-moon");

nav_toggle.addEventListener("click", (e) => {
	e.stopPropagation();
	nav_toggle.classList.toggle("active");
	if (nav_toggle.classList.contains("active")) {
		nav_menu.style.maxHeight = nav_menu.scrollHeight + "px";
	} else {
		nav_menu.removeAttribute("style");
	}
});
window.addEventListener("click", (e) => {
	if (e.target !== nav_toggle && e.target !== theme_btn) {
		nav_toggle.classList.remove("active");
		nav_menu.removeAttribute("style");
	}
});

/* Dark Mode */
const darkMode = "dark-theme",
	lightMode = "light-theme",
	Theme = "mode";

/* Load Dark Theme */
document.addEventListener("DOMContentLoaded", (event) => {
	ApplyTheme();
});

/* Activate / deactivate the theme manually with the button */
theme_btn.addEventListener("click", () => {
	let currentTheme = localStorage.getItem(Theme);
	localStorage.setItem(
		Theme,
		currentTheme === darkMode ? lightMode : darkMode
	);
	ApplyTheme();
});

const ApplyTheme = () => {
	let currentTheme = localStorage.getItem(Theme);
	if (currentTheme === darkMode) {
		document.body.classList.add(darkMode);
		theme_btn.classList.add("bx-sun");
	} else {
		document.body.classList.remove(darkMode);
		theme_btn.classList.remove("bx-sun");
	}
};
/* Scroll to top and scroll-header show */
const scrollUp = document.getElementById("scroll_up");
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
	if (this.scrollY >= 250) {
		scrollUp.classList.add("show-scroll");
		header.classList.add("scroll_header");
	} else {
		scrollUp.classList.remove("show-scroll");
		header.classList.remove("scroll_header");
	}
});
scrollUp.onclick = () => {
	window.scrollTo(0, 0);
};

//Active link;

const scrollActive = () => {
	const sections = document.querySelectorAll("section");
	sections.forEach((sec) => {
		const sectionHeight = sec.offsetHeight,
			sectionTop = sec.offsetTop - 100,
			sectionID = sec.getAttribute("id"),
			activeSection = document.querySelector(
				".nav_menu a[href*=" + sectionID + "]"
			);
		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			activeSection.classList.add("active");
		} else {
			activeSection.classList.remove("active");
		}
	});
};
window.addEventListener("scroll", scrollActive);

/* Initialize AOS */

