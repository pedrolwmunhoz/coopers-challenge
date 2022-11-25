import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div className='headerContainer'>
        <div className='icon-text'>
            <svg width="34" height="40" viewBox="0 0 44 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_469_6338" style={{"maskType": "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="44" height="50">
                    <path fillRule="evenodd" clipRule={"evenodd"} d="M0 0H43.5359V50H0V0Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_469_6338)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M43.0647 0.0287016L0.201257 18.849C0.0789901 18.9026 0 19.0237 0 19.1575V30.8426C0 30.9763 0.0789901 31.0974 0.201257 31.1511L43.0647 49.9713C43.2869 50.0689 43.5359 49.9058 43.5359 49.6628V38.2777C43.5359 38.144 43.4569 38.0229 43.3346 37.9692L14.4996 25.3085C14.2313 25.1907 14.2313 24.8093 14.4996 24.6915L43.3346 12.0308C43.4569 11.9771 43.5359 11.856 43.5359 11.7223V0.337224C43.5359 0.094201 43.2869 -0.068842 43.0647 0.0287016" fill="black"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M43.0647 0.0287016L0.201257 18.849C0.0789901 18.9026 0 19.0237 0 19.1575V30.8426C0 30.9763 0.0789901 31.0974 0.201257 31.1511L43.0647 49.9713C43.2869 50.0689 43.5359 49.9058 43.5359 49.6628V38.2777C43.5359 38.144 43.4569 38.0229 43.3346 37.9692L14.4996 25.3085C14.2313 25.1907 14.2313 24.8093 14.4996 24.6915L43.3346 12.0308C43.4569 11.9771 43.5359 11.856 43.5359 11.7223V0.337224C43.5359 0.094201 43.2869 -0.068842 43.0647 0.0287016" fill="#4AC959"/>
                </g>
            </svg>
            <div className='coopersTitle'>
                <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.7388 5.42948C9.93956 5.42948 8.48027 6.03984 7.35965 7.25934C6.23903 8.47945 5.67843 10.0596 5.67843 11.9997C5.67843 13.9959 6.23903 15.604 7.35965 16.8235C8.48027 18.0436 9.93956 18.6534 11.7388 18.6534C14.1506 18.6534 16.0152 17.9333 17.3324 16.4937C17.5586 16.2466 17.9352 16.2148 18.1931 16.4285L20.6215 18.4412C20.8834 18.6582 20.9245 19.046 20.7144 19.3136C19.7693 20.5173 18.5761 21.4618 17.1351 22.1462C15.5019 22.9229 13.6066 23.3109 11.4487 23.3109C9.26221 23.3109 7.3183 22.8394 5.61638 21.8971C3.91449 20.9547 2.59261 19.6304 1.65258 17.9255C0.711351 16.2205 0.241333 14.2596 0.241333 12.0411C0.241333 9.79582 0.718632 7.81427 1.67325 6.09466C2.62787 4.37628 3.95584 3.0453 5.65775 2.10295C7.35965 1.1606 9.31693 0.689117 11.5314 0.689117C13.5513 0.689117 15.3566 1.04243 16.9484 1.74903C18.3441 2.36957 19.5114 3.21945 20.4497 4.29867C20.6697 4.55157 20.6506 4.93449 20.4078 5.16542L17.9935 7.46166C17.7521 7.69131 17.3756 7.68759 17.1334 7.45881C15.7013 6.10608 13.9031 5.42948 11.7388 5.42948Z" fill="black"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.7388 5.42948C9.93956 5.42948 8.48027 6.03984 7.35965 7.25934C6.23903 8.47945 5.67843 10.0596 5.67843 11.9997C5.67843 13.9959 6.23903 15.604 7.35965 16.8235C8.48027 18.0436 9.93956 18.6534 11.7388 18.6534C14.1506 18.6534 16.0152 17.9333 17.3324 16.4937C17.5586 16.2466 17.9352 16.2148 18.1931 16.4285L20.6215 18.4412C20.8834 18.6582 20.9245 19.046 20.7144 19.3136C19.7693 20.5173 18.5761 21.4618 17.1351 22.1462C15.5019 22.9229 13.6066 23.3109 11.4487 23.3109C9.26221 23.3109 7.3183 22.8394 5.61638 21.8971C3.91449 20.9547 2.59261 19.6304 1.65258 17.9255C0.711351 16.2205 0.241333 14.2596 0.241333 12.0411C0.241333 9.79582 0.718632 7.81427 1.67325 6.09466C2.62787 4.37628 3.95584 3.0453 5.65775 2.10295C7.35965 1.1606 9.31693 0.689117 11.5314 0.689117C13.5513 0.689117 15.3566 1.04243 16.9484 1.74903C18.3441 2.36957 19.5114 3.21945 20.4497 4.29867C20.6697 4.55157 20.6506 4.93449 20.4078 5.16542L17.9935 7.46166C17.7521 7.69131 17.3756 7.68759 17.1334 7.45881C15.7013 6.10608 13.9031 5.42948 11.7388 5.42948Z" fill="black"/>
                </svg>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.04439 7.17588C6.88182 8.42341 6.30054 10.0455 6.30054 12.0411C6.30054 14.0373 6.88182 15.6594 8.04439 16.9069C9.20636 18.1545 10.7283 18.7782 12.6101 18.7782C14.4367 18.7782 15.9307 18.1545 17.0933 16.9069C18.2552 15.6594 18.8365 14.0373 18.8365 12.0411C18.8365 10.0455 18.2552 8.42341 17.0933 7.17588C15.9307 5.92835 14.4367 5.3046 12.6101 5.3046C10.7283 5.3046 9.20636 5.92835 8.04439 7.17588ZM18.6911 2.10295C20.4484 3.04527 21.8177 4.36894 22.8003 6.07395C23.7822 7.77893 24.2742 9.74037 24.2742 11.9583C24.2742 14.2036 23.7822 16.1863 22.8003 17.9047C21.8177 19.6237 20.4484 20.9547 18.6911 21.897C16.9333 22.8394 14.9067 23.3109 12.6101 23.3109C10.2856 23.3109 8.23769 22.8394 6.46708 21.897C4.69528 20.9547 3.31866 19.6237 2.33667 17.9047C1.35407 16.1863 0.863403 14.2036 0.863403 11.9583C0.863403 9.74037 1.35407 7.77893 2.33667 6.07395C3.31866 4.36894 4.69528 3.04527 6.46708 2.10295C8.23769 1.1606 10.2856 0.689117 12.6101 0.689117C14.9067 0.689117 16.9333 1.1606 18.6911 2.10295Z" fill="black"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.04439 7.17588C6.88182 8.42341 6.30054 10.0455 6.30054 12.0411C6.30054 14.0373 6.88182 15.6594 8.04439 16.9069C9.20636 18.1545 10.7283 18.7782 12.6101 18.7782C14.4367 18.7782 15.9307 18.1545 17.0933 16.9069C18.2552 15.6594 18.8365 14.0373 18.8365 12.0411C18.8365 10.0455 18.2552 8.42341 17.0933 7.17588C15.9307 5.92835 14.4367 5.3046 12.6101 5.3046C10.7283 5.3046 9.20636 5.92835 8.04439 7.17588ZM18.6911 2.10295C20.4484 3.04527 21.8177 4.36894 22.8003 6.07395C23.7822 7.77893 24.2742 9.74037 24.2742 11.9583C24.2742 14.2036 23.7822 16.1863 22.8003 17.9047C21.8177 19.6237 20.4484 20.9547 18.6911 21.897C16.9333 22.8394 14.9067 23.3109 12.6101 23.3109C10.2856 23.3109 8.23769 22.8394 6.46708 21.897C4.69528 20.9547 3.31866 19.6237 2.33667 17.9047C1.35407 16.1863 0.863403 14.2036 0.863403 11.9583C0.863403 9.74037 1.35407 7.77893 2.33667 6.07395C3.31866 4.36894 4.69528 3.04527 6.46708 2.10295C8.23769 1.1606 10.2856 0.689117 12.6101 0.689117C14.9067 0.689117 16.9333 1.1606 18.6911 2.10295Z" fill="black"/>
                </svg>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.11165 7.17588C6.94909 8.42341 6.3678 10.0455 6.3678 12.0411C6.3678 14.0373 6.94909 15.6594 8.11165 16.9069C9.27361 18.1545 10.7955 18.7782 12.6774 18.7782C14.504 18.7782 15.9979 18.1545 17.1605 16.9069C18.3225 15.6594 18.9037 14.0373 18.9037 12.0411C18.9037 10.0455 18.3225 8.42341 17.1605 7.17588C15.9979 5.92835 14.504 5.3046 12.6774 5.3046C10.7955 5.3046 9.27361 5.92835 8.11165 7.17588ZM18.7584 2.10295C20.5156 3.04527 21.8849 4.36894 22.8675 6.07395C23.8495 7.77893 24.3414 9.74037 24.3414 11.9583C24.3414 14.2036 23.8495 16.1863 22.8675 17.9047C21.8849 19.6237 20.5156 20.9547 18.7584 21.897C17.0006 22.8394 14.9739 23.3109 12.6774 23.3109C10.3528 23.3109 8.30498 22.8394 6.53436 21.897C4.76254 20.9547 3.38592 19.6237 2.40395 17.9047C1.42136 16.1863 0.930664 14.2036 0.930664 11.9583C0.930664 9.74037 1.42136 7.77893 2.40395 6.07395C3.38592 4.36894 4.76254 3.04527 6.53436 2.10295C8.30498 1.1606 10.3528 0.689117 12.6774 0.689117C14.9739 0.689117 17.0006 1.1606 18.7584 2.10295Z" fill="black"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.11165 7.17588C6.94909 8.42341 6.3678 10.0455 6.3678 12.0411C6.3678 14.0373 6.94909 15.6594 8.11165 16.9069C9.27361 18.1545 10.7955 18.7782 12.6774 18.7782C14.504 18.7782 15.9979 18.1545 17.1605 16.9069C18.3225 15.6594 18.9037 14.0373 18.9037 12.0411C18.9037 10.0455 18.3225 8.42341 17.1605 7.17588C15.9979 5.92835 14.504 5.3046 12.6774 5.3046C10.7955 5.3046 9.27361 5.92835 8.11165 7.17588ZM18.7584 2.10295C20.5156 3.04527 21.8849 4.36894 22.8675 6.07395C23.8495 7.77893 24.3414 9.74037 24.3414 11.9583C24.3414 14.2036 23.8495 16.1863 22.8675 17.9047C21.8849 19.6237 20.5156 20.9547 18.7584 21.897C17.0006 22.8394 14.9739 23.3109 12.6774 23.3109C10.3528 23.3109 8.30498 22.8394 6.53436 21.897C4.76254 20.9547 3.38592 19.6237 2.40395 17.9047C1.42136 16.1863 0.930664 14.2036 0.930664 11.9583C0.930664 9.74037 1.42136 7.77893 2.40395 6.07395C3.38592 4.36894 4.76254 3.04527 6.53436 2.10295C8.30498 1.1606 10.3528 0.689117 12.6774 0.689117C14.9739 0.689117 17.0006 1.1606 18.7584 2.10295Z" fill="black"/>
                </svg>
                <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M16.3863 16.7614C15.2238 18.023 13.7298 18.6534 11.9032 18.6534C10.0487 18.6534 8.54078 18.0297 7.37882 16.7822C6.21624 15.5346 5.63555 13.9125 5.63555 11.9169C5.63555 9.94878 6.21624 8.34064 7.37882 7.09312C8.54078 5.84559 10.0487 5.22183 11.9032 5.22183C13.7298 5.22183 15.2238 5.84559 16.3863 7.09312C17.5483 8.34064 18.1296 9.94878 18.1296 11.9169C18.1296 13.8857 17.5483 15.4999 16.3863 16.7614ZM22.3013 6.13608C21.4294 4.41768 20.1975 3.08001 18.6069 2.12366C17.015 1.16728 15.1824 0.689117 13.1071 0.689117C11.4466 0.689117 9.98666 1.01501 8.72743 1.66618C7.97348 2.05642 7.30149 2.55321 6.71148 3.15682C6.31705 3.5603 5.63553 3.29099 5.63553 2.72627V1.79759C5.63553 1.36092 5.20031 1.05858 4.7921 1.21168L0.644722 2.76721C0.400818 2.8587 0.239197 3.09219 0.239197 3.3531V31.1701H0.300568L5.23 29.3212C5.47391 29.2297 5.63553 28.9962 5.63553 28.7353V21.2425C5.63553 20.6812 6.31233 20.4082 6.70628 20.8073C7.31827 21.4272 8.01279 21.9361 8.79006 22.3332C10.0627 22.985 11.5293 23.3109 13.1898 23.3109C15.2651 23.3109 17.0916 22.8394 18.6689 21.8971C20.2461 20.9547 21.464 19.6377 22.322 17.9462C23.1793 16.2558 23.6086 14.301 23.6086 12.0832C23.6086 9.83722 23.1726 7.8557 22.3013 6.13608Z" fill="black"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M16.3863 16.7614C15.2238 18.023 13.7298 18.6534 11.9032 18.6534C10.0487 18.6534 8.54078 18.0297 7.37882 16.7822C6.21624 15.5346 5.63555 13.9125 5.63555 11.9169C5.63555 9.94878 6.21624 8.34064 7.37882 7.09312C8.54078 5.84559 10.0487 5.22183 11.9032 5.22183C13.7298 5.22183 15.2238 5.84559 16.3863 7.09312C17.5483 8.34064 18.1296 9.94878 18.1296 11.9169C18.1296 13.8857 17.5483 15.4999 16.3863 16.7614ZM22.3013 6.13608C21.4294 4.41768 20.1975 3.08001 18.6069 2.12366C17.015 1.16728 15.1824 0.689117 13.1071 0.689117C11.4466 0.689117 9.98666 1.01501 8.72743 1.66618C7.97348 2.05642 7.30149 2.55321 6.71148 3.15682C6.31705 3.5603 5.63553 3.29099 5.63553 2.72627V1.79759C5.63553 1.36092 5.20031 1.05858 4.7921 1.21168L0.644722 2.76721C0.400818 2.8587 0.239197 3.09219 0.239197 3.3531V31.1701H0.300568L5.23 29.3212C5.47391 29.2297 5.63553 28.9962 5.63553 28.7353V21.2425C5.63553 20.6812 6.31233 20.4082 6.70628 20.8073C7.31827 21.4272 8.01279 21.9361 8.79006 22.3332C10.0627 22.985 11.5293 23.3109 13.1898 23.3109C15.2651 23.3109 17.0916 22.8394 18.6689 21.8971C20.2461 20.9547 21.464 19.6377 22.322 17.9462C23.1793 16.2558 23.6086 14.301 23.6086 12.0832C23.6086 9.83722 23.1726 7.8557 22.3013 6.13608Z" fill="black"/>
                </svg>

                <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M16.6068 10.2533C16.9889 10.2533 17.2751 9.91316 17.2251 9.53371C17.0534 8.23106 16.5335 7.16794 15.6645 6.34441C14.6405 5.37403 13.2846 4.88855 11.5967 4.88855C10.0194 4.88855 8.69753 5.36734 7.63287 6.3237C6.7401 7.12471 6.1344 8.1736 5.81471 9.47069C5.71689 9.86755 6.01269 10.2533 6.42073 10.2533H16.6068ZM19.5455 3.72448C21.3307 5.74866 22.2233 8.58972 22.2233 12.2494C22.2233 12.642 22.219 12.981 22.2106 13.2665C22.2007 13.6044 21.9238 13.871 21.5863 13.871H6.61205C6.1842 13.871 5.88081 14.2938 6.01939 14.6994C6.42683 15.8913 7.08928 16.8563 8.00613 17.5928C9.12675 18.4938 10.5033 18.9445 12.1365 18.9445C13.2705 18.9445 14.3571 18.7301 15.395 18.2995C16.4323 17.87 17.3389 17.2536 18.1136 16.4495L20.6032 19.0501C20.8398 19.2972 20.8354 19.6905 20.5916 19.9306C19.5701 20.9369 18.3635 21.7307 16.9723 22.3125C15.3804 22.9777 13.6165 23.3109 11.6799 23.3109C9.4107 23.3109 7.41085 22.8394 5.68157 21.897C3.95232 20.9547 2.61645 19.6304 1.67643 17.9254C0.735164 16.2204 0.265167 14.2596 0.265167 12.0411C0.265167 9.82383 0.742467 7.85567 1.69709 6.13608C2.65173 4.41768 3.98637 3.08001 5.70226 2.12366C7.41814 1.16728 9.36875 0.689117 11.5552 0.689117C15.0971 0.689117 17.7609 1.7009 19.5455 3.72448Z" fill="black"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M16.6068 10.2533C16.9889 10.2533 17.2751 9.91316 17.2251 9.53371C17.0534 8.23106 16.5335 7.16794 15.6645 6.34441C14.6405 5.37403 13.2846 4.88855 11.5967 4.88855C10.0194 4.88855 8.69753 5.36734 7.63287 6.3237C6.7401 7.12471 6.1344 8.1736 5.81471 9.47069C5.71689 9.86755 6.01269 10.2533 6.42073 10.2533H16.6068ZM19.5455 3.72448C21.3307 5.74866 22.2233 8.58972 22.2233 12.2494C22.2233 12.642 22.219 12.981 22.2106 13.2665C22.2007 13.6044 21.9238 13.871 21.5863 13.871H6.61205C6.1842 13.871 5.88081 14.2938 6.01939 14.6994C6.42683 15.8913 7.08928 16.8563 8.00613 17.5928C9.12675 18.4938 10.5033 18.9445 12.1365 18.9445C13.2705 18.9445 14.3571 18.7301 15.395 18.2995C16.4323 17.87 17.3389 17.2536 18.1136 16.4495L20.6032 19.0501C20.8398 19.2972 20.8354 19.6905 20.5916 19.9306C19.5701 20.9369 18.3635 21.7307 16.9723 22.3125C15.3804 22.9777 13.6165 23.3109 11.6799 23.3109C9.4107 23.3109 7.41085 22.8394 5.68157 21.897C3.95232 20.9547 2.61645 19.6304 1.67643 17.9254C0.735164 16.2204 0.265167 14.2596 0.265167 12.0411C0.265167 9.82383 0.742467 7.85567 1.69709 6.13608C2.65173 4.41768 3.98637 3.08001 5.70226 2.12366C7.41814 1.16728 9.36875 0.689117 11.5552 0.689117C15.0971 0.689117 17.7609 1.7009 19.5455 3.72448Z" fill="black"/>
                </svg>
                <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.3192 1.83252C8.57652 2.27274 7.92365 2.826 7.36057 3.49232C6.98875 3.93232 6.26806 3.65558 6.26806 3.07907V1.81281C6.26806 1.37615 5.83283 1.07382 5.42463 1.22691L1.27784 2.78221C1.03394 2.87369 0.872314 3.10719 0.872314 3.3681V23.1026H0.939364L5.86254 21.2561C6.10644 21.1646 6.26806 20.9311 6.26806 20.6702V12.3737C6.26806 10.3228 6.95331 8.6939 8.32263 7.48781C9.56506 6.39395 11.1886 5.85373 13.1936 5.8658C13.5399 5.86789 13.823 5.58907 13.823 5.24218V1.3034C13.823 0.940211 13.5141 0.650272 13.1526 0.677562C11.7129 0.786243 10.4355 1.17136 9.3192 1.83252Z" fill="black"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.3192 1.83252C8.57652 2.27274 7.92365 2.826 7.36057 3.49232C6.98875 3.93232 6.26806 3.65558 6.26806 3.07907V1.81281C6.26806 1.37615 5.83283 1.07382 5.42463 1.22691L1.27784 2.78221C1.03394 2.87369 0.872314 3.10719 0.872314 3.3681V23.1026H0.939364L5.86254 21.2561C6.10644 21.1646 6.26806 20.9311 6.26806 20.6702V12.3737C6.26806 10.3228 6.95331 8.6939 8.32263 7.48781C9.56506 6.39395 11.1886 5.85373 13.1936 5.8658C13.5399 5.86789 13.823 5.58907 13.823 5.24218V1.3034C13.823 0.940211 13.5141 0.650272 13.1526 0.677562C11.7129 0.786243 10.4355 1.17136 9.3192 1.83252Z" fill="black"/>
                </svg>
                <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.417 5.38808C11.2684 5.02809 10.2098 4.84716 9.24118 4.84716C8.3279 4.84716 7.60191 5.00738 7.06196 5.32534C6.52264 5.64455 6.25267 6.13613 6.25267 6.80191C6.25267 7.49512 6.59134 8.02873 7.26991 8.40273C7.94726 8.77675 9.01925 9.17209 10.4864 9.58813C12.0363 10.0596 13.309 10.5238 14.3055 10.9812C15.3015 11.4381 16.1661 12.1179 16.8994 13.0188C17.6327 13.9198 18 15.1051 18 16.5738C18 18.7363 17.1694 20.3998 15.5095 21.5639C13.8489 22.7286 11.7591 23.3109 9.24118 23.3109C7.52528 23.3109 5.85134 23.0405 4.21875 22.4995C2.77153 22.0208 1.52054 21.3621 0.464935 20.5241C0.231216 20.3385 0.153916 20.0173 0.286108 19.7495L1.59346 17.1007C1.76668 16.7497 2.2118 16.647 2.52661 16.879C3.39273 17.5172 4.38533 18.0324 5.50537 18.4244C6.88866 18.9099 8.20386 19.1523 9.44913 19.1523C10.4451 19.1523 11.2404 18.9793 11.8357 18.6327C12.4303 18.2861 12.7283 17.7665 12.7283 17.0733C12.7283 16.2972 12.3817 15.7149 11.6904 15.3263C10.9984 14.9388 9.8778 14.5094 8.3279 14.0373C6.83394 13.5945 5.61604 13.1577 4.67542 12.7276C3.73415 12.2982 2.91755 11.6464 2.22621 10.7729C1.53426 9.90001 1.18891 8.75604 1.18891 7.34221C1.18891 5.15296 1.98363 3.48209 3.57545 2.33141C5.16609 1.18134 7.16594 0.605713 9.57315 0.605713C11.0397 0.605713 12.4857 0.813414 13.9109 1.22947C15.1304 1.58547 16.2333 2.06277 17.22 2.66212C17.4996 2.83198 17.6037 3.18759 17.4574 3.48057L16.0511 6.29789C15.8945 6.61162 15.5098 6.73672 15.2016 6.57014C14.2971 6.08107 13.3687 5.68705 12.417 5.38808Z" fill="black"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.417 5.38808C11.2684 5.02809 10.2098 4.84716 9.24118 4.84716C8.3279 4.84716 7.60191 5.00738 7.06196 5.32534C6.52264 5.64455 6.25267 6.13613 6.25267 6.80191C6.25267 7.49512 6.59134 8.02873 7.26991 8.40273C7.94726 8.77675 9.01925 9.17209 10.4864 9.58813C12.0363 10.0596 13.309 10.5238 14.3055 10.9812C15.3015 11.4381 16.1661 12.1179 16.8994 13.0188C17.6327 13.9198 18 15.1051 18 16.5738C18 18.7363 17.1694 20.3998 15.5095 21.5639C13.8489 22.7286 11.7591 23.3109 9.24118 23.3109C7.52528 23.3109 5.85134 23.0405 4.21875 22.4995C2.77153 22.0208 1.52054 21.3621 0.464935 20.5241C0.231216 20.3385 0.153916 20.0173 0.286108 19.7495L1.59346 17.1007C1.76668 16.7497 2.2118 16.647 2.52661 16.879C3.39273 17.5172 4.38533 18.0324 5.50537 18.4244C6.88866 18.9099 8.20386 19.1523 9.44913 19.1523C10.4451 19.1523 11.2404 18.9793 11.8357 18.6327C12.4303 18.2861 12.7283 17.7665 12.7283 17.0733C12.7283 16.2972 12.3817 15.7149 11.6904 15.3263C10.9984 14.9388 9.8778 14.5094 8.3279 14.0373C6.83394 13.5945 5.61604 13.1577 4.67542 12.7276C3.73415 12.2982 2.91755 11.6464 2.22621 10.7729C1.53426 9.90001 1.18891 8.75604 1.18891 7.34221C1.18891 5.15296 1.98363 3.48209 3.57545 2.33141C5.16609 1.18134 7.16594 0.605713 9.57315 0.605713C11.0397 0.605713 12.4857 0.813414 13.9109 1.22947C15.1304 1.58547 16.2333 2.06277 17.22 2.66212C17.4996 2.83198 17.6037 3.18759 17.4574 3.48057L16.0511 6.29789C15.8945 6.61162 15.5098 6.73672 15.2016 6.57014C14.2971 6.08107 13.3687 5.68705 12.417 5.38808Z" fill="black"/>
                </svg>
            </div>
        </div>
        <button className='buttonEntrar' onClick={()=>{document.getElementById("modalLogin").style.display = "flex";}}>entrar</button>
    </div>

  )
}

export default Header