import React from "react";


const SoftUIShadowsLogo = ({ mainColor, darkShadow, lightShadow, height, width }) => {

    return(
        <svg width={ width } height={ height } viewBox="0 0 720 720"
             style={{ fillRule:'evenodd',clipRule:'evenodd',strokeLinejoin:'round',strokeMiterlimit:2 }}>
            <path d="M720,332.661c0,-71.259 -57.854,-129.112 -129.113,-129.112l-258.226,0c-71.259,0 -129.112,57.853 -129.112,129.112l0,258.226c0,71.259 57.853,129.113 129.112,129.113l258.226,0c71.259,0 129.113,-57.854 129.113,-129.113l0,-258.226Z"
                  style={{ fill: darkShadow }}/>
            <path d="M0,387.339c0,71.259 57.854,129.112 129.113,129.112l258.226,0c71.259,0 129.112,-57.853 129.112,-129.112l0,-258.226c0,-71.259 -57.853,-129.113 -129.112,-129.113l-258.226,0c-71.259,0 -129.113,57.854 -129.113,129.113l0,258.226Z"
                  style={{ fill: lightShadow }}/>
            <path d="M618.226,230.887c0,-71.259 -57.854,-129.113 -129.113,-129.113l-258.226,0c-71.259,0 -129.113,57.854 -129.113,129.113l0,258.226c0,71.259 57.854,129.113 129.113,129.113l258.226,0c71.259,0 129.113,-57.854 129.113,-129.113l0,-258.226Z"
                  style={{ fill: mainColor }}/>
        </svg>
    )
}

export default SoftUIShadowsLogo;