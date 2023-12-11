/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import Box from "../canvas/Box";
import { useState } from "react";

class object {
  constructor (type,name,desc,prop,origin) {
    this.type = type;
    this.name = name;
    this.desc = desc;
    this.prop = prop;
    this.origin = origin;
  }
}

const list = [
  new object('vga', 'AsusROG Geforce-RTX', 'Virtual Graphic Card', {
    scale: 5,
    speed: [0.0005, 0, 0],
    light: undefined,
    pos: [-1, 0, 3],
    rot: [0, 0, 0],
    src: 'asus_rog_geforce_rtx_VGA_CARD'
  },"https://sketchfab.com/3d-models/asus-rog-geforce-rtx-4090-v20-6f527569f14b4efc94c7072842bd41ac"
  ),
  new object('monitor', 'Asus PC Gaming Monitor', 'Gaming Monitor', {
    scale: 15,
    speed: [0, 0, 0],
    light: undefined,
    pos: [0, -5, 0],
    rot: [-0.3, 3.95, -0.20],
    src: 'asus_pc_gaming_monitor'
  },"https://sketchfab.com/3d-models/asus-pc-gaming-monitor-941ce968c30a42d0a640a5c9d7f56128"
  ),
  new object('motherboard', 'Asus Strix B550-F Gaming Motherboard', 'Gaming Motherboard', {
    scale: 0.8,
    speed: [0, 0, 0],
    light: undefined,
    pos: [0, -13, 0],
    rot: [1, 0.6, -0.7],
    src: 'asus_strix_b_550_f_gaming_motherboard_realistic'
  },"https://sketchfab.com/3d-models/asus-strix-b-550-f-gaming-motherboard-realistic-3eba5f45bed74fbeb2647de38047000f"
  ),
  new object('ram', 'Crucial Ballistix 8GB DDR4 3600 RAM (Black)', 'DDR4 RAM', {
    scale: 200,
    speed: [0, 0, 0],
    light: 15,
    pos: [0, 0, 0],
    rot: [0, 0, 0],
    src: 'crucial_ballistix_8gb_ddr4_3600_ram__black'
  },"https://sketchfab.com/3d-models/crucial-ballistix-8gb-ddr4-3600-ram-black-1fce4935471e46cab6ee57ba140c87f9"
  ),
  new object('cpu', 'Dream Computer CPU', 'Computer CPU', {
    scale: 1,
    speed: [0, 0, 0],
    light: undefined,
    pos: [0, 0, 0],
    rot: [0, 0, 0],
    src: 'dream_computer_CPU'
  },"https://sketchfab.com/3d-models/dream-computer-setup-82f78bbaf2d34f01af854a52151dbf49"
  ),
  new object('mouse', 'Gaming Mouse', 'Gaming Mouse', {
    scale: 1,
    speed: [0, 0, 0],
    light: undefined,
    pos: [0, 0, 0],
    rot: [0, 0, 0],
    src: 'gaming_mouse'
  },"https://sketchfab.com/3d-models/gaming-mouse-ab744476bdb343a9bf4544db12168af6"
  ),
  new object('keyboard', 'Mechanical RGB Keyboard', 'RGB Keyboard', {
    scale: 0.3,
    speed: [0.0005, 0, 0],
    light: undefined,
    pos: [0, 0, 0],
    rot: [0, 0, 0],
    src: 'mechanical_rgb_keyboard'
  },"https://sketchfab.com/3d-models/mechanical-rgb-keyboard-4650f5bafe934a90b9f09396b843a966"
  ),
  new object('cooler', 'PC Cooler 2', 'Cooling System', {
    scale: 1,
    speed: [0, 0, 0],
    light: undefined,
    pos: [0, 0, 0],
    rot: [0, 0, 0],
    src: 'pc_cooler_2'
  },"https://sketchfab.com/3d-models/pc-cooler-2-5cc52b3d32064c9ca6d476e1a90b634f"
  ),
  new object('speaker', 'Speaker Vipe Nitro X7', 'Gaming Speaker', {
    scale: 1,
    speed: [0, 0, 0],
    light: undefined,
    pos: [0, 0, 0],
    rot: [0, 0, 0],
    src: 'speaker_vipe_nitro_x7'
  },"https://sketchfab.com/3d-models/speaker-vipe-nitro-x7-f8ad99da408f4211b224ef51f08cee06"
  ),
  new object('ssd', 'SSD Samsung 980 Pro 1TB', 'Solid State Drive', {
    scale: 1,
    speed: [0, 0, 0],
    light: undefined,
    pos: [0, 0, 0],
    rot: [0, 0, 0],
    src: 'ssd_samsung_980_pro_1tb'
  },"https://sketchfab.com/3d-models/ssd-samsung-980-pro-1tb-208b846d5a5948368b4ad0676bf4ab97"
  ),
  new object('desktop', 'Desktop PC', 'Personal Computer', {
    scale: 1,
    speed: [0, 0, 0],
    light: undefined,
    pos: [0, 0, 0],
    rot: [0, 0, 0],
    src: 'desktop_pc'
  },"https://sketchfab.com/3d-models/tforce-delta-ram-aee3bb8d00ff409986aca6009b91d5e8"
  )
];

const View = ({view, toggleView}) => {
  const {part} = useParams();
  const show = list.find(item => item.type == part);
  const prop = show.prop;

  const [toggle, setToggle] = useState(false);
  const toggleSpeed = () => {
    setToggle(!toggle);
  };

  return <>
    <div className="control">
      <div id="pages">
        <button className={`view ${view ? "" : "-hide"}`} title="Jump Before">
          <span className="bi bi-arrow-bar-left"></span>
        </button>
        <button className={`view ${view ? "" : "-hide"} ${(prop.speed.some(speedValue => speedValue !== 0) ? "show" : "hide")}`} onClick={toggleSpeed} >
          <span className={`bi bi-toggle-${toggle ? "on" : "off"}`}></span>
        </button>
      </div>
      <div id="navigate">
        <button className={`view ${view ? "" : "-hide"}`} title="Controls">
          <span className="bi bi-dpad"></span>
        </button>
        <button className={`view ${view ? "" : "-hide"}`} title="Visit 3D Asset Original Source" onClick={() => window.open(show.origin, '_blank')}>
          <span className="bi bi-arrow-up-right-circle"></span>
        </button>
        <button className={`view ${view ? "" : "-lil"}`} title="Hide Elements" onClick={toggleView} >
          <span className="bi bi-aspect-ratio"></span>
        </button>
      </div>
    </div>
    <div className="control" id="pages">
      <button className={`view ${view ? "" : "-hide"}`} title="Jump Next">
        <span className="bi bi-arrow-bar-right"></span>
      </button>
    </div>
    <Box
      scale={prop.scale ? prop.scale : 1}
      speed={toggle ? prop.speed : [0,0,0]}
      light={prop.light}
      pos={prop.pos}
      rot={prop.rot}
      src={prop.src}
    />
  </>
}

const Bar = ({view}) => {
  const {part} = useParams();
  const show = list.find(item => item.type == part);

  const [hide, setHide] = useState(false);
  const toggleHide = () => {
    setHide(!hide);
  }

  return (
    <>
      <div className={`explainer view ${view ? "" : "-hide"}`}>
        <div className="del" id="hide" onClick={() => toggleHide()}>
          <span className={`bi bi-chevron-compact-${hide ? "left" : "right"}`}></span>
        </div>
        <div className={`del ${hide ? "hidden" : ""}`} id="content">
          <h1>{show.name}</h1>
          <p>{show.desc}</p>
        </div>
      </div>
    </>
  )
}

function Viewer() {
  const [view, setView] = useState(true);
  const toggleView = () => {
    setView(!view);
  }

  return (
    <div id="Viewer">
      <div className="title">
        <img src="./assets/tekkom.png" alt="Tkm"/>
      </div>

      <View view={view} toggleView={toggleView}/>
      <Bar view={view}/>
    </div>
  )
}

export default Viewer
