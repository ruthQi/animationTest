/**
 * @author alteredq / http://alteredqualia.com/
 *
 * Full-screen textured quad shader
 */
var THREE = require('./three.min.js');
THREE.CustomShader = {

   uniforms: {

      "tDiffuse": { type: 't', value: null },
      "opacity":  { value: 1.0 },
      "u_aspect": {value: 0},
      "u_amp": {value: 0},
      "u_mouse": {value: new THREE.Vector2},
      "u_time": {value: 0}

   },

   vertexShader: [
      "#define GLSLIFY 1",
      "varying vec2 v_uv;",
      "void main() {",
      "v_uv = uv;",
      "gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);",
      "}"
   ].join("\n"),

   fragmentShader: [
      "#ifdef GL_ES",
      "precision mediump float;",
      "#define GLSLIFY 1",
      "#define GLSLIFY 1",
      "#endif",
      "vec3 mod289_1_0(vec3 x) {",
      "    return x - floor(x * (1.0 / 289.0)) * 289.0;",
      "}",
      "vec4 mod289_1_0(vec4 x) {",
      "    return x - floor(x * (1.0 / 289.0)) * 289.0;",
      "}",
      "vec4 permute_1_1(vec4 x) {",
      "        return mod289_1_0(((x*34.0)+1.0)*x);",
      "}",
      "vec4 taylorInvSqrt_1_2(vec4 r)",
      "{",
      "    return 1.79284291400159 - 0.85373472095314 * r;",
      "}",
      "float snoise_1_3(vec3 v)",
      "    {",
      "    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;",
      "    const vec4  D_1_4 = vec4(0.0, 0.5, 1.0, 2.0);",
      "// First corner",
      "    vec3 i  = floor(v + dot(v, C.yyy) );",
      "    vec3 x0 =   v - i + dot(i, C.xxx) ;",
      "// Other corners",
      "    vec3 g_1_5 = step(x0.yzx, x0.xyz);",
      "    vec3 l = 1.0 - g_1_5;",
      "    vec3 i1 = min( g_1_5.xyz, l.zxy );",
      "    vec3 i2 = max( g_1_5.xyz, l.zxy );",
      "    //   x0 = x0 - 0.0 + 0.0 * C.xxx;",
      "    //   x1 = x0 - i1  + 1.0 * C.xxx;",
      "    //   x2 = x0 - i2  + 2.0 * C.xxx;",
      "    //   x3 = x0 - 1.0 + 3.0 * C.xxx;",
      "    vec3 x1 = x0 - i1 + C.xxx;",
      "    vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y",
      "    vec3 x3 = x0 - D_1_4.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y",
      "// Permutations",
      "    i = mod289_1_0(i);",
      "    vec4 p = permute_1_1( permute_1_1( permute_1_1(",
         "                i.z + vec4(0.0, i1.z, i2.z, 1.0 ))",
      "            + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))",
      "            + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));",
      "// Gradients: 7x7 points over a square, mapped onto an octahedron.",
      "// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)",
      "    float n_ = 0.142857142857; // 1.0/7.0",
      "    vec3  ns = n_ * D_1_4.wyz - D_1_4.xzx;",
      "    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)",
      "    vec4 x_ = floor(j * ns.z);",
      "    vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)",
      "    vec4 x = x_ *ns.x + ns.yyyy;",
      "    vec4 y = y_ *ns.x + ns.yyyy;",
      "    vec4 h = 1.0 - abs(x) - abs(y);",
      "    vec4 b0 = vec4( x.xy, y.xy );",
      "    vec4 b1 = vec4( x.zw, y.zw );",
      "    //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;",
      "    //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;",
      "    vec4 s0 = floor(b0)*2.0 + 1.0;",
      "    vec4 s1 = floor(b1)*2.0 + 1.0;",
      "    vec4 sh = -step(h, vec4(0.0));",
      "    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;",
      "    vec4 a1_1_6 = b1.xzyw + s1.xzyw*sh.zzww ;",
      "    vec3 p0_1_7 = vec3(a0.xy,h.x);",
      "    vec3 p1 = vec3(a0.zw,h.y);",
      "    vec3 p2 = vec3(a1_1_6.xy,h.z);",
      "    vec3 p3 = vec3(a1_1_6.zw,h.w);",
      "//Normalise gradients",
      "    vec4 norm = taylorInvSqrt_1_2(vec4(dot(p0_1_7,p0_1_7), dot(p1,p1), dot(p2, p2), dot(p3,p3)));",
      "    p0_1_7 *= norm.x;",
      "    p1 *= norm.y;",
      "    p2 *= norm.z;",
      "    p3 *= norm.w;",
      "// Mix final noise value",
      "    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);",
      "    m = m * m;",
      "    return 42.0 * dot( m*m, vec4( dot(p0_1_7,x0), dot(p1,x1),",
         "                                dot(p2,x2), dot(p3,x3) ) );",
      "    }",
      "uniform sampler2D u_noise;",
      "uniform sampler2D tDiffuse;",
      "uniform vec2 u_mouse;",
      "uniform float u_time;",
      "uniform float u_aspect;",
      "uniform float u_amp;",
      "uniform vec2 u_random;",
      "varying vec2 v_uv;",
      "const float PI2 = 6.2831853072;",
      "const vec2 noiseSize = vec2(256.);",
      "void main() {",
      "    vec2 pos = v_uv * 2. - 1.0;",
      "    pos.y *= u_aspect;",
      "    float perlin = snoise_1_3(vec3(pos, u_time));",
      "    vec2 mousePos = u_mouse * 2. - 1.0;",
      "    mousePos.y *= u_aspect;",
      "    float dist = length(mousePos - pos);",
      "    float radius = mix(0.4, 1.2, u_amp) + perlin * .2;",
      "    float intensity = pow(1. - smoothstep(.0, radius, dist), 3.);",
      "    float angle = (perlin + u_time) * PI2;",
      "    float c = cos(angle);",
      "    float s = sin(angle);",
      "    vec2 displace = vec2(c, s) * .12 * u_amp;",
      "    vec2 bulge = (mousePos - pos) * u_amp;",
      "    vec2 st = v_uv + intensity * (displace + bulge);",
      "    // vec3 color = texture2D(tDiffuse, st).rgb;",
      "    vec4 color = texture2D(tDiffuse, st).rgba;",
      "    float add = c * intensity * u_amp;",
      "    add += (1. - smoothstep(0., .1, abs(dist - radius * u_amp))) * .1;",
      "    color += add * .4;",
      "    // vec2 noiseUv = gl_FragCoord.xy / noiseSize + u_random;",
      "    // float noise = texture2D(u_noise, noiseUv).r;",
      "    // color = vec3(noise);//step(noise, add) * .1;",
      "    // gl_FragColor = vec4(color, 1.0);",
      "    gl_FragColor = color;",
      "}"
   ].join('\n')


};