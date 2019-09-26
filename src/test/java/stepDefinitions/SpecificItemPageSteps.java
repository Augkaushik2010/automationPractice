package stepDefinitions;
import cucumber.TestContext;
import pageObjects.SpecificItemPage;
import pageObjects.MyAccountPage;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
public class SpecificItemPageSteps {
	TestContext testContext;
	SpecificItemPage specificitemPage;
	MyAccountPage myaccountPage;
	public SpecificItemPageSteps(TestContext context) {
		 testContext = context;
		 specificitemPage = testContext.getPageObjectManager().getSpecificItemPage();
	}
	@Then("^user can see Add To Wishlist under Add To Cart button$")
	public void user_can_see_Add_To_Wishlist_under_Add_To_Cart_button() {
		if(specificitemPage.verifyWishlistbuttonDisplayedUnderAddToCartBtn()) {
			//do nothing
		}
		else {
			myaccountPage.logoutfromTheApplication();
			testContext.getWebDriverManager().closeDriver();
			throw new Error("Add To Wishlist didn't displayed under Add To Cart.");
		}
	}
	@When("^user add an item to my wishlist$")
	public void user_add_an_item_to_my_wishlist() {
		specificitemPage.clkOnAddToWishlistButton();
	}
	@Then("^Application confirms that item \"([^\"]*)\"$")
	public void Application_confirms_that_item(String arg1) {
		if(specificitemPage.verifyTheMsgAfterClkOnWishlistBtn(arg1)) {
			specificitemPage.closeTheDialogOpened();
		}
		else {
			specificitemPage.closeTheDialogOpened();
			myaccountPage.logoutfromTheApplication();
			testContext.getWebDriverManager().closeDriver();
			throw new Error("Item added to wishlist message not displayed as expected."+arg1);
		}
		
	}
	@When("^user navigates to My account page$")
	public void user_navigates_to_My_account_page() {
		specificitemPage.navigateToMyAccountPg();
	}
}
