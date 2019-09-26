Feature: Register New Customer and ADD Item to wish list

Scenario Outline: As a new customer, I want to able to create an account on Automationpractice.com so I can add an item to my wish list
		  Given user is on Signon page
		  When user enter "<email address>" and click on create an account button
		  When user select title "<title>"
		  And user type first name "<first name>"
		  And user type sur name "<sur name>"
		  And user enter password "<password>"
		  And user enter address "<address>"
		  And user enter city "<city>"
		  And user select the state "<state>"
		  And user enter the zip "<zip>"
		  And user select the country "<country>"
		  And user enter mobile phone "<mobile phone>"
		  And user enter address alias "<address alias>"
		  When click on Register Button
		  Then user logged in and navigate to my account page
		  And user name "<first name>" followed by "<sur name>" displayed in top right corner
		  And user can see "MY WISHLISTS" link in My Account Page
		  When user clicks on my wishlists link
		  Then user can see "TOP SELLERS" list in My Store Page
		  When user clicks on first item in TOP SELLERS list
		  Then user can see Add To Wishlist under Add To Cart button
		  When user add an item to my wishlist
		  Then Application confirms that item "Added to your wishlist."
		  When user navigates to My account page
		  And user clicks on my wishlists link
		  Then user can confirm that item is added to the wishlist
		  And logout from the application
		  Examples:
		 |email address|title|first name|sur name|password|address|city|state|zip|country|mobile phone|address alias|
		 |tesa51@xyz.com|mr|firstxa|lastxa|Pawd1|x1 lane|salt lake|Ohio|84044|United States|9874563210|X1list|
		 |tesa52@xyz.com|mr|firstxa|lastxa|Pawd1|x1 lane|salt lake|Ohio|84044|United States|9874563210|X1list|