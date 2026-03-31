sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.sap.mybankdetails.controller.App", {
        onInit() {
            // alert("this is onInit block");
            debugger

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
            else if (navigator.language == "es")
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