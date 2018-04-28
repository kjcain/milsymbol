import { ms } from "../src/milsymbol";
import { app6b } from "milstd";
import verify from "./app6b";
ms.setStandard("APP6");

import icons from "../src/lettersidc/sidc/space";
ms.addIcons(icons);

verify(ms, "APP-6 B Space", app6b.WAR.SPC);
