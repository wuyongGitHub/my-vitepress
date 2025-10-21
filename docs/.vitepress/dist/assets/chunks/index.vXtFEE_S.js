const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/OrbitControls.DfyDYf8j.js","assets/chunks/three.module.CjLKN4l_.js"])))=>i.map(i=>d[i]);
import{_ as le}from"./Button.B7dY0lcR.js";import{d as K,p as B,v as re,V as se,x as ce,c as N,o as O,N as W,e as ue,j as Q,k as V,_ as fe,G as U,w as de,a as me}from"./framework.Gi3K-aNU.js";import{S as he,e as pe,P as ve,W as ge,f as we,D as ye,G as xe,R as _e,i as be,I as k,l as He,g as Me,h as Ae,V as F,b as Ce,j as ze}from"./three.module.CjLKN4l_.js";import{w as Pe}from"./tool.D1yyrI_Z.js";const Se=["innerHTML"],Ve=K({name:"JBHeatMap3D",__name:"HeatMap2",props:{data:{type:Array,default:()=>[]},width:{type:Number,default:600},height:{type:Number,default:500},baseSize:{type:Number,default:.1},maxHeight:{type:Number,default:3},enableOrbit:{type:Boolean,default:!0},backgroundColor:{type:String,default:"#0d1b2a"},showGridHelper:{type:Boolean,default:!0},showAxesHelper:{type:Boolean,default:!0},gradientColors:{type:Array,default:()=>["#00008b","#00ffff","#ffff00","#ff0000"]},autoAnimate:{type:Boolean,default:!1},cameraPosition:{type:Object,default:()=>({x:8,y:8,z:8})}},setup(D,{expose:G}){const o=D,h=B(null),v=B({show:!1,x:0,y:0,content:""}),I=B(o.autoAnimate);let c,u,a,p=null,y,_,b,f=null,r=null;const A=[];let e=0,s=0,H;re(async()=>{ee();const{OrbitControls:t}=await se(async()=>{const{OrbitControls:i}=await import("./OrbitControls.DfyDYf8j.js");return{OrbitControls:i}},__vite__mapDeps([0,1]));o.enableOrbit&&(p=new t(u,a.domElement),p.enableDamping=!0,p.dampingFactor=.05),T(),window.addEventListener("mousemove",X),window.addEventListener("resize",Y),h.value&&h.value.addEventListener("mouseleave",()=>{v.value.show=!1})}),ce(()=>{f&&cancelAnimationFrame(f),window.removeEventListener("mousemove",X),window.removeEventListener("resize",Y),r&&(r.geometry.dispose(),r.material.dispose()),H&&H.dispose(),a==null||a.dispose()});function Z(){console.log("创建分段渐变着色器材质...");const t=new F(0,0,.545),i=new F(0,1,1),l=new F(1,1,0),n=new F(1,0,0),d=new Ce({uniforms:{color0:{value:t},color1:{value:i},color2:{value:l},color3:{value:n},baseSize:{value:o.baseSize},maxHeight:{value:o.maxHeight}},vertexShader:`
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
        `,transparent:!1});return console.log("分段渐变着色器材质创建完成"),d}function ee(){console.log("初始化 Three.js...");const{backgroundColor:t,showGridHelper:i,showAxesHelper:l,cameraPosition:n,enableOrbit:d}=o;c=new he,c.background=new pe(t),console.log("场景创建完成，背景色:",t),u=new ve(75,o.width/o.height,.1,1e3),u.position.set(n.x,n.y,n.z),console.log("相机创建完成，位置:",n),a=new ge({antialias:!0,powerPreference:"high-performance"}),a.setSize(o.width,o.height),a.setPixelRatio(Math.min(window.devicePixelRatio,2)),console.log("渲染器创建完成，尺寸:",o.width,"x",o.height),h.value&&(h.value.innerHTML="",h.value.appendChild(a.domElement),console.log("渲染器DOM添加到容器"));const M=new we(16777215,.8);c.add(M);const S=new ye(16777215,.8);S.position.set(5,10,5),c.add(S),console.log("光源设置完成"),y=new xe,c.add(y),console.log("热力图组创建完成"),_=new _e,b=new be,R(),console.log("Three.js 初始化完成")}function te(){return new ze(1,1,1,1,8,1)}function R(){var J;console.log("开始创建热力图..."),r&&(y.remove(r),r.geometry.dispose(),r.material.dispose(),r=null,console.log("清理旧的热力图实例")),A.length=0;let t=o.data;Array.isArray(t)&&t.length>0&&t.every(m=>Array.isArray(m)&&m.length>0)||(console.log("使用默认测试数据"),t=[[1,3,5,7,9],[2,4,6,8,10],[3,5,7,9,11],[4,6,8,10,12],[5,7,9,11,13]]),e=t.length,s=((J=t[0])==null?void 0:J.length)||0,console.log(`网格尺寸: ${e} x ${s}`,"数据:",t);let l=1/0,n=-1/0;for(let m=0;m<e;m++){const z=t[m];if(Array.isArray(z))for(let g=0;g<s;g++){const x=z[g];typeof x=="number"&&(x<l&&(l=x),x>n&&(n=x))}}l===1/0&&(l=0),n===-1/0&&(n=1),l===n&&(n=l+1),console.log(`数据范围: ${l} - ${n}`),H=Z();const d=te(),M=e*s,S=new Float32Array(M),L=new Float32Array(M*3),j=new Float32Array(M*3);let w=0;for(let m=0;m<e;m++){const z=t[m];if(Array.isArray(z))for(let g=0;g<s;g++){const x=typeof z[g]=="number"?z[g]:0,$=(x-l)/(n-l),q=.1+$*o.maxHeight;S[w]=$;const ne=(m-(e-1)/2)*o.baseSize,ae=(g-(s-1)/2)*o.baseSize,ie=q/2;L[w*3]=ne,L[w*3+1]=ie,L[w*3+2]=ae,j[w*3]=o.baseSize,j[w*3+1]=q,j[w*3+2]=o.baseSize,A[w]={value:x,x:m,z:g,normalizedValue:$},w++}}console.log(`创建 ${M} 个实例`),d.setAttribute("instanceValue",new k(S,1)),d.setAttribute("instancePosition",new k(L,3)),d.setAttribute("instanceScale",new k(j,3)),r=new He(d,H,M),y.add(r),oe(),console.log("热力图创建完成")}let C=null,P=null;function oe(){C&&(c.remove(C),C=null),P&&(c.remove(P),P=null);const{showGridHelper:t,showAxesHelper:i}=o;if(t){const l=Math.max(e,s)*o.baseSize*1.5,n=Math.max(e,s);C=new Me(l,n,16777215,8947848),C.position.y=-.01,c.add(C)}if(i){const l=Math.max(e,s)*o.baseSize*.8;P=new Ae(l),c.add(P)}}function T(){f=requestAnimationFrame(T),p&&p.update(),a.render(c,u)}let E=null;function X(t){if(!h.value||!r)return;const i=h.value.getBoundingClientRect();if(t.clientX<i.left||t.clientX>i.right||t.clientY<i.top||t.clientY<i.bottom){v.value.show=!1;return}E&&cancelAnimationFrame(E),E=requestAnimationFrame(()=>{b.x=(t.clientX-i.left)/i.width*2-1,b.y=-((t.clientY-i.top)/i.height)*2+1,_.setFromCamera(b,u);const l=_.intersectObject(r);if(l.length>0){const n=l[0].instanceId;if(n!==void 0&&A[n]){const d=A[n];v.value={show:!0,x:t.clientX-i.left+10,y:t.clientY-i.top-30,content:`数值: ${d.value.toFixed(2)}<br>位置: (${d.x}, ${d.z})<br>高度: ${(d.normalizedValue*100).toFixed(1)}%`}}}else v.value.show=!1})}function Y(){!u||!a||(u.aspect=o.width/o.height,u.updateProjectionMatrix(),a.setSize(o.width,o.height))}return G({refresh:R,toggleAnimation:()=>I.value=!I.value,updateData:t=>{R()}}),(t,i)=>(O(),N("div",{class:"heatmap-wrapper",style:W({width:D.width+"px",height:D.height+"px"})},[V(v).show?(O(),N("div",{key:0,class:"tooltip",style:W({left:V(v).x+"px",top:V(v).y+"px"}),innerHTML:V(v).content},null,12,Se)):ue("",!0),Q("div",{ref_key:"containerRef",ref:h,class:"three-container"},null,512)],4))}}),Be=fe(Ve,[["__scopeId","data-v-192e61cb"]]),De={style:{"margin-top":"10px"}},Ge=K({name:"JBHeatMap2",__name:"BasicsHeatMap",setup(D){const G=B(null);function o(c,u){const a=c*u,p=Math.round(a*.02),y=Math.round(a*.2),_=Math.round(a*.3),b=a-p-y-_;console.log({total:a,"40-50":p,"20-30":y,"10-20":_,"1-5":b});const f=[];for(let e=0;e<p;e++)f.push(Math.floor(Math.random()*11)+40);for(let e=0;e<y;e++)f.push(Math.floor(Math.random()*11)+20);for(let e=0;e<_;e++)f.push(Math.floor(Math.random()*11)+10);for(let e=0;e<b;e++)f.push(Math.floor(Math.random()*5)+1);for(let e=f.length-1;e>0;e--){const s=Math.floor(Math.random()*(e+1));[f[e],f[s]]=[f[s],f[e]]}const r=[];let A=0;for(let e=0;e<c;e++){const s=[];for(let H=0;H<u;H++)s.push(f[A++]);r.push(s)}return r}const h=B(o(100,200));function v(){h.value=o(100,200),G.value.refresh()}function I(){console.log("热力图已刷新")}return(c,u)=>{const a=Be,p=le;return O(),N("div",null,[U(a,{ref_key:"heatmap3D",ref:G,cameraPosition:{x:18,y:18,z:0},data:V(h),width:"675",height:"475","base-size":"0.5","max-height":"5","auto-animate":!0,onRefresh:I},null,8,["data"]),Q("div",De,[U(p,{onClick:v},{default:de(()=>[...u[0]||(u[0]=[me("刷新热力图",-1)])]),_:1})])])}}}),Re=Pe(Ge);export{Re as JBHeatMap2};
