import BaseShaderNode from './BaseShaderNode';
import snoise from './parts/simplex-noise';

export default class UserDefinedVelocityFunction extends BaseShaderNode {
  constructor(updateCode) {
    super();
    this.updateCode = updateCode || '';
  }

  setNewUpdateCode(newUpdateCode) {
    this.updateCode = newUpdateCode;
  }

  getDefines() {
    return `
uniform float frame;
uniform vec4 cursor;
uniform sampler2D u_audio;

#define PI 3.1415926535897932384626433832795
`
  }

  getFunctions() {
  // TODO: Do I need to worry about "glsl injection" (i.e. is there potential for security attack?)
  // TODO: Do I need to inject snoise only when it's used?
    return `
${snoise}

vec2 rotate(vec2 p,float a) {
	return cos(a)*p+sin(a)*vec2(p.y,-p.x);
}

// TODO: This will change. Don't use it.
float audio(float index) {
  float rgbI = floor(index/4.);
  vec2 txPos = vec2(fract(rgbI / 5.), floor(rgbI / 5.) / 5.);
  vec4 rgba = texture2D(u_audio, txPos);

  float offset = mod(index, 4.);
  if (offset == 0.) return rgba[0];
  if (offset == 1.) return rgba[1];
  if (offset == 2.) return rgba[2];
  return rgba[3];
}

vec2 get_velocity(vec2 p) {
  vec2 v = vec2(0., 0.);

  // change this to get a new vector field
float dt = 0.01;
float t = frame*dt;
float w = 2.*PI/5.;
float A = 2.;

float d = sqrt(p.x*p.x + p.y*p.y);
v.x = A*cos(w*t/d);
v.y = A*sin(w*t/d);

  return v;
}
  `
  }
}
