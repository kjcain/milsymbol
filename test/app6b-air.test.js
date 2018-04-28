import { ms } from "../src/milsymbol";
import { app6b } from "milstd";
import verify from "./app6b";
ms.setStandard("APP6");

import icons from "../src/lettersidc/sidc/air";
ms.addIcons(icons);

verify(ms, "APP-6 B Air", app6b.WAR.AIRTRK);
