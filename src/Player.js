import React, { useState, useEffect, useRef } from 'react';

export default function Player() {
  const [playList, setPlayList] = useState([
    {
      src: 'https://raw.githubusercontent.com/Rami24t/files/main/Fairouz%20-%20Saalouny%20El%20Nas%20myfreemp3.vip%20.mp3',
      title: 'Sa\'alony El Nas',
      artist: 'Fairouz'
    },
    {src: 'https://raw.githubusercontent.com/Rami24t/files/main/Fairouz%20-%20Saaltak%20Habiby%20myfreemp3.vip%20.mp3',
      artist: 'Fairouz',
      title: 'Sa\'altak Habibi'
  },
    {src: 'https://raw.githubusercontent.com/Rami24t/files/main/Fairouz%20-%20Ya%20Ana%20Ya%20Ana%20myfreemp3.vip%20.mp3',
    title: 'Ya ana',
    artist: 'Fairouz',
  },
    {src: 'https://raw.githubusercontent.com/Rami24t/files/main/mixkit-life-is-a-dream-837.mp3',
    title: 'Life is...',
    artist: 'mixkit'
  },
    {
      src: 'https://raw.githubusercontent.com/Rami24t/files/main/mixkit-just-chill-16(1)(1).mp3',
    title: 'chill',
    artist: 'mixkit',
  },
  {
    src: 'https://assets.mixkit.co/music/download/mixkit-hollidays-690.mp3',
    title: 'holidays',
    artist: 'mixkit',
  }
  ]);
  const [currentSong, setCurrentSong] = useState({});
  const [current, setCurrent] = useState(0);
  const audio=useRef();
  if(!audio?.current?.duration)
  {
    audio?.current?.pause();
  audio.current = new Audio(currentSong.src);
  } 
  const [playing,setPlaying] = useState(!audio.current.paused);
  
  useEffect(()=>{})


  useEffect(() => {
    setCurrentSong(playList[current]);
    audio.current.pause();
    audio.current = new Audio(currentSong.src);
  }, [current]);

  
  function playCurrent() {
    if(audio.current.paused)
    {
    audio.current.play();
    }
    else{
    audio.current.pause();
    }
    console.log('play/pause current');
    setPlaying(!playing);
  }
  function playNext() {
    audio.current.pause();
    console.log('play  next');
    if (playList[current+1]) setCurrent((prev) => prev+1);
    else setCurrent(0);
    setTimeout(() => {
      audio.current.autoplay = true;
    setPlaying(!playing);
    }, 40);
  }
  function replay() {
    console.log('replay Current');
    if(audio.current.loop)
      audio.current.loop=false;
    else
      audio.current.loop=true
  }
  function playPrev() {
    audio.current.pause();
    console.log('play prev');
    if (playList[current-1])
      setCurrent(prev=>prev-1);
    else setCurrent(playList.length-1);
    setTimeout(() => {
      playCurrent()
    }, 50);
  }
  function shuffle() {
    audio.current.pause();
    console.log('shuffle list');
     setCurrent(Math.floor(Math.random()*playList.length))
      setTimeout(() => {
        playCurrent()
      }, 50);
    }

  function changeVol(newVol) {
    console.log('vol changed to', newVol);
    audio.current.volume = newVol/14;
  }
  function reset() {
    console.log('reset');
    if(audio.current.currentTime>1)
    audio.current.currentTime=0;
  }
  function muteUnmute() {
    console.log('mute/unmute');
    if(audio.current.volume>0.1)
    audio.current.volume=0;
    else
    audio.current.volume=0.6;
  }

  return (
    <>
      <div className="player">
        <div className="player_inner">
          <div className="player_inner__top">
            <div className="t_left">
              <i className="fa fa-bars"></i>
            </div>
            <div className="t_mid">
              <h1>CUB3DPlayer</h1>
            </div>
            <div className="t_right">
              <i className="fa fa-search"></i>
            </div>
          </div>
          <div className="player_inner__middle">
            <input
              onClick={playCurrent}
              className="trigger--4"
              name="omni"
              type="radio"
            />
            <input className="trigger--3" name="omni" type="radio" />
            <input className="trigger--2" name="omni" type="radio" />
            <input className="trigger--1" name="omni" type="radio" />
            <input className="empty" />
            <div className="cube">
              <div className="cube_inner">
                <div className="cube_inner__front">
                  <div className="bars">
                    <div className="bars_bar"></div>
                    <div className="bars_bar"></div>
                    <div className="bars_bar"></div>
                    <div className="bars_bar"></div>
                    <div className="bars_bar"></div>
                    <div className="bars_bar"></div>
                    <div className="bars_bar"></div>
                    <div className="bars_bar"></div>
                    <div className="bars_bar"></div>
                    <div className="bars_bar"></div>
                  </div>
                  <div className="details">
                    <div className="details_album"></div>
                    <h2>{currentSong.title}</h2>
                    <h3>{currentSong.artist}</h3>
                  </div>
                </div>
                <div className="cube_inner__left">
                  <div className="options">
                    <i onClick={muteUnmute} className="fa fa-headphones"></i>
                    <i onClick={replay} className="fa fa-redo-alt"></i>
                    <i onClick={shuffle} className="fa fa-random"></i>
                    <i onClick={playNext} className="fa fa-fast-forward"></i>
                    <i onClick={reset} className="fa fa-music"></i>
                  </div>
                </div>
                <div className="cube_inner__right">
                  <div className="volume">
                    <div
                      onMouseDown={() => changeVol(14)}
                      className="volume_pip"
                    ></div>
                    <div
                      onMouseDown={() => changeVol(13)}
                      className="volume_pip"
                    ></div>
                    <div
                      onMouseDown={() => changeVol(12)}
                      className="volume_pip"
                    ></div>
                    <div
                      onMouseDown={() => changeVol(11)}
                      className="volume_pip"
                    ></div>
                    <div
                      onMouseDown={() => changeVol(10)}
                      className="volume_pip"
                    ></div>
                    <div
                      onMouseDown={() => changeVol(9)}
                      className="volume_pip"
                    ></div>
                    <div
                      onMouseDown={() => changeVol(8)}
                      className="volume_pip"
                    ></div>
                    <div
                      onMouseDown={() => changeVol(7)}
                      className="volume_pip"
                    ></div>
                    <div
                      onMouseDown={() => changeVol(6)}
                      className="volume_pip"
                    ></div>
                    <div
                      onMouseDown={() => changeVol(5)}
                      className="volume_pip"
                    ></div>
                    <div
                      onMouseDown={() => changeVol(4)}
                      className="volume_pip"
                    ></div>
                    <div
                      onMouseDown={() => changeVol(3)}
                      className="volume_pip"
                    ></div>
                    <div
                      onMouseDown={() => changeVol(2)}
                      className="volume_pip"
                    ></div>
                    <div
                      onMouseDown={() => changeVol(1)}
                      className="volume_pip"
                    ></div>
                    <i className="fa fa-volume-up"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="r_trim"></div>
            <div className="l_trim"></div>
            <div className="shadow_right"></div>
            <div className="shadow_left"></div>
          </div>
          <div className="player_inner__bottom">
            <div className="options">
              <i onClick={replay} className="fa fa-repeat"></i>
              <i onClick={shuffle} className="fa fa-random"></i>
            </div>
            <div className="playbar">
              {/* playbar */}
              <div className="playbar_inner" style={{width: (100*audio?.current?.currentTime/audio?.current?.duration) +'%'}}></div>
              <div className="playbar_left">
                <span>{(audio?.current?.currentTime/60)?.toFixed(0)+':'+(audio?.current?.currentTime - +((audio?.current?.currentTime/60)?.toFixed(0))*60)?.toFixed(0)}</span>
              </div>
              <div className="playbar_right">
                <span>{(audio?.current?.duration/60)?.toFixed(0)+':'+(audio?.current?.duration-+((audio?.current?.duration/60)?.toFixed(0))*60)?.toFixed(0)}</span>
              </div>
            </div>
            <div className="controls">
              <div onClick={playPrev} className="controls_left">
                <i className="fa fa-step-backward"></i>
              </div>
              <div onClick={playCurrent} className="controls_middle">
              {
                 audio.current.paused ?
                <i className="fa fa-play-circle" /> : 
                <i className="fa fa-pause" style={{fontSize: 'smaller'}} />
              }
              </div>
              <div onClick={playNext} className="controls_right">
                <i className={"fa fa-step-forward"}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
