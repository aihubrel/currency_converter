
class CurrencyConverter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        //Euro
        rate: 0.89,
        usd: 1,
        euro: 1 * 0.89,
        //JPN
        jrate: 149,
        jusd: 1,
        jpn: 1 * 149,
        //Canada$
        crate: 1.38,
        cusd: 1,
        cad: 1 * 1.38,
      };
  
      this.handleUsdChange = this.handleUsdChange.bind(this);
      this.handleEuroChange = this.handleEuroChange.bind(this);
      this.handleUSDtoJPN = this.handleUSDtoJPN.bind(this);
      this.handleJPNtoUSD = this.handleJPNtoUSD.bind(this);
      this.handleUSDtoCAD = this.handleUSDtoCAD.bind(this);
      this.handleCADtoUSD = this.handleCADtoUSD.bind(this);
    }
  
    toUsd(amount, rate) {
      return amount * (1 / rate);
    }
  
    toEuro(amount, rate) {
      return amount * rate;
    }
  
    toJtU (amount, rate) {
      return amount  * (1 / rate);
    }
    
    toUtJ(amount, rate) {
      return amount * rate;
    }
  
    toCtU (amount, rate) {
      return amount * rate;
    }
  
    toUtC (amount, rate) {
      return amount * rate;
    }
  
    convert(amount, rate, equation) {
      console.log(typeof amount);
      const input = parseFloat(amount);
      if (Number.isNaN(input)) {
        return '';
      }
      return equation(input, rate).toFixed(3);
    }
  
    handleUsdChange(event) {
      const euro = this.convert(event.target.value, this.state.rate, this.toEuro);
      this.setState({
        usd: event.target.value,
        euro
      });
    }
  
    handleEuroChange(event) {
      const usd = this.convert(event.target.value, this.state.rate, this.toUsd);
      this.setState({
        euro: event.target.value,
        usd
      });
    }
  
    handleJPNtoUSD(event) {
      const jusd = this.convert(event.target.value, this.state.jrate, this.toJtU);
      this.setState({
        jpn: event.target.value,
        jusd
      });
    }
  
    handleUSDtoJPN(event) {
      const jpn = this.convert(event.target.value, this.state.jrate, this.toUtJ);
      this.setState({
        jusd: event.target.value,
        jpn
      });
    }
  
    handleCADtoUSD(event) {
      const cusd = this.convert(event.target.value, this.state.crate, this.toCtU);
      this.setState({
        cad: event.target.value,
        cusd
      });
    }
  
    handleUSDtoCAD(event) {
      const cad = this.convert(event.target.value, this.state.crate, this.toUtC);
      this.setState({
        cusd: event.target.value,
        cad
      });
    }
  
    render() {
      const { rate, usd, euro } = this.state;
      const { jrate, jusd, jpn} = this.state;
      const { crate, cusd, cad} = this.state;
  
  
      return (
        <div className="container">
          <div className="text-center p-3 mb-2">
            <h2 className="mb-2">Currency Converter</h2>
            <h4>USD 1 : {rate} EURO</h4>
            <h4>USD 1 : {jrate} JPN</h4>
            <h4>USD 1 : {crate} CND</h4>
          </div>
          <div className="row text-center">
            <div className="col-12 currency">
              <span className="mr-1">USD</span>
              <input value={usd} onChange={this.handleUsdChange} type="number" />
              <span className="mx-3">=</span>
              <input value={euro} onChange={this.handleEuroChange} type="number" />
              <span className="ml-1">EURO</span>
            </div>
            
            <div className="col-12 currency">
              <span className="mr-1">USD</span>
              <input value={jusd} onChange={this.handleUSDtoJPN} type="number" />
              <span className="mx-3">=</span>
              <input value={jpn} onChange={this.handleJPNtoUSD} type="number" />
              <span className="ml-1">JPN</span>
            </div>
  
            
            <div className="col-12 currency">
              <span className="mr-1">USD</span>
              <input value={cusd} onChange={this.handleUSDtoCAD} type="number" />
              <span className="mx-3">=</span>
              <input value={cad} onChange={this.handleCADtoUSD} type="number" />
              <span className="ml-1">CAD</span>
            </div>
  
          </div>
        </div>
      )
    }
    // 
  }
  
  const container = document.getElementById('root');
  const root = ReactDOM.createRoot(container);
  root.render(<CurrencyConverter />);