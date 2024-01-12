import React from 'react';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import './MainBanner.scss';

function MainBanner({ onClose = () => {}, isVisible }: { onClose?: () => void, isVisible: boolean}) {
  return (
    <div className={`mainBanner ${isVisible && "mainBanner--visible"}`}>
      <CloseIcon
        className="mainBanner-close"  
        onClick={onClose}
      />
      <div className="mainBanner-content">
        <div className="mainBanner-title">Black Friday</div>
        <div className="mainBanner-discount">10%OFF</div>
        <div className="mainBanner-code">Use code<span className="mainBanner-code--gold"> 10FRIDAY </span>at checkout</div>
        <button className="mainBanner-button">Shop now
          <span className="tablet desktop"> through Monday</span>
        </button>
      </div>
    </div>
  );
}

export default MainBanner;
