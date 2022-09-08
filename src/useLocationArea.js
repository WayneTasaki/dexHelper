import { useState, useEffect } from 'react';

const useLocationArea = (url) => {
  const [data, setData] = useState(null);
  const [isLocPending, setIsLocPending] = useState(true);
  const [locError, setLocError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data for that resource');
        } 
        const locationData = res.json();
        return locationData;
      })
      .then(locationData => {
        setIsLocPending(false);
        // setData(locationData);
        const diamond = [];
        const pearl = [];
        const platinum = [];
        const gold = [];
        const silver = [];
        const crystal = [];
        const soulSilver = [];
        const heartGold = [];
        const red = [];
        const blue = [];
        const yellow = [];
        const green = [];
        const fireRed = [];
        const leafGreen = [];
        const x = [];
        const y = [];
        const ruby = [];
        const sapphire = [];
        const emerald = [];
        const black = [];
        const white = [];
        const black2 = [];
        const white2 = [];
        const sword = [];
        const shield = [];
        
        locationData.forEach((location) => {
          location.version_details.forEach((ver) => {
            if (ver.version.name === 'diamond')
              diamond.push(location.location_area.name);
            if (ver.version.name === 'pearl')
              pearl.push(location.location_area.name);
            if (ver.version.name === 'platinum')
              platinum.push(location.location_area.name);
            if (ver.version.name === 'gold')
              gold.push(location.location_area.name);
            if (ver.version.name === 'silver')
              silver.push(location.location_area.name);
            if (ver.version.name === 'crystal')
              crystal.push(location.location_area.name);
            if (ver.version.name === 'soulsilver')
              soulSilver.push(location.location_area.name);
            if (ver.version.name === 'heartgold')
              heartGold.push(location.location_area.name);
            if (ver.version.name === 'red')
              red.push(location.location_area.name);
            if (ver.version.name === 'blue')
              blue.push(location.location_area.name);
            if (ver.version.name === 'yellow')
              yellow.push(location.location_area.name);
            if (ver.version.name === 'green')
              green.push(location.location_area.name);
            if (ver.version.name === 'firered')
              fireRed.push(location.location_area.name);
            if (ver.version.name === 'leafgreen')
              leafGreen.push(location.location_area.name);
            if (ver.version.name === 'x') x.push(location.location_area.name);
            if (ver.version.name === 'y') y.push(location.location_area.name);
            if (ver.version.name === 'ruby')
              ruby.push(location.location_area.name);
            if (ver.version.name === 'sapphire')
              sapphire.push(location.location_area.name);
            if (ver.version.name === 'emerald')
              emerald.push(location.location_area.name);
            if (ver.version.name === 'black-2')
              black2.push(location.location_area.name);
            if (ver.version.name === 'white-2')
              white2.push(location.location_area.name);
            if (ver.version.name === 'black')
              black.push(location.location_area.name);
            if (ver.version.name === 'white')
              white.push(location.location_area.name);
            if (ver.version.name === 'sword')
              sword.push(location.location_area.name);
            if (ver.version.name === 'shield')
              shield.push(location.location_area.name);
          });
        });

        const allVersionData = [
          { name: 'Red', areas: red },
          { name: 'Blue', areas: blue },
          { name: 'Yellow', areas: yellow },
          { name: 'Green', areas: green },
          { name: 'Gold', areas: gold },
          { name: 'Silver', areas: silver },
          { name: 'Crystal', areas: crystal },
          { name: 'Ruby', areas: ruby },
          { name: 'Sapphire', areas: sapphire },
          { name: 'Emerald', areas: emerald },
          { name: 'Diamond', areas: diamond },
          { name: 'Pearl', areas: pearl },
          { name: 'Platinum', areas: platinum },
          { name: 'Black', areas: black },
          { name: 'White', areas: white },
          { name: 'Black 2', areas: black2 },
          { name: 'White 2', areas: white2 },
          { name: 'X', areas: x },
          { name: 'Y', areas: y },
          { name: 'Soul silver', areas: soulSilver },
          { name: 'Heart gold', areas: heartGold },
          { name: 'Fire red', areas: fireRed },
          { name: 'Leaf green', areas: leafGreen },
        ];
        setData(allVersionData)
        setLocError(null);
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted');
       } else {
          setIsLocPending(false);
          setData(null);
          setLocError(err.message);
       }
      })
    }, 1000);

    // abort the fetch
    return () => abortCont.abort();
  }, [url])

  return { data, isLocPending, locError };
}
 
export default useLocationArea;