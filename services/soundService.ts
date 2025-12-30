
class SoundService {
  private audioCtx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private enabled: boolean = true;
  private volume: number = 0.5;

  private init() {
    if (!this.audioCtx) {
      this.audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      this.masterGain = this.audioCtx.createGain();
      this.masterGain.connect(this.audioCtx.destination);
      this.masterGain.gain.setValueAtTime(this.enabled ? this.volume : 0, this.audioCtx.currentTime);
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  updateSettings(enabled: boolean, volume: number) {
    this.enabled = enabled;
    this.volume = volume;
    if (this.audioCtx && this.masterGain) {
      this.masterGain.gain.setTargetAtTime(enabled ? volume : 0, this.audioCtx.currentTime, 0.1);
    }
  }

  private createNoiseBuffer(duration: number) {
    const bufferSize = this.audioCtx!.sampleRate * duration;
    const buffer = this.audioCtx!.createBuffer(1, bufferSize, this.audioCtx!.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    return buffer;
  }

  private createEnvelope(gainNode: GainNode, now: number, attack: number, decay: number, sustain: number, release: number, peak: number) {
    gainNode.gain.cancelScheduledValues(now);
    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(peak, now + attack);
    gainNode.gain.linearRampToValueAtTime(peak * sustain, now + attack + decay);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + attack + decay + release);
  }

  /**
   * Digital Click: Sharp, high-frequency "tap" with a tiny noise tail
   */
  playClick() {
    if (!this.enabled) return;
    this.init();
    const now = this.audioCtx!.currentTime;
    
    // Layer 1: The "Digital Snap"
    const osc = this.audioCtx!.createOscillator();
    const gain = this.audioCtx!.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(4000, now);
    osc.frequency.exponentialRampToValueAtTime(1000, now + 0.02);
    this.createEnvelope(gain, now, 0.001, 0.01, 0.1, 0.01, 0.1);
    osc.connect(gain);
    gain.connect(this.masterGain!);
    osc.start(now);
    osc.stop(now + 0.05);

    // Layer 2: Mechanical "Relay" Noise
    const noise = this.audioCtx!.createBufferSource();
    noise.buffer = this.createNoiseBuffer(0.02);
    const noiseFilter = this.audioCtx!.createBiquadFilter();
    noiseFilter.type = 'highpass';
    noiseFilter.frequency.setValueAtTime(5000, now);
    const noiseGain = this.audioCtx!.createGain();
    noiseGain.gain.setValueAtTime(0.02, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.02);
    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(this.masterGain!);
    noise.start(now);
  }

  /**
   * UI Select: A rising "chirp" that sounds like confirmation
   */
  playSelect() {
    if (!this.enabled) return;
    this.init();
    const now = this.audioCtx!.currentTime;
    
    // Primary Tone
    const osc = this.audioCtx!.createOscillator();
    const gain = this.audioCtx!.createGain();
    const filter = this.audioCtx!.createBiquadFilter();
    
    osc.type = 'square';
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(1600, now + 0.1);
    
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(2000, now);
    filter.Q.setValueAtTime(5, now);

    this.createEnvelope(gain, now, 0.01, 0.05, 0.4, 0.1, 0.04);
    
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain!);
    
    osc.start(now);
    osc.stop(now + 0.2);

    // Harmonic Sparkle
    const osc2 = this.audioCtx!.createOscillator();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(2400, now);
    osc2.frequency.exponentialRampToValueAtTime(3200, now + 0.05);
    const gain2 = this.audioCtx!.createGain();
    gain2.gain.setValueAtTime(0.01, now);
    gain2.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);
    osc2.connect(gain2);
    gain2.connect(this.masterGain!);
    osc2.start(now);
    osc2.stop(now + 0.1);
  }

  /**
   * Startup sequence: Spiritron engine hum + system initialization pulses
   */
  playStartup() {
    if (!this.enabled) return;
    this.init();
    const now = this.audioCtx!.currentTime;
    
    // 1. Deep Core Hum
    const hum = this.audioCtx!.createOscillator();
    const humGain = this.audioCtx!.createGain();
    const humFilter = this.audioCtx!.createBiquadFilter();
    
    hum.type = 'sawtooth';
    hum.frequency.setValueAtTime(40, now);
    hum.frequency.linearRampToValueAtTime(55, now + 3);
    
    humFilter.type = 'lowpass';
    humFilter.frequency.setValueAtTime(100, now);
    humFilter.frequency.exponentialRampToValueAtTime(1000, now + 2);
    
    this.createEnvelope(humGain, now, 0.8, 1, 0.5, 0.5, 0.08);
    
    // Add LFO to hum for "vibration" effect
    const lfo = this.audioCtx!.createOscillator();
    const lfoGain = this.audioCtx!.createGain();
    lfo.frequency.setValueAtTime(8, now);
    lfoGain.gain.setValueAtTime(10, now);
    lfo.connect(lfoGain);
    lfoGain.connect(hum.frequency);
    lfo.start(now);

    hum.connect(humFilter);
    humFilter.connect(humGain);
    humGain.connect(this.masterGain!);
    hum.start(now);
    hum.stop(now + 3);

    // 2. Air Venting Noise
    const vent = this.audioCtx!.createBufferSource();
    vent.buffer = this.createNoiseBuffer(2);
    const ventFilter = this.audioCtx!.createBiquadFilter();
    ventFilter.type = 'bandpass';
    ventFilter.frequency.setValueAtTime(200, now);
    ventFilter.frequency.exponentialRampToValueAtTime(4000, now + 1.5);
    const ventGain = this.audioCtx!.createGain();
    ventGain.gain.setValueAtTime(0, now);
    ventGain.gain.linearRampToValueAtTime(0.03, now + 0.5);
    ventGain.gain.linearRampToValueAtTime(0, now + 2);
    
    vent.connect(ventFilter);
    ventFilter.connect(ventGain);
    ventGain.connect(this.masterGain!);
    vent.start(now);

    // 3. Data Validation Sequence
    const pings = [1200, 1500, 1300, 2200];
    pings.forEach((f, i) => {
      const startTime = now + 1.5 + (i * 0.15);
      const pOsc = this.audioCtx!.createOscillator();
      const pGain = this.audioCtx!.createGain();
      pOsc.type = 'sine';
      pOsc.frequency.setValueAtTime(f, startTime);
      pGain.gain.setValueAtTime(0, startTime);
      pGain.gain.linearRampToValueAtTime(0.05, startTime + 0.01);
      pGain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.1);
      pOsc.connect(pGain);
      pGain.connect(this.masterGain!);
      pOsc.start(startTime);
      pOsc.stop(startTime + 0.2);
    });
  }

  /**
   * Panel Transition: A "holographic slide" sound
   */
  playTransition() {
    if (!this.enabled) return;
    this.init();
    const now = this.audioCtx!.currentTime;
    
    // Swishing Noise
    const swish = this.audioCtx!.createBufferSource();
    swish.buffer = this.createNoiseBuffer(0.5);
    const filter = this.audioCtx!.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1000, now);
    filter.frequency.exponentialRampToValueAtTime(300, now + 0.4);
    filter.Q.setValueAtTime(10, now);
    
    const gain = this.audioCtx!.createGain();
    this.createEnvelope(gain, now, 0.1, 0.2, 0.3, 0.1, 0.04);
    
    swish.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain!);
    swish.start(now);

    // Trailing Resonance
    const res = this.audioCtx!.createOscillator();
    res.type = 'sine';
    res.frequency.setValueAtTime(400, now);
    res.frequency.linearRampToValueAtTime(200, now + 0.5);
    const resGain = this.audioCtx!.createGain();
    this.createEnvelope(resGain, now, 0.2, 0.1, 0.1, 0.2, 0.02);
    res.connect(resGain);
    resGain.connect(this.masterGain!);
    res.start(now);
    res.stop(now + 0.6);
  }

  /**
   * Error Sound: Discordant system denial
   */
  playError() {
    if (!this.enabled) return;
    this.init();
    const now = this.audioCtx!.currentTime;
    
    const createBuzzer = (freq: number, delay: number) => {
      const osc = this.audioCtx!.createOscillator();
      const gain = this.audioCtx!.createGain();
      const filter = this.audioCtx!.createBiquadFilter();
      
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, now + delay);
      
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(600, now + delay);
      
      this.createEnvelope(gain, now + delay, 0.01, 0.05, 0.8, 0.05, 0.1);
      
      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain!);
      
      osc.start(now + delay);
      osc.stop(now + delay + 0.15);
    };

    // Discordant pair for "error" feel
    createBuzzer(110, 0);
    createBuzzer(117, 0); // Beating frequency
    
    // Rapid repeat
    createBuzzer(110, 0.2);
    createBuzzer(117, 0.2);
  }
}

export const soundService = new SoundService();
