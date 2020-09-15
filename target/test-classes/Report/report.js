$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/AdactinLogin.feature");
formatter.feature({
  "name": "Verifying Adactin login functionalities",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verifying Adactin Booking details with credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on Adactin Page",
  "keyword": "Given "
});
formatter.step({
  "name": "user should enter \"\u003cuserName\u003e\",\"\u003cpassword\u003e\",\"\u003clocation\u003e\",\"\u003chotels\u003e\",\"\u003croomType\u003e\",\"\u003cnumOfRooms\u003e\",\"\u003ccheckinDt\u003e\",\"\u003ccheckkOutDt\u003e\",\"\u003cadultNo\u003e\",\"\u003cchlidNo\u003e\",\"\u003cfirstName\u003e\",\"\u003clastName\u003e\",\"\u003cadd\u003e\",\"\u003cccNo\u003e\",\"\u003cccType\u003e\",\"\u003cexpMon\u003e\",\"\u003cexpYr\u003e\"and\"\u003ccvvNo\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "print the booking id",
  "keyword": "And "
});
formatter.step({
  "name": "user should click the logout button",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "location",
        "hotels",
        "roomType",
        "numOfRooms",
        "checkinDt",
        "checkkOutDt",
        "adultNo",
        "chlidNo",
        "firstName",
        "lastName",
        "add",
        "ccNo",
        "ccType",
        "expMon",
        "expYr",
        "cvvNo"
      ]
    },
    {
      "cells": [
        "Pushparaj",
        "HF07YG",
        "Melbourne",
        "Hotel Sunshine",
        "Double",
        "2 - Two",
        "24/08/2020",
        "25/08/2020",
        "3 - Three",
        "2 - Two",
        "Pushparaj",
        "Utham",
        "No.1,FirstColny",
        "4567765498768907",
        "VISA",
        "July",
        "2022",
        "234"
      ]
    },
    {
      "cells": [
        "Pushparaj",
        "HF07YG",
        "London",
        "Hotel Cornice",
        "Double",
        "2 - Two",
        "24/08/2020",
        "25/08/2020",
        "3 - Three",
        "2 - Two",
        "Pushparaj",
        "Utham",
        "No.1,FirstColny",
        "4567765498768907",
        "VISA",
        "July",
        "2022",
        "234"
      ]
    },
    {
      "cells": [
        "Pushparaj",
        "HF07YG",
        "Paris",
        "Hotel Sunshine",
        "Deluxe",
        "2 - Two",
        "24/08/2020",
        "25/08/2020",
        "3 - Three",
        "2 - Two",
        "Pushparaj",
        "Utham",
        "No.1,FirstColny",
        "4567765498768907",
        "VISA",
        "July",
        "2022",
        "234"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verifying Adactin Booking details with credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on Adactin Page",
  "keyword": "Given "
});
formatter.match({
  "location": "BookingAdactin.user_is_on_Adactin_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"Pushparaj\",\"HF07YG\",\"Melbourne\",\"Hotel Sunshine\",\"Double\",\"2 - Two\",\"24/08/2020\",\"25/08/2020\",\"3 - Three\",\"2 - Two\",\"Pushparaj\",\"Utham\",\"No.1,FirstColny\",\"4567765498768907\",\"VISA\",\"July\",\"2022\"and\"234\"",
  "keyword": "When "
});
formatter.match({
  "location": "BookingAdactin.user_should_enter_and(String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "print the booking id",
  "keyword": "And "
});
formatter.match({
  "location": "BookingAdactin.print_the_booking_id()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click the logout button",
  "keyword": "Then "
});
formatter.match({
  "location": "BookingAdactin.user_should_click_the_logout_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying Adactin Booking details with credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on Adactin Page",
  "keyword": "Given "
});
formatter.match({
  "location": "BookingAdactin.user_is_on_Adactin_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"Pushparaj\",\"HF07YG\",\"London\",\"Hotel Cornice\",\"Double\",\"2 - Two\",\"24/08/2020\",\"25/08/2020\",\"3 - Three\",\"2 - Two\",\"Pushparaj\",\"Utham\",\"No.1,FirstColny\",\"4567765498768907\",\"VISA\",\"July\",\"2022\"and\"234\"",
  "keyword": "When "
});
formatter.match({
  "location": "BookingAdactin.user_should_enter_and(String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "print the booking id",
  "keyword": "And "
});
formatter.match({
  "location": "BookingAdactin.print_the_booking_id()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click the logout button",
  "keyword": "Then "
});
formatter.match({
  "location": "BookingAdactin.user_should_click_the_logout_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying Adactin Booking details with credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on Adactin Page",
  "keyword": "Given "
});
formatter.match({
  "location": "BookingAdactin.user_is_on_Adactin_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"Pushparaj\",\"HF07YG\",\"Paris\",\"Hotel Sunshine\",\"Deluxe\",\"2 - Two\",\"24/08/2020\",\"25/08/2020\",\"3 - Three\",\"2 - Two\",\"Pushparaj\",\"Utham\",\"No.1,FirstColny\",\"4567765498768907\",\"VISA\",\"July\",\"2022\"and\"234\"",
  "keyword": "When "
});
formatter.match({
  "location": "BookingAdactin.user_should_enter_and(String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "print the booking id",
  "keyword": "And "
});
formatter.match({
  "location": "BookingAdactin.print_the_booking_id()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click the logout button",
  "keyword": "Then "
});
formatter.match({
  "location": "BookingAdactin.user_should_click_the_logout_button()"
});
formatter.result({
  "status": "passed"
});
});