import {useEffect, useRef} from 'react';

// Original 8-bar, C-major toy-factory waltz. Synthesized locally; no audio downloads.
const melody=[76,79,84,79,76,72,74,77,81,77,74,69,71,74,79,74,71,67,72,76,79,76,74,72,76,79,84,83,79,76,74,77,81,79,77,74,71,74,79,77,74,71,72,76,79,76,74,72];
export function useFactoryMusic(enabled,quiet){
 const engine=useRef(null);
 useEffect(()=>{if(!enabled)return;
  const context=new (window.AudioContext||window.webkitAudioContext)();
  const master=context.createGain();master.gain.value=.13;master.connect(context.destination);
  const play=(midi,time,duration,volume,type='sine')=>{const osc=context.createOscillator(),gain=context.createGain();osc.type=type;osc.frequency.value=440*2**((midi-69)/12);osc.connect(gain);gain.connect(master);gain.gain.setValueAtTime(.0001,time);gain.gain.exponentialRampToValueAtTime(volume,time+.012);gain.gain.exponentialRampToValueAtTime(.0001,time+duration);osc.start(time);osc.stop(time+duration+.02);osc.onended=()=>{osc.disconnect();gain.disconnect()}};
  let step=0,next=context.currentTime+.05;
  const tick=()=>{if(context.state!=='running')return;while(next<context.currentTime+.2){const k=step%melody.length;play(melody[k],next,.32,.32);play(melody[k]+12,next,.13,.065,'triangle');if(step%3===0)play([48,53,55,48,48,53,55,48][Math.floor(k/6)],next,.7,.24,'triangle');if(step%3!==0)play([60,64,67][step%3],next,.11,.07);step++;next+=60/112/2}};
  engine.current={context,master};context.resume().catch(()=>{});const id=setInterval(tick,80);tick();
  const visibility=()=>{if(document.hidden)context.suspend();else{next=context.currentTime+.05;context.resume().catch(()=>{})}};document.addEventListener('visibilitychange',visibility);
  return()=>{clearInterval(id);document.removeEventListener('visibilitychange',visibility);engine.current=null;context.close().catch(()=>{})};
 },[enabled]);
 useEffect(()=>{const e=engine.current;if(e)e.master.gain.setTargetAtTime(quiet?.045:.13,e.context.currentTime,.1)},[quiet,enabled]);
}
