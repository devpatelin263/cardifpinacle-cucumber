package com.cardifpinnacle.www.utility;



import com.cardifpinnacle.www.basepage.BasePage;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

public class Util extends BasePage {

    /**
     * This method will find and click on elements
     */

    public void clickOnElement(By by) {
        driver.findElement(by).click();
    }
    public void clickOnElement(WebElement element) {
        element.click();
    }
    /**
     * This method will return text from element
     */
    public String getTextFromElement(By by) {
        return driver.findElement(by).getText();
    }
    public String getTextFromElement(WebElement element) {
        return element.getText();
    }
    /**
     * This method will used to select drop down menu by visible text
     */
    public void selectByVisibleTextFromDropDown(By by, String str) {
        Select select = new Select(driver.findElement(by));
        select.selectByVisibleText(str);
    }
    public void selectByVisibleTextFromDropDown(WebElement element, String str) {
        Select select = new Select(element);
        select.selectByVisibleText(str);
    }
    /**
     * This method will used to select drop down menu by value
     */
    public void selectByValueFromDropDown(By by, String value) {
        Select select = new Select(driver.findElement(by));
        select.selectByValue(value);
    }
    public void selectByValueFromDropDown(WebElement element, String value) {
        Select select = new Select(element);
        select.selectByValue(value);
    }
    /**
     * This method will used to select drop down menu by index
     */
    public void selectByIndexFromDropDown(By by, int index) {
        Select select = new Select(driver.findElement(by));
        select.selectByIndex(index);
    }
    public void selectByIndexFromDropDown(WebElement element, int index) {
        Select select = new Select(element);
        select.selectByIndex(index);
    }
    /**
     * This method will used to hover mouse on element and click
     */
    public void mouseHoverToElementAndClick(By by) {
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(by)).click().perform();
    }
    public void mouseHoverToElement(By by) {
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(by)).perform();
    }

    public void mouseHoverToElement(WebElement element) {
        Actions actions = new Actions(driver);
        actions.moveToElement(element).perform();
    }
    /**
     * This method will find element and send data in it
     */
    public void sendTextToElement(By by,String str){
        driver.findElement(by).sendKeys(str);
    }

    public void sendTextToElement(WebElement element, String str) {
        element.sendKeys(str);

    }
    /**
     * This method will generate random number
     *
     * @return
     */
    public int generateRandomNumber() {
        return (int) (Math.random() * 5000 + 1 );
    }
}

