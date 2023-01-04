import AppPage from './app.page';
import {
  ICO,
  clientName,
  address,
  substituteName,
  contactName,
  contactPhone,
  contactEmail,
  startDate,
  endDate, campAge, campAdults
} from '../specs/fixtures'

class OrderPage extends AppPage {
    constructor() {
        super();
    }

    get ico () {
        return $('#ico');
    }

    get clientName () {
        return $('#client')
    }

    get address () {
        return $('#address')
    }

    get substituteName () {
        return $('#substitute')
    }

    get contactName () {
        return $('#contact_name')
    }

    get contactPhone () {
        return $('#contact_tel')
    }

    get contactEmail () {
        return $('#contact_mail')
    }

    get startDate () {
        return $('#start_date_1')
    }

    get endDate () {
        return $('#end_date_1')
    }

    get cityCampButton () {
      return $('#nav-home-tab');
    }

    get campDatePart () {
      return $('#camp-date_part');
    }

    get campStudents () {
      return $('#camp-students');
    }
    get campAge () {
      return $('#camp-age');
    }

    get campAdults () {
      return $('#camp-adults');
    }

    get saveOrder () {
      return $('.btn-primary');
    }

    get orderAccepted () {
      return $('.card-body');
    }

}

module.exports = new OrderPage();
