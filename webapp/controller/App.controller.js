sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.sap.mybankdetails.controller.App", {
        onInit() {
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