"use strict";

const inputUsername = document.querySelector(".username");
const inputFullName = document.querySelector(".fullname");
const inputPassword = document.querySelector(".password");
const form = document.querySelector(".form");
const loginForm = document.getElementById("loginForm");
const loginInputUsername = document.getElementById("loginUsername");
const loginInputPassword = document.getElementById("loginPassword");

const create = document.querySelector(".create");
const users = JSON.parse(localStorage.getItem("users")) || [];

//Create new user function
const createNewUSer = function () {
	const regfullName = inputFullName.value;
	const regName = inputUsername.value;
	const regPassword = inputPassword.value;

	const newUSer = {
		fullname: regfullName,
		username: regName,
		password: regPassword,
	};

	users.push(newUSer);
	localStorage.setItem("users", JSON.stringify(users));
};

//validateInput
const checkValidation = function () {
	const regfullName = inputFullName.value;
	const regName = inputUsername.value;
	const regPassword = inputPassword.value;

	if (!regfullName.includes(" ")) {
		alert(
			`${regfullName} is not a valid Fullname. Please enter your full name.`
		);
	} else if (regName.length < 4) {
		alert("Username must be at least 4 characters long.");
	} else if (regPassword.length < 4) {
		alert("Password must be at least 4 characters long.");
	} else {
		window.location.href = "login.html";
	}
	createNewUSer();
};

//Create Account function
const creatAccount = function (e) {
	e.preventDefault();
	checkValidation();
};

form.addEventListener("submit", creatAccount);

//Login
const login = function (e) {
	e.preventDefault();
	const loginUsername = loginInputUsername.value;
	const loginPassword = loginInputPassword.value;
	const foundUser = users.find((user) => {
		return user.username === loginUsername && user.password === loginPassword;
	});
	if (foundUser) {
		window.location.href = "analytics.html";
	} else {
		alert("Failed:", foundUser);
	}
};

loginForm.addEventListener("submit", login);
