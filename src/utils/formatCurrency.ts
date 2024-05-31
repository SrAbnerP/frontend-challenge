const formatCurrency = (value: any, currency: string) => {
  const numericValue = typeof value === "number" ? value : Number(value);
  
  return numericValue.toLocaleString("pt-br", {
    style: "currency",
    currency: currency,
  });
};

export default formatCurrency;
