import React, { useState } from "react";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import '../CSS/setting.css'
const Setting = () => {
  const [themecolor, setThemecolor] = useColor("hex", "#43607c");
  const [primarycolor, setPrimarycolor] = useColor("hex", "#4248c4");
  const [primaryfont, setPrimaryfont] = useColor("hex", "#121212");
  const [secondaryfont, setSecondaryfont] = useColor("hex", "#121212");
  const [secondarycolor, setSecondarycolor] = useColor("hex", "#121212");
  const [supportcolor, setSupportcolor] = useColor("hex", "#4c4444");

  const [data, setData] = useState({
    themecolor: themecolor.hex,
    primarycolor: primarycolor.hex,
    primaryfont: primaryfont.hex,
    secondaryfont: secondaryfont.hex,
    supportcolor: supportcolor.hex,
  });

  function applyTheme(){
    console.log("Color is",data)
  }
  return (
    <div className="setting">
      <hr></hr>
      <h1>Theme Setting</h1>
      <hr></hr>
      <div className="allpicker">
        <div className="primaryfont">
          <h3>Theme Color</h3>
          <ColorPicker
            width={200}
            height={108}
            color={themecolor}
            onChange={setThemecolor}
            hideHSV
            dark
          />
        </div>
        <div className="secondaryfont">
          <h3>Primary Color</h3>
          <ColorPicker
            width={200}
            height={108}
            color={primarycolor}
            onChange={setPrimarycolor}
            hideHSV
            dark
          />
        </div>
        <div className="primarycolor">
          <h3>Primary Font</h3>
          <ColorPicker
            width={200}
            height={108}
            color={primaryfont}
            onChange={setPrimaryfont}
            hideHSV
            dark
          />
        </div>
        <div className="secondarycolor">
          <h3>Support Color</h3>
          <ColorPicker
            width={200}
            height={108}
            color={supportcolor}
            onChange={setSupportcolor}
            hideHSV
            dark
          />
        </div>
        <div className="themecolor">
          <h3>Secondary Color</h3>
          <ColorPicker
            width={200}
            height={108}
            color={secondaryfont}
            onChange={setSecondaryfont}
            hideHSV
            dark
          />
        </div>
      </div>
      <hr></hr>
      <div className="btnclass">
      <button onClick={applyTheme}>Apply Theme</button>
      </div>
      <hr></hr>
      {/* Preview */}
      <div className="preview">
        <div
          className="theme"
          style={{
            backgroundColor: themecolor.hex,
            transition: "ease all 500ms",
          }}
        >
          <div
            className="headertheme"
            style={{
              backgroundColor: primarycolor.hex,
              transition: "ease all 500ms",
            }}
          >
            <h4
              style={{
                color: primaryfont.hex,
                transition: "ease all 500ms",
              }}
            >
              Primary Color Apply Here
            </h4>
          </div>
          <div className="box">
            <div
              className="boxcard"
              style={{
                backgroundColor: primarycolor.hex,
                transition: "ease all 500ms",
              }}
            ></div>
            <div
              className="boxcard"
              style={{
                backgroundColor: primarycolor.hex,
                transition: "ease all 500ms",
              }}
            ></div>
            <div
              className="boxcard"
              style={{
                backgroundColor: primarycolor.hex,
                transition: "ease all 500ms",
              }}
            ></div>
          </div>
          <div className="secondaryFontHere">
            <p
              style={{
                color: secondaryfont.hex,
                transition: "ease all 500ms",
              }}
            >
              Secondary Font Color Apply Here
            </p>
          </div>
          <div
            className="supportcolor"
            style={{
              backgroundColor: supportcolor.hex,
              transition: "ease all 500ms",
            }}
          >
            Support Color for Background
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
