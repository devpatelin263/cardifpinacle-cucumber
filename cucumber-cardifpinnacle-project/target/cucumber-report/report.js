$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefiles/homepage.feature");
formatter.feature({
  "line": 1,
  "name": "Cardif Pinacle homepage features",
  "description": "As a user I would like to check all tabs on Cardif Pinacle Homepage",
  "id": "cardif-pinacle-homepage-features",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User should able to click on all tabs of Homepage",
  "description": "",
  "id": "cardif-pinacle-homepage-features;user-should-able-to-click-on-all-tabs-of-homepage",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on \"\u003ctab\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should navigate to \"\u003ctab\u003e\" successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "cardif-pinacle-homepage-features;user-should-able-to-click-on-all-tabs-of-homepage;",
  "rows": [
    {
      "cells": [
        "tab"
      ],
      "line": 9,
      "id": "cardif-pinacle-homepage-features;user-should-able-to-click-on-all-tabs-of-homepage;;1"
    },
    {
      "cells": [
        "About us"
      ],
      "line": 10,
      "id": "cardif-pinacle-homepage-features;user-should-able-to-click-on-all-tabs-of-homepage;;2"
    },
    {
      "cells": [
        "Products"
      ],
      "line": 11,
      "id": "cardif-pinacle-homepage-features;user-should-able-to-click-on-all-tabs-of-homepage;;3"
    },
    {
      "cells": [
        "Careers"
      ],
      "line": 12,
      "id": "cardif-pinacle-homepage-features;user-should-able-to-click-on-all-tabs-of-homepage;;4"
    },
    {
      "cells": [
        "Partnership Solutions"
      ],
      "line": 13,
      "id": "cardif-pinacle-homepage-features;user-should-able-to-click-on-all-tabs-of-homepage;;5"
    },
    {
      "cells": [
        "Customers"
      ],
      "line": 14,
      "id": "cardif-pinacle-homepage-features;user-should-able-to-click-on-all-tabs-of-homepage;;6"
    },
    {
      "cells": [
        "Affiliates"
      ],
      "line": 15,
      "id": "cardif-pinacle-homepage-features;user-should-able-to-click-on-all-tabs-of-homepage;;7"
    },
    {
      "cells": [
        "News"
      ],
      "line": 16,
      "id": "cardif-pinacle-homepage-features;user-should-able-to-click-on-all-tabs-of-homepage;;8"
    },
    {
      "cells": [
        "Contact us"
      ],
      "line": 17,
      "id": "cardif-pinacle-homepage-features;user-should-able-to-click-on-all-tabs-of-homepage;;9"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7536230600,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User should able to click on all tabs of Homepage",
  "description": "",
  "id": "cardif-pinacle-homepage-features;user-should-able-to-click-on-all-tabs-of-homepage;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on \"About us\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should navigate to \"About us\" successfully",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefs.userIsOnHomepage()"
});
formatter.result({
  "duration": 306533500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "About us",
      "offset": 12
    }
  ],
  "location": "HomePageStepDefs.iClickOn(String)"
});
formatter.result({
  "duration": 510040800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "About us",
      "offset": 22
    }
  ],
  "location": "HomePageStepDefs.iShouldNavigateToSuccessfully(String)"
});
formatter.result({
  "duration": 130600,
  "status": "passed"
});
formatter.after({
  "duration": 1287714500,
  "status": "passed"
});
formatter.before({
  "duration": 5127592000,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User should able to click on all tabs of Homepage",
  "description": "",
  "id": "cardif-pinacle-homepage-features;user-should-able-to-click-on-all-tabs-of-homepage;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on \"Products\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should navigate to \"Products\" successfully",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefs.userIsOnHomepage()"
});
formatter.result({
  "duration": 63910700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Products",
      "offset": 12
    }
  ],
  "location": "HomePageStepDefs.iClickOn(String)"
});
formatter.result({
  "duration": 1532344000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Products",
      "offset": 22
    }
  ],
  "location": "HomePageStepDefs.iShouldNavigateToSuccessfully(String)"
});
formatter.result({
  "duration": 79200,
  "status": "passed"
});
formatter.after({
  "duration": 826057300,
  "status": "passed"
});
formatter.before({
  "duration": 5253681300,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User should able to click on all tabs of Homepage",
  "description": "",
  "id": "cardif-pinacle-homepage-features;user-should-able-to-click-on-all-tabs-of-homepage;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on \"Careers\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should navigate to \"Careers\" successfully",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefs.userIsOnHomepage()"
});
formatter.result({
  "duration": 69576900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Careers",
      "offset": 12
    }
  ],
  "location": "HomePageStepDefs.iClickOn(String)"
});
formatter.result({
  "duration": 532989000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Careers",
      "offset": 22
    }
  ],
  "location": "HomePageStepDefs.iShouldNavigateToSuccessfully(String)"
});
formatter.result({
  "duration": 87500,
  "status": "passed"
});
formatter.after({
  "duration": 752310000,
  "status": "passed"
});
formatter.before({
  "duration": 5049189000,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User should able to click on all tabs of Homepage",
  "description": "",
  "id": "cardif-pinacle-homepage-features;user-should-able-to-click-on-all-tabs-of-homepage;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on \"Partnership Solutions\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should navigate to \"Partnership Solutions\" successfully",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefs.userIsOnHomepage()"
});
formatter.result({
  "duration": 75595200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Partnership Solutions",
      "offset": 12
    }
  ],
  "location": "HomePageStepDefs.iClickOn(String)"
});
formatter.result({
  "duration": 820645100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Partnership Solutions",
      "offset": 22
    }
  ],
  "location": "HomePageStepDefs.iShouldNavigateToSuccessfully(String)"
});
formatter.result({
  "duration": 107500,
  "status": "passed"
});
formatter.after({
  "duration": 761643600,
  "status": "passed"
});
formatter.before({
  "duration": 5360787100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User should able to click on all tabs of Homepage",
  "description": "",
  "id": "cardif-pinacle-homepage-features;user-should-able-to-click-on-all-tabs-of-homepage;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on \"Customers\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should navigate to \"Customers\" successfully",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefs.userIsOnHomepage()"
});
formatter.result({
  "duration": 88760900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customers",
      "offset": 12
    }
  ],
  "location": "HomePageStepDefs.iClickOn(String)"
});
formatter.result({
  "duration": 971568500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customers",
      "offset": 22
    }
  ],
  "location": "HomePageStepDefs.iShouldNavigateToSuccessfully(String)"
});
formatter.result({
  "duration": 135300,
  "status": "passed"
});
formatter.after({
  "duration": 868480300,
  "status": "passed"
});
formatter.before({
  "duration": 5414894800,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User should able to click on all tabs of Homepage",
  "description": "",
  "id": "cardif-pinacle-homepage-features;user-should-able-to-click-on-all-tabs-of-homepage;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on \"Affiliates\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should navigate to \"Affiliates\" successfully",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefs.userIsOnHomepage()"
});
formatter.result({
  "duration": 72853400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Affiliates",
      "offset": 12
    }
  ],
  "location": "HomePageStepDefs.iClickOn(String)"
});
formatter.result({
  "duration": 807392100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Affiliates",
      "offset": 22
    }
  ],
  "location": "HomePageStepDefs.iShouldNavigateToSuccessfully(String)"
});
formatter.result({
  "duration": 113900,
  "status": "passed"
});
formatter.after({
  "duration": 732292700,
  "status": "passed"
});
formatter.before({
  "duration": 5458266000,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User should able to click on all tabs of Homepage",
  "description": "",
  "id": "cardif-pinacle-homepage-features;user-should-able-to-click-on-all-tabs-of-homepage;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on \"News\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should navigate to \"News\" successfully",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefs.userIsOnHomepage()"
});
formatter.result({
  "duration": 80048900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "News",
      "offset": 12
    }
  ],
  "location": "HomePageStepDefs.iClickOn(String)"
});
formatter.result({
  "duration": 1000373700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "News",
      "offset": 22
    }
  ],
  "location": "HomePageStepDefs.iShouldNavigateToSuccessfully(String)"
});
formatter.result({
  "duration": 149000,
  "status": "passed"
});
formatter.after({
  "duration": 1381442200,
  "status": "passed"
});
formatter.before({
  "duration": 5554669600,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User should able to click on all tabs of Homepage",
  "description": "",
  "id": "cardif-pinacle-homepage-features;user-should-able-to-click-on-all-tabs-of-homepage;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on \"Contact us\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should navigate to \"Contact us\" successfully",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefs.userIsOnHomepage()"
});
formatter.result({
  "duration": 67225300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contact us",
      "offset": 12
    }
  ],
  "location": "HomePageStepDefs.iClickOn(String)"
});
formatter.result({
  "duration": 581116200,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cCONTACT U[]\u003e but was:\u003cCONTACT U[S]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.cardifpinnacle.www.HomePageStepDefs.iClickOn(HomePageStepDefs.java:57)\r\n\tat ✽.When I click on \"Contact us\"(src/test/java/resources/featurefiles/homepage.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contact us",
      "offset": 22
    }
  ],
  "location": "HomePageStepDefs.iShouldNavigateToSuccessfully(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 2125396400,
  "status": "passed"
});
});