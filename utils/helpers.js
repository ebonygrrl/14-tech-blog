module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
      new Date(date).getFullYear()
    }`;
  },
  // block: (a,b, options) => {
  //   return (a==b)?options.fn(this):options.inverse(this);
  // }
};
