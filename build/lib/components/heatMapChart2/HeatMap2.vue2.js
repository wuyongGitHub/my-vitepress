"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const a=require("vue"),n=require("../../node_modules/three/build/three.module.js"),Q=["innerHTML"],Z=a.defineComponent({name:"JBHeatMap3D",__name:"HeatMap2",props:{data:{type:Array,default:()=>[]},width:{type:Number,default:600},height:{type:Number,default:500},baseSize:{type:Number,default:.1},maxHeight:{type:Number,default:3},enableOrbit:{type:Boolean,default:!0},backgroundColor:{type:String,default:"#0d1b2a"},showGridHelper:{type:Boolean,default:!0},showAxesHelper:{type:Boolean,default:!0},gradientColors:{type:Array,default:()=>["#00008b","#00ffff","#ffff00","#ff0000"]},autoAnimate:{type:Boolean,default:!1},cameraPosition:{type:Object,default:()=>({x:8,y:8,z:8})}},setup(F,{expose:N}){const t=F,g=a.ref(null),p=a.ref({show:!1,x:0,y:0,content:""}),j=a.ref(t.autoAnimate);let f,y,u,A=null,C,G,M,I=null,r=null;const P=[];let m=0,h=0,V;a.onMounted(async()=>{X();const{OrbitControls:e}=await Promise.resolve().then(()=>require("../../node_modules/three/examples/jsm/controls/OrbitControls.js"));t.enableOrbit&&(A=new e(y,u.domElement),A.enableDamping=!0,A.dampingFactor=.05),k(),window.addEventListener("mousemove",$),window.addEventListener("resize",O),g.value&&g.value.addEventListener("mouseleave",()=>{p.value.show=!1})}),a.onUnmounted(()=>{I&&cancelAnimationFrame(I),window.removeEventListener("mousemove",$),window.removeEventListener("resize",O),r&&(r.geometry.dispose(),r.material.dispose()),V&&V.dispose(),u==null||u.dispose()});function q(){console.log("创建分段渐变着色器材质...");const e=new n.Vector3(0,0,.545),l=new n.Vector3(0,1,1),i=new n.Vector3(1,1,0),o=new n.Vector3(1,0,0),s=new n.ShaderMaterial({uniforms:{color0:{value:e},color1:{value:l},color2:{value:i},color3:{value:o},baseSize:{value:t.baseSize},maxHeight:{value:t.maxHeight}},vertexShader:`
            attribute float instanceValue;
            attribute vec3 instancePosition;
            attribute vec3 instanceScale;

            varying float vValue;
            varying float vHeight;
            varying vec3 vPosition;

            void main() {
                vValue = instanceValue;
                vPosition = position;

                // 计算顶点在柱体中的相对高度 (0到1)
                vHeight = (position.y + 0.5); // 立方体原本y范围是-0.5到0.5

                // 应用实例的缩放和位置
                vec3 transformed = position * instanceScale;
                transformed += instancePosition;

                gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
            }
        `,fragmentShader:`
            uniform vec3 color0;
            uniform vec3 color1;
            uniform vec3 color2;
            uniform vec3 color3;

            varying float vValue;
            varying float vHeight;
            varying vec3 vPosition;

            void main() {
                // 根据数值大小决定使用多少段渐变
                vec3 finalColor;

                if (vValue < 0.25) {
                    // 低值：只使用第1段颜色 - 深蓝
                    finalColor = color0;
                } else if (vValue < 0.5) {
                    // 中等值：使用前2段渐变 - 深蓝 → 青
                    if (vHeight < 0.5) {
                        finalColor = mix(color0, color1, vHeight / 0.5);
                    } else {
                        finalColor = color1;
                    }
                } else if (vValue < 0.75) {
                    // 较高值：使用前3段渐变 - 深蓝 → 青 → 黄
                    if (vHeight < 0.33) {
                        finalColor = mix(color0, color1, vHeight / 0.33);
                    } else if (vHeight < 0.66) {
                        finalColor = mix(color1, color2, (vHeight - 0.33) / 0.33);
                    } else {
                        finalColor = color2;
                    }
                } else {
                    // 最高值：使用完整的4段渐变 - 深蓝 → 青 → 黄 → 红
                    if (vHeight < 0.25) {
                        finalColor = mix(color0, color1, vHeight / 0.25);
                    } else if (vHeight < 0.5) {
                        finalColor = mix(color1, color2, (vHeight - 0.25) / 0.25);
                    } else if (vHeight < 0.75) {
                        finalColor = mix(color2, color3, (vHeight - 0.5) / 0.25);
                    } else {
                        finalColor = color3;
                    }
                }

                // 简单的光照效果
                vec3 lightDir = normalize(vec3(1.0, 2.0, 0.5));
                vec3 normal;

                // 计算法向量
                if (abs(vPosition.y) > 0.49) {
                    normal = vec3(0.0, sign(vPosition.y), 0.0);
                } else if (abs(vPosition.x) > 0.49) {
                    normal = vec3(sign(vPosition.x), 0.0, 0.0);
                } else {
                    normal = vec3(0.0, 0.0, sign(vPosition.z));
                }

                float diffuse = max(dot(normal, lightDir), 0.3);

                // 顶部更亮
                float topBrightness = vPosition.y > 0.4 ? 1.2 : 1.0;

                gl_FragColor = vec4(finalColor * diffuse * topBrightness, 1.0);
            }
        `,transparent:!1});return console.log("分段渐变着色器材质创建完成"),s}function X(){console.log("初始化 Three.js...");const{backgroundColor:e,showGridHelper:l,showAxesHelper:i,cameraPosition:o,enableOrbit:s}=t;f=new n.Scene,f.background=new n.Color(e),console.log("场景创建完成，背景色:",e),y=new n.PerspectiveCamera(75,t.width/t.height,.1,1e3),y.position.set(o.x,o.y,o.z),console.log("相机创建完成，位置:",o),u=new n.WebGLRenderer({antialias:!0,powerPreference:"high-performance"}),u.setSize(t.width,t.height),u.setPixelRatio(Math.min(window.devicePixelRatio,2)),console.log("渲染器创建完成，尺寸:",t.width,"x",t.height),g.value&&(g.value.innerHTML="",g.value.appendChild(u.domElement),console.log("渲染器DOM添加到容器"));const b=new n.AmbientLight(16777215,.8);f.add(b);const S=new n.DirectionalLight(16777215,.8);S.position.set(5,10,5),f.add(S),console.log("光源设置完成"),C=new n.Group,f.add(C),console.log("热力图组创建完成"),G=new n.Raycaster,M=new n.Vector2,D(),console.log("Three.js 初始化完成")}function Y(){return new n.BoxGeometry(1,1,1,1,8,1)}function D(){var R;console.log("开始创建热力图..."),r&&(C.remove(r),r.geometry.dispose(),r.material.dispose(),r=null,console.log("清理旧的热力图实例")),P.length=0;let e=t.data;Array.isArray(e)&&e.length>0&&e.every(c=>Array.isArray(c)&&c.length>0)||(console.log("使用默认测试数据"),e=[[1,3,5,7,9],[2,4,6,8,10],[3,5,7,9,11],[4,6,8,10,12],[5,7,9,11,13]]),m=e.length,h=((R=e[0])==null?void 0:R.length)||0,console.log(`网格尺寸: ${m} x ${h}`,"数据:",e);let i=1/0,o=-1/0;for(let c=0;c<m;c++){const H=e[c];if(Array.isArray(H))for(let d=0;d<h;d++){const w=H[d];typeof w=="number"&&(w<i&&(i=w),w>o&&(o=w))}}i===1/0&&(i=0),o===-1/0&&(o=1),i===o&&(o=i+1),console.log(`数据范围: ${i} - ${o}`),V=q();const s=Y(),b=m*h,S=new Float32Array(b),B=new Float32Array(b*3),L=new Float32Array(b*3);let v=0;for(let c=0;c<m;c++){const H=e[c];if(Array.isArray(H))for(let d=0;d<h;d++){const w=typeof H[d]=="number"?H[d]:0,_=(w-i)/(o-i),T=.1+_*t.maxHeight;S[v]=_;const U=(c-(m-1)/2)*t.baseSize,W=(d-(h-1)/2)*t.baseSize,K=T/2;B[v*3]=U,B[v*3+1]=K,B[v*3+2]=W,L[v*3]=t.baseSize,L[v*3+1]=T,L[v*3+2]=t.baseSize,P[v]={value:w,x:c,z:d,normalizedValue:_},v++}}console.log(`创建 ${b} 个实例`),s.setAttribute("instanceValue",new n.InstancedBufferAttribute(S,1)),s.setAttribute("instancePosition",new n.InstancedBufferAttribute(B,3)),s.setAttribute("instanceScale",new n.InstancedBufferAttribute(L,3)),r=new n.InstancedMesh(s,V,b),C.add(r),J(),console.log("热力图创建完成")}let x=null,z=null;function J(){x&&(f.remove(x),x=null),z&&(f.remove(z),z=null);const{showGridHelper:e,showAxesHelper:l}=t;if(e){const i=Math.max(m,h)*t.baseSize*1.5,o=Math.max(m,h);x=new n.GridHelper(i,o,16777215,8947848),x.position.y=-.01,f.add(x)}if(l){const i=Math.max(m,h)*t.baseSize*.8;z=new n.AxesHelper(i),f.add(z)}}function k(){I=requestAnimationFrame(k),A&&A.update(),u.render(f,y)}let E=null;function $(e){if(!g.value||!r)return;const l=g.value.getBoundingClientRect();if(e.clientX<l.left||e.clientX>l.right||e.clientY<l.top||e.clientY<l.bottom){p.value.show=!1;return}E&&cancelAnimationFrame(E),E=requestAnimationFrame(()=>{M.x=(e.clientX-l.left)/l.width*2-1,M.y=-((e.clientY-l.top)/l.height)*2+1,G.setFromCamera(M,y);const i=G.intersectObject(r);if(i.length>0){const o=i[0].instanceId;if(o!==void 0&&P[o]){const s=P[o];p.value={show:!0,x:e.clientX-l.left+10,y:e.clientY-l.top-30,content:`数值: ${s.value.toFixed(2)}<br>位置: (${s.x}, ${s.z})<br>高度: ${(s.normalizedValue*100).toFixed(1)}%`}}}else p.value.show=!1})}function O(){!y||!u||(y.aspect=t.width/t.height,y.updateProjectionMatrix(),u.setSize(t.width,t.height))}return N({refresh:D,toggleAnimation:()=>j.value=!j.value,updateData:e=>{D()}}),(e,l)=>(a.openBlock(),a.createElementBlock("div",{class:"heatmap-wrapper",style:a.normalizeStyle({width:F.width+"px",height:F.height+"px"})},[a.unref(p).show?(a.openBlock(),a.createElementBlock("div",{key:0,class:"tooltip",style:a.normalizeStyle({left:a.unref(p).x+"px",top:a.unref(p).y+"px"}),innerHTML:a.unref(p).content},null,12,Q)):a.createCommentVNode("",!0),a.createElementVNode("div",{ref_key:"containerRef",ref:g,class:"three-container"},null,512)],4))}});exports.default=Z;
