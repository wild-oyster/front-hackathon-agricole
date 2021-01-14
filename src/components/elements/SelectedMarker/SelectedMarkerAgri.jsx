import React from 'react';
import agri from '../SelectedMarker/assets/logo.svg';
import cross from './assets/cross.png';
import './SelectedMarker.scss';

const SelectedMarkerAgri = ({ marker, closedLocation }) => {
  return (
    <div className='selectedMarker__container'>
      <div className='selectedMarker__head'>
        <button
          onClick={closedLocation}
          className='selectedMarker__closeMenu'
          type='button'
          style={{
            backgroundImage: `url(${cross})`,
            boxShadow: '3px 3px 7px #635555, -3px -3px 5px #7dad6e85'
          }}
        />
        <h2>Agriculteur</h2>
        <div
          className='selectedMarker__img'
          style={{
            backgroundImage: `url(${agri})`
          }}
        />
      </div>
      <div className='selectedMarker__main'>
        <div
          className='selectedMarker__mainFirst'
          style={{
            color: '#5a9449'
          }}
        >
          <div className='selectedMarker__rate'>
            <div className='selectedMarker__rateDesktop'>
              <div className='selectedMarker__blockTop'>
                <h3 className='selectedMarker__titleRate'>{marker.rate}</h3>
                <p className='selectedMarker__inscription'>
                  Inscrit depuis {marker.object.registered_at}
                </p>
              </div>
              <div className='selectedMarker__stars'>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star'></span>
              </div>
              <p>Taille de la ferme: {marker.object.farmsize} hectars</p>
            </div>
            <div className='selectedMarker__rateMobile'>
              <div className='selectedMarker__stars'>
                <span className='fa fa-star checked'></span>
                <span>3.5/4</span>
              </div>
            </div>
          </div>
          <div className='selectedMarker__dateMobile'>
            <p className='selectedMarker__inscription'>
              Inscrit depuis {marker.object.registered_at}
            </p>
          </div>
        </div>
        <div
          className='selectedMarker__about'
          style={{
            color: '#5a9449'
          }}
        ></div>
      </div>
    </div>
  );
};

export default SelectedMarkerAgri;
