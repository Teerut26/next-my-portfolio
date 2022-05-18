interface Props {
    width?: number;
    height?: number;
}

const IconUser: React.FC<Props> = ({ width = 30, height = 30 }) => {
    return (
        <div
            dangerouslySetInnerHTML={{
                __html: `<svg width="${width}" height="${height}" viewBox="0 0 38 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_25_122)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6261 8.06747C12.3969 8.06747 11.218 8.53217 10.3488 9.35934C9.47957 10.1865 8.99126 11.3084 8.99126 12.4782C8.99126 13.648 9.47957 14.7699 10.3488 15.597C11.218 16.4242 12.3969 16.8889 13.6261 16.8889C14.8553 16.8889 16.0342 16.4242 16.9034 15.597C17.7726 14.7699 18.2609 13.648 18.2609 12.4782C18.2609 11.3084 17.7726 10.1865 16.9034 9.35934C16.0342 8.53217 14.8553 8.06747 13.6261 8.06747ZM5.51515 12.4782C5.51498 11.1988 5.84899 9.93943 6.48714 8.81336C7.12528 7.68729 8.04755 6.72984 9.17098 6.02711C10.2944 5.32437 11.5838 4.89841 12.9231 4.78753C14.2625 4.67665 15.6097 4.88432 16.8438 5.39188C18.0779 5.89943 19.16 6.69094 19.9929 7.69523C20.8258 8.69951 21.3833 9.88507 21.6153 11.1453C21.8473 12.4055 21.7465 13.7008 21.322 14.9147C20.8975 16.1286 20.1625 17.2231 19.1832 18.0996C21.0299 18.9522 22.6332 20.2161 23.8572 21.784C25.0812 23.3519 25.8897 25.1776 26.2143 27.1063C26.25 27.3209 26.241 27.5401 26.1877 27.7514C26.1345 27.9627 26.038 28.1619 25.9038 28.3377C25.7697 28.5136 25.6004 28.6625 25.4058 28.7761C25.2111 28.8896 24.9949 28.9656 24.7694 28.9996C24.5438 29.0336 24.3135 29.0251 24.0915 28.9744C23.8695 28.9237 23.6601 28.8319 23.4754 28.7042C23.2906 28.5765 23.1341 28.4155 23.0148 28.2302C22.8954 28.045 22.8156 27.8392 22.7799 27.6246C22.4292 25.5546 21.3154 23.671 19.638 22.3115C17.9606 20.952 15.8294 20.2053 13.6261 20.2053C11.4228 20.2053 9.29152 20.952 7.61415 22.3115C5.93679 23.671 4.82298 25.5546 4.47231 27.6246C4.4364 27.8392 4.35643 28.0449 4.23695 28.2301C4.11748 28.4153 3.96084 28.5763 3.77599 28.7039C3.59114 28.8315 3.3817 28.9232 3.15962 28.9737C2.93753 29.0243 2.70716 29.0327 2.48166 28.9985C2.25615 28.9643 2.03993 28.8882 1.84533 28.7745C1.65073 28.6608 1.48157 28.5118 1.34751 28.3359C1.21344 28.16 1.1171 27.9606 1.06398 27.7493C1.01086 27.5379 1.002 27.3187 1.03791 27.1041C1.36312 25.1762 2.17199 23.3514 3.39595 21.7843C4.61991 20.2172 6.22286 18.954 8.06893 18.1018C7.26138 17.3808 6.61803 16.5096 6.17875 15.5422C5.73946 14.5749 5.51359 13.532 5.51515 12.4782V12.4782ZM26.3718 9.17015C25.9109 9.17015 25.4688 9.34441 25.1428 9.6546C24.8169 9.96479 24.6338 10.3855 24.6338 10.8242C24.6338 11.2628 24.8169 11.6835 25.1428 11.9937C25.4688 12.3039 25.9109 12.4782 26.3718 12.4782C27.1559 12.4782 27.917 12.7305 28.5314 13.1942C29.1458 13.6578 29.5774 14.3054 29.7562 15.032C29.935 15.7585 29.8504 16.5212 29.5162 17.1962C29.182 17.8712 28.6178 18.4189 27.9152 18.7502C27.6255 18.8874 27.3818 19.0987 27.2114 19.3606C27.0411 19.6224 26.951 19.9243 26.9512 20.2322V21.0085C26.9507 21.38 27.0817 21.7409 27.323 22.0329C27.5643 22.325 27.9019 22.5312 28.2814 22.6184C31.0623 23.2558 33.2916 25.2648 34.1259 27.8495C34.1921 28.058 34.3009 28.2521 34.4461 28.4205C34.5912 28.5889 34.7699 28.7283 34.9719 28.8308C35.1739 28.9333 35.3951 28.9968 35.623 29.0177C35.8508 29.0386 36.0807 29.0165 36.2996 28.9526C36.5184 28.8887 36.7218 28.7843 36.8981 28.6454C37.0744 28.5065 37.2202 28.3358 37.327 28.1431C37.4338 27.9505 37.4995 27.7397 37.5205 27.5227C37.5414 27.3058 37.5172 27.0871 37.4491 26.8792C36.9853 25.4469 36.2202 24.1195 35.2003 22.9775C34.1804 21.8356 32.9271 20.9031 31.5165 20.2366C32.4225 19.2882 33.0195 18.1097 33.2349 16.8445C33.4504 15.5792 33.275 14.2816 32.73 13.1095C32.1851 11.9373 31.2941 10.941 30.1654 10.2417C29.0366 9.54234 27.7187 9.17008 26.3718 9.17015V9.17015Z" fill="#FFD34E"/>
                </g>
                <defs>
                <clipPath id="clip0_25_122">
                <rect width="37.0786" height="35.2857" fill="white" transform="translate(0.880161 0.348724)"/>
                </clipPath>
                </defs>
                </svg>
                `,
            }}
        ></div>
    );
};

const IconRepository: React.FC<Props> = ({ width = 30, height = 30 }) => {
    return (
        <div
            dangerouslySetInnerHTML={{
                __html: `<svg width="${width}" height="${height}" viewBox="0 0 39 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_25_109)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.21588 5.89993C5.21588 4.43769 5.84422 3.03533 6.96268 2.00137C8.08113 0.967409 9.59808 0.386536 11.1798 0.386536L32.0535 0.386536C32.5281 0.386536 32.9831 0.560798 33.3187 0.870986C33.6542 1.18117 33.8427 1.60188 33.8427 2.04055V29.6075C33.8427 30.0462 33.6542 30.4669 33.3187 30.7771C32.9831 31.0873 32.5281 31.2615 32.0535 31.2615H26.0896C25.6151 31.2615 25.16 31.0873 24.8245 30.7771C24.4889 30.4669 24.3004 30.0462 24.3004 29.6075C24.3004 29.1688 24.4889 28.7481 24.8245 28.438C25.16 28.1278 25.6151 27.9535 26.0896 27.9535H30.2644V23.5428H11.1798C10.71 23.5428 10.2508 23.6711 9.85955 23.9115C9.46833 24.1519 9.1626 24.4938 8.9807 24.8942C8.79879 25.2945 8.74881 25.7357 8.83701 26.1622C8.92521 26.5888 9.14768 26.9818 9.47651 27.2919C9.80868 27.6054 9.99252 28.028 9.9876 28.4669C9.98268 28.9057 9.78939 29.3247 9.45027 29.6318C9.11115 29.9388 8.65396 30.1088 8.17929 30.1043C7.70462 30.0997 7.25134 29.921 6.91918 29.6075C5.8259 28.5773 5.2142 27.1913 5.21588 25.7481V5.89993ZM30.2644 3.69457V20.2347H11.1798C10.3305 20.2347 9.52422 20.3979 8.79424 20.6935V5.89993C8.79424 5.31503 9.04558 4.75409 9.49296 4.34051C9.94034 3.92692 10.5471 3.69457 11.1798 3.69457H30.2644ZM12.3726 27.4022V34.5696C12.3726 34.672 12.4034 34.7723 12.4617 34.8594C12.5199 34.9465 12.6032 35.0169 12.7023 35.0627C12.8013 35.1085 12.9122 35.1279 13.0225 35.1187C13.1329 35.1095 13.2382 35.0721 13.3268 35.0106L16.7859 32.6134C16.8891 32.5418 17.0147 32.5032 17.1437 32.5032C17.2728 32.5032 17.3983 32.5418 17.5016 32.6134L20.9606 35.0106C21.0493 35.0721 21.1546 35.1095 21.2649 35.1187C21.3752 35.1279 21.4861 35.1085 21.5852 35.0627C21.6843 35.0169 21.7676 34.9465 21.8258 34.8594C21.884 34.7723 21.9149 34.672 21.9149 34.5696V27.4022C21.9149 27.2559 21.852 27.1157 21.7402 27.0123C21.6283 26.9089 21.4767 26.8508 21.3185 26.8508H12.969C12.8108 26.8508 12.6591 26.9089 12.5473 27.0123C12.4354 27.1157 12.3726 27.2559 12.3726 27.4022Z" fill="#FFD34E"/>
                </g>
                <defs>
                <clipPath id="clip0_25_109">
                <rect width="38.1691" height="35.2857" fill="white" transform="translate(0.444733 0.386536)"/>
                </clipPath>
                </defs>
                </svg>
                `,
            }}
        ></div>
    );
};

export { IconUser, IconRepository };
