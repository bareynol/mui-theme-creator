import Loadable from "@loadable/component"

import MonacoThemeCodeEditor from "./MonacoThemeCodeEditor"

export default Loadable(() => import("./MonacoThemeCodeEditor"))
