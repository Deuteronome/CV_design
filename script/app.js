import { Position } from "./positionning.js";
import { StartAnim } from "./startAnim.js";
import { CvSetting } from "./cvSetting.js";
import { PanelChange } from "./panelChange.js";

let panelChange = new PanelChange();
let start = new StartAnim();
let position = new Position();
let cvSetting = new CvSetting();

position.adjust();
start.playAnim();
start.devMode(); //à commenter pour fonctionnement normal
//setTimeout(()=>{cvSetting.setProd()}, 9500);//à décommenter pour fonctionnement normal
cvSetting.setDev()//à commenter pour fonctionnement normal