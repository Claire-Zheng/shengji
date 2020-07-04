import * as React from "react";

function SvgQs(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className="QS_svg__card"
      preserveAspectRatio="none"
      viewBox="-106 -164.5 212 329"
      {...props}
    >
      <defs>
        <path id="QS_svg__i" d="M-58-112.5H58v225H-58z" />
      </defs>
      <symbol
        id="QS_svg__h"
        viewBox="-500 -500 1000 1000"
        preserveAspectRatio="xMinYMid"
      >
        <path
          d="M-260 100c300 0 220 360 520 360M-175 0v-285a175 175 0 01350 0v570a175 175 0 01-350 0z"
          stroke="#000"
          strokeWidth={80}
          strokeLinecap="square"
          strokeMiterlimit={1.5}
          fill="none"
        />
      </symbol>
      <symbol
        id="QS_svg__a"
        viewBox="-600 -600 1200 1200"
        preserveAspectRatio="xMinYMid"
      >
        <path d="M0-500c100 250 355 400 355 685a150 150 0 01-300 0 10 10 0 00-20 0c0 200 50 215 95 315h-260c45-100 95-115 95-315a10 10 0 00-20 0 150 150 0 01-300 0c0-285 255-435 355-685z" />
      </symbol>
      <symbol id="QS_svg__b" preserveAspectRatio="none" viewBox="0 0 1300 2000">
        <path
          fill="#FC4"
          d="M635.396 0l216.471 312.338c43.24-13.22 86.964-21.99 123.133-27.338-50.098-96.776-75.106-190.846-100.889-285zm-339.87 27.285c-49.25 153.695-152.772 308.255-86.274 455.799l-17.434 13.45c1.766 151.1 30.086 286.57 74.541 398.609 18.126 21.287 38.563 42.115 61.479 64.115 3.611 3.467 7.284 6.962 11.338 10.619l562.303.123-.415-.52c-.122-.138-.237-.274-.359-.412 15.277 17.283 32.65 35.126 52.316 53.543C1030.143 1094.837 1080 1150 1130 1250c52.982-70.642 98.186-110.097 170-152.787v-37.602c-68.62 39.335-116.942 76.655-164.555 131.967-44.949-77.848-93.917-130.607-160.209-192.69-76.06-71.23-114.274-131.59-129.37-180.425-15.098-48.834-8.91-86.603 7.948-120.969 28.318-57.727 91.514-102.355 139.07-133.863l-26.779-21.49c-69.568 45.97-172.88 123.534-159.996 244.347L699.861 787.5 568.063 939.893l-138.579-.03C578.06 763.3 745.83 594.028 899.188 455.1l-9.569-10.99c-28.867-3.021-55.644-10.377-80.517-21.428a32.409 32.409 0 01-7.944 11.234C665.116 558.396 525.47 665.166 419.79 829.432l-27.332-17.584c109.236-169.793 252.13-278.721 386.762-401.91l17.513 6.863c-17.744-8.987-34.487-19.892-50.29-32.485-124.713 29.032-208.276 36.481-267.268 31.983 0 0-19.317 14.605-29.317 14.605-15 0-25.58-5.644-30.58-5.644s-10 5-25 5-30-25-40-50a289.46 289.46 0 01-4.232-5.793l-39.219 30.256 10.51-.545c7.172 138.453-1.258 281.236 43.03 408.134l-27.419 17.667a32.671 32.671 0 01-3.267-6.958C288.229 692.79 295.294 552.704 289.598 421.1l-69.703 53.773L240.1 458.28c-53.015-160.42 25.44-275.424 59.996-399.318zM85 80C30 130-15 225 50 225c9.343 0 15.216-5.71 19.6-15.59l-.055 54.807C63.117 255.8 55.219 250 45 250c-35 0-40 70-5 70 24.463 0 22.958-43.082 10.813-44.932 53.481 5.086-15.81 250.164-15.303 296.221.268 24.388 6.628 48.737 31.463 56.21C48.177 632.493 35 645.168 35 660c0 14.308 12.266 26.61 30.385 32.256C41.675 699.576 35 720.74 35 740c0 36.244 13.136 96.132 20.518 126.33 27.086-19.784 50.566-40.901 73.322-66.111 3.308-21.304 6.16-43.33 6.16-60.219 0-19.4-6.772-40.731-30.848-48.041 13.876-5.208 25.13-15.37 30.848-31.959 0-14.833-13.182-27.511-30.787-32.898 24.056-8.659 30.018-32.218 30.277-55.813.507-46.057-68.784-291.135-15.303-296.22C107.043 276.917 105.537 320 130 320c35 0 30-70-5-70-10.834 0-19.06 6.522-25.074 15.021l.326-55.742C104.49 219 110.42 225 120 225c65 0 20-95-35-145zm641.48 287.838c-86.625 19.834-151.788 28.17-200.804 29.242-14.225 6.274-30.072 11.922-45.78 18.96 58.993 4.498 142.555-2.952 267.198-32.038-7.753-5.207-14.389-10.77-20.614-16.164zm-370.49 88.29c29.627 11.746 64.914 21.56 110.03 25.151 51.302 4.085 115.556.486 200.564-14.404C568.012 554 468.16 644.255 384.25 765.713c-25.012-94.806-24.71-201.037-28.26-309.584zm826.51 17.622c-24.04 0-48.056 17.347-29.86 52.023A45 42.5 0 011182.5 515a45 42.5 0 0129.865 10.764c18.187-34.67-5.827-52.014-29.865-52.014zm-54.691 47.48c-45.248.775-37.643 97.738 22.793 66.217A45 42.5 0 011137.5 557.5a45 42.5 0 0113.111-29.943c-8.689-4.534-16.298-6.438-22.802-6.327zm109.382 0c-6.502-.11-14.107 1.793-22.793 6.323A45 42.5 0 011227.5 557.5a45 42.5 0 01-13.11 29.943c60.443 31.534 68.051-65.438 22.801-66.213zm-24.83 67.995A45 42.5 0 011182.5 600a45 42.5 0 01-29.865-10.764c-11.988 22.852-5.631 38.17 6.972 45.96-23.682 34.463-48.94 66.025-74.949 96.206-5.493-55.707-26.207-85.944-79.658-61.402 37.225 16.128 38.57 70.317 75.95 65.697a1934.657 1934.657 0 01-17.698 20.102l15.207 1.887a1736.726 1736.726 0 0021.611-24.854c5.193 39.081 35.07-7.574 67.213-5.5-16.48-41.743-32.05-10.505-66.478 4.637 24.57-28.867 48.407-59.084 70.802-91.955 26.568 6.128 61.741-10.798 40.754-50.79zM1255 655c-32.963 38.744-63.867 77.98-125 110 16.82 30.213 26.654 60.208 30 90 47.231 18.324 82.887 51.837 115 90 2.342-37.044-4.297-71.387-30-100 23.35-4.999 40.003-20.019 50-45-14.528-24.402-35.976-32.7-60-35 44.875-32.167 30.267-71.34 20-110zM811.885 817.785c10.865 41.666 35.342 88.007 78.586 139.424a901.194 901.194 0 01-14.221-17.254l-286.463-.059 64.606-.457 75.191-86.939 93.883-.34c-4.903-11.907-8.744-23.39-11.582-34.375zM377.5 842.5c4.423 0 9.318 2.003 14.867 9.24 5.55 7.238 10.133 19.282 10.133 33.26 0 13.978-4.584 26.022-10.133 33.26-5.549 7.237-10.444 9.24-14.867 9.24s-9.318-2.003-14.867-9.24c-5.55-7.238-10.133-19.282-10.133-33.26 0-13.978 4.584-26.022 10.133-33.26 5.549-7.237 10.444-9.24 14.867-9.24z"
        />
      </symbol>
      <symbol id="QS_svg__c" preserveAspectRatio="none" viewBox="0 0 1300 2000">
        <path
          fill="red"
          d="M557.518 0l248.449 330.457 45.047-18.459L635.367 0zm78.021 0l63.766 90.75C710 65 725 65 725 65c-8.493-38.22 3.315-47.896 8.201-65zM820 265l31.867 47.338c25.64-7.839 51.453-14.113 75.787-19.072C907.758 290.72 885.52 284.656 865 270c-10 5-30 10-45-5zm99.127 216.287c-154.982 139.73-323.574 305.789-448.772 458.725L525 940l160-185h120.418l-.055-.412c6.375-102.762 97.501-170.658 160.412-212.229zm-727.42 15.563l-59.861 46.347-.397.305c1.931 12.046 3.108 21.693 3.041 27.787-.26 23.595-6.22 47.154-30.277 55.813C121.818 632.489 135 645.167 135 660c-5.718 16.588-16.972 26.75-30.848 31.959C128.228 699.269 135 720.601 135 740c0 16.89-2.852 38.915-6.16 60.219a500.97 500.97 0 01-5.873 6.394c15.6-16.646 30.96-35.182 47.033-56.613 30.251 60.502 60.449 104.592 96.857 145.715-44.955-112.61-73.273-248.08-75.15-398.865zM44.531 610.36L0 644.615v258.168c30.798-18.317 56.707-36.047 80.428-55.885-8 6.672-16.27 13.121-24.91 19.432C48.136 836.132 35 776.244 35 740c0-19.26 6.675-40.424 30.385-47.744C47.265 686.61 35 674.308 35 660c0-14.83 13.177-27.506 31.973-32.502-10.444-3.142-17.611-9.277-22.442-17.137zm1190.098 68.797l-1.121 1.047c-20.054 23.043-41.871 45.665-71.744 65.723 27.117 39.371 36.653 80.373 27.744 123.129 25.439 14.764 47.233 33.87 67.875 55.841-10.09-28.953-26.957-68.052-64.62-89.363 37.102-5.814 52.6-16.02 67.237-35.535-28.578-21.248-50.476-15.945-77.303-15.67 39.15-21.896 49.937-64.783 51.932-105.172zM110.746 819.238zm-5.152 5.051c-.768.743-1.535 1.487-2.307 2.223.771-.736 1.539-1.48 2.307-2.223zm-5.262 5.006zm-6.539 6.021zM377.5 862.5a11 22.5 0 00-11 22.5 11 22.5 0 0011 22.5 11 22.5 0 0011-22.5 11 22.5 0 00-11-22.5zm225.176 127.465a10 10 0 00-10 10 10 10 0 0010 10 10 10 0 0010-10 10 10 0 00-10-10zM420 990a10 10 0 00-10 10 10 10 0 0010 10 10 10 0 0010-10 10 10 0 00-10-10zm91.133.41a10 10 0 00-10 10 10 10 0 0010 10 10 10 0 0010-10 10 10 0 00-10-10z"
        />
      </symbol>
      <symbol id="QS_svg__d" preserveAspectRatio="none" viewBox="0 0 1300 2000">
        <path
          fill="#44F"
          d="M472.5 150a12.5 20 0 00-12.5 20 12.5 20 0 0012.5 20 12.5 20 0 0012.5-20 12.5 20 0 00-12.5-20zm-140 5a12.5 20 0 00-12.5 20 12.5 20 0 0012.5 20 12.5 20 0 0012.5-20 12.5 20 0 00-12.5-20zm23.49 301.129c3.55 108.547 3.248 214.778 28.26 309.584C468.16 644.256 568.012 554 666.584 466.875c-85.008 14.89-149.262 18.489-200.564 14.404-45.116-3.591-80.403-13.405-110.03-25.15zm42.926 22.922c22.576.103 52.528 2.344 83.498 6.246 65.746 8.284 118.153 21.659 117.055 29.873-1.099 8.214-56.31 5.079-122.053-3.205-65.74-8.284-117.118-18.579-116.027-26.793.534-4.02 14.071-6.229 37.527-6.121zM1117.5 492.5c2.401 8.404 4.227 18.25 5.475 28.844v.361c7.387-1.364 16.465.084 27.232 5.623l-21.267-21.267a1.5 1.5 0 011.044-2.577 1.5 1.5 0 011.077.455l21.267 21.268c-5.529-10.748-6.98-19.813-5.629-27.193-10.728-1.25-20.702-3.086-29.199-5.514zm130 0c-8.425 2.407-18.299 4.234-28.924 5.482h-.28c1.362 7.386-.086 16.461-5.622 27.223l21.266-21.266a1.5 1.5 0 011.03-.453 1.5 1.5 0 011.09 2.575l-21.267 21.267c10.757-5.534 19.827-6.984 27.21-5.627v-.172c1.25-10.665 3.082-20.576 5.497-29.029zm-853.6 15.258c20.385.103 47.43 2.344 75.393 6.246 59.364 8.284 106.684 21.659 105.691 29.873-.992 8.214-49.917 8.157-109.277-.127-59.364-8.284-106.684-21.659-105.691-29.873.486-4.02 12.709-6.227 33.884-6.12zm7.696 34.68c15.093-.076 32.614.814 50.478 2.562 51.502 5.04 94.008 14.752 93.676 23.004-.329 8.252-42.347 10.855-93.85 5.814-51.501-5.04-92.982-15.816-92.65-24.068.203-5.087 15.52-7.179 42.346-7.313zM992.41 563.53c-26.288 17.831-58.004 39.716-85.844 65.823l156.686 126.445c5.93-6.645 11.83-13.341 17.697-20.102-37.378 4.62-38.724-49.57-75.949-65.697 53.45-24.542 74.165 5.695 79.658 61.402 18.288-21.222 36.203-43.132 53.461-66.25-50.496-31.89-99.368-65.632-145.709-101.62zm92.248 167.871c-1.235 1.434-2.47 2.868-3.709 4.295A43.255 43.255 0 001085 735c-.104-1.216-.224-2.404-.342-3.598zm-21.406 24.397l1.324 1.023C1092.824 758.22 1130 765 1130 765c33.235-17.408 57.528-36.95 78.082-57.385a2388.255 2388.255 0 01-59.21-35.719c-15.554 20.888-31.647 40.782-48.067 60.073 34.429-15.142 49.998-46.38 66.478-4.637-32.143-2.074-62.02 44.581-67.213 5.5a1736.726 1736.726 0 01-21.611 24.854zm-663.367-180.81c12.139-.076 26.23.813 40.597 2.562 41.422 5.04 74.784 15.817 74.516 24.068-.265 8.252-34.059 10.855-75.48 5.815-41.422-5.041-74.784-15.817-74.516-24.069.164-5.087 13.308-8.243 34.883-8.377zm814.908 12.683l21.268 21.267a1.5 1.5 0 11-2.121 2.122l-21.266-21.266c5.537 10.764 6.984 19.84 5.62 27.226h.323c10.61 1.249 20.469 3.075 28.883 5.479-2.428-8.497-4.263-18.47-5.512-29.2-7.38 1.353-16.446-.099-27.195-5.628zm-64.588.002c-10.75 5.53-19.816 6.98-27.197 5.627v.072c-1.249 10.702-3.085 20.648-5.508 29.127 8.498-2.428 18.47-4.265 29.2-5.514-1.353-7.38.1-16.445 5.628-27.193l-21.268 21.268a1.5 1.5 0 11-2.12-2.121zM399.951 608.22c7.756-.014 16.34.595 25.049 1.779 30.51 4.147 55.198 16.746 55.244 25 .05 8.255-24.648 11.585-55.16 7.438-30.51-4.147-55.282-14.2-55.328-22.454-.033-5.622 11.687-11.73 30.195-11.763zm2.942 36.283A138.68 138.68 0 01415 645c25.086 2.107 44.778 7.028 45.422 14.979.643 7.95-19.171 12.685-44.256 10.578-25.086-2.108-45.944-10.261-46.588-18.211-.523-6.467 13.793-7.764 33.315-7.842zm-6.372 30.781c1.538.001 3.102.061 4.674.18 15.244 1.152 28.129 7.432 28.78 14.027.652 6.595-11.178 11.008-26.422 9.856-15.244-1.153-28.129-7.433-28.78-14.028-.573-5.811 8.608-10.048 21.748-10.035zm-2.72 30.47c.975.003 1.966.05 2.963.145 9.66.915 17.828 5.899 18.242 11.133.412 5.235-7.086 8.737-16.748 7.822-9.661-.914-17.828-5.898-18.242-11.132-.365-4.614 5.455-7.977 13.785-7.967zm906.199.079l-34.277 2.855c.225 20.003-6.783 39.154-30.72 56.311 24.025 2.3 45.473 10.598 60 35-9.996 24.981-26.65 40.001-50 45 19.683 21.91 28.178 47.183 30.03 74.453l.01.008L1300 930.555zm-167.266 64.205c.238.447.471.894.706 1.34-.235-.446-.468-.894-.706-1.34zm3.041 5.883c.083.166.171.332.254.498-.083-.166-.17-.332-.254-.498zm2.676 5.484c.215.453.425.905.637 1.358-.212-.453-.422-.905-.637-1.358zm2.455 5.324c.18.4.364.801.541 1.202-.177-.4-.361-.801-.54-1.202zm2.596 5.985c.21.502.413 1.004.62 1.506-.207-.502-.41-1.004-.62-1.506zm2.07 5.117c.198.503.4 1.005.594 1.508-.194-.503-.396-1.005-.594-1.508zm2.342 6.188c.192.53.376 1.06.564 1.591-.188-.53-.372-1.06-.564-1.591zm1.732 4.964c.205.605.411 1.21.61 1.815-.199-.605-.405-1.21-.61-1.815zm2.028 6.266c.184.602.358 1.203.537 1.805-.18-.602-.353-1.203-.537-1.805zm1.469 5.01zM377.5 842.5c-4.423 0-9.318 2.003-14.867 9.24-5.55 7.238-10.133 19.282-10.133 33.26 0 13.978 4.584 26.022 10.133 33.26 5.549 7.237 10.444 9.24 14.867 9.24s9.318-2.003 14.867-9.24c5.55-7.238 10.133-19.282 10.133-33.26 0-13.978-4.584-26.022-10.133-33.26-5.549-7.237-10.444-9.24-14.867-9.24zm-.273 4.795c2.955.088 5.949 5.08 5.949 10.705 10.931-.111 14.677 3.31 5.676 13 13.697 3.744 10.645 8.7 2.837 14 7.808 5.3 10.86 10.256-2.837 14 9.001 9.69 5.255 13.111-5.676 13 0 10-9.46 18-11.352 0-10.931.111-14.677-3.31-5.676-13-13.697-3.744-10.645-8.7-2.837-14-7.808-5.3-10.86-10.256 2.837-14-9.001-9.69-5.255-13.111 5.676-13 .828-7.875 3.104-10.773 5.403-10.705zm352.357 5.205l-75.191 86.94 43.003-.042L744.446 885H840l-15-32.5zm29.723 65l-19.23 22.236 136.173.22L860 917.5zm-104.135 52.42l-315.76.18c2.44 2.478 4.988 4.874 7.567 7.289 15.37 14.394 29.32 28.432 41.91 42.127 1.07-4.445 6.05-11.131 16.111-19.516-30-25-15-35 15-15 30-20 45-10 15 15 30 25 15 35-15 15-11.07 7.38-20.085 10.664-25.563 10.629 1.311 1.463 2.628 2.926 3.907 4.38l256.418-.132zm-170.012 4.445c5.45-.146 14.59 3.135 25.84 10.635 30-20 45-10 15 15 30 25 15 35-15 15-30 20-45 10-15-15-18.75-15.625-19.922-25.39-10.84-25.635zm91 0c5.45-.146 14.59 3.135 25.84 10.635 30-20 45-10 15 15 30 25 15 35-15 15-30 20-45 10-15-15-18.75-15.625-19.922-25.39-10.84-25.635z"
        />
      </symbol>
      <symbol id="QS_svg__e" preserveAspectRatio="none" viewBox="0 0 1300 2000">
        <path d="M499.674 0c99.157 212.426 198.842 423.784 391.404 444.248L557.508 0zM299.898 59.855C265.541 182.854 187.085 297.86 240.1 458.28l109.775-85.334C322.205 333.641 300 282.29 300 255c0-20 5.003-150 5-155-.001-2.004-2.411-19.274-5.102-40.145zM899.91 454.842C746.551 593.77 578.784 763.04 429.508 939.469l40.847.543c125.198-152.936 293.79-318.995 448.6-458.633zm65.791 87.457c-28.872 19.187-64.125 44.128-93.978 75.523l25.55 20.043c30.23-29.844 65.96-54.59 95.6-73.978-9.281-6.88-18.471-14.107-27.172-21.588zM685 755L525.102 939.883 570 940l129.861-152.5h106.79L805 755z" />
      </symbol>
      <symbol id="QS_svg__f" preserveAspectRatio="none" viewBox="0 0 1300 2000">
        <path
          stroke="#44F"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={6}
          fill="none"
          d="M435 885a57.5 75 0 01-57.5 75 57.5 75 0 01-57.5-75 57.5 75 0 0157.5-75 57.5 75 0 0157.5 75v0m-17.923 55h458.95m-567.756 0h28.757m2.463 30h561.987M131.845 543.196l219.19-168.607M0 644.615l44.832-34.486m1093.334 55.053c-60.173-37.999-118.04-78.629-172.87-122.724m243.284 165.45a2389.01 2389.01 0 01-59.891-36.122M557.519 0l407.927 542.578m334.283 517.187c-68.477 39.278-116.733 76.573-164.284 131.813-44.949-77.848-93.917-130.607-160.209-192.69-76.06-71.23-114.274-131.59-129.37-180.425-15.098-48.834-8.91-86.603 7.948-120.969 28.318-57.727 91.513-102.355 139.07-133.863M499.685.037c99.152 212.416 198.83 423.741 390.657 443.814M364.365 812.312c-44.288-126.898-35.856-269.682-43.029-408.135 76.718 39.852 163.357 77.441 457.883 5.761-134.632 123.19-277.526 232.116-386.762 401.909m-36.48-355.722c29.63 11.748 64.92 21.562 110.043 25.154 51.305 4.085 115.563.486 200.578-14.406-98.578 87.128-198.392 177.482-282.246 298.861-24.966-94.927-24.798-201.062-28.375-309.609v0m511.366-15.719c-147.713 133.67-306.904 290.169-431.25 439.032m-212.2-406.569c-.823 183.17 37.986 343.482 98.115 466.27m-130.51-442.425c2.086 150.922 30.405 286.392 75.552 398.74m162.457 44.015C578.783 763.04 746.552 593.77 899.911 454.84M470.355 940.01c125.198-152.935 293.79-318.994 448.6-458.632M525 940l160-185h120.419M567.926 940.05L699.86 787.5h106.79M611.464 939.39L714.723 820h97.264M654.392 939.44l75.192-86.94h93.897m-126.084 86.899L744.445 885h95.046m-99.416 54.736l19.232-22.236H860m46.392-288.077l157.393 127.254M871.924 617.813l171.32 139.198M459.62 481.348C414.869 573.513 406.452 669.627 385 765M303.656-.002c-44.563 162.791-165.042 327.08-94.233 483.475M240.1 458.28c-53.015-160.42 25.44-275.426 59.996-399.32m505.715 271.174c14.888-6.445 30.422-12.16 46.148-17.214M.097 902.74C71.867 860.066 117.037 820.616 170 750c50 100 99.857 155.164 176.979 227.39 281.56 263.683 94.15 409.61-13.085 480.469M377.5 842.5c4.423 0 9.318 2.003 14.867 9.24 5.55 7.238 10.133 19.282 10.133 33.26 0 13.978-4.584 26.022-10.133 33.26-5.549 7.237-10.444 9.24-14.867 9.24s-9.318-2.003-14.867-9.24c-5.55-7.238-10.133-19.282-10.133-33.26 0-13.978 4.584-26.022 10.133-33.26 5.549-7.237 10.444-9.24 14.867-9.24v0M1130 765c16.82 30.213 26.654 60.208 30 90 47.231 18.324 82.887 51.837 115 90 2.342-37.044-4.297-71.387-30-100 23.35-4.999 40.003-20.019 50-45-14.528-24.402-35.976-32.7-60-35 44.875-32.167 30.267-71.34 20-110-32.963 38.744-63.867 77.98-125 110v0m170-59.167l-34.324 2.86M1300 930.556l-26.171-11.631m-81.102-82.498c37.698 20.42 54.567 59.519 65.28 89.01m-75.038-140.513c26.555-.869 48.453-6.171 77.031 15.077-14.637 19.516-30.136 29.72-67.201 34.643m41.83-155.485c-1.995 40.39-12.783 83.276-52.204 104.577m-20.082-38.31c26.538 39.874 36.074 80.876 26.98 123.434M1130 765s-82.168-15-95-5c-12.832 10-32.97 31.307-40 40-31.97 39.527 3.645 49.73 20 30m35-30c-59.312 25.45-64.226 120.615 20 25m-28.807 28.53c-14.944 32.294.758 60.3 58.5-5.249m-37.508 34.31c-21.19 38.701 41.57 35.553 97.815-27.591m-96.748-99.2c33.572-37.625 66.287-76.828 96.447-120.735m-81.24 122.621c32.492-36.683 64.095-75.005 93.255-117.825M1085 735c-4.952-58.002-25.404-90.068-80-65 38.526 16.691 38.617 74.158 80 65v0m-80-65c37.807-6.254 56.14 40.797 80 65m15-2.668c35-15 50.673-47.072 67.282-5-32.282-2.084-62.282 45-67.282 5v0m.066.513c26.326 8.268 52.462-23.905 67.216-5.513M1155 585c-75 45-75-100 0-55-45-75 100-75 55 0 75-45 75 100 0 55 45 75-100 75-55 0v0m87.5-27.5c-60 0-60 0-60-60 0 60 0 60-60 60 60 0 60 0 60 60 0-60 0-60 60-60v0m-119.526-36.157c-1.248-10.594-3.072-20.44-5.473-28.843 8.576 2.45 18.654 4.3 29.497 5.55m-.243 118.928c-10.75 1.25-20.742 3.09-29.255 5.522 2.423-8.479 4.258-18.424 5.507-29.126m118.941-.388c1.25 10.85 3.1 20.933 5.552 29.514-8.414-2.404-18.273-4.23-28.883-5.478m-.04-119.039c10.624-1.248 20.498-3.076 28.923-5.483-2.415 8.453-4.247 18.364-5.495 29.029M357.958 386.26a654.832 654.832 0 01-14.283-7.126m404.393 4.804c-125.618 29.15-209.18 36.599-268.277 33.14m-123.802 39.05c29.627 11.745 64.914 21.559 110.03 25.15 51.302 4.085 115.556.486 200.564-14.404C568.012 554 468.16 644.255 384.25 765.713c-25.012-94.806-24.71-201.037-28.26-309.584v0M85 135c10.787 31.13 5 90 35 90 65 0 20-95-35-145-55 50-100 145-35 145 30 0 24.213-58.87 35-90v0M40 285s0-10 10-10c12.88 0 15 45-10 45-35 0-30-70 5-70 30 0 40 50 40 50s10-50 40-50c35 0 40 70 5 70-25 0-22.88-45-10-45 10 0 10 10 10 10m-10-10c-55 2.668 15 250 14.491 296.289C134.168 600.673 125 630 85 630s-49.168-29.327-49.491-58.711C35 525 105 277.669 50 275m20-10.016v-56.65m30 56.855v-56.445m3.206 418.649C121.818 632.488 135 645.167 135 660c0 19.33-22.386 35-50 35s-50-15.67-50-35c0-14.83 13.177-27.506 31.782-32.604m-.85 65.08C41.674 699.576 35 720.74 35 740c0 36.244 13.136 96.133 20.364 126.343m73.005-65.666C132.147 778.914 135 756.89 135 740c0-19.4-6.772-40.73-31.462-47.677M256.892 885h6.386M0 885h28.737m216.835-15h11.9M0 870h51.088m182.582-15h18.578M0 855h52.54m170.39-15h24.093M0 840h49.347m163.424-15h29.898M0 825h46.444m156.748-15h34.542M0 810h43.541m150.942-15h38.897m-103.918 0h5.225M0 795h40.638m145.427-15h42.961m-97.242 0h14.514M0 780h38.316m139.912-15h46.734m-91.146 0h24.673M10 765h26.284m98.403-15h86.502M10 750h24.543m100.434-15h83.019M15 735h20.123m97.532-15H205m-190 0h22.845M155 705h45m125-195c-11.823-17.571-24.455-31.947-45.421-47.163-21.678-15.732-32.015 9.637-23.863 22.705M325 540c-13.684-15.717-40.727-39.318-62.257-51.807-20.397-11.832-26.523 15.1-9.535 27.995m73.441 56.35c-13.684-15.716-40.423-39.855-62.257-51.806-33.042-18.087-43.84 14.159-2.743 31.807m68.033 79.606c-13.684-15.717-40.423-39.856-62.257-51.807-30.811-16.866-37.656 16.865-5.116 35.806m65.759-18.456c-13.861-13.59-33.316-27.705-50.773-39.513-22.075-14.93-34.105 4.474-22.836 17.226m77.737 83.987c-13.77-13.232-32.62-26.884-49.584-38.358-24.044-16.263-36.172 12.272-19.251 25.316m72.12 40.26c-16.237-12.964-39.967-26.862-58.056-36.268-31.27-16.262-36.887 20.479-3.298 37.12m65.315 22.486c-45.63-38.6-98.238-25.302-54.442 5.056m60.578 28.858c-49.783-42.234-140.14-42.27-51.454 5.5m65.03 48.07c-62.846-40.072-141.739-29.442-43.897 10.66m40.895 7.628c-43.416-18.163-92.791.21-43.97 13.657m23.614 4.178c-36.462-11.384-55.925 9.426-11.423 20.21m-.736-386.374c-7.192-7.586-15.51-14.892-25.858-22.402-17.521-12.715-26.72.328-25.123 12.489m49.503-29.247a228.182 228.182 0 00-4.06-3.014c-19.41-14.087-28.606 3.442-24.226 16.361m57.629 327.773c-41.829-32.624-87.13-22.987-57.827 2.599m102.835 33.088c97.552 1.04 65.936 25.615 21.194 25.634m-7.5-44.952c31.879-11.92 60.58-9.172 74.959-1.629 16.816 8.823 14.04 24.205-26.165 30.349m-28.448-56.704c58.576-11 103.694 13.949 55.484 26.189m-34.41-54.317c67.42-18.097 125.454 10.742 49.426 33.663m-31.898-55.65c69.254-23.47 135.427 4.476 67.152 28.146m-39.27-60.03c50.503-8.007 88.676 9.667 55.552 28.023m-38.523-47.189c77.254-19.944 157.955 17.262 48.762 27.753m-11.91-66.01c57.176-5.002 100.009 18.028 40.226 35.034m-22.25-52.405c75.248-19.797 151.842 14.61 51.224 34.336m-23.275-61.119c55.645-7.643 102.468 11.747 64.246 28.765m-40.348-50.813c71.57-16.516 140.665 14.62 53.46 34.064m-13.464-70.602c57.115-4.525 99.001 18.874 36.455 35.786m-12.802-56.767c73.88-16.896 144.864 16.899 43.681 36.081m-5.272-69.844c57.765-5.504 101.75 17.66 42.024 34.798m-16.39-57.86c68.018-11.92 127.591 17.44 43.803 36.028m-146.681-199.93C640.452 285.48 635.593 297.26 610 295c-14.372 81.302-73.773 98.388-130 120 0 0-19.42 15.646-29.42 15.646-15 0-25.58-5.646-30.58-5.646s-10 5-25 5-30-25-40-50c-30-40-55-96.045-55-125 0-20 5.003-150 5-155-.002-3.09-5.728-42.446-10.104-72.074m328.037 212.395c-6.317 10.231-13.74 24.421-7.933 24.679 2.734.121 6.97-10.378 10.244-19.906m278.916 249.72l50.564 54.176m-64.734-40.786l48.735 52.215m-63.377-39.332l48.02 51.45m-61.731-37.569l46.154 49.451m-60.774-36.544l45.963 49.246m-60.147-35.871l35.288 37.808m-49.458-24.419l24.026 25.742m-38.824-13.025l17.842 19.116m-31.643-5.332l8.928 9.566M482.759 925h55.418m-42.282-15h55.008m-42.693-15h55.83m-42.694-15h55.42m-42.283-15H589.9m-36.945-20H585m205-25v32.5M765 820v32.5M740 820v32.5m-36.732-19.232l22.578 22.578m-41.757-1.757l23.399 23.399m-41.552-1.552l22.783 22.783m-40.525-.525l22.578 22.578m-41.552-1.552l20.73 20.73m141.346-629.195c15.63-6.297 31.834-11.834 48.115-16.69m-63.254-3.714c15.845-6.355 32.272-11.933 48.765-16.812m-64.1-3.053c16.18-6.505 32.973-12.197 49.824-17.161m-64.098-1.096c16.426-6.797 33.543-12.737 50.76-17.91m-58.187-5.145c11.718-4.608 23.734-8.797 35.842-12.6m-48.416-8.346a532.284 532.284 0 0125.756-9.191m-40.617-10.698a614.2 614.2 0 0116.37-5.825M900.41 94.432c-51.863 19.822-103.68-24.662-138.977-.81C715 125 755 185 789.335 165.189 821.135 146.84 790 105 775 115c-9.303 6.202-14.888 18.31-10 25 6.18 8.459 10.489 9.628 20 5m116.467-47.867c-39.706 38.323-22.12 103.88-58.726 125.388-48.318 28.389-85.238-33.553-52.57-56.007 30.256-20.797 54.606 25.324 39.12 34.554-9.604 5.724-22.937 5.55-26.87-1.743-4.971-9.221-4.17-13.613 4.103-20.203M765 180l90-60m-10 40c-10-10-45.467-11.357-55 5 22.008-11.038 34.763-24.757 25-45m-20 110c25 30 50 20 75 10 24.055 32.765 64.661 38.666 105 45M725 130c-10-20 15-45 30-55-5.851-23.051 2.707-48.99 11.594-74.995M700 90c10-25 25-25 25-25-8.483-38.172 3.289-47.867 8.187-64.931M427.964.019c17.101 51.729 55.35 78.381 111.355 83.975M446.671.044c15.96 38.8 45.365 61.656 86.47 70.64M461.244.015c13.98 27.431 35.684 45.703 64.339 55.732M476.996.108c10.384 16.346 24.002 28.856 40.64 37.786M371.264.044c-14.92 40.153-30.346 80.031-66.567 100.242M355.609.044c-12.266 31.76-26.47 61.802-52.938 80.255M339.571.02c-9.837 23.175-21.68 44.51-39.856 59.863m25.442-59.8c-7.692 14.638-16.88 27.88-28.89 38.46M305 120c41.102-25.066 61.56-14.287 80 0 20 55-15 110-14.42 151.676.216 15.477 11.728 13.449 19.42 13.324 5-.081 15 10 15 10M305 125c29.586-20.976 55.476-17.507 80-5m45 125c20 0 20 30 5 30-40 5-40-10-5 0m-65 40v10l5-5-5-5v0m90 5l5-5v10l-5-5v0m-85 0s5 5 10 5 5.244-4.01 12.322-4.485C400 320 400 325 405 325c5 0 15-10 20-10s15 5 20 5h10m-65 20c3.07 28.452 45.614 8.689 45 5-5 5-44.772 31.851-45-5v0m40-205c51.536-36.719 85.865-16.182 120 5-35.405-25.982-85-45-120-5v0m110 25c-15 0-36.47-25.385-56.386-23.549C453.799 139.2 445 175 430 180c17.935-21.408 33.794-28.22 48.07-28.065C507.274 152.25 515 185 550 175m-120 5c15-10 32.81 10.043 45.174 9.945C504.082 189.717 519.494 175 530 175m-150 0c-20 0-30.874-19.165-47.032-20.29-12.341-.86-29.194 12.612-29.194 17.612 0 7.071 11.237 20.708 22.743 23.259 16.39 3.633 36.295-20.232 53.483-20.581v0m-75-10c22.643-42.75 64.953-9.492 65-5m450 105c15 15 35 10 45 5 20.52 14.656 42.757 20.72 62.683 23.23m-75.816 19.107C895.107 299.117 938.83 290.348 975 285 924.901 188.223 899.9 94.153 874.117-.002m-22.25 312.34C895.107 299.117 938.83 290.347 975 285 924.901 188.223 899.9 94.153 874.117-.002m-23.104 312L635.367 0m292.286 293.265C907.757 290.72 885.52 284.657 865 270c-10 5-30 10-45-5"
        />
      </symbol>
      <symbol id="QS_svg__g" preserveAspectRatio="none" viewBox="0 0 1300 2000">
        <path
          stroke="#44F"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3}
          fill="none"
          d="M986.603 811.202l17.526 26.837m3.576 5.476l14.288 21.88m-28.503-64.527c12.595 20.813 26.366 39.794 40.672 57.94m3.681 4.637c6.058 7.579 12.2 15.025 18.38 22.413m3.58 4.269c4.936 5.872 9.89 11.716 14.837 17.57m-72.35-116.42c25.654 42.892 56.33 77.957 86.527 113.772m-77.496-122.805c26.598 44.899 58.723 81.183 90.152 118.553m-83.262-125.392c27.227 45.115 59.986 81.61 91.789 119.595M91.99 409.09c5.347 34.4 12.365 69.897 17.979 99.543 5.614 29.645 9.607 54.847 9.523 62.492-.145 13.187-2.604 25.095-7.351 32.22C107.393 610.472 101.334 615 85 615c-16.334 0-22.393-4.529-27.14-11.654m37.37-91.922c2.784 14.698 5.162 28.282 6.813 38.99 1.65 10.708 2.46 19.517 2.45 20.547-.126 11.422-3.038 21.371-4.835 24.068-1.554 2.333-1.96 2.672-3.316 3.332C94.986 599.022 91.78 600 85 600m14.244 41.86C113.484 645.757 120 654.052 120 660c0 3.875-2.134 8.183-8.246 12.46C105.642 676.74 95.97 680 85 680s-20.642-3.26-26.754-7.54m41.23 34.304c8.836 2.485 12.848 6.435 15.93 11.998C118.488 724.324 120 732.046 120 740c0 15.2-2.706 36.775-6.41 58.111m-10.64-137.828C99.902 662.338 92.86 665 85 665c-7.997 0-15.198-2.76-18.152-4.828m35.437 65.86C103.523 728.264 105 733.946 105 740c0 13.42-2.566 34.674-6.19 55.545m627.95-427.266c-86.906 19.393-152.067 27.729-201.921 29.296m190.774-40.986c-65.672 14.19-118.49 21.873-161.445 25.042m148.87-37.372c-49.767 10.383-91.884 16.912-127.755 20.523m115.505-33.013c-38.304 7.698-71.909 13.042-101.508 16.491m90.858-29.388c-30.036 5.827-57.089 10.165-81.515 13.253m71.582-26.36c-23.347 4.37-44.834 7.816-64.642 10.458m54.01-23.508c-18.048 3.24-34.946 5.91-50.783 8.073M390 380c11.945-13.956 27.22-12.698 45 0m5-185c10 15 30 15 45 15m-175-5c50 25 60-30 70-30m-29.98-12.945c1.143 3.179 1.786 6.767 1.786 10.564 0 13.036-7.581 23.604-16.933 23.604s-16.934-10.568-16.934-23.604c0-5.798 1.5-11.108 3.988-15.217m166.631-3.795c1.908 3.82 3.027 8.463 3.027 13.47 0 13.036-7.582 23.604-16.934 23.604s-16.933-10.568-16.933-23.604c0-4.032.725-7.829 2.004-11.15"
        />
        <use
          xlinkHref="#QS_svg__a"
          height={90}
          transform="scale(1 .793) rotate(-40 2174.412 -958.15)"
        />
        <use
          xlinkHref="#QS_svg__a"
          height={90}
          transform="scale(1 .793) rotate(-40 2364.503 -898.297)"
        />
        <use
          xlinkHref="#QS_svg__a"
          height={90}
          transform="scale(1 .793) rotate(-40 2298.18 -769.975)"
        />
        <use
          xlinkHref="#QS_svg__a"
          height={90}
          transform="scale(1 .793) rotate(-40 2112.2 -722.543)"
        />
        <use
          xlinkHref="#QS_svg__a"
          height={90}
          transform="scale(1 .793) rotate(-40 1893.896 -640.204)"
        />
        <use
          xlinkHref="#QS_svg__a"
          height={90}
          transform="scale(1 .793) rotate(-40 1666.854 -690.17)"
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
      <use width={116} height={225} x={-58} y={-112.5} xlinkHref="#QS_svg__b" />
      <use
        transform="rotate(180)"
        width={116}
        height={225}
        x={-58}
        y={-112.5}
        xlinkHref="#QS_svg__b"
      />
      <use width={116} height={225} x={-58} y={-112.5} xlinkHref="#QS_svg__c" />
      <use
        transform="rotate(180)"
        width={116}
        height={225}
        x={-58}
        y={-112.5}
        xlinkHref="#QS_svg__c"
      />
      <use width={116} height={225} x={-58} y={-112.5} xlinkHref="#QS_svg__d" />
      <use
        transform="rotate(180)"
        width={116}
        height={225}
        x={-58}
        y={-112.5}
        xlinkHref="#QS_svg__d"
      />
      <use width={116} height={225} x={-58} y={-112.5} xlinkHref="#QS_svg__e" />
      <use
        transform="rotate(180)"
        width={116}
        height={225}
        x={-58}
        y={-112.5}
        xlinkHref="#QS_svg__e"
      />
      <use width={116} height={225} x={-58} y={-112.5} xlinkHref="#QS_svg__f" />
      <use
        transform="rotate(180)"
        width={116}
        height={225}
        x={-58}
        y={-112.5}
        xlinkHref="#QS_svg__f"
      />
      <use width={116} height={225} x={-58} y={-112.5} xlinkHref="#QS_svg__g" />
      <use
        transform="rotate(180)"
        width={116}
        height={225}
        x={-58}
        y={-112.5}
        xlinkHref="#QS_svg__g"
      />
      <use xlinkHref="#QS_svg__h" height={50} x={-104} y={-152.5} />
      <use xlinkHref="#QS_svg__a" height={41.827} x={-99.913} y={-97.5} />
      <use xlinkHref="#QS_svg__a" height={38.6} x={25.281} y={-109.3} />
      <g transform="rotate(180)">
        <use xlinkHref="#QS_svg__h" height={50} x={-104} y={-152.5} />
        <use xlinkHref="#QS_svg__a" height={41.827} x={-99.913} y={-97.5} />
        <use xlinkHref="#QS_svg__a" height={38.6} x={25.281} y={-109.3} />
      </g>
      <use xlinkHref="#QS_svg__i" stroke="#44F" fill="none" />
    </svg>
  );
}

export default SvgQs;
