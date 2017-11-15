CRM.$(function() {

  function alterPaypalDisplay() {
    var cardInfoLabel = CRM.$('fieldset.credit_card_info-group > legend');
    if (cardInfoLabel) {
      cardInfoLabel.html('Card Information');
    }

    // If we have both paypal pro (ppid=13) and paypal std (ppid=1) rename paypal std to "Paypal"
    if (CRM.$('#CIVICRM_QFID_13_payment_processor_id')) {
      if (CRM.$('#CIVICRM_QFID_1_payment_processor_id')) {
        CRM.$('label[for="CIVICRM_QFID_1_payment_processor_id"]')
          .html('Paypal');
      }
    }
  }

  CRM.$('input[name="payment_processor_id"]').change(function() {
    alterPaypalDisplay();
  });

  alterPaypalDisplay();

});
