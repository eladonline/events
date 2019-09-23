const billingAdapt = (data, cartItems, sum) => {
  const { name, family, phone, email, city, street, houseNum, zipCode } = data;
  // תיאור המוצר
  const cd = `cd=${cartItems
    .map(({ item, quantity }) => ` מוצר: ${item.service} כמות: ${quantity}, `)
    .join("")}`;
  const cs = `cs=${sum}`;
  const full_name = `full_name=${name} ${family}`;
  const ccfname = `ccfname=${name}`;
  const cclname = `cclname=${family}`;
  const contact_phone = `contact_phone=${phone}`;
  const contact_email = `contact_email=${email}`;
  const customer_country = `customer_country=Israel`;
  const customer_city = `customer_city=${city}`;
  const customer_street = `customer_street=${street}`;
  const customer_zip = `customer_zip=${zipCode}`;
  const customer_street_num = `customer_street_num=${houseNum}`;

  const query = `${cd}&${cs}&${full_name}&${ccfname}&${cclname}&${contact_phone}&${contact_email}&${customer_country}&${customer_city}&${customer_street}&${customer_zip}&${customer_street_num}`;
  return query;
};

export default billingAdapt;
