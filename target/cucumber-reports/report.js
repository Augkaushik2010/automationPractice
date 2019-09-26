$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("automationPractice.feature");
formatter.feature({
  "line": 1,
  "name": "Register New Customer and ADD Item to wish list",
  "description": "",
  "id": "register-new-customer-and-add-item-to-wish-list",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "As a new customer, I want to able to create an account on Automationpractice.com so I can add an item to my wish list",
  "description": "",
  "id": "register-new-customer-and-add-item-to-wish-list;as-a-new-customer,-i-want-to-able-to-create-an-account-on-automationpractice.com-so-i-can-add-an-item-to-my-wish-list",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on Signon page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enter \"\u003cemail address\u003e\" and click on create an account button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user select title \"\u003ctitle\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user type first name \"\u003cfirst name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user type sur name \"\u003csur name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enter address \"\u003caddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enter city \"\u003ccity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user select the state \"\u003cstate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enter the zip \"\u003czip\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user select the country \"\u003ccountry\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enter mobile phone \"\u003cmobile phone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enter address alias \"\u003caddress alias\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click on Register Button",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user logged in and navigate to my account page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user name \"\u003cfirst name\u003e\" followed by \"\u003csur name\u003e\" displayed in top right corner",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user can see \"MY WISHLISTS\" link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user clicks on my wishlists link",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user can see \"TOP SELLERS\" list in My Store Page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user clicks on first item in TOP SELLERS list",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "user can see Add To Wishlist under Add To Cart button",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "user add an item to my wishlist",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Application confirms that item \"Added to your wishlist.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "user navigates to My account page",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user clicks on my wishlists link",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user can confirm that item is added to the wishlist",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "logout from the application",
  "keyword": "And "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "register-new-customer-and-add-item-to-wish-list;as-a-new-customer,-i-want-to-able-to-create-an-account-on-automationpractice.com-so-i-can-add-an-item-to-my-wish-list;",
  "rows": [
    {
      "cells": [
        "email address",
        "title",
        "first name",
        "sur name",
        "password",
        "address",
        "city",
        "state",
        "zip",
        "country",
        "mobile phone",
        "address alias"
      ],
      "line": 32,
      "id": "register-new-customer-and-add-item-to-wish-list;as-a-new-customer,-i-want-to-able-to-create-an-account-on-automationpractice.com-so-i-can-add-an-item-to-my-wish-list;;1"
    },
    {
      "cells": [
        "tesx12@xyz.com",
        "mr",
        "firstxa",
        "lastxa",
        "Pawd1",
        "x1 lane",
        "salt lake",
        "Ohio",
        "84044",
        "United States",
        "9874563210",
        "X1list"
      ],
      "line": 33,
      "id": "register-new-customer-and-add-item-to-wish-list;as-a-new-customer,-i-want-to-able-to-create-an-account-on-automationpractice.com-so-i-can-add-an-item-to-my-wish-list;;2"
    },
    {
      "cells": [
        "testx12@xyz.com",
        "mr",
        "firstxa",
        "lastxa",
        "Pawd1",
        "x1 lane",
        "salt lake",
        "Ohio",
        "84044",
        "United States",
        "9874563210",
        "X1list"
      ],
      "line": 34,
      "id": "register-new-customer-and-add-item-to-wish-list;as-a-new-customer,-i-want-to-able-to-create-an-account-on-automationpractice.com-so-i-can-add-an-item-to-my-wish-list;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 33,
  "name": "As a new customer, I want to able to create an account on Automationpractice.com so I can add an item to my wish list",
  "description": "",
  "id": "register-new-customer-and-add-item-to-wish-list;as-a-new-customer,-i-want-to-able-to-create-an-account-on-automationpractice.com-so-i-can-add-an-item-to-my-wish-list;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on Signon page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enter \"tesx12@xyz.com\" and click on create an account button",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user select title \"mr\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user type first name \"firstxa\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user type sur name \"lastxa\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user enter password \"Pawd1\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enter address \"x1 lane\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enter city \"salt lake\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user select the state \"Ohio\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enter the zip \"84044\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user select the country \"United States\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enter mobile phone \"9874563210\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enter address alias \"X1list\"",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click on Register Button",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user logged in and navigate to my account page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user name \"firstxa\" followed by \"lastxa\" displayed in top right corner",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user can see \"MY WISHLISTS\" link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user clicks on my wishlists link",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user can see \"TOP SELLERS\" list in My Store Page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user clicks on first item in TOP SELLERS list",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "user can see Add To Wishlist under Add To Cart button",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "user add an item to my wishlist",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Application confirms that item \"Added to your wishlist.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "user navigates to My account page",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user clicks on my wishlists link",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user can confirm that item is added to the wishlist",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "logout from the application",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.user_is_on_Signon_page()"
});
formatter.result({
  "duration": 37399697239,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tesx12@xyz.com",
      "offset": 12
    }
  ],
  "location": "SignInPageSteps.user_enter_and_click_on_create_an_account_button(String)"
});
formatter.result({
  "duration": 1575238375,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mr",
      "offset": 19
    }
  ],
  "location": "FormDetailsSteps.user_select_title(String)"
});
formatter.result({
  "duration": 2290273283,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstxa",
      "offset": 22
    }
  ],
  "location": "FormDetailsSteps.user_type_first_name(String)"
});
formatter.result({
  "duration": 741521904,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lastxa",
      "offset": 20
    }
  ],
  "location": "FormDetailsSteps.user_type_sur_name(String)"
});
formatter.result({
  "duration": 777666995,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pawd1",
      "offset": 21
    }
  ],
  "location": "FormDetailsSteps.user_enter_password(String)"
});
formatter.result({
  "duration": 456223198,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "x1 lane",
      "offset": 20
    }
  ],
  "location": "FormDetailsSteps.user_enter_address(String)"
});
formatter.result({
  "duration": 525945538,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "salt lake",
      "offset": 17
    }
  ],
  "location": "FormDetailsSteps.user_enter_city(String)"
});
formatter.result({
  "duration": 716746296,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ohio",
      "offset": 23
    }
  ],
  "location": "FormDetailsSteps.user_select_the_state(String)"
});
formatter.result({
  "duration": 1488370997,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "84044",
      "offset": 20
    }
  ],
  "location": "FormDetailsSteps.user_enter_the_zip(String)"
});
formatter.result({
  "duration": 728893959,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United States",
      "offset": 25
    }
  ],
  "location": "FormDetailsSteps.user_select_the_country(String)"
});
formatter.result({
  "duration": 819775346,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9874563210",
      "offset": 25
    }
  ],
  "location": "FormDetailsSteps.user_enter_mobile_phone(String)"
});
formatter.result({
  "duration": 669620812,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "X1list",
      "offset": 26
    }
  ],
  "location": "FormDetailsSteps.user_enter_address_alias(String)"
});
formatter.result({
  "duration": 954076743,
  "status": "passed"
});
formatter.match({
  "location": "FormDetailsSteps.click_on_Register_Button()"
});
formatter.result({
  "duration": 2775835536,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountPageSteps.user_logged_in_and_navigate_to_my_account_page()"
});
formatter.result({
  "duration": 34940584,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstxa",
      "offset": 11
    },
    {
      "val": "lastxa",
      "offset": 33
    }
  ],
  "location": "MyAccountPageSteps.user_name_followed_by_displayed_in_top_right_corner(String,String)"
});
formatter.result({
  "duration": 461493391,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MY WISHLISTS",
      "offset": 14
    }
  ],
  "location": "MyAccountPageSteps.user_can_see_link(String)"
});
formatter.result({
  "duration": 201346464,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountPageSteps.user_clicks_on_my_wishlists_link()"
});
formatter.result({
  "duration": 3351434884,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TOP SELLERS",
      "offset": 14
    }
  ],
  "location": "MyWishlistsPageSteps.user_can_see_list_in_My_Store_Page(String)"
});
formatter.result({
  "duration": 122932674,
  "status": "passed"
});
formatter.match({
  "location": "MyWishlistsPageSteps.user_clicks_on_first_item_in_TOP_SELLERS_list()"
});
formatter.result({
  "duration": 5379044313,
  "status": "passed"
});
formatter.match({
  "location": "SpecificItemPageSteps.user_can_see_Add_To_Wishlist_under_Add_To_Cart_button()"
});
formatter.result({
  "duration": 299453374,
  "status": "passed"
});
formatter.match({
  "location": "SpecificItemPageSteps.user_add_an_item_to_my_wishlist()"
});
formatter.result({
  "duration": 413451418,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Added to your wishlist.",
      "offset": 32
    }
  ],
  "location": "SpecificItemPageSteps.Application_confirms_that_item(String)"
});
formatter.result({
  "duration": 1550323697,
  "status": "passed"
});
formatter.match({
  "location": "SpecificItemPageSteps.user_navigates_to_My_account_page()"
});
formatter.result({
  "duration": 2493119111,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountPageSteps.user_clicks_on_my_wishlists_link()"
});
formatter.result({
  "duration": 2781768399,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountPageSteps.user_can_confirm_that_item_is_added_to_the_wishlist()"
});
formatter.result({
  "duration": 122267726,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountPageSteps.logout_from_the_application()"
});
formatter.result({
  "duration": 6698369394,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "As a new customer, I want to able to create an account on Automationpractice.com so I can add an item to my wish list",
  "description": "",
  "id": "register-new-customer-and-add-item-to-wish-list;as-a-new-customer,-i-want-to-able-to-create-an-account-on-automationpractice.com-so-i-can-add-an-item-to-my-wish-list;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on Signon page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enter \"testx12@xyz.com\" and click on create an account button",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user select title \"mr\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user type first name \"firstxa\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user type sur name \"lastxa\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user enter password \"Pawd1\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enter address \"x1 lane\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enter city \"salt lake\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user select the state \"Ohio\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enter the zip \"84044\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user select the country \"United States\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enter mobile phone \"9874563210\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enter address alias \"X1list\"",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click on Register Button",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user logged in and navigate to my account page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user name \"firstxa\" followed by \"lastxa\" displayed in top right corner",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user can see \"MY WISHLISTS\" link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user clicks on my wishlists link",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user can see \"TOP SELLERS\" list in My Store Page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user clicks on first item in TOP SELLERS list",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "user can see Add To Wishlist under Add To Cart button",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "user add an item to my wishlist",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Application confirms that item \"Added to your wishlist.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "user navigates to My account page",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user clicks on my wishlists link",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user can confirm that item is added to the wishlist",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "logout from the application",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.user_is_on_Signon_page()"
});
formatter.result({
  "duration": 23506285855,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testx12@xyz.com",
      "offset": 12
    }
  ],
  "location": "SignInPageSteps.user_enter_and_click_on_create_an_account_button(String)"
});
formatter.result({
  "duration": 1570103451,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mr",
      "offset": 19
    }
  ],
  "location": "FormDetailsSteps.user_select_title(String)"
});
formatter.result({
  "duration": 2444691088,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstxa",
      "offset": 22
    }
  ],
  "location": "FormDetailsSteps.user_type_first_name(String)"
});
formatter.result({
  "duration": 735485690,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lastxa",
      "offset": 20
    }
  ],
  "location": "FormDetailsSteps.user_type_sur_name(String)"
});
formatter.result({
  "duration": 520773377,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pawd1",
      "offset": 21
    }
  ],
  "location": "FormDetailsSteps.user_enter_password(String)"
});
formatter.result({
  "duration": 506573113,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "x1 lane",
      "offset": 20
    }
  ],
  "location": "FormDetailsSteps.user_enter_address(String)"
});
formatter.result({
  "duration": 697049375,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "salt lake",
      "offset": 17
    }
  ],
  "location": "FormDetailsSteps.user_enter_city(String)"
});
formatter.result({
  "duration": 530282524,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ohio",
      "offset": 23
    }
  ],
  "location": "FormDetailsSteps.user_select_the_state(String)"
});
formatter.result({
  "duration": 1051767966,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "84044",
      "offset": 20
    }
  ],
  "location": "FormDetailsSteps.user_enter_the_zip(String)"
});
formatter.result({
  "duration": 561874045,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United States",
      "offset": 25
    }
  ],
  "location": "FormDetailsSteps.user_select_the_country(String)"
});
formatter.result({
  "duration": 837100489,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9874563210",
      "offset": 25
    }
  ],
  "location": "FormDetailsSteps.user_enter_mobile_phone(String)"
});
formatter.result({
  "duration": 826784285,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "X1list",
      "offset": 26
    }
  ],
  "location": "FormDetailsSteps.user_enter_address_alias(String)"
});
formatter.result({
  "duration": 757021668,
  "status": "passed"
});
formatter.match({
  "location": "FormDetailsSteps.click_on_Register_Button()"
});
formatter.result({
  "duration": 3302273516,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountPageSteps.user_logged_in_and_navigate_to_my_account_page()"
});
formatter.result({
  "duration": 67083824,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstxa",
      "offset": 11
    },
    {
      "val": "lastxa",
      "offset": 33
    }
  ],
  "location": "MyAccountPageSteps.user_name_followed_by_displayed_in_top_right_corner(String,String)"
});
formatter.result({
  "duration": 145340305,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MY WISHLISTS",
      "offset": 14
    }
  ],
  "location": "MyAccountPageSteps.user_can_see_link(String)"
});
formatter.result({
  "duration": 173647361,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountPageSteps.user_clicks_on_my_wishlists_link()"
});
formatter.result({
  "duration": 3403349518,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TOP SELLERS",
      "offset": 14
    }
  ],
  "location": "MyWishlistsPageSteps.user_can_see_list_in_My_Store_Page(String)"
});
formatter.result({
  "duration": 117664761,
  "status": "passed"
});
formatter.match({
  "location": "MyWishlistsPageSteps.user_clicks_on_first_item_in_TOP_SELLERS_list()"
});
formatter.result({
  "duration": 5781235680,
  "status": "passed"
});
formatter.match({
  "location": "SpecificItemPageSteps.user_can_see_Add_To_Wishlist_under_Add_To_Cart_button()"
});
formatter.result({
  "duration": 225951085,
  "status": "passed"
});
formatter.match({
  "location": "SpecificItemPageSteps.user_add_an_item_to_my_wishlist()"
});
formatter.result({
  "duration": 432858801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Added to your wishlist.",
      "offset": 32
    }
  ],
  "location": "SpecificItemPageSteps.Application_confirms_that_item(String)"
});
formatter.result({
  "duration": 1450057794,
  "status": "passed"
});
formatter.match({
  "location": "SpecificItemPageSteps.user_navigates_to_My_account_page()"
});
formatter.result({
  "duration": 2328027169,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountPageSteps.user_clicks_on_my_wishlists_link()"
});
formatter.result({
  "duration": 2644152138,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountPageSteps.user_can_confirm_that_item_is_added_to_the_wishlist()"
});
formatter.result({
  "duration": 153282453,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountPageSteps.logout_from_the_application()"
});
formatter.result({
  "duration": 7183782699,
  "status": "passed"
});
});