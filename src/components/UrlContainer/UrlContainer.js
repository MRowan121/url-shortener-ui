import React from 'react';
import Url from '../Url/Url';
import './UrlContainer.css';

const UrlContainer = ({ urls, deleteUrl }) => {
  const urlEls = urls.map(url => {
    return (
      <Url 
        title={url.title}
        short_url={url['short_url']}
        long_url={url['long_url']}
        key={url.id}
        id={url.id}
        deleteUrl={deleteUrl}
      />
    )
  });

  return (
    <section className='urlContainer'>
      { urlEls.length ? urlEls : <p>No urls yet! Find some to shorten!</p> }
    </section>
  )
}

export default UrlContainer;
