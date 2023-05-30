import React from "react";

export default function Default(props) {
  console.log(props);

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
          <h1 className="display-3">404</h1>
          <h1>erro</h1>
          <h2>página não encontrda</h2>
          <h3>
            a url {" "}
            <span className="text-danger">"{props.location.pathname}"</span>
            não foi encontrada.
          </h3>
        </div>
      </div>
    </div>
  );
}
