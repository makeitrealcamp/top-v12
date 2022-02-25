import React from "react";

export default function Success() {
  const openCheckout = (e) => {
    e.preventDefault();

    const handler = window.ePayco.checkout.configure({
      key: process.env.REACT_APP_EPAYCO_PUBLIC_KEY,
      test: true,
    });
    let data = {
      name: "Vestido Mujer Primavera",
      description: "Vestido Mujer Primavera",
      invoice: "1234",
      currency: "cop",
      amount: "119000",
      tax_base: "100000",
      tax: "19000",
      country: "co",
      lang: "en",
      external: "false",
      extra1: "extra1",
      extra2: "extra2",
      extra3: "extra3",
      confirmation: `${process.env.REACT_APP_BASE_URL}/confirmation`,
      response: "http://payco.co",
      name_billing: "john doe",
      address_billing: "Carrera 19 numero 14 91",
      type_doc_billing: "cc",
      mobilephone_billing: "3050000000",
      number_doc_billing: "100000000",
      email_billing: "example@mail.co",
    };
    handler.open(data);
  };
  return (
    <React.Fragment>
      <input type="submit" placeholder="pagar" onClick={openCheckout} />
    </React.Fragment>
  );
}
