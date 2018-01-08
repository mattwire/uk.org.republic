CRM.$(function() {

  function alterPaypalDisplay() {
    var cardInfoLabel = CRM.$('fieldset.credit_card_info-group > legend');
    if (cardInfoLabel) {
      cardInfoLabel.html('Card Information');
    }

    // If we have both paypal pro (ppid=5) and paypal std (ppid=1) rename paypal std to "Paypal"
    if (CRM.$('#CIVICRM_QFID_5_payment_processor_id')) {
      if (CRM.$('#CIVICRM_QFID_1_payment_processor_id')) {
        CRM.$('label[for="CIVICRM_QFID_1_payment_processor_id"]')
          .html('Paypal');
      }
    }
  }

  function forceRecurIfEnabled() {
    CRM.$('input#is_recur').prop('checked', false);
    CRM.$('input#is_recur').trigger('click');
    CRM.$('input#is_recur').hide();
    CRM.$('.is_recur-section').hide();
  }

  // Re-prep form when we've loaded a new payproc
  CRM.$(document).ajaxComplete(function( event, xhr, settings ) {
    // /civicrm/payment/form? occurs when a payproc is selected on page
    // /civicrm/contact/view/participant occurs when payproc is first loaded on event credit card payment
    if ((settings.url.match("/civicrm/payment/form?"))
      || (settings.url.match("/civicrm/contact/view/participant?"))) {
      alterPaypalDisplay();
    }
  });

  alterPaypalDisplay();
  forceRecurIfEnabled();

});
