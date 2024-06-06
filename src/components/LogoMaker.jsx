import React, { useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";
import ColorPicker from "react-best-gradient-color-picker";
import { Col, ConfigProvider, Row, Slider } from "antd";
import { domToPng } from "modern-screenshot";
import logo from '../assets/LogoMojii.png'
const LogoMaker = () => {
  const [emoji, setEmoji] = useState(null);
  const [color, setColor] = useState("black");
  const [angle, setAngle] = useState(0);
  const [size, setSize] = useState(36); // size in percentage
  const [borderRadius, setBorderRadius] = useState(0); // border radius in percentage

  const canvasRef = useRef(null);

  const handleEmoji = (item) => {
    setEmoji(item);
  };

  const onChangeAngle = (newValue) => {
    setAngle(newValue);
  };

  const onChangeSize = (newValue) => {
    setSize(newValue);
  };

  const onChangeBorderRadius = (newValue) => {
    setBorderRadius(newValue);
  };

  const handleDownload = () => {
    domToPng(canvasRef.current).then((dataUrl) => {
      const link = document.createElement("a");
      link.download = "LogoMoji.png";
      link.href = dataUrl;
      link.click();
    });
  };
  return (
    <>
      <div className="logo flex flex-col p-4 justify-center items-center">
       <div className="flex items-center gap-2 bg-black text-white p-2 rounded-lg"> <img src={logo} width={50} height={50} className="rounded-md" alt="" />
       <h1 className="font-bold text-4xl">LogoMoji</h1></div>
        <p className="font-semibold text-sm italic leading-none mt-2">
          A simple, minimal, easy to use and free Emoji Logo maker for your next
          website. Pick an emoji, select a background color, adjust it, boom now
          you have a logo for your next website. Isn't that fast and easy?
        </p>
      </div>
      <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-4 lg:px-16 px-4 bg-[#fcfbe6]">
        <div className="input w-full lg:items-start items-center flex lg:flex-row flex-col lg:gap-8 gap-4">
          <label className="">
            <span className="text-base font-bold ">Select Your Emoji</span>
            <EmojiPicker className="mt-3"
              onEmojiClick={(EmojiClickData) => handleEmoji(EmojiClickData)}
            />
          </label>
          <label htmlFor="" className="flex w-full flex-col items-center">
            <span className="text-base font-bold w-full text-left mb-3">Select Background</span>
            <ColorPicker
              hidePresets
              hideInputs
              width={350}
              className="w-full"
              value={color}
              onChange={setColor}
            />
          </label>
        </div>
        <div className="w-full flex flex-col items-center lg:ml-12 ml-0">
          <div className="w-full">
            <h1 className="text-lg font-bold mb-3 text-left">Your Logo</h1>
          </div>
          <div
            className="canvas w-[350px] h-[350px] "
            style={{
              background: color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: `${borderRadius}%`,
            }}
            ref={canvasRef}
          >
            {emoji && (
              <img
                src={emoji.imageUrl}
                alt={emoji.name}
                style={{
                  transform: `rotate(${angle}deg)`,
                  width: `${size}%`,
                  height: `${size}%`,
                }}
              />
            )}
          </div>
          <ConfigProvider
            theme={{
              components: {
                Slider: {
                  railBg: "black",
                  railHoverBg: "black",
                  trackBg: "black",
                  trackHoverBg: "black",
                  handleColor: "black",
                  handleActiveColor: "black",
                  dotBorderColor: "black",
                  dotActiveBorderColor: "black",
                },
              },
            }}
          >
            <Row className="w-full items-center justify-between mt-3">
              <Col span={12}>
                <span className="font-bold text-lg mr-4">Angle</span>
              </Col>
              <Col span={12}>
                <Slider
                  railBg="black"
                  min={0}
                  max={360}
                  onChange={onChangeAngle}
                  value={typeof angle === "number" ? angle : 0}
                />
              </Col>
            </Row>
            <Row className="w-full items-center flex justify-between mt-3">
              <Col span={12}>
                <span className="font-bold text-lg mr-4">Size</span>
              </Col>
              <Col span={12}>
                <Slider
                  railBg="black"
                  min={1}
                  max={100}
                  onChange={onChangeSize}
                  value={typeof size === "number" ? size : 100}
                />
              </Col>
            </Row>
            <Row className="w-full items-center flex justify-between mt-3">
              <Col span={12}>
                <span className="font-bold text-lg mr-4">Border Radius</span>
              </Col>
              <Col span={12}>
                <Slider
                  railBg="black"
                  min={0}
                  max={50}
                  onChange={onChangeBorderRadius}
                  value={typeof borderRadius === "number" ? borderRadius : 0}
                />
              </Col>
            </Row>
          </ConfigProvider>
          <button
            onClick={handleDownload}
            className="mt-4 p-2 bg-black hover:bg-white hover:text-black border border-black transition-all duration-150 text-white rounded"
          >
            Download Logo
          </button>
        </div>
      </div>
    </>
  );
};

export default LogoMaker;
