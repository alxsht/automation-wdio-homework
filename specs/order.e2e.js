import {
  ICO,
  clientName,
  address,
  substituteName,
  contactName,
  contactPhone,
  contactEmail,
  startDate,
  endDate, campStudents, campAge, campAdults
} from './fixtures.js'

import OrderPage from '../pages/order.page';
import {triggerBlur} from "../pages/functions";

describe('Přesměrování na stránku objednávky', () => {

  beforeEach(() => {
    OrderPage.goHome();
  });

  it('Musí otevřit Home page', () => {
    browser.pause(5000);
  });

  it('Má přesměrovat na stránku "Objednávka pro MŠ/ZŠ"', () => {
    OrderPage.forteachersButton.click();
    OrderPage.orderButton.click();
    browser.url('https://team8-2022brno.herokuapp.com/objednavka/pridat');
    expect(browser).toHaveUrlContaining('/objednavka/pridat')
  })

  it('Musí vyplnit Objednávku akce s veškerou informací', () => {
    OrderPage.forteachersButton.click();
    OrderPage.orderButton.click();

    OrderPage.ico.setValue(ICO);
    triggerBlur('#ico')

    browser.waitUntil(function () {
      return OrderPage.clientName.getValue() === clientName && OrderPage.address.getValue() === address;
    }, {
      timeout: 5000
    }) //tato funkce dělá to, že ověřuje zda po yvplnění pole ICO, vyplní se i dvě ostaní pole

    OrderPage.substituteName.setValue(substituteName);
    OrderPage.contactName.setValue(contactName);
    OrderPage.contactPhone.setValue(contactPhone);
    OrderPage.contactEmail.setValue(contactEmail);
    OrderPage.startDate.setValue(startDate);
    OrderPage.endDate.setValue(endDate);

    OrderPage.cityCampButton.click();
    expect(OrderPage.campDatePart).toBeDisplayed();

    OrderPage.campDatePart.selectByAttribute('value', 'afternoon');
    expect(OrderPage.campDatePart).toBeSelected();

    OrderPage.campStudents.setValue(campStudents);
    OrderPage.campAge.setValue(campAdults);
    OrderPage.campAdults.setValue(campAdults);

    OrderPage.saveOrder.click();
    expect(OrderPage.orderAccepted).toBeEnabled();
  })

  it('Musí vyplnit Objednávku akce se špatnou informací', () => {
    OrderPage.forteachersButton.click();
    OrderPage.orderButton.click();

    OrderPage.ico.setValue(ICO);
    triggerBlur('#ico')

    browser.waitUntil(function () {
      return OrderPage.clientName.getValue() === clientName && OrderPage.address.getValue() === address;
    }, {
      timeout: 5000
    }) //tato funkce dělá to, že ověřuje zda po yvplnění pole ICO, vyplní se i dvě ostaní pole

    OrderPage.substituteName.setValue(substituteName);
    OrderPage.contactName.setValue(contactName);
    OrderPage.contactPhone.setValue(contactPhone);
    OrderPage.contactEmail.setValue('4394729'); //špatný email
    OrderPage.startDate.setValue(startDate);
    OrderPage.endDate.setValue(endDate);

    OrderPage.cityCampButton.click();
    expect(OrderPage.campDatePart).toBeDisplayed();

    OrderPage.campDatePart.selectByAttribute('value', 'afternoon');
    expect(OrderPage.campDatePart).toBeSelected();

    OrderPage.campStudents.setValue(campStudents);
    OrderPage.campAge.setValue(campAdults);
    OrderPage.campAdults.setValue(campAdults);

    // OrderPage.saveOrder.click();
    // expect(OrderPage.orderAccepted).toBeDisabled();

    OrderPage.saveOrder.click();
    expect(OrderPage.saveOrder).toBeDisplayed(); //Objednávka se nemá odeslat
  })
});



