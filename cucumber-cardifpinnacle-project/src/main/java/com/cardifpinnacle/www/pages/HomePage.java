package com.cardifpinnacle.www.pages;

import com.cardifpinnacle.www.utility.Util;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class HomePage extends Util {

    // Homepage verification
    @FindBy(xpath = "//a[@class='logo']")
    WebElement _verificationOfHomepage;

    public String verifyHomepage() {
        return getTextFromElement(_verificationOfHomepage);
    }

    //Click and verify About us tab
    @FindBy(xpath = "//a[@class='parent'][contains(text(),'About Us')]")
    WebElement _clickOnAboutUs;
    @FindBy(xpath = "//h1[contains(text(),'About Us')]")
    WebElement _verificationOfAboutUsTab;

    public void clickOnAboutUsTab() {
        clickOnElement(_clickOnAboutUs);
    }

    public String verifyAboutUsTab() {
        return getTextFromElement(_verificationOfAboutUsTab);
    }

    //click and verify on Products tab
    @FindBy(xpath = "//nav[@class='mainnav']//a[contains(text(),'Products')]")
    WebElement _clickOnProducts;
    @FindBy(xpath = "//h1[contains(text(),'Products')]")
    WebElement _vericationOfProductsTab;

    public void clickOnProducts() {
        clickOnElement(_clickOnProducts);
    }

    public String verifyProducts() {
        return getTextFromElement(_vericationOfProductsTab);
    }

    //click and verify Careers tab
    @FindBy(xpath = "//a[@class='parent'][contains(text(),'Careers')]")
    WebElement _clickOnCareer;
    @FindBy(xpath = "//h1[contains(text(),'Join Us!')]")
    WebElement _vericationOfCareerstTab;

    public void clickOnCareers() {
        clickOnElement(_clickOnCareer);
    }
    public String verifyCareers() {
        return getTextFromElement(_vericationOfCareerstTab);
    }

    //click and verify Partnership Solutions tab
    @FindBy(xpath = "//a[@class='parent'][contains(text(),'Partnership Solutions')]")
    WebElement _clickOnPartnership;
    @FindBy(xpath = "//h1[contains(text(),'Partnership Solutions')]")
    WebElement _vericationOfPartnershipTab;

    public void clickOnPartnership() {
        clickOnElement(_clickOnPartnership);
    }

    public String verifyPartnership() {
        return getTextFromElement(_vericationOfPartnershipTab);
    }

    //click and verify Customers tab
    @FindBy(xpath = "//a[@class='parent'][contains(text(),'Customers')]")
    WebElement _clickOnCustomers;
    @FindBy(xpath = "//h3[contains(text(),\"Welcome to our Customers' Area\")]")
    WebElement _vericationOfCustomersTab;

    public void clickOnCustomers() {
        clickOnElement(_clickOnCustomers);
    }
    public String verifyCustomers() {
        return getTextFromElement(_vericationOfCustomersTab);
    }

    //click and verify Affiliates tab
    @FindBy(xpath = "//a[@class='parent'][contains(text(),'Affiliates')]")
    WebElement _clickOnAffiliates;
    @FindBy(xpath = "//h1[contains(text(),'About helpucover')]")
    WebElement _vericationOfAffiliatesTab;

    public void clickOnAffiliates() {
        clickOnElement(_clickOnAffiliates);
    }
    public String verifyAffiiliates() {
        return getTextFromElement(_vericationOfAffiliatesTab);
    }

    //click and verify News tab
    @FindBy(xpath = "//nav[@class='mainnav']//a[contains(text(),'News')]")
    WebElement _clickOnNews;
    @FindBy(xpath = "//h1[contains(text(),'News')]")
    WebElement _vericationOfNewstTab;

    public void clickOnNews() {
        clickOnElement(_clickOnNews);
    }
    public String verifyNews() {
        return getTextFromElement(_vericationOfNewstTab);
    }

    //click and  verify contact us tab
    @FindBy(xpath = "//a[@class='parent'][contains(text(),'Contact Us')]")
    WebElement _clickOnContactUs;
    @FindBy(xpath = "//h1[contains(text(),'Contact Us')]")
    WebElement _vericationOfContactUsTab;

    public void clickOnContactUs() {
        clickOnElement(_clickOnContactUs);
    }
    public String verifyContactUs() {
        return getTextFromElement(_vericationOfContactUsTab);
    }

}
