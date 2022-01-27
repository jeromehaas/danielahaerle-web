const Icon = ({ data }) => {
	
  const icons = {
    ['external-link']: <><path d="M14.3499 7.83966H16.5653L11.5005 12.907C11.3364 13.071 11.3364 13.3378 11.5005 13.5018C11.5812 13.5826 11.6889 13.6242 11.7967 13.6242C11.9044 13.6242 12.0121 13.5826 12.0929 13.5018L17.1602 8.43452V10.6499C17.1602 10.8825 17.3487 11.071 17.5788 11.071C17.8113 11.071 17.9998 10.8825 17.9998 10.6499V7.42105C17.9998 7.18849 17.8113 7 17.5788 7H14.3499C14.1173 7 13.9288 7.18849 13.9288 7.42105C13.9313 7.65116 14.1173 7.83966 14.3499 7.83966Z" fill="#003067"/>,<path d="M8.51897 19H15.4786C16.869 19 17.9976 17.869 17.9976 16.481V13.2032C17.9976 12.9706 17.8091 12.7846 17.5765 12.7846C17.3439 12.7846 17.1579 12.9731 17.1579 13.2032V16.4786C17.1579 17.4039 16.4039 18.1579 15.4786 18.1579H8.51897C7.59364 18.1579 6.83966 17.4039 6.83966 16.4786V9.52142C6.83966 8.59608 7.59364 7.84211 8.51897 7.84211H11.7674C12 7.84211 12.186 7.65361 12.186 7.42105C12.186 7.18849 11.9976 7 11.7674 7H8.51897C7.12852 7 6 8.13097 6 9.51897V16.4786C6 17.869 7.13097 19 8.51897 19Z" fill="#003067"/></>,
    ['arrow']: <><path d="M15.8532 11.6716L9.85934 6.13536C9.66191 5.95488 9.34551 5.95488 9.14807 6.13536C8.95317 6.31818 8.95317 6.61116 9.14807 6.79398L14.7876 11.9997L9.14807 17.2054C8.95064 17.3859 8.95064 17.6812 9.14807 17.8641C9.24679 17.9555 9.37588 18 9.50497 18C9.63406 18 9.76062 17.9555 9.85934 17.8641L15.8532 12.3278C15.9468 12.2411 16 12.1216 16 11.9997C16 11.8755 15.9468 11.7583 15.8532 11.6716Z" fill="#003067"/></>,
    ['pdf']: <><path d="M17.9023 7.431L14.569 4.09766C14.5065 4.03516 14.4219 4 14.3333 4H7.33331C6.59797 4 6 4.59797 6 5.33334V18.6667C6 19.402 6.59797 20 7.33334 20H16.6667C17.402 20 18 19.402 18 18.6667V7.66666C18 7.57812 17.9648 7.4935 17.9023 7.431ZM14.6667 5.13803L16.862 7.33334H15.3333C14.9658 7.33334 14.6667 7.03419 14.6667 6.66669V5.13803ZM17.3333 18.6667C17.3333 19.0342 17.0342 19.3333 16.6667 19.3333H7.33334C6.96584 19.3333 6.66669 19.0342 6.66669 18.6667V5.33334C6.66669 4.96584 6.96584 4.66669 7.33334 4.66669H14V6.66669C14 7.40203 14.598 8 15.3333 8H17.3333V18.6667Z" stroke="#003067" strokeWidth="0.5"/><path d="M13.6995 13.7855C13.3909 13.5426 13.0977 13.293 12.9023 13.0977C12.6484 12.8438 12.4222 12.5977 12.2256 12.3633C12.5322 11.4157 12.6667 10.9271 12.6667 10.6667C12.6667 9.56022 12.2669 9.33331 11.6667 9.33331C11.2106 9.33331 10.6667 9.57028 10.6667 10.6986C10.6667 11.196 10.9392 11.7998 11.4792 12.5016C11.347 12.9049 11.1917 13.3701 11.0173 13.8945C10.9333 14.1462 10.8422 14.3792 10.7458 14.5947C10.6673 14.6296 10.5912 14.665 10.5176 14.7018C10.2526 14.8343 10.001 14.9534 9.76759 15.0641C8.70313 15.568 8 15.9014 8 16.5596C8 17.0374 8.51922 17.3333 9 17.3333C9.61978 17.3333 10.5557 16.5055 11.2393 15.111C11.9489 14.831 12.8311 14.6237 13.5273 14.4938C14.0853 14.9228 14.7015 15.3333 15 15.3333C15.8265 15.3333 16 14.8554 16 14.4547C16 13.6666 15.0996 13.6666 14.6667 13.6666C14.5322 13.6667 14.1716 13.7064 13.6995 13.7855ZM9 16.6667C8.80956 16.6667 8.68066 16.5768 8.66666 16.5596C8.66666 16.3232 9.37141 15.9892 10.0531 15.6663C10.0963 15.6458 10.1403 15.6253 10.1849 15.6042C9.68425 16.3301 9.18913 16.6667 9 16.6667ZM11.3333 10.6986C11.3333 10 11.5502 10 11.6667 10C11.9024 10 12 10 12 10.6667C12 10.8073 11.9063 11.1588 11.7347 11.7077C11.473 11.3047 11.3333 10.9593 11.3333 10.6986ZM11.5889 14.2812C11.6097 14.2233 11.6299 14.1647 11.6494 14.1055C11.7731 13.7344 11.8845 13.401 11.9837 13.1009C12.1221 13.2533 12.2712 13.4092 12.431 13.569C12.4935 13.6315 12.6485 13.7721 12.8549 13.9482C12.444 14.0378 12.0068 14.1487 11.5889 14.2812ZM15.3333 14.4548C15.3333 14.6045 15.3333 14.6667 15.0241 14.6686C14.9333 14.6491 14.7233 14.5254 14.4642 14.349C14.5582 14.3386 14.6276 14.3333 14.6667 14.3333C15.1592 14.3333 15.2988 14.3815 15.3333 14.4548Z" stroke="#003067" strokeWidth="0.5"/></>,
    ['slide']: <><circle cx="20.3337" cy="12.6667" r="1.66667" fill="#0B85A6"/><rect x="2" y="11" width="12.5" height="3.33333" rx="1.66667" fill="url(#paint0_linear_63_3059)"/><defs><linearGradient id="paint0_linear_63_3059" x1="2" y1="12.6669" x2="14.4973" y2="12.6669" gradientUnits="userSpaceOnUse"><stop stopColor="#003067"/><stop offset="0.0983319" stopColor="#023C70"/><stop offset="0.4492" stopColor="#07648D"/><stop offset="0.7286" stopColor="#0A7C9F"/><stop offset="0.9" stopColor="#0B85A6"/></linearGradient></defs></>,
    ['close']: <><path fillRule="evenodd" clipRule="evenodd" d="M21 4.81286L19.1871 3L12 10.1871L4.81286 3L3 4.81286L10.1871 12L3 19.1871L4.81286 21L12 13.8129L19.1871 21L21 19.1871L13.8129 12L21 4.81286Z" fill="white"/></>,
    ['back']: <><path fillRule="evenodd" clipRule="evenodd" d="M16 4.35L13.5263 2L3 12L13.5263 22L16 19.65L7.96491 12L16 4.35Z" fill="white"/></>
  };
 
  const renderIcon = ( icon, className ) => {    
    return (
      <svg className={`icon ${ className } `} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" onClick={ data.onClick }>
        { icons[icon] }
      </svg>
    )
  }

  return (
    renderIcon( data.icon, data.className )
  )



}

module.exports = {
  Icon
};


