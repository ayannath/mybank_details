sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.sap.mybankdetails.controller.App", {
        onInit() {
            
            let oData = {
                // Property Binding
                bankDetails: {
                    "AccNum": "38473***********",   // {/bankDetails/AccNum} // relative path
                    "Name": "Ayan Nath",            // {/bankDetails/Name}
                    "Ifsc": "000000*****",          // {/bankDetails/ifscode}
                },
                ifscode: "RBI032145", // absolute path {/ifscode}
                // Element/Context Binding "MoreDetails.fragment.xml"
                accountDetails: {
                    "AccNum": "38473***********",   // {/bankDetails/AccNum} // relative path
                    "Name": "Ayan Nath",            // {/bankDetails/Name}
                    "Ifsc": "000000*****",          // {/bankDetails/ifscode}
                    "CustID": "*****12345",
                    "Address": {
                        "city": "New York",
                        "zipcode": "123456",
                        "house": "001",
                        "street": "Wall Street",
                        "state": "California",
                        "country": "USA"
                    }
                },
                // Aggregation/List Binding
                /*: [
                    {
                        "cardType": "debit card",
                        "cardNum": "0000-0012-3451-1111",
                        "cardCompany": "master card",
                        "assinDate": "23 Aug 2017",
                        "state": true
                    },
                    {
                        "cardType": "credit card",
                        "cardNum": "0000-0012-3451-2222",
                        "cardCompany": "visa card",
                        "assinDate": "17 Aug 2020",
                        "state": false
                    },
                    {
                        "cardType": "debit card",
                        "cardNum": "0000-0012-3451-3333",
                        "cardCompany": "rupay card",
                        "assinDate": "20 Aug 2016",
                        "state": true
                    }
                ]*/
            };

            // common for all
            let oModel = new sap.ui.model.json.JSONModel();     // declaration of model
            oModel.setData(oData);                              // store data in model
            this.getView().setModel(oModel);                    // data applied to view label

            // oData from external json file
            /*let lModel = new sap.ui.model.json.JSONModel(oData);
            this.getView().setModel(lModel, "oBankDetails"); */   // "oBankDetails" is "JSON model" name from manifest.json
            
            
            // alert("this is onInit block");
            // debugger
            /* ============== checking browser language and setting the global resource model
             *  change the language from setting in browser to take effect 
                //in "console"
                var i18nModel = this.getOwnerComponent().getModel("i18n_es")
                this.getOwnerComponent().setModel(i18nModel, "i18n")
            */
            /*if (navigator.language == "en") {
                var i18nModel = this.getOwnerComponent().getModel("i18n")
                this.getOwnerComponent().setModel(i18nModel, "i18n")
            } 
            else if (navigator.language == "es") {
                var i18nModel = this.getOwnerComponent().getModel("i18n_es")
                this.getOwnerComponent().setModel(i18nModel, "i18n")
            }
            else {
                var i18nModel = this.getOwnerComponent().getModel("i18n")
                this.getOwnerComponent().setModel(i18nModel, "i18n")
            }*/

            let appLang;
            if (navigator.language == "en")
                appLang = "i18n";
            else if (navigator.language == "es" || navigator.language == "es-ES")
                appLang = "i18n_es";
            else
                appLang = "i18n";
            var i18nModel = this.getOwnerComponent().getModel(appLang)
            this.getOwnerComponent().setModel(i18nModel, "i18n")

        },

        // open popup "MoreDetails.fragment.xml"
        onOpenBankDetails: function () {
            // create logic for dialog
            if (!this.mbd_moreDetails) {
                this.mbd_moreDetails = this.loadFragment(
                    { name: "com.sap.mybankdetails.view.fragments.MoreDetails" }
                );
            }
            this.mbd_moreDetails.then(function (oDialog) {
                oDialog.open();
            });
        },
        // close dialog "MoreDetails.fragment.xml"
        onMoreDetailsClose: function () {
            this.byId("mbd_moreDetails").close();
        }

    });
});