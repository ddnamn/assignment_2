import Table from "react-bootstrap/Table";
import useCurrency from "../hooks/useCurrency";

function Content() {
  const [currency] = useCurrency(
    "https://api.currencyfreaks.com/latest?apikey=4fc48ad9ef614c5a8aa98b4c925a54ab"
  );

  return (
    <>
      <div
        style={{
          // overflow: "hidden",
          height: window.innerHeight,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Currency</th>
              <th>We Buy </th>
              <th>Exchange</th>
              <th>We Sell</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>CAD</th>
              <td>{(Number(currency.CAD) * 1.05).toFixed(6)}</td>
              <td>{Number(currency.CAD).toFixed(6)}</td>
              <td>{(Number(currency.CAD) * 0.95).toFixed(6)}</td>
            </tr>
            <tr>
              <th>EUR</th>
              <td>{(Number(currency.EUR) * 1.05).toFixed(6)}</td>
              <td>{Number(currency.EUR).toFixed(6)}</td>
              <td>{(Number(currency.EUR) * 0.95).toFixed(6)}</td>
            </tr>
            <tr>
              <th>IDR</th>
              <td>{(Number(currency.IDR) * 1.05).toFixed(2)}</td>
              <td>{Number(currency.IDR).toFixed(2)}</td>
              <td>{(Number(currency.IDR) * 0.95).toFixed(2)}</td>
            </tr>
            <tr>
              <th>JPY</th>
              <td>{(Number(currency.JPY) * 1.05).toFixed(4)}</td>
              <td>{Number(currency.JPY).toFixed(4)}</td>
              <td>{(Number(currency.JPY) * 0.95).toFixed(4)}</td>
            </tr>
            <tr>
              <th>CHF</th>
              <td>{(Number(currency.CHF) * 1.05).toFixed(6)}</td>
              <td>{Number(currency.CHF).toFixed(6)}</td>
              <td>{(Number(currency.CHF) * 0.95).toFixed(6)}</td>
            </tr>
            <tr>
              <th>GBP</th>
              <td>{(Number(currency.GBP) * 1.05).toFixed(6)}</td>
              <td>{Number(currency.GBP).toFixed(6)}</td>
              <td>{(Number(currency.GBP) * 0.95).toFixed(6)}</td>
            </tr>
          </tbody>
        </Table>
        <p>Rates are based from 1 USD</p>{" "}
        <p>This application uses API from https://currencyfreaks.com.</p>
      </div>
    </>
  );
}

export default Content;
