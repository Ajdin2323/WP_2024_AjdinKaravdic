/*  ---------------------------------------------------
  Template Name: Gym
  Description:  Gym Fitness HTML Template
  Author: Colorlib
  Author URI: https://colorlib.com
  Version: 1.0
  Created: Colorlib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    // $(window).on('load', function () {
    //     $(".loader").fadeOut();
    //     $("#preloder").delay(200).fadeOut("slow");
    // });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Canvas Menu
    $(".canvas-open").on('click', function () {
        $(".offcanvas-menu-wrapper").addClass("show-offcanvas-menu-wrapper");
        $(".offcanvas-menu-overlay").addClass("active");
    });

    $(".canvas-close, .offcanvas-menu-overlay").on('click', function () {
        $(".offcanvas-menu-wrapper").removeClass("show-offcanvas-menu-wrapper");
        $(".offcanvas-menu-overlay").removeClass("active");
    });

    // Search model
    $('.search-switch').on('click', function () {
        $('.search-model').fadeIn(400);
    });

    $('.search-close-switch').on('click', function () {
        $('.search-model').fadeOut(400, function () {
            $('#search-input').val('');
        });
    });

    //Masonary
    $('.gallery').masonry({
        itemSelector: '.gs-item',
        columnWidth: '.grid-sizer',
        gutter: 10
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
        Carousel Slider
    --------------------*/
    var hero_s = $(".hs-slider");
    hero_s.owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: false
    });

    /*------------------
        Team Slider
    --------------------*/
    $(".ts-slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        dotsEach: 2,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            320: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            }
        }
    });

    /*------------------
        Testimonial Slider
    --------------------*/
    $(".ts_slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
    });

    /*------------------
        Image Popup
    --------------------*/
    $('.image-popup').magnificPopup({
        type: 'image'
    });

    /*------------------
        Video Popup
    --------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*------------------
        Barfiller
    --------------------*/
    $('#bar1').barfiller({
        barColor: '#ffffff',
        duration: 2000
    });
    $('#bar2').barfiller({
        barColor: '#ffffff',
        duration: 2000
    });
    $('#bar3').barfiller({
        barColor: '#ffffff',
        duration: 2000
    });

    $('.table-controls ul li').on('click', function () {
        var tsfilter = $(this).data('tsfilter');
        $('.table-controls ul li').removeClass('active');
        $(this).addClass('active');

        if (tsfilter == 'all') {
            $('.class-timetable').removeClass('filtering');
            $('.ts-meta').removeClass('show');
        } else {
            $('.class-timetable').addClass('filtering');
        }
        $('.ts-meta').each(function () {
            $(this).removeClass('show');
            if ($(this).data('tsmeta') == tsfilter) {
                $(this).addClass('show');
            }
        });
    });

})(jQuery);

var users = JSON.parse(localStorage.getItem('users')) || [];

function registerUser(){
    let name = document.getElementById("name-register").value
    let username = document.getElementById("username-register").value
    let password = document.getElementById("password-register").value

    let newUser = {
        userID: users.length + 1,
        name: name,
        username: username,
        password: password
    }

    //console.log(newUser)
    users.push(newUser)
    localStorage.setItem('users', JSON.stringify(users));

}

var currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

function login() {
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value

    for (let i = 0; i < users.length; i++) {
        if (username === users[i].username && password === users[i].password) {
                currentUser = {
                    userID: users[i].userID,
                    username: users[i].username,
                    name: users[i].name
                }
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                
                window.location.href = "#home"
                return;
        }
    }
    if(!currentUser)
        alert("Invalid username or password")
}

if(currentUser){
    document.getElementById("login-button").innerHTML = "Logout"
    document.getElementById("login-button").href = "#home"
}
else{
    document.getElementById("login-button").innerHTML = "Login"
    document.getElementById("login-button").href = "#login"
}

function loginHandle() {
    if(currentUser){
        localStorage.removeItem('currentUser');
        currentUser = null;
        document.getElementById("login-button").innerHTML = "Login"
        document.getElementById("login-button").href = "#login"
        window.location.href = "#login"
    }
    else{
        document.getElementById("login-button").innerHTML = "Logout"
        document.getElementById("login-button").href = "#home"
        window.location.href = "#login"
    }
}

var userBMI;

function calculateBMI() {
    let weightInput = document.getElementById("weight").value;
    let heightInput = document.getElementById("height").value;
    let ageInput = document.getElementById("age").value;
    let sexInput = document.getElementById("sex").value;

    // Convert input values to numbers
    let weight = parseFloat(weightInput);
    let height = parseFloat(heightInput);
    let age = parseInt(ageInput);

    // Check if inputs are valid numbers
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Invalid input. Please enter valid weight and height.");
        return null;
    }

    // Convert height from centimeters to meters
    height = height / 100;

    // Calculate BMI
    let bmi = weight / (height * height);

    // Create userBMI object
    userBMI = {
        // weight: weight,
        // height: height,
        // age: age,
        // sex: sexInput, // Store sex as string
        bmi: bmi // Store BMI value
    };

    // Store userBMI object in localStorage
}

var appointments = JSON.parse(localStorage.getItem('appointments')) || [];

function convertDateTimeToString(datetimeInput) {
    // Get the value of the date and time input element
    // Parse the input value as a Date object
    let datetime = new Date(datetimeInput);

    // Extract the year, month, and day components
    let year = datetime.getFullYear();
    // Month is zero-based, so add 1 to get the correct month
    let month = datetime.getMonth() + 1;
    let day = datetime.getDate();

    // Format the components as 'YYYY-MM-DD' string
    let dateString = year + '-' + month + '-' + day;

    // Display the formatted string
    console.log("Formatted Date String:", dateString);
}

function bookAnAppointment() {
    if (currentUser) {
        let appointment = document.getElementById("datetime-appointment")

        appointments.push({
            userID: currentUser.userID,
            name: currentUser.name,
            appointment: new Date(appointment)
        })
        localStorage.setItem('appointments', JSON.stringify(appointments));
    }
    else{
        alert("Please login to book an appointment")
        window.location.href = "#login"
    }
}


function myAccount() {
    if (currentUser) {
        window.location.href = "#account"
        myAccountInfo()
    }
    else {
        alert("Please login to view your account")
        window.location.href = "#login"
    }
}

function myAccountInfo(){
    if(currentUser){
        document.getElementById("my-name").innerHTML = "Welcome " + currentUser.name + "!";
        document.getElementById("my-username").innerHTML = "Username:  " + currentUser.username;
    }
    else{
        alert("Please login to view your account")
        window.location.href = "#login"
    }
}

