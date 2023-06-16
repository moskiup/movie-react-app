import { useEffect, useState } from 'react';
import './loader.scss';

export function Loader() {
  return (
    <div className={'loader-container '}>
      <div className="loader">
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
      </div>
      <div className="title">LOADING...</div>
    </div>
  );
}
