// 下から出るあわあわの設定
particlesJS('particles-js', {
  particles: {
    number: {
      value: 120 /* 泡の数を調整 */,
      density: { enable: true, value_area: 2400 },
    },
    color: { value: '#fff' },
    shape: {
      type: 'circle',
      stroke: { width: 0, color: '#000000' },
      polygon: { nb_sides: 5 },
      image: { src: 'img/github.svg', width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: false,
        speed: 0.95,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 8,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 6,
      direction: 'top',
      random: true,
      straight: true,
      out_mode: 'out',
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1684 },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: false },
      onclick: { enable: true, mode: 'push' } /* 効かない。なんで？ */,
      resize: true,
    },
    modes: {
      push: { particles_nb: 4 },
    },
  },
  retina_detect: true,
});
// requestAnimationFrame(update);
