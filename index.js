const getAge = data => {
  let date = new Date();
  let y = date.getFullYear();
  let m = date.getMonth() + 1; //as month count start from 0;
  let d = date.getDate();
  if (data === "") {
    return "";
  } else {
    data = data.split("-");
    if (data.length < 3) {
      return "date length incorrect";
    }
    let y2 = data[0];
    let m2 = data[1];
    let d2 = data[2];
    let fd = d - d2;
    let fm = m - m2;
    let fy = y - y2;
    let numOfDays = 0;
    if (m2 % 2 === 1) {
      numOfDays = 31;
    }
    if (m2 % 2 === 0) {
      numOfDays = 30;
    }
    if (m2 === 2) {
      numOfDays = 28; //does not account for leap year;
    }
    if ((fm <= 0 && fd < 0) || fm < 0) {
      fy = fy - 1;
      fm = fm + 12;
    }
    if (fd < 0) {
      fm = fm - 1;
      //   fd = Math.abs(fd);
      fd = numOfDays - d2 + d;
    }
    fy = Math.abs(fy);
    fd = Math.abs(fd);
    fm = Math.abs(fm);
    // return fy + "Y " + fm + "M " + fd + "D";
    return {
      year: fy,
      month: fm,
      days: fd
    };
  }
};
module.export = { getAge };
