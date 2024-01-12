import React from 'react';
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow.svg';
import { ReactComponent as BulletIcon } from '../../assets/icons/bullet.svg';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import giftImg from '../../assets/images/gift.png';
import './TopBanner.scss';

function TopBanner({ onClose = () => {}}: { onClose?: () => void}) {
  return (
    <div className="topBanner">
      <div className="topBanner-imageContainer">
        <img src={giftImg} alt="gift" className="topBanner-image"/>
      </div>
      <span className="topBanner-text mobile">
        Black Friday,&nbsp;<span className="topBanner-text--gold">10%OFF</span>
      </span>
      <span className="topBanner-text tablet desktop">
        <span>Black Friday</span>
        <span className="topBanner-date desktop">, 24-27 Nov</span>
        <BulletIcon className="topBanner-bullet"/>
        <span className="topBanner-text--gold">10%OFF</span>
        <BulletIcon className="topBanner-bullet"/>
        <div className="topBanner-code">Use code&nbsp;
          <span className="topBanner-code--gold">10FRIDAY</span>
          <span className="desktop">&nbsp;at checkout </span>
        </div>
      </span>
      <button className="topBanner-button tablet desktop">Shop now</button>
      <ArrowIcon className="topBanner-icon mobile"/>
      <CloseIcon className="topBanner-close desktop" onClick={onClose}/>
    </div>
  );
}

export default TopBanner;
