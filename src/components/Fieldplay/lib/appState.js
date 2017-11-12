import queryState from 'query-state'
import bus from './bus'
import ColorModes from './programs/colorModes'

var qs = queryState({}, {
  useSearch: true,
  // Older version of the app used hash to store application arguments.
  // Turns out hash is not good for websites like reddit. They can block
  // url, saying "url was already submitted" if the only part that is different
  // is hash. So, we switch to search string, and maintain backward compatibility
  // for fields created before.
  rewriteHashToSearch: true
})

var currentState = qs.get()

var defaultVectorField = `v.x = 0.1 * p.y;
v.y = -0.2 * p.y;`

var pendingSave
var defaults = {
  timeStep: 0.01,
  dropProbability: 0.009,
  particleCount: 10000,
  fadeout: .998,
  colorMode: ColorModes.ANGLE
}

let settingsPanel = {
  collapsed: window.innerWidth < 600 ? true : false,
}

export default {
  settingsPanel,
  saveBBox,
  getBBox,
  saveCode,
  getCode,
  getDefaultCode,

  getDropProbability,
  setDropProbability,

  getIntegrationTimeStep,
  setIntegrationTimeStep,

  getParticleCount,
  setParticleCount,

  getFadeout,
  setFadeout,

  getColorMode,
  setColorMode
}

qs.onChange(function(appState) {
  bus.fire('scene-ready', window.scene)
})

function getColorMode() {
  let colorMode = qs.get('cm')
  return defined(colorMode) ? colorMode : defaults.colorMode
}

function setColorMode(colorMode) {
  if (!defined(colorMode)) return
  qs.set({cm: colorMode})
  currentState.cm = colorMode
}

function getFadeout() {
  let fadeout = qs.get('fo')
  return defined(fadeout) ? fadeout : defaults.fadeout
}

function setFadeout(fadeout) {
  if (!defined(fadeout)) return
  qs.set({fo: fadeout})
  currentState.fo = fadeout
}

function getParticleCount() {
  let particleCount = qs.get('pc')
  return defined(particleCount) ? particleCount : defaults.particleCount
}

function setParticleCount(particleCount) {
  if (!defined(particleCount)) retur
  qs.set({pc: particleCount})
  currentState.pc = particleCount
}

function getIntegrationTimeStep() {
  let timeStep = qs.get('dt')
  return defined(timeStep) ? timeStep : defaults.timeStep
}

function setIntegrationTimeStep(dt) {
  if (!defined(dt)) return
  qs.set({dt: dt})
  currentState.dt = dt
}

function getDropProbability() {
  let dropProbability = qs.get('dp')
  return defined(dropProbability) ? dropProbability : defaults.dropProbability
}

function setDropProbability(dropProbability) {
  if (!defined(dropProbability)) return
  clamp(dropProbability, 0, 1)
  qs.set({dp: dropProbability})
}

function getBBox() {
  let cx = qs.get('cx')
  let cy = qs.get('cy')
  let w = qs.get('w')
  let h = qs.get('h')

  let bboxDefined = defined(cx) && defined(cy) && defined(w) && defined(h)
  if (!bboxDefined) return

  let w2 = w/2
  let h2 = h/2
  var p = 10000
  return {
    minX: Math.round(p * (cx - w2))/p,
    maxX: Math.round(p * (cx + w2))/p,
    minY: Math.round(p * (cy - h2))/p,
    maxY: Math.round(p * (cy + h2))/p
  }
}

function saveBBox(bbox, immediate = false) {
  if(pendingSave) {
    clearTimeout(pendingSave)
    pendingSave = 0
  }

  if (immediate) saveReally(bbox)
  else {
    pendingSave = setTimeout(() => saveReally(bbox), 300)
  }
}

function saveReally(bbox) {
  pendingSave = 0
  var bbox = {
    cx: (bbox.minX + bbox.maxX) * 0.5,
    cy: (bbox.minY + bbox.maxY) * 0.5,
    w: (bbox.maxX - bbox.minX),
    h: (bbox.maxX - bbox.minX)
  }

  if (bbox.w <= 0 || bbox.h <= 0) return

  qs.set(bbox)

  currentState.cx = bbox.cx
  currentState.cy = bbox.cy
  currentState.w = bbox.w
  currentState.h = bbox.h
}

function getCode() {
  return qs.get('code') || defaultVectorField
}

function getDefaultCode() {
  return defaultVectorField
}

function saveCode(code) {
  qs.set({
    code: code
  })
  currentState.code = code
}

function defined(number) {
  return Number.isFinite(number)
}

function clamp(x, min, max) {
  return x < min ? min :
        (x > max) ? max : x
}
