import * as React from "react";

function SvgJd(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className="JD_svg__card"
      preserveAspectRatio="none"
      viewBox="-106 -164.5 212 329"
      {...props}
    >
      <defs>
        <path id="JD_svg__i" d="M-58-112.5H58v225H-58z" />
      </defs>
      <symbol
        id="JD_svg__h"
        viewBox="-500 -500 1000 1000"
        preserveAspectRatio="xMinYMid"
      >
        <path
          d="M50-460h200m-100 0v710a100 100 0 01-400 0v-30"
          stroke="red"
          strokeWidth={80}
          strokeLinecap="square"
          strokeMiterlimit={1.5}
          fill="none"
        />
      </symbol>
      <symbol
        id="JD_svg__a"
        viewBox="-600 -600 1200 1200"
        preserveAspectRatio="xMinYMid"
      >
        <path
          d="M-400 0C-350 0 0-450 0-500 0-450 350 0 400 0 350 0 0 450 0 500 0 450-350 0-400 0z"
          fill="red"
        />
      </symbol>
      <symbol id="JD_svg__b" preserveAspectRatio="none" viewBox="0 0 1300 2000">
        <path
          fill="#FC4"
          d="M0 0v602.5A52.5 17.5 0 0152.5 585a52.5 17.5 0 0147.5 10.092v-197.7C208.286 356.237 247.222 289.518 265 215c-50.477 41.168-105.797 67.41-165 81.691V100L0 0zm0 602.5V635c0-7.263 13.907-13.493 33.71-16.14l.302-.003A52.5 17.5 0 010 602.5zM0 635v35a52.5 17.5 0 0152.5-17.5 52.5 17.5 0 0147.5 10.092v-17.535c-9.953 4.5-26.391 7.443-45 7.443-30.376 0-55-7.835-55-17.5zm0 35v1040l100-100V707.814c-7.793 5.742-23.892 9.686-42.5 9.686-26.234 0-47.5-7.835-47.5-17.5 0-5.867 7.837-11.06 19.863-14.234A52.5 17.5 0 010 670zm872.922-504.63C878.474 185.243 890 227.408 890 235c0 10-10 40-10 55s-10 70-20 95-45 90-50.285 100.826c2.87 18.592 22.06 32.816 42.185 38.035l-1.488-.033c-33.861 23.766-71.467 38.495-112.363 44.629-68.314 10.247-147.235-4.216-232.498-47.14l-.656.294c11.604-7.362 23.09-21.337 32.703-45.244C554.796 433.597 515 330 595 175c-67.978-.001-133.598 4.195-191.217 22.625-60.889 128.08-57.836 214.769-77.752 256.514C330 415 240 390 240 465c0 20.578 15.555 49.798 43.03 51.09 65.148 21.07 129.948 36.622 202.683 12.24a40.601 40.601 0 007.232-1.334l-10.629 4.787c93.453 50.018 181.505 68.033 258.7 56.453 52.213-7.832 99.7-29.077 141.033-63.695l-1.729-.04c9.594-2.606 17.178-8.653 20.149-18.94 24.05-28.32 34.2-44.003 46.781-61.897 2.826-6.006 3.973-13.878 2.75-23.664-5-40-50-20-49.88-4.727-3.374-10.432-5.12-21.98-4.975-35.377C914.503 387.622 940 374.143 940 350c0-40-40-5-40-5s16.804-123.51-17.262-178.781l-9.816-.85zm88.28 300.823c-55.633 80.518-130.652 128.836-217.218 141.82-88.049 13.208-187.443-9.83-290.957-69.644L445 540l27.33 31.725c96.126 49.65 189.63 68.817 274.621 56.068 70.778-10.617 134.61-43.834 186.826-96.938l-2.9 3.176 17.164 274.627 17.586-58.613-14.854-237.656c9.408-10.912 18.382-22.524 26.883-34.828l3.633-5.258-20.088-6.11zm72.14 19.827c26.259 105.354 79.358 198.02 165.48 268.011l1.106-38.525c-66.365-59.904-109.386-135.174-133.368-221.154l-33.218-8.332zm-668.078 55.54l151.07 170.174a47.353 47.353 0 00-2.578-.115 46.517 46.517 0 00-3.863.106c-10.22.706-19.688 4.787-26.588 11.687-11.545 11.544-15.19 30.278-8.35 47.686-5.928-1.86-11.945-2.542-17.723-2.143-10.219.706-19.689 4.787-26.59 11.688-9.67 9.67-13.793 24.386-10.859 39.14-4.226-.84-8.449-1.111-12.55-.828-10.22.706-19.69 4.787-26.59 11.688-9.617 9.617-13.749 24.224-10.909 38.896-.283-.06-.566-.133-.85-.187a15.002 15.002 0 00-5.532-.104l.388 2.127c-21.616-108.042-70.889-218.342-155.99-326.479l-63.596 41.584c3.826 14.65 9.89 37.28 10.846 53.52.352 5.977-.336 13.376-1.412 21.79 156.379 228.198 134.295 446.7 38.824 633.136 27.042 33.288 49.713 70.29 68.02 110.166 43.963-73.483 78.356-154.445 98.05-240.098l-.308 1.623 295.531-300.144 121.16 136.478 21.035-21.363L408.006 544.65l-42.742-3.09zM100 609.905a52.5 17.5 0 01-26.826 8.655l.662-.006c10.648 1.235 19.75 3.489 26.164 6.388v-15.037zm0 67.5a52.5 17.5 0 01-19.865 7.444l1.056-.02c8.065 1.713 14.63 4.276 18.809 7.354v-14.778zm738.64 20.332l-25.587 8.225c8.45 25.619 22.49 63.8 36.947 84.039 10.843 15.18 28.27 35.064 44.53 52.715 0 0 23.036-12.071 16.199-19.656C897.24 808.094 883.902 792.462 875 780c-14.126-19.776-27.856-56.685-36.36-82.264zm-51.79 14.543l-26.717 4.649C767.967 741.662 783.72 787.208 800 810c14.389 20.144 40.371 48.569 59.836 69.07 7.133 7.514 16.883-18.613 16.883-18.613C858.628 841.113 837.464 817.45 825 800c-15.166-21.233-29.875-62.216-38.15-87.72z"
        />
      </symbol>
      <symbol id="JD_svg__c" preserveAspectRatio="none" viewBox="0 0 1300 2000">
        <path
          fill="red"
          d="M199.521 0l157.665 165.582 25.472-4.902c149.958-27.997 296.776-37.138 441.393-36.51 20.66.09 41.275.378 61.847.84l34.475 1.57L1040.949 0h-90.37L876.95 108.701l-3.267-.072c-17.44-.384-35.101-.607-52.801-.684a2658.24 2658.24 0 00-43.678.153l-7.916.093L798.268 0H696.223l-7.774 110.4-5.36.221a2217.499 2217.499 0 00-87.605 5.36l-5.513.447L570.955 0H447.898l45.315 126.52-7.39.957c-26.195 3.39-52.95 7.402-79.91 12.123l-3.544.62L292.633 0zm108.35 0l99.543 127.197c23.432-4.051 46.65-7.54 69.502-10.588L435.15 0zm275.244 0l16.924 103.627a2229.473 2229.473 0 0177.19-4.72L684.19 0zm227.576 0l-25.73 96.07c12.299-.106 24.295-.175 35.975-.125 16.664.073 33.27.302 49.724.645L936.086 0zM0 50v70l80 80v-70zm0 150v109.854c27.325-.912 54.014-3.781 80-8.817V280zm225.898 66.748C156.887 308.026 80.516 327.253 0 329.854v73.935c87.942-16.247 143.49-43.188 179.627-75.494 20.794-18.59 35.415-39.201 46.271-61.547zM80 404.438c-23.576 7.69-50.13 14.284-80 19.656V435l80 80zm182.084 104.171l-54.93 36.684c65.586 82.864 109.888 167.062 137.032 251.623l130.921-131.623-109.843-123.732c-34.415-10.878-70.714-12.66-103.18-32.952zm863.334 2.24l-42.344 33.27 9.807 23.381h66.514l-40.512 50.64 14.36 21.424 61.38-10.23-17.67 63.613 12.203 12.116 10.983-39.54-.596-43.386-6.068-7.82-60.372 10.062 36.715-45.895-13.078-25.984h-60.056l46.652-36.656zM0 515v87.5A52.5 17.5 0 0152.5 585a52.5 17.5 0 0118.664 1.164zm0 87.5V635c0-7.263 13.907-13.493 33.71-16.14l.302-.003A52.5 17.5 0 010 602.5zM0 635v35a52.5 17.5 0 0152.5-17.5 52.5 17.5 0 0127.5 2.62v-4.546c-7.507 1.223-15.988 1.926-25 1.926-30.376 0-55-7.835-55-17.5zm0 35v80l80 80V715.414c-6.698 1.33-14.358 2.086-22.5 2.086-26.234 0-47.5-7.835-47.5-17.5 0-5.867 7.837-11.06 19.863-14.234A52.5 17.5 0 010 670zm170.152-103a3 3 0 100 6h8.808a3 3 0 100-6h-.38zm-97.431 19.354A52.5 17.5 0 0180 587.619v-1.265zm74.277.646a3 3 0 100 6h47.293a3 3 0 100-6h-.355zm15.473 20a3 3 0 100 6h46.166a3 3 0 100-6h-.325zM80 617.393a52.5 17.5 0 01-6.863 1.166l.699-.006c2.125.246 4.17.544 6.164.869zM176.955 627a3 3 0 100 6h45.279a3 3 0 100-6h-.297zm13.672 20a3 3 0 100 6h44.469a3 3 0 100-6h-.27zm12.871 20a3 3 0 100 6h43.63a3 3 0 100-6h-.25zm12.078 20a3 3 0 100 6h42.422a3 3 0 100-6zm597.477 18.96l-26.203 6.32c8.275 25.504 22.984 66.487 38.15 87.72 12.701 17.782 34.437 42.018 52.748 61.559l16.781-18.844C878.27 825.064 860.843 805.18 850 790c-14.456-20.238-28.498-58.42-36.947-84.04zM226.846 707a3 3 0 100 6h41.582a3 3 0 100-6zm10.306 20a3 3 0 100 6h41.022a3 3 0 100-6zm9.557 20a3 3 0 100 6h40.467a3 3 0 100-6zm8.814 20a3 3 0 100 6h39.916a3 3 0 100-6h-.156zm8.082 20a3 3 0 100 6h39.141a3 3 0 100-6zm7.354 20a3 3 0 100 6h38.61a3 3 0 100-6zm6.514 20a3 3 0 100 6h38.263a3 3 0 100-6zM0 830v235l80 80V910zm283.213 17a3 3 0 100 6h37.808a3 3 0 100-6zm5.043 20a3 3 0 100 6h37.44a3 3 0 100-6zm4.353 20a3 3 0 100 6h37.153a3 3 0 100-6zm3.668 20a3 3 0 100 6h36.946a3 3 0 100-6zm2.987 20a3 3 0 100 6h36.627a3 3 0 100-6zm2.197 20a3 3 0 100 6h36.453a3 3 0 100-6zm1.49 20a3 3 0 100 6h36.399a3 3 0 100-6zm.83 20a3 3 0 100 6H340a3 3 0 100-6zm.174 20a3 3 0 100 6H340a3 3 0 100-6zm-.484 20a3 3 0 100 6h36.412a3 3 0 100-6zm-1.137 20a3 3 0 100 6h36.447a3 3 0 100-6zm-1.787 20a3 3 0 100 6h36.555a3 3 0 100-6zm-2.52 20a3 3 0 100 6h36.817a3 3 0 100-6zm-3.183 20a3 3 0 100 6h37.115a3 3 0 100-6zm-3.826 20a3 3 0 100 6h37.353a3 3 0 100-6zM0 1145v235l80 80v-235zm286.55 2a3 3 0 100 6h37.657a3 3 0 100-6zm-5.109 20a3 3 0 100 6h38.024a3 3 0 100-6zm-5.75 20a3 3 0 100 6h38.446a3 3 0 100-6zm-6.396 20a3 3 0 100 6h38.914a3 3 0 100-6zm-7.041 20a3 3 0 100 6h39.396a3 3 0 100-6zm-7.692 20a3 3 0 100 6h39.844a3 3 0 100-6zm-8.341 20a3 3 0 100 6h40.34a3 3 0 00.002 0 3 3 0 00.006 0h.039a3 3 0 00.162-5.996 3 3 0 00-.178 0h-.031zm-9 20a3 3 0 100 6h40.883a3 3 0 100-6zm-9.66 20a3 3 0 100 6h41.462a3 3 0 100-6zm-9.125 20a3 3 0 100 6h40.876a3 3 0 100-6zm12.818 20a3 3 0 100 6h17.828a3 3 0 100-6h-.125zM0 1459.955V1660l80-80v-40.768z"
        />
      </symbol>
      <symbol id="JD_svg__d" preserveAspectRatio="none" viewBox="0 0 1300 2000">
        <path
          fill="#44F"
          d="M509 758c9 0 28.315-1.237 32 4 19 27 34.047 54.141 62 66 5.895 2.5 10.258 21.901 2 26-38.418 19.07-54.167-44.095-64-71-7.297-19.969-27.054-16.342-31-17-6-1-3.687-8-1-8zm-52.661 57.231c9 0 28.315-1.236 32 4 19 27 34.047 54.141 62 66 5.894 2.5 10.258 21.901 2 26-38.419 19.07-54.168-44.094-64-71-7.298-19.969-27.055-16.342-31-17-6-1-3.688-8-1-8zm-50 50c9 0 28.315-1.236 32 4 19 27 34.047 54.141 62 66 5.894 2.5 10.258 21.901 2 26-38.419 19.07-54.168-44.094-64-71-7.298-19.969-27.055-16.342-31-17-6-1-3.688-8-1-8zm-35.09 49.918c7.579.188 14.955 1.05 17.09 4.082 19 27 34.047 54.141 62 66 5.894 2.5 10.258 21.901 2 26-38.419 19.07-54.168-44.094-64-71-3.55-9.71-10.045-13.842-16.235-15.599m4.185 94.434c7.016 6.681 14.831 12.254 24.05 16.165 5.894 2.5 10.258 21.901 2 26-10.88 5.4-19.941 4.206-27.565-.892M697.25 280a13.625 20 0 01-13.625 20A13.625 20 0 01670 280a13.625 20 0 0113.625-20 13.625 20 0 0113.625 20zM860 284.506a12.5 20.292 0 01-12.5 20.292 12.5 20.292 0 01-12.5-20.292 12.5 20.292 0 0112.5-20.291 12.5 20.292 0 0112.5 20.291zm179.288 309.79c-17.01-37.323-29.874-76.645-38.918-117.435l-19.08-4.558-3.634 5.258c-8.474 12.264-17.414 23.846-26.84 34.713 5.126 82.8 10.382 166.892 15.045 237.706 19.442-54.632 44.354-106.743 73.427-155.684zM1144.6 515.97l55.193 14.905M1144.6 515.97c3.51 27.018 30.4 77.532 54.942 106.166l.251-91.26M137.57 706c-4.348 7.569-8.855 12.681-13.242 14.107-15.037 4.888-24.328-10.13-24.328-10.13l.078 496.904c23.977 17.954 45.71 37.081 66.058 57.43 82.103-167.626 100.655-356.413-28.566-558.31zM100 1610l-110 110m364.528-887.179l141.618-143.829 20.83 22.783a46.517 46.517 0 00-7.084-.05c-10.219.706-19.687 4.787-26.587 11.687-11.545 11.544-15.19 30.278-8.35 47.686-5.928-1.86-11.945-2.542-17.723-2.143-10.219.706-19.689 4.787-26.59 11.688-9.67 9.67-13.793 24.386-10.859 39.14-4.226-.84-8.449-1.111-12.55-.828-10.22.706-19.69 4.787-26.59 11.688-9.617 9.617-13.749 24.224-10.909 38.896-.283-.06-.566-.133-.85-.187a15.002 15.002 0 00-5.533-.103zM1100 520a10 10 0 01-10 10 10 10 0 01-10-10 10 10 0 0110-10 10 10 0 0110 10zm30 65a10 10 0 01-10 10 10 10 0 01-10-10 10 10 0 0110-10 10 10 0 0110 10zm45 70a10 10 0 01-10 10 10 10 0 01-10-10 10 10 0 0110-10 10 10 0 0110 10z"
        />
      </symbol>
      <symbol id="JD_svg__e" preserveAspectRatio="none" viewBox="0 0 1300 2000">
        <path d="M130 1057c-4.057-.057-4.057 6.057 0 6h60c4.057.057 4.057-6.057 0-6zm-10 25c-4.057-.057-4.057 6.057 0 6h85c4.057.057 4.057-6.057 0-6zm-20 27v12h117.996l2.322-12zm0 25v12h112.19l2.613-12zm0 25v12h104.353l3.773-12zm0 25v12h96.806l3.483-12zm17.56 37h68.505l4.935-12h-87.372zm29.9 25h27.865l4.935-12h-46.444zM885.897 125.01a3414.94 3414.94 0 00-61.847-.84c-144.617-.628-291.435 8.513-441.393 36.51l-25.893 4.461L390 200c167.854-31.337 332.223-38.656 495-35l35.361-38.408zm48.586 474.122c-96.952 80.76-235.54 102.495-377.1 68.72l43.715 48.936c123.688 18.042 244.26-3.946 336.972-69.99zm-117.55 361.092l-372.51-419.608-36.418 4.034L795.9 981.588zM496.146 688.992l-141.618 143.83-10.069-34.85L475.103 665.29zm381.572 208.629c-4.427-4.522-10.572-10.854-17.549-18.39l51.237-55.326a1952.313 1952.313 0 0019.39 20.895m-737.81 450.733c94.897-187.044 116.98-405.545-39.014-633.202-4.98 15.602-9.504 32.46-16.22 43.261 129.039 202.306 110.487 391.093 29.079 558.57z" />
      </symbol>
      <symbol id="JD_svg__f" preserveAspectRatio="none" viewBox="0 0 1300 2000">
        <path
          stroke="#44F"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={6}
          fill="none"
          d="M100 709.952V1610L0 1710M100 678.11v13.912m0-46.99v17.313m0-52.554v14.838m0-227.219v197.233M0 0l100 100v196.63m.156 910.645c107.997 79.347 171.737 190.717 199.486 315.915M207.3 545.26c238.076 301.583 196.382 620.395 53.375 860.345m97.499-238.989l295.53-300.145m-288.44-324.91l409.601 461.39M650 870.235V1005m-15-119.531v235.336m-15-220.102v203.205m-15-187.97v171.074m-15-155.84v138.943m-15-123.709v106.813m-15-91.578v74.681m-15-59.447v42.55m-15-27.316v10.42M408.006 544.65L795.9 981.588M444.424 540.616l372.51 419.608M368.8 1110.75l263.86-267.981m-278.133-9.948l141.618-143.829M344.46 797.972L475.103 665.29M144.45 587.034l117.636-78.424M940.1 460.451l259.692 70.425M882.05 524.54c-41.333 34.618-88.82 55.864-141.033 63.696-77.195 11.58-165.247-6.435-258.7-56.453m-29.288 6.587c103.513 59.813 202.907 82.851 290.956 69.644 86.566-12.985 161.585-61.304 217.217-141.821m-110.79 57.636c-33.86 23.766-71.466 38.494-112.362 44.628-68.314 10.247-147.235-4.216-232.498-47.14m51.833 146.535c141.56 33.775 280.148 12.04 377.1-68.72m-3.607-65.101l17.164 274.628m2.725-296.398l14.862 237.783M601.1 716.788c123.688 18.042 244.26-3.946 336.972-69.99m-177.938 70.13c7.834 24.734 23.588 70.28 39.867 93.072 19.662 27.527 60.973 70.517 77.718 87.62m-90.87-185.341C795.125 737.784 809.835 778.767 825 800c12.464 17.45 33.628 41.114 51.719 60.458M813.053 705.96c8.45 25.619 22.49 63.8 36.947 84.039 10.843 15.18 28.27 35.063 44.53 52.714m-55.888-144.977c8.503 25.58 22.232 62.488 36.358 82.264 13.414 18.78 36.904 44.756 55.795 64.8M153.972 662.33c155.995 227.657 133.911 446.158 39.015 633.202m1006.94-580.026c-53.226-48.046-91.437-105.975-116.853-171.388-6.273-16.145-11.767-32.747-16.514-49.768m132.263 259.68c-86.123-69.99-139.223-162.654-165.48-268.01m111.257 29.95c3.51 27.019 30.4 77.533 54.942 106.167M80 240L0 160m0-40l80 80m0 80L0 200m80 355L0 475m0-40l80 80m0 355L0 790m0-40l80 80m0 80L0 830m80 355l-80-80m0-40l80 80m0 80l-80-80m80 355l-80-80m0-40l80 80m0 80l-80-80m80-744.174V1580l-80 80M80 404.212v182.702M0 50l80 80v170.958m512.661 581.81l-100-110c-20-30 10-60 40-40l100 110m-94.137 95.608L440 830c-20-30 10-60 40-40l98.193 108.012m-89.308 90.761L390 880c-20-30 10-60 40-40l98.606 108.467m-162.55-64.385c4.518.868 9.231 2.776 13.944 5.918l98.886 108.774m-39.627 40.411l-62.918-69.21m.515 21.567l52.371 57.608m-39.892 40.118l-15.594-17.153m143.236-360.34a46.517 46.517 0 00-7.084-.05c-10.22.706-19.688 4.787-26.588 11.687-11.545 11.544-15.19 30.278-8.35 47.686-5.928-1.86-11.945-2.542-17.723-2.143-10.219.706-19.689 4.787-26.59 11.688-9.67 9.67-13.793 24.386-10.859 39.14-4.226-.84-8.449-1.111-12.55-.828-10.22.706-19.69 4.787-26.59 11.688-9.617 9.617-13.749 24.224-10.909 38.896-.283-.06-.566-.133-.85-.187a15.002 15.002 0 00-5.533-.103m548.15-45.143l-51.3 54.965m-11.27-152.673c30.437-14.243 60.78-29.935 91-47.503m-79.702 74.228c27.325-12.679 54.575-26.51 81.729-41.804m-67.89 67.342c23.36-10.81 46.665-22.46 69.903-35.142m-51.546 58.583a1191.554 1191.554 0 0053.545-26.598m-33.557 49.258a1200.054 1200.054 0 0035.541-17.48m-27.996 48.272c6.272-2.875 12.54-5.81 18.803-8.809m-90.69-122.66L890 690l-50.35 10.627m20.036 51.21L905 715l-52.69 11.12m21.243 51.639L920 740l-52.69 11.12m23.932 49.453L935 765l-52.69 11.12m64.606 14.53l-49.607 10.47m12.974 21.168l36.742-29.87m-2.451 27.948l-27.265 5.755m4.567 28l18.26-14.843m-143.391-28.452L735 805l50-20m31.745 50.826L755 830l45.995-18.398m35.75 49.223L775 855l46.293-18.517m35.452 49.343L795 880l48.076-19.23m22.411 49.465L810 905l50-20m-88.125-133.843c-45.675 6.443-87.52 11.322-128.233 13.292m128.103-13.623L710 745l50-20m24.463 56.69c-37.56 5.867-76.037 10.143-115.74 12.29m115.205-13.42L725 775l48.666-19.466m26.877 55.192c-34.21 5.512-69.172 9.723-105.12 12.222l-.339.023m125.478 12.752c-33.673 5.426-68.073 9.591-103.426 12.104m125.324 12.589c-33.626 5.47-67.974 9.688-103.27 12.263M865 885c-33.784 5.565-68.294 9.873-103.757 12.527m102.932 14.978c-26.572 4.034-53.608 7.264-81.218 9.5m49.582 22.21a1129.66 1129.66 0 01-27.537 2.622m40.624-15.363L830 930l27.643-11.057m-719.89-213.351c129.038 202.306 110.486 391.093 29.078 558.57M144.664 587.05c211.432 263.85 187.394 526.874 72.807 741.459m23.227 36.982c127.566-228.18 159.318-517.652-64.978-799.217m-30.94 20.858c211.316 263.769 187.278 526.792 73.073 741.738M176.02 566.162c223.996 281.677 192.244 571.149 64.818 798.824M100 710s9.291 14.995 24.328 10.107C139.668 715.121 156.474 665.06 155 640c-1.468-24.957-15-65-15-70s1.909-14.69 1.909-34.69c0-30-31.909-45.31-34.073-2.528C107.209 545.174 110 550 115 565m0 0c-.676 4.552-10 15-10 20 0 20 8.286 22.81 8.286 22.81M0 602.5A52.5 17.5 0 0152.5 585a52.5 17.5 0 0152.5 17.5A52.5 17.5 0 0152.5 620 52.5 17.5 0 010 602.5M0 635s0 0 0 0c0-7.263 13.907-13.493 33.71-16.14m40.127-.307C94.935 621 110 627.44 110 635c0 9.665-24.624 17.5-55 17.5S0 644.665 0 635m0 35a52.5 17.5 0 0152.5-17.5A52.5 17.5 0 01105 670a52.5 17.5 0 01-52.5 17.5A52.5 17.5 0 010 670m81.19 14.829C95.422 687.85 105 693.514 105 700c0 9.665-21.266 17.5-47.5 17.5S10 709.665 10 700c0-5.87 7.845-11.066 19.884-14.24m41.47-99.406L0 515m.02-205.145C97.554 306.607 187.046 278.578 265 215 242.582 308.966 186.547 390.542.192 424.084m-.166-94.219c80.508-2.603 156.867-21.843 225.872-63.117-10.856 22.346-25.477 42.958-46.271 61.547C143.53 360.564 88.07 387.48.303 403.733m403.48-206.109C336.264 339.655 347.37 430.787 320 465c-20 25-55 30-55 0 0-35 34.9-14.626 35-10m120.15-260.264C350.946 338.298 360.638 429.106 335 465c-25 35-70 30-70 0m171.417-272.89C365.772 337.154 375.06 428.375 350 465c-65 95-110 35-110 0 0-75 90-50 85-10m127.67-265.49C380.328 335.873 384.963 425.072 365 465c-20 40-77.602 65.61-94.572 48.745m198.335-326.44C395.282 334.978 400.064 424.872 380 465c-20 40-64.5 68.136-85 55m189.862-334.903C410.176 334.001 413.892 422.783 398.06 465c-15 40-63.997 80.555-88.06 60m190.99-342.134c-75.72 150.317-68.163 241.762-84.87 283.883C395 520 361.557 552.647 333.874 532.762M517.083 180.7c-76.908 151.611-70.007 243.962-83.776 287.36C420 510 385.05 555.512 355.845 537.64m177.108-358.65c-77.813 152.625-69.804 245.359-79.837 289.945C445 505 414.576 561.02 378.609 540.433m170.223-363.16c-78.666 153.692-61.875 251.63-76.344 295.16-12.488 37.567-39.31 80.99-68.301 71.273m160.526-368.15c-79.667 154.67-60.427 249.282-68.044 294.69C490 510 460.572 546.713 428.474 539.875M580 175c-80 155-52.502 250.817-63.085 295.683-6.915 29.317-28.079 68.333-57.541 65.65M595 175c-80 155-40.203 258.598-57.401 301.367-14.964 37.211-34.463 50.386-51.886 51.962m387.21-362.96C878.475 185.245 890 227.41 890 235c0 10-10 40-10 55s-10 70-20 95-45 90-50 100-9.81 39.563-24.81 44.563C770.19 534.563 735 550 720 540c-15-10-20-15-30-15s-30 5-45 0-85-15-90-30c-4.38-13.209-10-20-12.377-37.814M600 250c38.334-16.373 66.186-53.253 135-10v0l-5 5c-36.119-35.307-82.46-18.225-130 5v0m285-10c-35-15-45-30-95 5v0c30-15 66.711-25.583 95-5v0m-95 5c-5.615 2.796-7.258 21.124-5 30 2.466 9.691 15 50 15 60s8.935 52.186 8.935 57.186C808.935 402.186 790 410 775 410m-35-40c-20.808 1.708-37.884 39.089 9.316 31.367C779.332 396.457 760 390 730 400m-35 40v15l10-10-10-5v0m110-5l-5 10-10-5 15-5v0m-105 10c15 0 30-10 35-10s15 10 20 10 15-10 20-10 10 5 15 5m-55 30c10.017 10.832 40 15 40-10M595 285c35 5 80-30 120-30m-80 25c-5 15 55 25 70 15s20-5 20-5m65.923-4.735c20 0 52.332-22.8 70-25 17.668-2.2 20 10 20 10M790 285c20 10 33.07 20 52.775 20C862.479 305 880 290 880 290m2.739-123.78C916.805 221.49 899.287 285.407 900 345c.877 16.276 15 10 20 5m-44.13-27.097C862.68 401.749 940 392.043 940 350c0-40-40-25-40-5m-5 35c0 45 20 70 35 45m-66.742-47.322C863.15 465.86 958.062 484.498 950 420c-5-40-50-20-49.354-3.324m-50.936-7.257c3.982 49.733 43.724 72.867 75.29 60.581 18.663-7.264 21.42-17.97 21.126-24.435M836.38 435.227C844.554 477.95 902.816 504.17 930 470m-103.042-17.02c9.23 40.69 44.655 58.762 73.332 47.6 9.377-3.789 17.977-11.414 19.488-21.629m-101.294-10.206c11.128 36.611 44.52 52.456 71.806 41.836 10.08-3.924 15.52-8.85 18.345-13.571m-99.206-10.358c6.148 37.142 80.063 56.922 91.04 18.908m19.69-379.78l-34.26-.77a3414.94 3414.94 0 00-61.848-.84c-144.617-.628-291.435 8.513-441.393 36.51l-25.623 4.783M199.524 0L390 200c167.854-31.337 332.223-38.656 495-35L1041.082 0M472.328 571.725c96.126 49.651 189.631 68.817 274.622 56.068 92.087-13.813 172.42-65.876 230.705-150.232l3.633-5.258"
        />
      </symbol>
      <symbol id="JD_svg__g" preserveAspectRatio="none" viewBox="0 0 1300 2000">
        <path
          stroke="#44F"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3}
          fill="none"
          d="M85 590c-4.7 8.725-5.187 17.099 0 25m3.71 6.884c-4.7 8.725-5.187 17.1 0 25m0 10c-4.7 8.725-5.187 17.1 0 25m0 5c-4.7 8.725-5.187 17.1 0 25M130 510c0 25 10 30 10 30m-89.072 57.5c-1.13 2.58-1.34 5.774 0 10m0 23.024c-1.13 2.58-1.34 5.774 0 10m0 24.476c-1.13 2.58-1.34 5.774 0 10m0 25c-1.13 2.58-1.34 5.774 0 10m0-13.84c-1.13 2.579-1.34 5.773 0 10M725 500c25-10 40-10 50-5m-70-240c-30-20-60.951-7.28-90 15m170 5c24.496-30.289 50.876-35.961 70-25m-162.46 8.604c5.799 4.01 9.636 10.975 9.636 18.896 0 12.426-9.442 22.5-21.088 22.5C669.44 300 660 289.926 660 277.5c0-3.285.66-6.406 1.846-9.22m191.278-6.541C860.1 265.138 865 273.153 865 282.5c0 12.426-8.662 22.5-19.347 22.5s-19.348-10.074-19.348-22.5c0-3.816.817-7.41 2.26-10.56M835 317.323c11.292 3.97 26.1-.361 27.069-2.323m-344.1 194.822C557.538 533.358 604.49 555.092 650 555m-124.631-56.734C565.472 522.392 613.488 545.094 660 545"
        />
        <use
          xlinkHref="#JD_svg__a"
          height={200}
          transform="matrix(1 0 0 .793 550 920.7)"
          stroke="#44F"
          strokeWidth={36}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <use
          xlinkHref="#JD_svg__a"
          height={50}
          transform="matrix(.8988 -.34763 .43837 .71274 860.57 588.872)"
        />
        <use
          xlinkHref="#JD_svg__a"
          height={50}
          transform="matrix(.92718 -.29706 .3746 .73526 819.455 612.045)"
        />
        <use
          xlinkHref="#JD_svg__a"
          height={50}
          transform="scale(1 .793) rotate(-14 3595.056 -2764.967)"
        />
        <use
          xlinkHref="#JD_svg__a"
          height={50}
          transform="scale(1 .793) rotate(-6 7972.624 -6561.36)"
        />
        <use
          xlinkHref="#JD_svg__a"
          height={50}
          transform="matrix(1 0 0 .793 681 635.175)"
        />
        <use
          xlinkHref="#JD_svg__a"
          height={50}
          transform="matrix(.9962 .06911 -.08716 .78998 633.274 631.523)"
        />
        <use
          xlinkHref="#JD_svg__a"
          height={50}
          transform="scale(1 .793) rotate(10 -4203.951 3746.59)"
        />
        <use
          xlinkHref="#JD_svg__a"
          height={50}
          transform="scale(1 .793) rotate(15 -2663.307 2446.004)"
        />
      </symbol>
      <rect
        width={211}
        height={328}
        x={-105.5}
        y={-164}
        rx={12}
        ry={12}
        fill="#fff"
        stroke="#000"
      />
      <use width={116} height={225} x={-58} y={-112.5} xlinkHref="#JD_svg__b" />
      <use
        transform="rotate(180)"
        width={116}
        height={225}
        x={-58}
        y={-112.5}
        xlinkHref="#JD_svg__b"
      />
      <use width={116} height={225} x={-58} y={-112.5} xlinkHref="#JD_svg__c" />
      <use
        transform="rotate(180)"
        width={116}
        height={225}
        x={-58}
        y={-112.5}
        xlinkHref="#JD_svg__c"
      />
      <use width={116} height={225} x={-58} y={-112.5} xlinkHref="#JD_svg__d" />
      <use
        transform="rotate(180)"
        width={116}
        height={225}
        x={-58}
        y={-112.5}
        xlinkHref="#JD_svg__d"
      />
      <use width={116} height={225} x={-58} y={-112.5} xlinkHref="#JD_svg__e" />
      <use
        transform="rotate(180)"
        width={116}
        height={225}
        x={-58}
        y={-112.5}
        xlinkHref="#JD_svg__e"
      />
      <use width={116} height={225} x={-58} y={-112.5} xlinkHref="#JD_svg__f" />
      <use
        transform="rotate(180)"
        width={116}
        height={225}
        x={-58}
        y={-112.5}
        xlinkHref="#JD_svg__f"
      />
      <use width={116} height={225} x={-58} y={-112.5} xlinkHref="#JD_svg__g" />
      <use
        transform="rotate(180)"
        width={116}
        height={225}
        x={-58}
        y={-112.5}
        xlinkHref="#JD_svg__g"
      />
      <use xlinkHref="#JD_svg__h" height={50} x={-104} y={-152.5} />
      <use xlinkHref="#JD_svg__a" height={41.827} x={-99.913} y={-97.5} />
      <use xlinkHref="#JD_svg__a" height={38.6} x={23.834} y={-109.3} />
      <g transform="rotate(180)">
        <use xlinkHref="#JD_svg__h" height={50} x={-104} y={-152.5} />
        <use xlinkHref="#JD_svg__a" height={41.827} x={-99.913} y={-97.5} />
        <use xlinkHref="#JD_svg__a" height={38.6} x={23.834} y={-109.3} />
      </g>
      <use xlinkHref="#JD_svg__i" stroke="#44F" fill="none" />
    </svg>
  );
}

export default SvgJd;
