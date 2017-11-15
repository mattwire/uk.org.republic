CRM.$(function() {
  var cardInfoLabel = CRM.$('fieldset.credit_card_info-group > legend');
  if (cardInfoLabel) {
    cardInfoLabel.html('Card Information');
  }
});
