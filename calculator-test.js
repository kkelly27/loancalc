
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
  loan amount: 12000,
  years: 10
  interest rate: 3.4

  };
  expect(calculateMonthlyPayment(values)).toEqual('130.44');

});


it("should return a result with 2 decimal places", function() {
  // ..

  const values = {
    loan amount: 15000,
    years: 5
    interest rate: 7.4
  
    };
    expect(calculateMonthlyPayment(values)).toEqual('130.44');

});


it("should return a result with 2 decimal places", function() {
  // ..

  const values = {
    loan amount: 12000,
    years: 10
    interest rate: 3.4
  
    };
    expect(calculateMonthlyPayment(values)).toEqual('130.44');

});
