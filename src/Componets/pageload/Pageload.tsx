import { useEffect } from "react";
import "./Pageload.css";
import $ from "jquery";
import prk from "../../img/prk.png";

function Pageload() {
  useEffect(() => {
    $(window).on("load", function () {
      setTimeout(function () {
        $(".page-load").fadeOut("slow");
      }, 1000);
    });
  }, []);

  return (
    <div className="page-load">
      {/* <h1>ROHIT</h1> */}
      {<img src={prk} alt="Logo" className="logo-img" width="100" height="100" />}
    </div>
  );
}

export default Pageload;
