import ResultBox from './ResultBox';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Component ResultBox', () => {
  it('should render without crashing', () => {
    render(<ResultBox from="PLN" to="USD" amount={100} />);
  });

  const testCases = [
    { amount: '100', from: 'PLN', to: 'USD', result: '$28.57' },
    { amount: '50', from: 'PLN', to: 'USD', result: '$14.29' },
    { amount: '25', from: 'PLN', to: 'USD', result: '$7.14' },
    { amount: '12', from: 'PLN', to: 'USD', result: '$3.43' },
  ];

  for(const testObj of testCases){
    it('should render proper info about conversion when PLN -> USD', () => {
      //render component
      render(<ResultBox from={testObj.from} to={testObj.to} amount={parseInt(testObj.amount)} />)
  
      //find div
      const output = screen.getByTestId('result-div');
  
      //check render value
      expect(output).toHaveTextContent('PLN ' + parseInt(testObj.amount) + '.00 = ' + testObj.result );
    }); 
  }

  const testCasesUSD = [
    { amount: '100', from: 'USD', to: 'PLN', result: 'PLN350.00' },
    { amount: '50', from: 'USD', to: 'PLN', result: 'PLN175.00' },
    { amount: '25', from: 'USD', to: 'PLN', result: 'PLN87.50' },
    { amount: '12', from: 'USD', to: 'PLN', result: 'PLN42.00' },
  ];

  for(const testObj of testCases){
    it('should render proper info about conversion when USD -> PLN', () => {
      //render component
      render(<ResultBox from={testObj.from} to={testObj.to} amount={parseInt(testObj.amount)} />)
  
      //find div
      const output = screen.getByTestId('result-div');
  
      //check render value
      expect(output).toHaveTextContent('PLN ' + parseInt(testObj.amount) + '.00 = ' + testObj.result );
    }); 
  }

  const testCasesPLNtoPLN = [
    { amount: '100', from: 'PLN', to: 'PLN', result: 'PLN 100.00' },
    { amount: '50', from: 'PLN', to: 'PLN', result: 'PLN 50.00' },
    { amount: '25', from: 'PLN', to: 'PLN', result: 'PLN 25.00' },
    { amount: '12', from: 'PLN', to: 'PLN', result: 'PLN 12.00' },
  ];

  for(const testObj of testCasesPLNtoPLN){
    it('should return the same value if input is the same', () => {
      //render component
      render(<ResultBox from={testObj.from} to={testObj.to} amount={parseInt(testObj.amount)} />)

      //find div
      const output = screen.getByTestId('result-div');

      //check render value
      expect(output).toHaveTextContent('PLN ' + parseInt(testObj.amount) + '.00 = ' + testObj.result );
    })    
  }

  it('should render "Wrong value" if amount < 0', () => {
    //render component
    render(<ResultBox from="PLN" to="USD" amount={-10} />)

    //find div
    const output = screen.getByTestId('result-div');

    //check render value
    expect(output).toHaveTextContent('Wrong value')
  })
});